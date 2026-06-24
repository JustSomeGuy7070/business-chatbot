import { useState, useEffect } from "react";
import "./App.css";
import { sendMessage } from "./services/chatService";
import MessageList from "./components/MessageList";
import ChatInput from "./components/ChatInput";

function App() {
  const [messages, setMessages] = useState([]);

  const [input, setInput] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/history");
        const history = await response.json();

        if (history.length === 0) {
          setMessages([
            {
              role: "assistant",
              content: "Hello! Welcome to ABC Accounting. How can I help you today?",
            },
          ]);
        } else {
          setMessages(history);
        }
      } catch (error) {
        console.error("Failed to load chat history:", error);
      }
    };

    loadHistory();
  }, []);

  async function handleSendMessage() {
    if (input.trim() === "") return;

    const userMessage = {
      role: "user",
      content: input,
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");
    setIsBotTyping(true);

    try {
      const data = await sendMessage(input);

      const botMessage = {
        role: "assistant",
        content: data.reply,
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch {
      const errorMessage = {
        role: "assistant",
        content: "Sorry, something went wrong. Please try again.",
      };

      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsBotTyping(false);
    }
  }

  async function handleClearChat() {
    try {
      await fetch("http://localhost:5000/api/history", {
        method: "DELETE",
      });

      setMessages([
        {
          role: "assistant",
          content:
            "Hello! Welcome to ABC Accounting. How can I help you today?",
        },
      ]);
    } catch (error) {
      console.error("Failed to clear chat:", error);
    }
  }

  return (
    <div className="app">
      <div className="chat-container">
         <button 
         className="clear-chat-btn"
         onClick={handleClearChat}>
            Clear Chat
          </button>

        <MessageList messages={messages} isBotTyping={isBotTyping} />

        <ChatInput
          input={input}
          setInput={setInput}
          onSend={handleSendMessage}
        />
      </div>
    </div>
  );
}

export default App;