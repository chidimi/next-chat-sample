type ChatOutputProps = {
  messages: string[];
};

export const ChatOutput = ({ messages }: ChatOutputProps) => {
  return (
    <ul>
      {messages.map((message, index) => {
        return (
          <li key={index}>
            <p>{message}</p>
          </li>
        );
      })}
    </ul>
  );
};
