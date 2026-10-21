import { copy } from "../texts";
import { useEffect, useRef, useState } from "react";
import { Send, Shield } from "lucide-react";
import { PageTitle } from "../components/UI";
import { messages as seed, type Message } from "../data";
import { useApp } from "../state/AppContext";
export default function Chat() {
  const [input, setInput] = useState("");
  const end = useRef<HTMLDivElement>(null);
  const s = useApp();
  const messages = s.chatMessages;
  const setMessages = s.setChatMessages;
  useEffect(() => {
    end.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages]);
  return (
    <div className="chat-page">
      <PageTitle eyebrow={copy.t057} title={copy.t058} />
      <div className="chat-notice">{copy.t059}</div>
      <div className="messages">
        {messages.map((m) => (
          <div className="chat-message" key={m.id}>
            <span className="chat-time">
              {copy.t060}
              {String(20 + (m.id % 30)).padStart(2, "0")}
            </span>
            <span className="chat-name" style={{ color: m.color }}>
              <Shield size={11} />
              {m.name}
            </span>
            <span>{m.text}</span>
          </div>
        ))}
        <div ref={end} />
      </div>
      <form
        className="chat-input"
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.trim()) return;
          setMessages([
            ...messages,
            {
              id: Date.now(),
              name: s.user.name,
              text: input.trim(),
              color: s.user.color,
            },
          ]);
          setInput("");
        }}
      >
        <input
          aria-label={copy.t061}
          placeholder={copy.t062}
          maxLength={500}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="icon-button gold" aria-label={copy.t063}>
          <Send size={20} />
        </button>
      </form>
    </div>
  );
}
