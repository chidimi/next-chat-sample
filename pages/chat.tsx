import { DefaultEventsMap } from "@socket.io/component-emitter";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import { ChatInput } from "../components/chat/ChatInput";
import { ChatOutput } from "../components/chat/ChatOutput";
import { Layout } from "../components/layout";
import { Clock } from "../components/tick";
import { useChat } from "../hooks/useChat";
import styles from "../styles/Home.module.css";

const Chat: NextPage = () => {
  const messageRef = useRef<HTMLInputElement>(null);
  const { messages, sendMessage } = useChat(messageRef);

  return (
    <div className="h-1/3">
      <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
        <ChatOutput messages={messages} />
        <ChatInput
          ref={messageRef}
          sendMessage={() => sendMessage(messageRef.current?.value)}
        />
      </div>
    </div>
  );
};

export default Chat;
