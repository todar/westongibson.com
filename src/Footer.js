import React from "react";
import realtor from "./realtor.png";
import Container from "./Container";
import equalHousing from "./equal-housing.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <Container className="Footer-container">
        <div className="Footer-section">
          <h3 className="Footer-header">Contact Weston</h3>
          <div>
            <a rel="noopener" className="Footer-link" href="tel:+6023994200">
              (602) 399-4200
            </a>
            <a
              rel="noopener"
              className="Footer-link"
              href="mailto:weston.gibson03@gmail.com"
            >
              weston@westongibson.com
            </a>
          </div>
        </div>
        <div className="Footer-section">
          <h3 className="Footer-header">Follow Weston</h3>
          <div>
            <a
              rel="noopener"
              className="Footer-link"
              target="blank"
              href="https://www.facebook.com/LastStopRealty/"
            >
              Facebook
            </a>
            <a
              rel="noopener"
              className="Footer-link"
              target="blank"
              href="https://www.instagram.com/westongibsonrealestate/"
            >
              Instagram
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
