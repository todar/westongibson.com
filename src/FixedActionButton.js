import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentAlt,
  faPhone,
  faSms,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import "./FixedActionButton.css";

function FixedActionButton() {
  const [display, setDisplay] = useState(false);
  const [isDisplayed, setIsDisplayed] = useState(false);

  const toggleMenu = e => {
    e.stopPropagation();
    setDisplay(!display);
    setIsDisplayed(true);
  };

  return (
    <div onClick={toggleMenu} className="FixedActionButton pulse">
      <div className="FixedActionButton-icon">
        <FontAwesomeIcon icon={faCommentAlt} />
      </div>
      <div
        className={`FixedActionButton-floating-buttons ${
          display ? "scale-in-bottom" : ""
        } ${!display && isDisplayed ? "scale-out-bottom" : ""}
        `}
      >
        <a
          rel="noopener"
          href="mailto:weston.gibson03@gmail.com?subject=Real Estate"
          className="FixedActionButton-floating-btn"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          rel="noopener"
          href="sms:6023994200?body=Hello, Weston. I'd like to set up a meeting with you to talk about real estate."
          className="FixedActionButton-floating-btn"
        >
          <FontAwesomeIcon icon={faSms} />
        </a>
        <a
          rel="noopener"
          href="tel:+6023994200"
          className="FixedActionButton-floating-btn"
        >
          <FontAwesomeIcon icon={faPhone} />
        </a>
      </div>
    </div>
  );
}

export default FixedActionButton;
