import { ReceivedMessage } from "../../hooks/useChat";

type ChatOutputProps = {
  messages: ReceivedMessage[];
};

export const ChatOutput = ({ messages }: ChatOutputProps) => {
  const currentUserMessageClass =
    "px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white";
  const otherUserMessageClass =
    "px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600";

  return (
    <div
      id="messages"
      className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
    >
      <div className="chat-message">
        <ul>
          {messages.map((message, index) => {
            return (
              <div key={index} className="flex items-end justify-end">
                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                  <li>
                    <span
                      className={
                        message.ownedByCurrentUser
                          ? currentUserMessageClass
                          : otherUserMessageClass
                      }
                    >
                      {message.body}
                    </span>
                  </li>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
