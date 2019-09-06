import React from "react";
import Section from "./Section";
import underContract from "./under-contract.jpg";

function BuySection() {
  return (
    <Section
      title="Buy With Confidence"
      content="Weston will be your guide who will walk with you from start to
      finish through the entire home-buying process. He is a skilled
      negotiator who will help you find and purchase the perfect home
      without overpaying for it."
      backgroundColor="rgb(245,246,248)"
      src={underContract}
      alt="Under Contract"
    />
  );
}

export default BuySection;
