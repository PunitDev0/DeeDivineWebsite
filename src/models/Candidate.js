import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema(
  {
    // Personal Info
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    fathersName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email"],
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 15,
    },
    highestQualification: {
      type: String,
      required: true,
      trim: true,
    },
    // Job Info
    jobTitle: {
      type: String,
      required: true,
      trim: true,
    },
    appliedFor: {
      type: String,
      trim: true,
    },
    // Resume (Cloudinary)
    resume: {
      fileName: { type: String, required: true },
      fileUrl: { type: String, required: true },
      cloudinaryId: { type: String, required: true },
      fileSize: { type: Number, required: true },
      fileType: { type: String, required: true },
      uploadedAt: { type: Date, default: Date.now },
    },
    // Visibility
    makePublic: {
      type: Boolean,
      default: true,
    },
    // Application status
    status: {
      type: String,
      enum: ["new", "viewed", "shortlisted", "interviewed", "hired", "rejected"],
      default: "new",
    },
  },
  { timestamps: true }
);

const Candidate =
  mongoose.models.Candidate || mongoose.model("Candidate", candidateSchema);
export default Candidate;