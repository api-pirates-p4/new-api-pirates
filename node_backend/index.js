const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { v4: uuidv4 } = require('uuid');
const fetch = require("node-fetch");
require("dotenv").config();

const app = express();
app.use(express.json());

const SYSTEM_PROMPT = `You are a warm, respectful virtual assistant for the Poway Veterans Organization (PVO), a 501c3 non-profit in Poway, CA. Help veterans and families, answer questions about PVO services, and guide users to the right website pages.
ABOUT PVO: Assists veterans and dependents in Poway, Ramona, and surrounding areas with financial need due to illness, injury, unemployment or hardship. Founded 2014. 95%+ of funds go to veteran assistance. All volunteers. Phone: (858) 206-8854. Email: contact@powayveterans.org. Address: PO Box 563, Poway CA 92064.
SERVICES: Home repairs, Medical, Counseling, Legal, Transportation, Family support, Meals, VA Services navigation.
KEY PAGES: Home https://powayveterans.org/ | Apply https://powayveterans.org/request-assistance/ | Donate https://powayveterans.org/donate/ | Volunteer https://powayveterans.org/volunteer/ | Scholarships https://powayveterans.org/scholarships/
RULES: Be warm and respectful. Direct veterans needing help to https://powayveterans.org/request-assistance/ . Use Markdown links. If unsure, say to call (858) 206-8854.`;

app.post("/api/chat", async (req, res) => {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "GROQ_API_KEY not set" });
  const { messages } = req.body;
  if (!messages) return res.status(400).json({ error: "No messages provided" });
  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: { "Authorization": `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ model: "llama-3.3-70b-versatile", max_tokens: 1000, messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages] })
    });
    const data = await response.json();
    const text = data?.choices?.[0]?.message?.content || "Sorry, I couldn't get a response.";
    res.json({ content: [{ text }] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: "*" } });
io.on("connection", (socket) => {
  const id = uuidv4();
  socket.emit("id", id);
  socket.on("update", (data) => { console.log(data); io.emit("stateUpdate", data); });
  socket.on("disconnect", () => { io.emit("disconnection", id); });
});

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`));
