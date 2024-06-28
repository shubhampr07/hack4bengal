// app/api/gemini/route.ts

import { chatSession } from "@/utils/GeminiAi";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { question, difficultyLevel, questionCount } = body;
    console.log(body);

    if (!question || !difficultyLevel || !questionCount) {
      return NextResponse.json(
        { message: "Missing required parameters" },
        { status: 400 }
      );
    }

    const InputPrompt = `Generate a set of unique, interview-style questions on the topic of "${question}" at a ${difficultyLevel} difficulty level. Each question should be presented in the following JSON format:
[
  {
    "question": "Detailed, clearly worded question text...",
    "options": [
      "Specific option 1",
      "Specific option 2",
      "Specific option 3",
      "Specific option 4"
    ],
    "answer": "Exact text of the correct option",
  }
]
Guidelines:
1. Ensure each question is unique and not repeated.
2. Questions should be similar to those asked in technical interviews at well-known technology companies.
3. All questions must be directly relevant to the specified topic.
4. Provide a diverse range of question types (e.g., conceptual understanding, problem-solving, code analysis).
5. Adjust the complexity of questions to match the specified difficulty level.
6. Ensure all options are plausible, with only one correct answer.
7. Use clear, concise language in both questions and options.
8. If applicable, include code snippets or technical terms relevant to the topic.
Generate ${questionCount} questions following this format and guidelines.`;

    const result = await chatSession.sendMessage(InputPrompt);

    return NextResponse.json(
      result.response.text().replace("```json", "").replace("```", "")
    );
  } catch (error) {
    console.error("API request failed:", error);
    return NextResponse.json(
      {
        message: "Internal Server Error",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
