import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "experiences.json");
  try {
    const jsonData = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(jsonData);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error reading or parsing JSON file:", error);
    return NextResponse.json({ error: "Failed to read data" }, { status: 500 });
  }
}
