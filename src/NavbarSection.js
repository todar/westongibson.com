import React from "react";
import logo from "./logo.png";
import ImageLoader from "./ImageLoader";
import "./NavbarSection.css";

function NavbarSection() {
  return (
    <header className="NavbarSection">
      <div className="NavarSection-logo">
        <ImageLoader
          style={{
            height: 64 + "px"
          }}
          src={logo}
          alt="Weston Gibson Logo"
        />
      </div>
    </header>
  );
}

export default NavbarSection;
