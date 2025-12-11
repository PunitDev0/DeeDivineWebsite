// models/User.js
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  jobTitle: String,

  // Store file directly in DB
  resume: {
    data: Buffer,
    contentType: String,
    fileName: String,
  },

  resumePublic: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

// Hash password before saving
userSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
});

export default mongoose.models.User || mongoose.model("User", userSchema);
