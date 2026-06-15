function ChatInput({ input, setInput, handleSendMessage }) {
  return (
    <div className="input-area">
      <input
        type="text"
        placeholder="Type your message..."
        value={input}
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSendMessage();
          }
        }}
      />

      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default ChatInput;
