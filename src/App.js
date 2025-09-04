// src/App.js
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/home";
import Dostavka from "./components/dostavka";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/dostavka" element={<Dostavka />} />
      </Routes>
    </Router>
  );
}

export default App;