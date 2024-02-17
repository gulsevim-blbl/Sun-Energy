import "./App.css";
import Home from "./components/Home";
import Services from "./components/Services";
import Partners from "./components/Partners";
import Innovation from "./components/Innovation";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <Home />
      <Services />
      <Partners />
      <Innovation />
    </div>
  );
}

export default App;
