import { DefaultEventsMap } from "@socket.io/component-emitter";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import { Clock } from "../components/tick";
import styles from "../styles/Home.module.css";

const Chat: NextPage = () => {
  let socket: Socket;
  const [message, setMessage] = useState<string>("");
  const messageRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    socket = io("http://localhost:3001");

    socket.on("connect", () => {
      console.log("connected");
    });
  };

  const sendMessage = () => {
    socket.emit("message", { test: messageRef!.current!.value });
    socket.on("message", (data) => {
      setMessage(JSON.stringify(data));
    });
    messageRef!.current!.value = '';
  };

  return (
    <>
      <p>{message}</p>
      <input type="text" ref={messageRef}></input>
      <button onClick={sendMessage}>send</button>
    </>
  );
};

export default Chat;
