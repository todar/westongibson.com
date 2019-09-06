import React from "react";
import Section from "./Section";
import openHouse from "./open-house.png";

function SellSection() {
  return (
    <Section
      title="Get The Right Price For Your Home"
      content="Selling your home can be stressful, but it doesn't have to be.
      Weston's years of sales experience and his aggressive marketing strategy will ensure that you get your home sold fast and for top dollar."
      src={openHouse}
      alt="Open House"
    />
  );
}

export default SellSection;
