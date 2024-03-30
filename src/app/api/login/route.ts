import { User } from "@/schema/credentials";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
  const info = await request.json();
  await mongoose.connect(process.env.DATABASE_URI as string);

  if ((await User.findOne({ Email: info.Email })) === null) {
    return NextResponse.json({
      status: "Error",
      message: "Email Is Not Registered",
    });
  } else {
    const credentials = await User.findOne({ Email: info.Email });
    if (credentials.Password === info.Password) {
      return NextResponse.json({ status: "success" });
    } else {
      return NextResponse.json({
        status: "Error",
        message: "Password Is Incorrect",
      });
    }
  }
}
