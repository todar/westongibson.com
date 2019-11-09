import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Container from "../components/Container";
import heroKitchen from "../assets/hero-kitchen.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }

`;

const StyledHeroSection = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 64px;
  min-height: 75vh;
  background-color: #20232a;
  color: rgb(255, 255, 255);
  position: relative;
  background-color: #1d1c1c;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${heroKitchen});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  animation: ${FadeIn} 2s;
`;

const SocialLink = styled.a`
  color: ${props => props.color || `#fff`};
  padding: 1.4rem;
  font-size: 1.6rem;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const Button = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: none;
  outline: 0;
  background: ${props => props.theme.primary};
  color: #fff;
  line-height: 1.25;

  padding: 0.75rem 1.5rem;
  min-width: 180px;
  text-align: center;
  /* text-transform: uppercase; */
  cursor: pointer;
  user-select: none;
  font-size: 1.3rem;
  letter-spacing: 0.65px;
  border-radius: 0.25rem;
  outline: 0;
  transition: 0.1s;

  box-sizing: border-box;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  vertical-align: middle;
  -webkit-tap-highlight-color: transparent;
  margin-top: 10px;

  :hover {
    filter: brightness(90%);
  }

  :active {
    filter: brightness(80%);
  }
`;

function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const onLoad = () => {
    setIsLoaded(true);
  };
  return (
    <StyledHeroSection
      onLoad={onLoad}
      className={isLoaded ? "ImageLoader-fade-in" : ""}
    >
      <Container>
        <div style={{ lineHeight: `45px` }}>
          <h1>Converting Transactions into Relationships.</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <SocialLink
              rel="noopener"
              href="https://www.facebook.com/LastStopRealty/"
              title="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </SocialLink>
            <SocialLink
              rel="noopener"
              href="https://www.instagram.com/westongibsonrealestate/"
              title="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </SocialLink>
            <SocialLink
              rel="noopener"
              href="https://www.linkedin.com/in/weston-gibson-27316592/"
              title="Linkedin"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </SocialLink>
          </div>
          <Button href="#contact">Schedule a meeting</Button>
        </div>
      </Container>
    </StyledHeroSection>
  );
}

export default HeroSection;
