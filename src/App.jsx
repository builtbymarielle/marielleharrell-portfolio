import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ShowMore from "./components/ShowMore";
import Footer from "./components/Footer";
import { useScrollAnimations } from "./hooks/useScrollAnimations";

function App() {
  // Initialize scroll animations
  useScrollAnimations();

  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ShowMore />
      <Footer />
    </div>
  );
}

export default App;
