import { useEffect, useRef } from "react";
import Message from "./Message";

function MessageList({ messages, isBotTyping }) {
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

      {isBotTyping && <div className="message bot typing">Bot is typing...</div>}

      <div ref={messagesEndRef} />
    </div>
  );
}

export default MessageList;