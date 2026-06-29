import { useEffect, useRef } from "react";
import Message from "./Message";
import TypingIndicator from "./TypingIndicator";

function MessageList({ messages, isBotTyping }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="messages">
      {messages.map((message, index) => (
        <Message
          key={index}
          role={message.role}
          content={message.content}
        />
      ))}

      {isBotTyping && <TypingIndicator />}

      <div ref={messagesEndRef} />
    </div>
  );
}

export default MessageList;