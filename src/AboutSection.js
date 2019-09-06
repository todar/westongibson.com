import React from "react";
import Section from "./Section";
import family from "./family.jpg";

function AboutSection() {
  return (
    <Section
      title="Meet Weston"
      content="Weston lives in Scottsdale Arizona with his wife Krista and their
      baby girl Emery. He specializes in
    listing and selling properties in Phoenix,
    Scottsdale, Desert Ridge, Cave Creek, Biltmore, and the surrounding
    areas in Maricopa county."
      src={family}
      alt="family"
      backgroundColor="#eeeeee"
    />
  );
}

export default AboutSection;
