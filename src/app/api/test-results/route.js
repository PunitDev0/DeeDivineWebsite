// app/api/test-results/route.js (Next.js API route)
import { NextResponse } from "next/server";

import TestResult from "@/models/TestResult";
import questionsData from "@/lib/questions.json"; // Import JSON for scoring
import { connectDB } from "@/lib/mongodb";
import Candidate from "@/models/Candidate";


export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { candidateId, answers } = body;

    if (!candidateId || !answers || answers.length === 0) {
      return NextResponse.json({ error: "Candidate ID and answers are required" }, { status: 400 });
    }

    // Flatten questions for scoring
    const allQuestions = questionsData.sections.flatMap((section) => section.questions);
    const correctAnswers = allQuestions.reduce((acc, q) => {
      acc[q.id] = q.correct;
      return acc;
    }, {});

    // Calculate score
    let score = 0;
    const scoredAnswers = answers.map((ans) => {
      if (correctAnswers[ans.questionId] === ans.answer) score++;
      return ans;
    });

    const newTestResult = await TestResult.create({
      candidateId,
      answers: scoredAnswers,
      score: Math.round((score / allQuestions.length) * 100), // Percentage
    });

    return NextResponse.json({
      success: true,
      message: "Test results saved!",
      testId: newTestResult._id,
      score: newTestResult.score,
    });
  } catch (error) {
    console.error("Test save error:", error);
    if (error.code === 11000) {
      return NextResponse.json({ error: "Test already submitted for this candidate" }, { status: 409 });
    }
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

// GET → Fetch all test results (for admin dashboard)
export async function GET() {
  try {
    await connectDB();

    const results = await TestResult.find({})
    .populate("candidateId", "name email phone jobTitle fathersName highestQualification resume.fileUrl")
      .sort({ completedAt: -1 })
      .lean();

    // Create question lookup map from JSON
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

    const formattedResults = results.map((r) => {
      const candidate = r.candidateId || {};
      const answersWithDetails = (r.answers || []).map((ans) => {
        const qData = questionMap[ans.questionId] || {};
        const isCorrect = ans.answer === qData.correct;

        return {
          questionId: ans.questionId,
          question: qData.question || "Question not found",
          selectedAnswer: ans.answer,
          correctAnswer: qData.correct || "?",
          isCorrect,
          options: qData.options || {},
        };
      });

      const correctCount = answersWithDetails.filter((a) => a.isCorrect).length;
      const percentage = Math.round((correctCount / answersWithDetails.length) * 100);

      return {
        id: r._id.toString(),
        candidate: {
          name: candidate.name || "Unknown",
          email: candidate.email || "N/A",
          phone: candidate.phone || "N/A",
          jobTitle: candidate.jobTitle || "N/A",
          resume: candidate?.resume?.fileUrl || "N/A",
          fathersName: candidate?.fathersName || "N/A",
          highestQualification: candidate?.highestQualification
        },
        score: percentage,
        correct: correctCount,
        total: answersWithDetails.length,
        answers: answersWithDetails, // Full detailed answers with correct ones from JSON
        date: new Date(r.completedAt).toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
    });

    return NextResponse.json({
      success: true,
      count: formattedResults.length,
      results: formattedResults,
    });
  } catch (error) {
    console.error("Fetch results error:", error);
    return NextResponse.json(
      { error: "Failed to fetch results" },
      { status: 500 }
    );
  }
}