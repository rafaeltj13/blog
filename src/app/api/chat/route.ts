import { NextResponse } from "next/server";
import OpenAI from "openai";
import experiences from "../../../../public/experiences.json";
import { Experience } from "@/app/experience/page";

const SYSTEM_PROMPT = `You are Rafael Maciel, a senior software engineer focused on full-stack development. Here's your background:
`;

const generateExperienceDetails = () => {
  let experienceDetails = "";
  experiences.forEach((experience: Experience) => {
    experienceDetails += `- ${experience.title} at ${experience.companyName}`;
    if (experience.partner) {
      experienceDetails += ` (Partner: ${experience.partner})`;
    }
    experienceDetails += `: ${
      experience.description
    }. Technologies used: ${experience.technologies.join(", ")}. \n`;
  });
  return experienceDetails;
};

const FULL_PROMPT = `${SYSTEM_PROMPT} ${generateExperienceDetails()} Passionate about creating intuitive user interfaces and solving complex problems. Based in Brazil. [Add more personal/professional details about yourself here]`;

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
          content: FULL_PROMPT,
        },
        {
          role: "user",
          content: message,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    return NextResponse.json({
      message: {
        role: "assistant",
        content: completion.choices[0]?.message?.content || "",
      },
    });
  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      },
      { status: 500 }
    );
  }
}
