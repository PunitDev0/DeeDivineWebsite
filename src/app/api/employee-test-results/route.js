import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import EmployeeTest from "@/models/EmployeeTest";
import fs from "fs";
import path from "path";

/* ===============================
   Load questions.json (PROD SAFE)
================================ */
let questionsData;

try {
  const filePath = path.join(process.cwd(), "lib", "questions.json");
  const file = fs.readFileSync(filePath, "utf-8");
  questionsData = JSON.parse(file);
} catch (err) {
  console.error("❌ Failed to load questions.json:", err);
  questionsData = { sections: [] };
}

/* ===============================
   POST: Submit Test
================================ */
export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();

    let {
      answers = [],
      cheatCount = 0,
      timeTaken = 0,

      name,
      phone,
      designation,

      employeeCode, // ✅ NEW
      teamLeaderName, // ✅ NEW
    } = body;

    /* ---------- Validation ---------- */
    if (!name || !phone || !designation || !employeeCode || !teamLeaderName) {
      return NextResponse.json(
        {
          error:
            "Name, phone, designation, employeeCode and teamLeaderName are required",
        },
        { status: 400 }
      );
    }

    if (!Array.isArray(answers) || answers.length === 0) {
      return NextResponse.json(
        { error: "Test answers are required" },
        { status: 400 }
      );
    }

    /* ---------- Normalize Data ---------- */
    const cleanName = name.trim();
    const cleanPhone = phone.toString().trim();
    const cleanDesignation = designation.trim();
    const cleanEmployeeCode = employeeCode.toString().trim();
    const cleanTeamLeaderName = teamLeaderName.trim();

    /* ---------- Prevent Duplicate ---------- */
    // ✅ phone unique check
    const existing = await EmployeeTest.findOne({ phone: cleanPhone });
    if (existing) {
      return NextResponse.json(
        { error: "This phone number has already submitted the test." },
        { status: 409 }
      );
    }

    /* ---------- Prepare Correct Answers Map ---------- */
    const allQuestions = questionsData.sections.flatMap(
      (section) => section.questions || []
    );

    const correctMap = {};
    allQuestions.forEach((q) => {
      if (q?.id) correctMap[q.id] = q.correct;
    });

    /* ---------- Calculate Score ---------- */
    let correctCount = 0;

    answers.forEach((ans) => {
      if (
        ans &&
        ans.questionId &&
        correctMap.hasOwnProperty(ans.questionId) &&
        correctMap[ans.questionId] === ans.answer
      ) {
        correctCount++;
      }
    });

    const scorePercentage = Math.round((correctCount / answers.length) * 100);

    /* ---------- Save Result ---------- */
    const testResult = await EmployeeTest.create({
      name: cleanName,
      phone: cleanPhone,
      designation: cleanDesignation,

      employeeCode: cleanEmployeeCode, // ✅ NEW
      teamLeaderName: cleanTeamLeaderName, // ✅ NEW

      answers,
      score: scorePercentage,
      cheatCount,
      timeTaken,
      completedAt: new Date(),
    });

    /* ---------- Success Response ---------- */
    return NextResponse.json({
      success: true,
      message: "Test submitted successfully!",
      resultId: testResult._id,
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
      {
        error: error?.message || "Failed to submit test. Please try again.",
      },
      { status: 500 }
    );
  }
}

/* ===============================
   GET: Fetch Results (Admin)
================================ */
export async function GET() {
  try {
    await connectDB();

    const results = await EmployeeTest.find({})
      .sort({ completedAt: -1 })
      .lean();

    /* ---------- Build Question Map ---------- */
    const questionMap = {};
    questionsData.sections.forEach((section) => {
      section.questions?.forEach((q) => {
        questionMap[q.id] = {
          question: q.question,
          options: q.options,
          correct: q.correct,
        };
      });
    });

    /* ---------- Format Response ---------- */
    const formatted = results.map((r) => {
      const detailedAnswers = (r.answers || []).map((ans) => {
        const q = questionMap[ans.questionId] || {};
        return {
          questionId: ans.questionId,
          question: q.question || "Question not found",
          selected: ans.answer,
          correct: q.correct,
          isCorrect: ans.answer === q.correct,
          options: q.options || {},
        };
      });

      const correct = detailedAnswers.filter((a) => a.isCorrect).length;

      return {
        id: r._id.toString(),
        employee: {
          name: r.name,
          phone: r.phone,
          designation: r.designation,

          employeeCode: r.employeeCode || "", // ✅ NEW
          teamLeaderName: r.teamLeaderName || "", // ✅ NEW
        },
        score: r.score,
        correct,
        total: detailedAnswers.length,
        cheatCount: r.cheatCount || 0,
        timeTaken: r.timeTaken || 0,
        answers: detailedAnswers,
        date: new Date(r.completedAt).toLocaleString("en-IN"),
      };
    });

    return NextResponse.json({ success: true, results: formatted });
  } catch (error) {
    console.error("🔥 Fetch results error:", error);
    return NextResponse.json(
      { error: "Failed to fetch results" },
      { status: 500 }
    );
  }
}
