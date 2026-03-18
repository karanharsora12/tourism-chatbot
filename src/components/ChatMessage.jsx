import React from 'react';
import { User } from 'lucide-react';

export default function ChatMessage({ message }) {
  const isUser = message.sender === 'user';
  
  if (isUser) {
    return (
      <div className="flex justify-end w-full mb-6">
        <div className="bg-emerald-600 text-white rounded-2xl rounded-tr-sm px-5 py-3.5 max-w-[85%] md:max-w-[75%] shadow-md text-[15px] leading-relaxed">
          {message.text}
        </div>
      </div>
    );
  }

  // AI Message Rendering
  return (
    <div className="flex flex-col w-full mb-8 max-w-[95%] md:max-w-[85%]">
      <div className="flex items-center gap-3 mb-2.5">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 shrink-0 border border-emerald-200 shadow-sm">
          <span className="w-3.5 h-3.5 rounded-full bg-emerald-600"></span>
        </div>
        <div className="flex flex-col">
          <h4 className="text-sm font-bold text-gray-800">{message.title || 'Gujarat Tourism Assistant'}</h4>
          <span className="text-[11px] font-medium text-gray-400 tracking-wide uppercase">{message.time || '12:22'}</span>
        </div>
      </div>
      
      <div className="ml-11 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl rounded-tl-sm p-6 text-gray-700">
        {/* Render simple text, but in a real app this would parse Markdown */}
        {message.headline && typeof message.headline === 'string' && (
          <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3 font-serif tracking-tight">{message.headline}</h3>
        )}
        
        {message.intro && typeof message.intro === 'string' && (
          <p className="text-gray-600 text-[15px] leading-relaxed mb-5">{message.intro}</p>
        )}

        {message.days && message.days.map && message.days.map((day, idx) => (
          <div key={idx} className="mb-5 last:mb-0 relative pl-5 py-1">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-200 rounded-full" />
            <h5 className="font-bold text-emerald-800 mb-2.5 text-base">{day.title}</h5>
            <ul className="space-y-2.5">
              {day.activities && day.activities.map && day.activities.map((act, i) => (
                <li key={i} className="text-[14px] leading-relaxed">
                  <strong className="text-gray-800 font-semibold">{act.type}:</strong> <span className="text-gray-600">{act.description}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
