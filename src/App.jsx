import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import FastagProvider from "./components/FastagProvider";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <FastagProvider />
      <AboutSection />
    </div>
  );
}

export default App;
