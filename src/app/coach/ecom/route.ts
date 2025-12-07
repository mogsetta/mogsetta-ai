import { streamResponse } from "../../../lib/openai";

export async function POST(req: Request) {
  const body = await req.json();
  const messages = [
    {
      role: "system",
      content:
        "You are the Mogsetta E-Com Coach. You help users choose products, build Shopify stores, create content, and scale."
    },
    { role: "user", content: body.message }
  ];
  return streamResponse(messages);
}
