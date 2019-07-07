import React from "react";
import logo from "./logo-300x64.png";
import "./NavbarSection.css";

function NavbarSection() {
  return (
    <header className="NavbarSection">
      <div className="NavarSection-logo">
        <img src={logo} alt="Weston Gibson Logo" />
      </div>
      {/* <p className="btn">
        <a
          className="NavbarSection-cell"
          href="tel:1-602-399-4200"
          alt="Westons cell"
        >
          602-399-4200
        </a>
      </p> */}
    </header>
  );
}

export default NavbarSection;
