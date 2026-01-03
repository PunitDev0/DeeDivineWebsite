// models/EmployeeTest.js
import mongoose from "mongoose";

const employeeTestSchema = new mongoose.Schema({
  // Employee Details
  name: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true, unique: true }, // Unique to prevent duplicate entries
  designation: { type: String, required: true, trim: true },

  // Test Data
  answers: [
    {
      questionId: { type: Number, required: true },
      answer: { type: String, required: true },
    },
  ],
  score: { type: Number, required: true }, // Percentage (0-100)
  cheatCount: { type: Number, default: 0 },
  timeTaken: { type: Number }, // in seconds
  completedAt: { type: Date, default: Date.now },
});

export default mongoose.models.EmployeeTest || mongoose.model("EmployeeTest", employeeTestSchema);