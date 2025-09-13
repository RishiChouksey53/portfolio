import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import React from "react";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
};

export default App;
