import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Compass, MessageSquare } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const isChat = location.pathname === "/chat";

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-[0_4px_20px_-15px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <Compass className="w-8 h-8 text-emerald-600 group-hover:rotate-45 transition-transform duration-500" />
            <span className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-emerald-700 transition-colors">
              GUJARAT{" "}
              <span className="text-emerald-600 font-light">TOURISM</span>
            </span>
          </Link>
          <div className="flex items-center gap-2 md:gap-6">
            <Link
              to="/"
              className={`hidden md:block text-sm font-medium transition-colors hover:text-emerald-600 ${!isChat ? "text-emerald-600" : "text-gray-600"}`}
            >
              Home
            </Link>
            <Link
              to="/chat"
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isChat ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20" : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:shadow-sm"}`}
            >
              <MessageSquare className="w-4 h-4" />
              Ask AI
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
