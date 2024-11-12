import { ragChat } from "../../lib/rag-chat";
import { aiUseChatAdapter } from "@upstash/rag-chat/nextjs";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const { messages } = await req.json();
  const lastMsg = messages[messages.length - 1].content;
  const response = await ragChat.chat(lastMsg, { streaming: true });
  return aiUseChatAdapter(response);
};
