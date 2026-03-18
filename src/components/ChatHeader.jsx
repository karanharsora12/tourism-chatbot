import { Home, Settings, Copy, Share2, Clock, Maximize, Trash2 } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100 w-full shrink-0">
      <div className="flex items-center gap-4">
        <button className="p-2 text-gray-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors" aria-label="Home">
          <Home size={18} />
        </button>
        <div className="flex flex-col">
          <h1 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            Gujarat Tourism <span className="text-[10px] px-1.5 py-0.5 bg-emerald-100 text-emerald-700 rounded font-bold uppercase tracking-wider">AI</span>
          </h1>
          <div className="text-xs text-emerald-600 font-medium flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Online • Travel Assistant
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <button className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors">
          <Settings size={14} /> Prefs
          <span className="text-gray-300 mx-1">|</span>
          <span className="text-gray-500 text-xs">2 pax • mid-range</span>
        </button>
        <div className="hidden lg:block text-xs font-mono text-gray-400 bg-gray-50 px-2 py-1 rounded border border-gray-100">Ref #GT2026-894729</div>
        <div className="flex items-center gap-1">
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors" aria-label="Copy">
            <Copy size={18} />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors" aria-label="Share">
            <Share2 size={18} />
          </button>
          <button className="hidden sm:block p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors" aria-label="History">
            <Clock size={18} />
          </button>
          <button className="hidden sm:block p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors" aria-label="Fullscreen">
            <Maximize size={18} />
          </button>
          <button className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" aria-label="Delete Trip">
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}

