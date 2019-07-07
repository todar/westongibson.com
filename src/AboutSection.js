import React from "react";
import "./AboutSection";
import family from "./family-400x401.25.jpg";

function AboutSection() {
  return (
    <section className="AboutSection section">
      <div className="AboutSection-content">
        <h2>Meet Weston</h2>
        <p>
          Weston is a Licensed Real Estate Agent in Arizona who specializes in
          listing and selling properties in Phoenix, North Phoenix, Scottsdale,
          Desert Ridge, Cave Creek, Biltmore, and the surrounding areas in
          Maricopa county.
        </p>
        <p>
          Weston lives in Scottsdale, Arizona with his wife Krista and their
          baby girl Emery.
        </p>
      </div>
      <img
        style={{
          maxWidth: "90%",
          height: "auto",
          marginBottom: "30px",
          boxShadow:
            "0 8px 17px 2px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12), 0 5px 5px -3px rgba(0,0,0,.2)"
        }}
        src={family}
        alt="profile"
      />
    </section>
  );
}

export default AboutSection;
