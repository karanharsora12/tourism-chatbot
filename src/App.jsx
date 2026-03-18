import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ChatBot from "./pages/ChatBot";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatBot />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
