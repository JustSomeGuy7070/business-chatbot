import express from "express";
import cors from "cors";
import businessConfig from "./data/businessConfig.js";
import fs from "fs/promises";
import path from "path";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const historyPath = path.join(
  process.cwd(),
  "data",
  "chatHistory.json"
);

async function readHistory() {
  try {
    const data = await fs.readFile(historyPath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function writeHistory(history) {
  await fs.writeFile(
    historyPath,
    JSON.stringify(history, null, 2),
    "utf8"
  );
}

app.get("/api/history", async (req, res) => {
  const history = await readHistory();
  res.json(history);
});

app.get("/", (req, res) => {
  res.send("Chatbot backend is running");
});

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  const lowerMessage = message.toLowerCase();

  const matchingFaq = businessConfig.faqs.find((faq) =>
    faq.keywords.some((keyword) =>
      lowerMessage.includes(keyword.toLowerCase())
    )
  );

  if (matchingFaq) {
    return res.json({
      reply: matchingFaq.answer,
    });
  }

  let botReply = `Thanks for your message. ${businessConfig.businessName} can help with tax, bookkeeping, company registration, payroll, and SARS compliance.`;

  if (lowerMessage.includes("service")) {
    botReply = `${businessConfig.businessName} offers: ${businessConfig.services.join(", ")}.`;
  }

  if (
    lowerMessage.includes("contact") ||
    lowerMessage.includes("phone") ||
    lowerMessage.includes("email")
  ) {
    botReply = `You can contact ${businessConfig.businessName} on ${businessConfig.contact.phone} or email ${businessConfig.contact.email}.`;
  }

  if (lowerMessage.includes("hour") || lowerMessage.includes("open")) {
    botReply = `${businessConfig.businessName} is open ${businessConfig.contact.hours}.`;
  }

  if (lowerMessage.includes("tax")) {
    botReply =
      "For tax returns, you usually need your IRP5, medical aid tax certificate, retirement annuity certificate, proof of expenses, and income-related documents.";
  }

  if (lowerMessage.includes("company registration")) {
    botReply =
      "Yes, we assist with company registration and can guide you through the required documents and next steps.";
  }

  const history = await readHistory();

  history.push(
    {
      role: "user",
      content: message,
    },
    {
      role: "assistant",
      content: botReply,
    }
  );

    await writeHistory(history);

  res.json({
    reply: botReply,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
