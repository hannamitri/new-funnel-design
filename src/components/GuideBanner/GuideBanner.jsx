import React from "react";
import pivotPrep from "../../assets/pivotPrep.jpg";
import "./GuideBanner.css";

const GuideBanner = () => {
  return (
    <div className="guide-banner">
      <div className="guide-banner__content">
        <div className="guide-banner__text">
          <h2 className="guide-banner__title">
            Get an actionable guide for breaking into tech
          </h2>
          <p className="guide-banner__subtitle">
            Cut through the noise and build a new professional identity!
          </p>

          <button className="guide-banner__button">
            Register for our webinar
          </button>
        </div>

        <div className="guide-banner__image">
          <img
            src={pivotPrep}
            alt="Get-Hired-in-Tech Checklist Preview"
            className="guide-banner__checklist"
          />
        </div>
      </div>
    </div>
  );
};

export default GuideBanner;
