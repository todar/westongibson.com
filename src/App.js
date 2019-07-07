import React from "react";
import AboutSection from "./AboutSection";
import "./App.css";
import BuySection from "./BuySection";
import FixedActionButton from "./FixedActionButton";
import HeroSection from "./HeroSection";
import NavbarSection from "./NavbarSection";
import SellSection from "./SellSection";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <NavbarSection />
      <HeroSection />
      <SellSection />
      <BuySection />
      <AboutSection />
      <Footer />
      <FixedActionButton />
    </div>
  );
}

export default App;
