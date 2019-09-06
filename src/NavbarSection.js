import React from "react";
import logo from "./logo-300x64.png";
import ImageLoader from "./ImageLoader";
import "./NavbarSection.css";

function NavbarSection() {
  return (
    <header className="NavbarSection">
      <div className="NavarSection-logo">
        <ImageLoader src={logo} alt="Weston Gibson Logo" />
      </div>
    </header>
  );
}

export default NavbarSection;
