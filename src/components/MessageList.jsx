import { useEffect, useRef } from "react";
import Message from "./Message";

function MessageList({ messages }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }, [messages]);

  useEffect(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]); 

  return (
    <div className="messages">
      {messages.map((message, index) => (
        <Message
          key={index}
          sender={message.sender}
          text={message.text}
        />
      ))}

      <div ref={messagesEndRef} />
    </div>
  );
}

export default MessageList;