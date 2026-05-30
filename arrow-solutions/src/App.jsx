import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import logo from "./assets/logo.png";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Impact from "./pages/Impact";
import ProcessPage from "./pages/process";
import Partners from "./pages/partners";
import OurWork from "./pages/ourwork";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/about" element={<About />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/ourwork" element={<OurWork />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;