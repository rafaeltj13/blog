import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";
import posts from "../posts";

export async function GET(request: NextRequest) {
  try {
    const id = request.nextUrl.pathname.split("/").pop();
    const post = posts.find((post) => post.id === id);

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error("Error accessing post data:", error);
    return NextResponse.json({ error: "Failed to read data" }, { status: 500 });
  }
}
