import { useEffect, useState } from "react";

function TypingIndicator() {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev === "...") return ".";
        return prev + ".";
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="message assistant typing">
      Assistant is typing{dots}
    </div>
  );
}

export default TypingIndicator;