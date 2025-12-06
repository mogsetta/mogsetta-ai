import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ status: "Mogsetta backend is running." });
}