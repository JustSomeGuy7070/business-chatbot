import Message from "./Message";

function MessageList({ messages }) {
  return (
    <div className="messages">
      {messages.map((message, index) => (
        <Message
          key={index}
          sender={message.sender}
          text={message.text}
        />
      ))}
    </div>
  );
}

export default MessageList;