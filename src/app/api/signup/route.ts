import { User } from "@/schema/credentials";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
  const info = await request.json();
  const user = new User(info);
  await mongoose.connect(process.env.DATABASE_URI as string);
  await user.save();
  return NextResponse.json({});
}
