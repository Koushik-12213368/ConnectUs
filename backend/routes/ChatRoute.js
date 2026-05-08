const express = require("express");
const OpenAI = require("openai");
const router = express.Router();

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

const SYSTEM_PROMPT =
  "You are ConnectUs AI, a supportive mental-wellness assistant for students. Be empathetic, concise, and practical. Do not provide medical diagnosis. If user hints self-harm or immediate danger, encourage contacting local emergency services and a trusted person immediately.";

function getFallbackReply(message) {
  const lower = message.toLowerCase();

  if (
    lower.includes("suicide") ||
    lower.includes("kill myself") ||
    lower.includes("self harm")
  ) {
    return "I'm really glad you reached out. If you might harm yourself or feel in immediate danger, please contact emergency services right now and reach out to a trusted person near you. You deserve immediate support.";
  }

  if (lower.includes("stress") || lower.includes("stressed")) {
    return "Feeling stressed is common during student life. Try a 2-minute breathing break, write your top 3 tasks, and start with the easiest one first. If it keeps building, talk to a mentor or counselor.";
  }

  if (lower.includes("anxiety") || lower.includes("anxious")) {
    return "Anxiety can be intense, but you are not alone. Try grounding: name 5 things you can see, 4 you can feel, 3 you can hear. If anxiety is affecting daily life, consider professional support.";
  }

  if (lower.includes("exam") || lower.includes("test")) {
    return "For exam pressure, use short focus blocks (25-30 min), then 5-min breaks. Make a realistic plan, revise active recall, and sleep properly. One exam does not define your worth.";
  }

  return "I'm here for you. Tell me what feels hardest right now, and we can break it into small, manageable steps together.";
}

router.post("/", async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required" });
    }

    if (openai) {
      const normalizedHistory = Array.isArray(history)
        ? history
            .filter(
              (item) =>
                item &&
                (item.role === "user" || item.role === "assistant") &&
                typeof item.content === "string"
            )
            .slice(-8)
        : [];

      const completion = await openai.chat.completions.create({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...normalizedHistory,
          { role: "user", content: message },
        ],
        temperature: 0.7,
        max_tokens: 220,
      });

      const reply = completion.choices?.[0]?.message?.content?.trim();
      if (reply) {
        return res.json({ reply, source: "openai" });
      }
    }

    const fallbackReply = getFallbackReply(message);
    return res.json({ reply: fallbackReply, source: "fallback" });
  } catch (err) {
    console.error("Chatbot error:", err);
    const fallbackReply = getFallbackReply(req.body?.message || "");
    return res.status(200).json({ reply: fallbackReply, source: "fallback" });
  }
});

module.exports = router;

