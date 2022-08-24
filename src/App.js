import React from "react";

import Navbar from "./components/navbar";
import About from "./components/about";
import Orbital from "./components/orbital";
import GiveMoney from "./components/givemoney";
import Home from "./components/home";
import NotFound from "./components/404";

import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <div className="content">
        <Routes>
          <Route path="about" element={<About />} />
          <Route path="orbital" element={<Orbital />} />
          <Route path="givemoney" element={<GiveMoney />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/" exact element={<Home />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </div>
      {/* test firebase getDatabase */}
    </>
  );
}

export default App;
