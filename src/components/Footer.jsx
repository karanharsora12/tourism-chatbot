import React from 'react';
import { Compass } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 text-center mt-auto w-full">
      <div className="flex justify-center items-center gap-2 mb-6 text-2xl font-bold text-white tracking-wider">
        <Compass className="text-emerald-500" />
        GUJARAT<span className="text-emerald-500 font-light">TOURISM</span>
      </div>
      <p className="text-sm">© 2026 Gujarat Tourism Explorer. Built for discovery.</p>
    </footer>
  );
}
