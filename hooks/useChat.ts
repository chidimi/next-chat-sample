import dayjs from "dayjs";
import { RefObject, useEffect, useRef, useState } from "react";
import socketIOClient, { Socket } from "socket.io-client";

export type ReceivedMessage = {
  userName: string;
  time: string;
  body: string;
  socketId: string;
  ownedByCurrentUser: boolean;
};

const SOCKET_SERVER_URL = "http://localhost:3001";

export const useChat = (messageRef: RefObject<HTMLInputElement>) => {
  const [messages, setMessages] = useState<ReceivedMessage[]>([]);
  const socketRef = useRef<Socket>();

  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL);

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    socketRef.current?.on(
      "serverToClient",
      (receivedMessage: ReceivedMessage) => {
        console.log(receivedMessage.body);
        const incomingMessage = {
          ...receivedMessage,
          ownedByCurrentUser:
            receivedMessage.socketId === socketRef.current?.id,
        };
        setMessages([...messages, incomingMessage]);
        messageRef.current!.value = "";
      }
    );
  }, [messageRef, messages]);

  const sendMessage = (messageBody?: string): void => {
    if (messageBody == undefined) return;
    socketRef.current?.emit("clientToServer", {
      userName: "test",
      time: dayjs(),
      body: messageBody,
    });
  };

  return { messages, sendMessage };
};
