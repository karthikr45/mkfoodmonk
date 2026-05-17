import { NextResponse } from "next/server";
import { stores } from "@/lib/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const featured = searchParams.get("featured");
  const data = featured === "true" ? stores.filter((s) => s.featured) : stores;
  return NextResponse.json({ stores: data });
}
