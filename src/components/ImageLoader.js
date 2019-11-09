import React, { useState } from "react";
import "./ImageLoader.css";

function ImageLoader({ src, alt, className = "", ...rest }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const onLoad = () => {
    setIsLoaded(true);
  };
  return (
    <React.Fragment>
      <img
        className={`${className} ${isLoaded ? "ImageLoader-fade-in" : ""}`}
        onLoad={onLoad}
        src={src}
        alt={alt}
        {...rest}
      />
    </React.Fragment>
  );
}

export default ImageLoader;
