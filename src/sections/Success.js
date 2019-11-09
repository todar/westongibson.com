import React from "react";
import "./Success.css";
import ImageLoader from "../components/ImageLoader";
import diamondClub from "../assets/diamond club member.png";
import Container from "../components/Container";

function Success() {
  return (
    <section className="Success">
      <Container className="Success-container">
        <div className="Success-video">
          <iframe
            title="In The News"
            width="550"
            height="320"
            src="https://www.youtube.com/embed/iwtb6-wG2uw"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="Success-content">
          <h2 className="Success-title">Weston In The News</h2>
          <p>
            Weston Gibson is recognized as one of the top real estate agents in
            the valley. He was featured on Sonoran Living and was awarded as a
            Diamond Club Member in 2018 for being a top 5% HomeSmart agent.
          </p>
        </div>

        <ImageLoader
          className="Success-image"
          src={diamondClub}
          alt="Diamond Club Member"
        />
      </Container>
    </section>
  );
}

export default Success;
