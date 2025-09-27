import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProjectArchives from "./components/ProjectArchives";
import Navigation from "./components/Navigation";
import { useHashScroll } from "./hooks/useHashScroll";

function App() {
  useHashScroll();

  return (
    <div className="App">
      <BrowserRouter basename="/marielleharrell-portfolio/">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectArchives />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
