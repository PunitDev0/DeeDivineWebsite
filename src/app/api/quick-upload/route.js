// app/api/quick-upload/route.js
import { NextResponse } from "next/server";
import Candidate from "@/models/Candidate";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

  import { connectDB } from "@/lib/mongodb";

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
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Save file
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filename = `${Date.now()}_${name.replace(/\s/g, "_")}_${file.name}`;
    const uploadDir = path.join(process.cwd(), "uploads/resumes");

    await mkdir(uploadDir, { recursive: true });
    const filePath = path.join(uploadDir, filename);
    await writeFile(filePath, buffer);

    // Save to MongoDB
    const newCandidate = await Candidate.create({
      name,
      email,
      phone,
      jobTitle,
      appliedFor: data.get("appliedFor") || jobTitle,
      resume: {
        fileName: file.name,
        filePath: `/uploads/resumes/${filename}`,
        fileSize: file.size,
        fileType: file.type,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Resume uploaded successfully!",
      candidateId: newCandidate._id,
    });
  } catch (error) {
    if (error.code === 11000) {
      return NextResponse.json({error: error}, { status: 409 });
    }
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}