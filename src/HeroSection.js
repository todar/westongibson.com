import React, { useState } from "react";
import Container from "./Container";
import heroKitchen from "./hero-kitchen.jpg";
import "./HeroSection.css";

function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const onLoad = () => {
    setIsLoaded(true);
  };
  return (
    <div
      style={{
        backgroundColor: "#1d1c1c",
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${heroKitchen})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
      onLoad={onLoad}
      className={`HeroSection ${isLoaded ? "ImageLoader-fade-in" : ""}`}
    >
      <Container>
        <div className="HeroSection-tagline">
          <h1>Converting Transactions into Relationships.</h1>
        </div>
      </Container>
    </div>
  );
}

export default HeroSection;
