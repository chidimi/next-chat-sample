import { DefaultEventsMap } from "@socket.io/component-emitter";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import { ChatInput } from "../components/chat/ChatInput";
import { ChatOutput } from "../components/chat/ChatOutput";
import { Clock } from "../components/tick";
import { useChat } from "../hooks/useChat";
import styles from "../styles/Home.module.css";

const Chat: NextPage = () => {
  const messageRef = useRef<HTMLInputElement>(null);
  const { messages, sendMessage } = useChat(messageRef);

  return (
    <>
      <ChatOutput messages={messages} />
      <ChatInput ref={messageRef} />
      <button
        onClick={() => {
          sendMessage(messageRef.current?.value);
        }}
      >
        send
      </button>
    </>
  );
};

export default Chat;
