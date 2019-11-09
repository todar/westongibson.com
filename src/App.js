import React from "react";
import { ThemeProvider } from "styled-components";
import AboutSection from "./sections/AboutSection";
import Success from "./sections/Success";
import BuySection from "./sections/BuySection";
import FixedActionButton from "./components/FixedActionButton";
import HeroSection from "./sections/HeroSection";
import NavbarSection from "./sections/NavbarSection";
import SellSection from "./sections/SellSection";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const theme = {
  primary: "#4db6ac",
  navbar: {
    background: "#000",
    color: "#fff"
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavbarSection />
      <HeroSection />
      <SellSection />
      <BuySection />
      <AboutSection />
      <Success />
      <Contact />
      <Footer />
      <FixedActionButton />
    </ThemeProvider>
  );
}

export default App;
