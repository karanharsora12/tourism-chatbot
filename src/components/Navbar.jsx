import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Compass, MessageSquare, LogOut, User } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse user", e);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

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
          <div className="flex items-center gap-2 md:gap-4">
            <Link
              to="/"
              className={`hidden md:block text-sm font-medium transition-colors hover:text-emerald-600 ${!isChat && location.pathname !== "/login" && location.pathname !== "/signup" ? "text-emerald-600" : "text-gray-600"}`}
            >
              Home
            </Link>

            {user ? (
              <>
                <div className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-700 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                  <User className="w-4 h-4 text-emerald-600" />
                  <span className="truncate max-w-[100px]">{user.name.split(' ')[0]}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden md:block">Logout</span>
                </button>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="hidden md:block text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 rounded-full text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors shadow-sm"
                >
                  Sign up
                </Link>
              </div>
            )}

            <Link
              to="/chat"
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ml-2 ${isChat ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20" : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:shadow-sm"}`}
            >
              <MessageSquare className="w-4 h-4" />
              <span className="hidden sm:block">Ask AI</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
