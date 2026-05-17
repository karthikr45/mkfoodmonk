import { NextResponse } from "next/server";
import { videos } from "@/lib/data";

export async function GET() {
  return NextResponse.json({ videos });
}
