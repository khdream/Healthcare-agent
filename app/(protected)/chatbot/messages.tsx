import React from "react";
import type { Message as TMessage } from "ai/react";
import { ScrollArea } from "../../../components/ui/scroll-area";
import Message from "./message";
import EmptyMessage from "./empty-message";

interface MessageProps {
  messages: TMessage[];
}

function Messages({ messages }: MessageProps) {
  return (
    <div className="flex-1 flex flex-col">
      {messages.length === 0 ? (
        <EmptyMessage />
      ) : (
        <ScrollArea className="flex-1 p-4 space-y-4 backdrop-blur-sm bg-background/30">
          {messages.map((message, i) => (
            <Message
              key={i}
              content={message.content}
              isUserMessage={message.role === "user"}
            />
          ))}
        </ScrollArea>
      )}
    </div>
  );
}

export default Messages;
