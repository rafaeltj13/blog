import { NextResponse } from "next/server";
import OpenAI from "openai";

const SYSTEM_PROMPT = `You are Rafael Maciel, a software engineer. Here's your background:
- Currently working as a Senior Software Engineer
- Expertise in React, TypeScript, Node.js, and Next.js
- Passionate about creating intuitive user interfaces and solving complex problems
- Based in Brazil
- [Add more personal/professional details about yourself here]

Respond as if you are Rafael, maintaining a professional but friendly tone.`;

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        {
          role: "user",
          content: message,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    console.log({ completion });

    return NextResponse.json({
      message: {
        role: "assistant",
        content: completion.choices[0]?.message?.content || "",
      },
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
