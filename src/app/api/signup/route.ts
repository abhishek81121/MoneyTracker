import { User } from "@/schema/credentials";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
  const info = await request.json();
  await mongoose.connect(process.env.DATABASE_URI as string);
  const user = new User(info);
  if ((await User.findOne({ Email: info.Email })) === null) {
    await user.save();
    return NextResponse.json({ status: "success" });
  } else {
    return NextResponse.json({
      status: "Error",
      message: "Email is not unique",
    });
  }
}
