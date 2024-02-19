import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Services from "./components/Services";
import Partners from "./components/Partners";
import Innovation from "./components/Innovation";
import Support from "./components/Support";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <Services />
      <Partners />
      <Innovation />
      <Support />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
