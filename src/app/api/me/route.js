// app/api/me/route.js
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export async function GET(request) {
  try {
    const email = request.cookies.get("userId")?.value;
    if (!email) {
      return NextResponse.json({ error: "Not logged in" }, { status: 401 });
    }

    await connectDB();
    const user = await User.findOne({ email }).select("-password");
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}