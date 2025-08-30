// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";

function App() {
  return (
    <Router basename="/my-site-onex">
      <Routes>
        {/* редирект с корня на Home */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;