import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import ServiceCard from "./components/ServiceCard.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ScrollIndicator from "./components/ScrollIndicator.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";

import "./App.css";   

function App() {
  return (
    <>
      {/* Scroll progress bar top */}
      <ScrollIndicator />

      {/* Navbar */}
      <Navbar />

      {/* Theme toggle (floating button) */}
      <ThemeToggle />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <section id="services" className="services-section">
        <h2 className="section-title">SERVICES</h2>
        <div className="services-container">
          <ServiceCard />
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Scroll To Top Button */}
      <ScrollToTop />
    </>
  );
}

export default App;
