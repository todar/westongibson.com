import React from "react";
import realtor from "./realtor.png";
import Container from "./Container";
import equalHousing from "./equal-housing.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <Container className="Footer-container">
        <div className="Footer-section">
          <h3 className="Footer-header">Contact Weston</h3>
          <div>
            <a rel="noopener" className="Footer-link" href="tel:+6023994200">
              <FontAwesomeIcon icon={faPhone} /> (602) 399-4200
            </a>
            <a
              rel="noopener"
              className="Footer-link"
              href="mailto:weston@westongibson.com"
            >
              <FontAwesomeIcon icon={faEnvelope} /> weston@westongibson.com
            </a>
          </div>
        </div>
        <div className="Footer-section">
          <h3 className="Footer-header">Follow Weston</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <a
              rel="noopener"
              className="Footer-link"
              target="blank"
              href="https://www.facebook.com/LastStopRealty/"
              title="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              rel="noopener"
              className="Footer-link"
              target="blank"
              href="https://www.instagram.com/westongibsonrealestate/"
              title="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              rel="noopener"
              className="Footer-link"
              target="blank"
              href="https://www.linkedin.com/in/weston-gibson-27316592/"
              title="Linkedin"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
        <div className="Footer-required">
          <img className="Footer-realtor" src={realtor} alt="Realtor Logo" />
          <img
            className="Footer-equal-housing"
            src={equalHousing}
            alt="Equal Housing Logo"
          />
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
