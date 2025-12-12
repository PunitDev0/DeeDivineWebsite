import { NextResponse } from "next/server";
import Candidate from "@/models/Candidate";
import { connectDB } from "@/lib/mongodb";
import { v2 as cloudinary } from "cloudinary";

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
    const fathersName = data.get("fathersName");
    const email = data.get("email");
    const phone = data.get("phone");
    const highestQualification = data.get("highestQualification");
    const jobTitle = data.get("jobTitle");
    const makePublic = data.get("makePublic") === "true";

    // Validate all required fields
    if (!file || !name || !fathersName || !email || !phone || !highestQualification || !jobTitle) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;

    const upload = await cloudinary.uploader.upload(base64, {
      folder: "resumes",
      resource_type: "auto",
      public_id: `${Date.now()}_${name.replace(/\s/g, "_")}`,
    });

    const newCandidate = await Candidate.create({
      name,
      fathersName,
      email,
      phone,
      highestQualification,
      jobTitle,
      appliedFor: jobTitle,
      makePublic,
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
    console.error("Upload Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Upload failed. Please try again." },
      { status: 500 }
    );
  }
}