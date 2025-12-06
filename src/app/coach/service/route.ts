import { streamResponse } from "@/lib/openai";

export async function POST(req: Request) {
  const body = await req.json();
  const messages = [
    {
      role: "system",
      content:
        "You are the Mogsetta Service Business Coach. You help users start service businesses, land clients, and build systems."
    },
    { role: "user", content: body.message }
  ];
  return streamResponse(messages);
}
