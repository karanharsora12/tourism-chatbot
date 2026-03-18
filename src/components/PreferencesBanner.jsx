import { ChevronRight } from "lucide-react";

export default function PreferencesBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-emerald-100 flex items-center justify-center p-2.5 text-sm text-emerald-800 shrink-0 shadow-[inset_0_-1px_2px_rgba(0,0,0,0.02)] relative z-10 transition-colors">
      <div className="w-full max-w-4xl px-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5 font-medium cursor-pointer group">
          <span className="group-hover:text-emerald-700 transition-colors tracking-wide">
            Set your travel preferences
          </span>
          <ChevronRight
            size={16}
            className="text-emerald-500 group-hover:translate-x-1.5 transition-transform"
          />
        </div>
        <button className="text-xs font-bold uppercase tracking-wider bg-white/60 text-emerald-700 hover:bg-emerald-600 hover:text-white px-4 py-1.5 rounded-full transition-all duration-300 active:scale-95 shadow-sm border border-emerald-200/60 hover:shadow-emerald-500/20">
          Quick Setup
        </button>
      </div>
    </div>
  );
}
