import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-container">
        <div className="Footer-section">
          <h3 className="Footer-header">Contact</h3>
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
          <h3 className="Footer-header">Connect</h3>
          <div>
            <a rel="noopener" className="Footer-link" href="#!">
              Facebook
            </a>
            <a rel="noopener" className="Footer-link" href="#!">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
