import React, { useState } from "react";
import axios from "axios";
import "./Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi, I'm ConnectUs AI. Tell me how you're feeling today, and I will help with practical next steps.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e, overrideText) => {
    if (e) e.preventDefault();
    const text = (overrideText ?? input).trim();
    if (!text) return;

    const newMessages = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:8080/chat", {
        message: text,
        history: newMessages,
      });
      const reply = res.data?.reply || "Sorry, I could not respond right now.";
      setMessages([...newMessages, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error(err);
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            "Sorry, something went wrong while trying to respond. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button className="chatbot-fab" onClick={() => setIsOpen(true)}>
        AI
      </button>
    );
  }

  return (
    <div className="chatbot-shell">
      <div className="chatbot-header">
        <div>
          <h6>ConnectUs AI Assistant</h6>
          <div className="chatbot-subtitle">Not a substitute for professional help</div>
        </div>
        <button className="chatbot-close" onClick={() => setIsOpen(false)}>
          ×
        </button>
      </div>

      <div className="chatbot-messages">
        {messages.map((m, idx) => (
          <div key={idx} className={`chatbot-row ${m.role}`}>
            <div className="chatbot-bubble">{m.content}</div>
          </div>
        ))}
        {loading && <div className="chatbot-row assistant"><div className="chatbot-bubble">AI is typing...</div></div>}
      </div>

      <div className="chatbot-quick-actions">
        <button className="chatbot-chip" onClick={(e) => sendMessage(e, "I feel stressed about exams")} disabled={loading}>Exam stress</button>
        <button className="chatbot-chip" onClick={(e) => sendMessage(e, "I am feeling anxious and distracted")} disabled={loading}>Anxiety support</button>
        <button className="chatbot-chip" onClick={(e) => sendMessage(e, "Give me a 5-minute calm plan")} disabled={loading}>5-min calm plan</button>
      </div>

      <form onSubmit={sendMessage} className="chatbot-form">
        <input
          className="chatbot-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit" disabled={loading} className="chatbot-send">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;

