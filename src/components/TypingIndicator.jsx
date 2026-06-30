import { useEffect, useState } from "react";

function TypingIndicator() {
  return (
    <div className="message-row assistant">
      <div className="message assistant typing">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default TypingIndicator;