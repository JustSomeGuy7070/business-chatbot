import { useState } from "react";
import "./App.css";
import { sendMessage } from "./services/chatService";
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
  const [isBotTyping, setIsBotTyping] = useState(false);

  async function handleSendMessage() {
    if (input.trim() === "") return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");
    setIsBotTyping(true);

    try {
      
      const data = await sendMessage(input);

      const botMessage = {
        sender: "bot",
        text: data.reply,
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch {
      const errorMessage = {
        sender: "bot",
        text: "Sorry, something went wrong. Please try again.",
      };

      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsBotTyping(false);
    }
  }

  return (
    <div className="app">
      <div className="chat-container">
        <MessageList messages={messages} isBotTyping={isBotTyping} />

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
