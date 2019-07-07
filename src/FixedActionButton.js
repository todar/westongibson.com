import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import "./FixedActionButton.css";

function FixedActionButton() {
  return (
    <div className="FixedActionButton pulse">
      <FontAwesomeIcon icon={faCommentAlt} />
    </div>
  );
}

export default FixedActionButton;
