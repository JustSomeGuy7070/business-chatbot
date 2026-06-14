import { useState } from "react";
import "./App.css";
import MessageList from "./components/MessageList";
import ChatInput from "./components/ChatInput";

function App() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I'm your business assistant. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");

  function handleSendMessage() {
    if (input.trim() === "") return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    const botMessage = {
      sender: "bot",
      text: `You said "${input}".`,
    };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  }

  return (
    <div className="app">
      <div className="chat-container">
   
        <MessageList messages={messages} />

        <ChatInput
          input={input}
          setInput={setInput}
          handleSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
}

export default App;