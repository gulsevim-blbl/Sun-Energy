import React, { useState } from "react";
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
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home setCurrentPage={setCurrentPage} />
                <Services />
                <Partners />
                <Innovation />
                <Support />
                <ContactUs />
                <Footer />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <Services />
              </>
            }
          />
          <Route
            path="/partners"
            element={
              <>
                <Partners />
              </>
            }
          />
          <Route
            path="/innovation"
            element={
              <>
                <Innovation />
              </>
            }
          />
          <Route
            path="/support"
            element={
              <>
                <Support />
              </>
            }
          />
          <Route
            path="/contact-us"
            element={
              <>
                <ContactUs />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
