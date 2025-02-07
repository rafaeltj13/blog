"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface ChatMessagesProps {
  messages: Message[];
}

export default function ChatMessages({ messages }: ChatMessagesProps) {
  return (
    <ScrollArea className="h-[56vh] flex flex-col gap-4 space-y-4 mb-4 px-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={cn(
            "flex items-start gap-3 py-2 rounded-lg",
            message.sender === "user" ? "flex-row-reverse" : "flex-row"
          )}
        >
          {message.sender === "bot" && (
            <Avatar>
              <AvatarImage src={"/profile.jpeg"} />
              <AvatarFallback className="text-primary-foreground">
                RM
              </AvatarFallback>
            </Avatar>
          )}
          <div
            className={cn(
              "rounded-lg px-4 py-2 max-w-[80%]",
              message.sender === "user"
                ? "bg-primary text-primary-foreground"
                : "bg-muted"
            )}
          >
            <p>{message.content}</p>
            <span className="text-xs opacity-50">
              {message.timestamp.toLocaleTimeString()}
            </span>
          </div>
        </div>
      ))}
    </ScrollArea>
  );
}
