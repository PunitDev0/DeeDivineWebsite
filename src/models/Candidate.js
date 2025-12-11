// models/Candidate.js
import mongoose from  "mongoose";

const candidateSchema = new mongoose.Schema(
  {
    // Personal Info
    name: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      minlength: [10, "Phone number must be at least 10 digits"],
      // Optional: Indian or international format
      match: [/^\+?[0-9\s\-\(\)]{10,20}$/, "Please enter a valid phone number"],
    },

    // Job Info
    jobTitle: {
      type: String,
      required: [true, "Desired job title is required"],
      trim: true,
    },
    appliedFor: {
      // If user came from a specific job page: ?job=Senior%20React%20Developer
      type: String,
      trim: true,
    },

    // Resume File
    resume: {
      fileName: {
        type: String,
        required: true,
      },
      filePath: {
        // Local path or Cloudinary/S3 URL
        type: String,
        required: true,
      },
      fileSize: {
        type: Number, // in bytes
        required: true,
      },
      fileType: {
        type: String,
        enum: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
        required: true,
      },
      uploadedAt: {
        type: Date,
        default: Date.now,
      },
    },

    // Application Status (for admin dashboard)
    status: {
      type: String,
      enum: ["new", "viewed", "shortlisted", "interviewed", "hired", "rejected"],
      default: "new",
    },

    // Optional fields (you can add later)
    linkedin: String,
    portfolio: String,
    coverLetter: String,
    ipAddress: String,
    source: String, // e.g., "website", "linkedin", "referral"
  },
  {
    timestamps: true, // adds createdAt & updatedAt automatically
  }
);

// Prevent duplicate model in Next.js dev mode (hot reload)
const Candidate =
  mongoose.models.Candidate || mongoose.model("Candidate", candidateSchema);

export default Candidate;