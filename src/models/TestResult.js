// models/TestResult.js (Mongoose model)
import mongoose from "mongoose";

const TestResultSchema = new mongoose.Schema({
  candidateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Candidate",
    required: true,
  },
  answers: [
    {
      questionId: { type: Number, required: true },
      answer: { type: String, required: true },
    },
  ],
  score: { type: Number }, // Optional: Calculate on save
  completedAt: { type: Date, default: Date.now },
});

export default mongoose.models.TestResult || mongoose.model("TestResult", TestResultSchema);