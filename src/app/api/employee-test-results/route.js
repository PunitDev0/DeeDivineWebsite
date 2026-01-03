// app/api/employee-test-results/route.js
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import EmployeeTest from "@/models/EmployeeTest";
import questionsData from "@/lib/questions.json";

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
    } = body;

    // Validation
    if (!name || !phone || !designation) {
      return NextResponse.json(
        { error: "Name, phone, and designation are required" },
        { status: 400 }
      );
    }

    if (!answers || answers.length === 0) {
      return NextResponse.json(
        { error: "Test answers are required" },
        { status: 400 }
      );
    }

    // Prevent duplicate submission by phone
    const existing = await EmployeeTest.findOne({ phone });
    if (existing) {
      return NextResponse.json(
        { error: "This phone number has already submitted the test." },
        { status: 409 }
      );
    }

    // Calculate Score
    const allQuestions = questionsData.sections.flatMap((s) => s.questions);
    const correctMap = {};
    allQuestions.forEach((q) => {
      correctMap[q.id] = q.correct;
    });

    let correctCount = 0;
    answers.forEach((ans) => {
      if (correctMap[ans.questionId] === ans.answer) correctCount++;
    });

    const scorePercentage = Math.round((correctCount / answers.length) * 100);

    // Create single document with all data
    const testResult = await EmployeeTest.create({
      name: name.trim(),
      phone: phone.trim(),
      designation: designation.trim(),
      answers,
      score: scorePercentage,
      cheatCount,
      timeTaken,
      completedAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      message: "Test submitted successfully!",
      resultId: testResult._id,
      score: scorePercentage,
      name: testResult.name,
      phone: testResult.phone,
      designation: testResult.designation,
    });
  } catch (error) {
    console.error("Test submission error:", error);

    if (error.code === 11000) {
      return NextResponse.json(
        { error: "Phone number already used for a test submission." },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Failed to submit test. Please try again." },
      { status: 500 }
    );
  }
}

// GET: Fetch all test results (for admin)
export async function GET() {
  try {
    await connectDB();

    const results = await EmployeeTest.find({})
      .sort({ completedAt: -1 })
      .lean();

    const questionMap = {};
    questionsData.sections.forEach((section) => {
      section.questions.forEach((q) => {
        questionMap[q.id] = {
          question: q.question,
          options: q.options,
          correct: q.correct,
        };
      });
    });

    const formatted = results.map((r) => {
      const detailedAnswers = r.answers.map((ans) => {
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
    console.error("Fetch results error:", error);
    return NextResponse.json({ error: "Failed to fetch results" }, { status: 500 });
  }
}