import React from "react";
import "./PodcastBanner.css"; // Assuming you have a CSS file for styles
import techStart from "../../assets/techStart.png"; // Assuming you have a logo image

const PodcastBanner = () => {
  return (
    <div className="podcast-banner">
      <div className="podcast-banner__content">
        <h2 className="podcast-banner__title">Breaking into tech</h2>
        <p className="podcast-banner__description">
          Explore the realities of changing careers and getting into tech in our
          podcast TechStart
        </p>
        <a href="#" className="podcast-banner__button">
          Listen now
        </a>
      </div>

      <div className="podcast-banner__image-container">
        <img
          src={techStart}
          alt="TechStart Podcast Logo"
          className="podcast-banner__image"
        />
      </div>
    </div>
  );
};

export default PodcastBanner;
