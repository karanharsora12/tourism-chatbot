import React, { useState, useRef, useEffect } from "react";
import ChatHeader from "../components/ChatHeader";
import PreferencesBanner from "../components/PreferencesBanner";
import ChatInput from "../components/ChatInput";
import ChatMessage from "../components/ChatMessage";
import { generateTourismResponse } from "../lib/gemini";

// Mock Data
const INITIAL_MOCK_STATE = [
  {
    id: 1,
    sender: "bot",
    title: "Welcome to Gujarat",
    time: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    headline: "Kem Cho! Welcome to Gujarat Tourism",
    intro:
      "I am your personal AI travel assistant. From the majestic Rann of Kutch and the divine Somnath Temple to the thrilling Gir National Park—I'm here to help you plan the perfect trip. Where would you like to explore today?",
    days: [],
  },
];

function ChatBot() {
  const [messages, setMessages] = useState(INITIAL_MOCK_STATE);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (text) => {
    // Add user message
    const newUserMsg = { id: Date.now(), sender: "user", text };
    setMessages((prev) => [...prev, newUserMsg]);

    // Add loading message
    const loadingId = Date.now() + 1;
    setMessages((prev) => [
      ...prev,
      {
        id: loadingId,
        sender: "bot",
        title: "Typing...",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        headline: "",
        intro: "Gujarat Tourism Assistant is generating a response...",
        days: [],
      },
    ]);

    try {
      const response = await generateTourismResponse(text, messages);

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === loadingId
            ? {
                id: loadingId,
                sender: "bot",
                title: response.title || "Gujarat Tourism Assistant",
                time: new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                }),
                headline: response.headline,
                intro: response.intro,
                days: response.days || [],
              }
            : msg,
        ),
      );
    } catch (error) {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === loadingId
            ? {
                id: loadingId,
                sender: "bot",
                title: "Error",
                time: new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                }),
                headline: "Missing API Key or Connection Error",
                intro:
                  "Please ensure you have configured your VITE_GEMINI_API_KEY inside the .env.local file in the project root. " +
                  error.message,
                days: [],
              }
            : msg,
        ),
      );
    }
  };

  return (
    <div className="flex flex-col flex-1 h-full w-full overflow-hidden bg-white">
      <ChatHeader />
      <PreferencesBanner />

      <main
        className="flex-1 overflow-y-auto bg-gray-50 p-4 custom-scrollbar"
        ref={scrollRef}
      >
        <div className="max-w-4xl mx-auto space-y-4">
          {messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
        </div>
      </main>

      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}

export default ChatBot;
