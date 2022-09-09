import { forwardRef } from "react";

export const ChatInput = forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <input
      className="rounded-2xl bg-gray-100 py-3 px-5 w-full"
      type="text"
      ref={ref}
    ></input>
  );
});
ChatInput.displayName = "ChatInput";
