import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  const location = useLocation();
  const isChat = location.pathname === "/chat";

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 w-full">
      <Navbar />
      <main
        className={`flex-1 flex flex-col w-full relative ${isChat ? "h-[calc(100vh-64px)] overflow-hidden" : ""}`}
      >
        <Outlet />
      </main>
      {!isChat && <Footer />}
    </div>
  );
}
