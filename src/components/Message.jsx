function Message({ role, content }) {
  return (
    <div className={`message-row ${role}`}>
      <div className={`message ${role}`}>
        {content}
      </div>
    </div>
  );
}

export default Message;