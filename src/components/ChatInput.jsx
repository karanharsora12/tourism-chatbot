import { Mic, Send } from "lucide-react";
import { useState } from "react";

export default function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="bg-white border-t border-gray-100 p-4 shrink-0 w-full z-10">
      <form
        className="max-w-4xl mx-auto relative flex items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message Gujarat AI..."
          className="w-full border border-gray-200 text-gray-800 text-sm md:text-base rounded-full pl-6 pr-14 py-3.5 md:py-4 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500 focus:bg-white transition-all shadow-inner"
        />
        <button
          type={message.trim() ? "submit" : "button"}
          className={`absolute right-2 p-2.5 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm
            ${
              message.trim()
                ? "bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-emerald-600/30"
                : "bg-white text-gray-400 hover:text-emerald-600 hover:bg-gray-100"
            }`}
          aria-label={message.trim() ? "Send Message" : "Use Microphone"}
        >
          <Send size={20} />
        </button>
      </form>
      <div className="text-center mt-3 text-[10px] sm:text-xs text-gray-400 font-medium">
        Gujarat Tourism AI can make mistakes. Consider verifying important
        information.
      </div>
    </div>
  );
}
