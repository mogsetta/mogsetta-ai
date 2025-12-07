import { streamResponse } from "../../lib/openai";

export async function POST(req: Request) {
  const body = await req.json();
  const messages = [
    {
      role: "system",
      content:
        "You are the Mogsetta Digital Product Coach. You help users build ebooks, guides, templates, and digital products."
    },
    { role: "user", content: body.message }
  ];
  return streamResponse(messages);
}
