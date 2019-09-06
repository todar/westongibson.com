import React from "react";
import "./StyleImage.css";

function StyledImage({ src, alt, className = "" }) {
  return (
    <div className="StyledImage-container">
      <img src={src} alt={alt} className={`StyledImage ${className}`} />
    </div>
  );
}

export default StyledImage;
