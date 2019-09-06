import React from "react";
import "./App.css";
import AboutSection from "./AboutSection";
import Success from "./Success";
import BuySection from "./BuySection";
import FixedActionButton from "./FixedActionButton";
import HeroSection from "./HeroSection";
import NavbarSection from "./NavbarSection";
import SellSection from "./SellSection";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <NavbarSection />
      <HeroSection />
      <SellSection />
      <BuySection />
      <AboutSection />
      <Success />
      <Contact />
      <Footer />
      <FixedActionButton />
    </div>
  );
}

export default App;
