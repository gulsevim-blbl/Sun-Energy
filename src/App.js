import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Partners from "./pages/Partners";
import Innovation from "./pages/Innovation";
import Support from "./pages/Support";
import ContactUs from "./pages/ContactUs";
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
