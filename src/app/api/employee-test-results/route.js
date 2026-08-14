import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import EmployeeTest from "@/models/EmployeeTest";
import fs from "fs";
import path from "path";


let questionsData = { sections: [] };
try {
  const filePath = path.join(process.cwd(), "src", "lib", "questions.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  questionsData = JSON.parse(fileContent);
} catch (err) {
  console.error("❌ Failed to load questions.json:", err.message);
}

// Flatten all questions once → better performance
const allQuestions = questionsData.sections.flatMap((section) => section.questions || []);
const correctMap = {};
allQuestions.forEach((q) => {
  if (q?.id) {
    correctMap[q.id] = q.correct;
  }
});

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    const {
      answers = [],
      cheatCount = 0,
      timeTaken = 0,
      name,
      phone,
      designation,
      employeeCode,
      teamLeaderName,
    } = body;

    // Required fields validation
    if (!name || !phone || !designation || !employeeCode || !teamLeaderName) {
      return NextResponse.json(
        { error: "Name, phone, designation, employeeCode and teamLeaderName are required" },
        { status: 400 }
      );
    }

    if (!Array.isArray(answers) || answers.length === 0) {
      return NextResponse.json({ error: "Test answers are required" }, { status: 400 });
    }

    // Clean input data
    const cleanName = name.trim();
    const cleanPhone = phone.toString().trim();
    const cleanDesignation = designation.trim();
    const cleanEmployeeCode = employeeCode.toString().trim();
    const cleanTeamLeaderName = teamLeaderName.trim();

    // Prevent duplicate submission by phone
    const existing = await EmployeeTest.findOne({ phone: cleanPhone });
    if (existing) {
      return NextResponse.json(
        { error: "This phone number has already submitted the test." },
        { status: 409 }
      );
    }

    // ── IMPROVED SCORE CALCULATION ───────────────────────────────────────
    let correctCount = 0;
    let attemptedCount = 0;

    for (const ans of answers) {
      // Skip invalid answer entries
      if (!ans?.questionId || ans.answer === undefined || ans.answer === "") {
        continue;
      }

      const correctAnswer = correctMap[ans.questionId];

      // Only count questions that actually exist in the question bank
      if (correctAnswer !== undefined) {
        attemptedCount++;

        // Safe string comparison (handles number/string mismatch)
        if (String(ans.answer).trim() === String(correctAnswer).trim()) {
          correctCount++;
        }
      }
    }

    // Final percentage (0 if nothing attempted)
    const scorePercentage =
      attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0;
    // ──────────────────────────────────────────────────────────────────────

    // Save to database
    const testResult = await EmployeeTest.create({
      name: cleanName,
      phone: cleanPhone,
      designation: cleanDesignation,
      employeeCode: cleanEmployeeCode,
      teamLeaderName: cleanTeamLeaderName,
      answers,
      score: scorePercentage,
      cheatCount,
      timeTaken,
      completedAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      message: "Test submitted successfully!",
      resultId: testResult._id.toString(),
      score: scorePercentage,
      employee: {
        name: testResult.name,
        phone: testResult.phone,
        designation: testResult.designation,
        employeeCode: testResult.employeeCode,
        teamLeaderName: testResult.teamLeaderName,
      },
    });
  } catch (error) {
    console.error("🔥 Test submission error:", error);

    if (error.code === 11000) {
      return NextResponse.json(
        { error: "Phone number already used for a test submission." },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: error?.message || "Failed to submit test. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const results = await EmployeeTest.find({})
      .sort({ completedAt: -1 })
      .lean();

    // Build question lookup map for detailed response
    const questionMap = {};
    questionsData.sections.forEach((section) => {
      section.questions?.forEach((q) => {
        if (q?.id) {
          questionMap[q.id] = {
            question: q.question,
            options: q.options || [],
            correct: q.correct,
          };
        }
      });
    });

    const formatted = results.map((r) => {
      const detailedAnswers = (r.answers || []).map((ans) => {
        const q = questionMap[ans.questionId] || {};
        return {
          questionId: ans.questionId,
          question: q.question || "Question not found",
          selected: ans.answer,
          correct: q.correct,
          isCorrect: String(ans.answer) === String(q.correct),
          options: q.options || [],
        };
      });

      const correct = detailedAnswers.filter((a) => a.isCorrect).length;

      return {
        id: r._id.toString(),
        employee: {
          name: r.name,
          phone: r.phone,
          designation: r.designation,
          employeeCode: r.employeeCode || "",
          teamLeaderName: r.teamLeaderName || "",
        },
        score: r.score,
        correct,
        total: detailedAnswers.length,
        cheatCount: r.cheatCount || 0,
        timeTaken: r.timeTaken || 0,
        answers: detailedAnswers,
        date: new Date(r.completedAt).toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
        }),
      };
    });

    return NextResponse.json({ success: true, results: formatted });
  } catch (error) {
    console.error("🔥 Fetch results error:", error);
    return NextResponse.json({ error: "Failed to fetch results" }, { status: 500 });
  }
}