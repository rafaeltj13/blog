import { NextResponse } from "next/server";
import posts from "./posts";

export async function GET() {
  try {
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error accessing posts data:", error);
    return NextResponse.json({ error: "Failed to read data" }, { status: 500 });
  }
}
