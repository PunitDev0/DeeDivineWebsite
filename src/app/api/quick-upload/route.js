import { NextResponse } from "next/server";
import Candidate from "@/models/Candidate";
import { connectDB } from "@/lib/mongodb";
import { v2 as cloudinary } from "cloudinary";

// Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
  try {
    await connectDB();

    const data = await request.formData();
    const file = data.get("file");
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const jobTitle = data.get("jobTitle");

    if (!file || !name || !email || !phone || !jobTitle) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Convert file to Base64 for Cloudinary
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;

    // Upload to Cloudinary
    const upload = await cloudinary.uploader.upload(base64, {
      folder: "resumes",
      resource_type: "auto",
      public_id: `${Date.now()}_${name.replace(/\s/g, "_")}`,
    });

    // Save to MongoDB
    const newCandidate = await Candidate.create({
      name,
      email,
      phone,
      jobTitle,
      appliedFor: data.get("appliedFor") || jobTitle,
      resume: {
        fileName: file.name,
        fileUrl: upload.secure_url,
        cloudinaryId: upload.public_id,
        fileSize: file.size,
        fileType: file.type,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Resume uploaded successfully!",
      candidateId: newCandidate._id,
      resumeUrl: upload.secure_url,
    });

  } catch (error) {
    console.error("🔴 SERVER ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Unknown server error",
        stack: error.stack || null,
        cloudinaryError: error.error || null,
      },
      { status: 500 }
    );
  }
}
