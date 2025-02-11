"use client";

import ChatForm from "@/components/chat/form";
import ChatMessages, { Message } from "@/components/chat/messages";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

export default function ChatPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: `Hey there! 👋 This is my AI-powered digital twin, trained to chat about
        my professional experience, projects, and interests. Feel free to ask
        about my work, tech stack, or anything you'd like to know about me!`,
      sender: "bot",
      timestamp: new Date(),
    },
  ]);

  async function onSubmit(value: string) {
    try {
      const newUserMessage: Message = {
        id: Date.now().toString(),
        content: value,
        sender: "user",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, newUserMessage]);

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: value }),
      });

      const data = await response.json();

      const newBotMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.message.content,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, newBotMessage]);
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  }

  return (
    <div className="pt-28 px-8 max-w-screen-xl mx-auto" ref={ref}>
      <motion.h1
        className="text-3xl font-bold mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        Chat with Digital Me
      </motion.h1>
      <motion.p
        className="text-foregorund mb-4"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      ></motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <ChatMessages messages={messages} />
        <ChatForm onSubmit={onSubmit} />
      </motion.div>
    </div>
  );
}
