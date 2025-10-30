import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import FastagProvider from "./components/FastagProvider";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <FastagProvider />
    </div>
  );
}

export default App;
