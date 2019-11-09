import React, { useState } from "react";
import Container from "./Container";
import LazyLoad from "react-lazy-load";
import "./Section.css";

function Section({ title, content, src, alt, backgroundColor = "#ffffff" }) {
  const [loaded, setLoaded] = useState(false);

  const imageLoaded = () => {
    setLoaded(true);
  };

  return (
    <section className="Section" style={{ backgroundColor: backgroundColor }}>
      <Container className="Section-container">
        <div className="Section-content">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>

        <LazyLoad maxWidth={500} offsetVertical={500} debounce={false}>
          <img
            onLoad={imageLoaded}
            src={src}
            alt={alt}
            className={`Section-img ${loaded ? "fade-in" : ""}`}
          />
        </LazyLoad>
      </Container>
    </section>
  );
}

export default Section;
