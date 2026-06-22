function ChatInput({ input, setInput, onSend }) {
  return (
    <div className="input-area">
      <input
        type="text"
        placeholder="Type your message..."
        value={input}
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onSend();
          }
        }}
      />

      <button onClick={onSend}>Send</button>
    </div>
  );
}

export default ChatInput;