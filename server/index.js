import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Chatbot backend is running");
});

app.post("/api/chat", (req, res) => {
  const { message } = req.body;

  const botReply = `Backend received your message: "${message}"`;

  res.json({
    reply: botReply,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});