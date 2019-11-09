import React, { useState } from "react";
import Container from "./Container";
import heroKitchen from "./hero-kitchen.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
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
          <div
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <a
              rel="noopener"
              className="HeroSection-Link"
              href="https://www.facebook.com/LastStopRealty/"
              title="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              rel="noopener"
              className="HeroSection-Link"
              href="https://www.instagram.com/westongibsonrealestate/"
              title="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              rel="noopener"
              className="HeroSection-Link"
              href="https://www.linkedin.com/in/weston-gibson-27316592/"
              title="Linkedin"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeroSection;
