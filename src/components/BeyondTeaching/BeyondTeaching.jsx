import React from "react";
import manOnPaper from "../../assets/manOnPaper.webp";
import bestBootcamp from "../../assets/bestBootcamps.gif";
import lightning from "../../assets/lightning.svg";
import "./BeyondTeaching.css";
import yahooFinance from "../../assets/yahooFinance.svg";
import forbes from "../../assets/forbesAdvisor.svg";
import fortuneEducation from "../../assets/fortuneEducation.svg";

const BeyondTeaching = () => {
  return (
    <div className="beyond-teaching">
      <div className="beyond-teaching__main">
        <div className="beyond-teaching__content">
          <h2 className="beyond-teaching__title">
            We go beyond{" "}
            <img
              src={lightning}
              alt="lightning icon"
              className="beyond-teaching__icon"
            />{" "}
            teaching tech skills—we get our students over the finish line and
            into{" "}
            <span className="beyond-teaching__highlight">their new jobs.</span>
          </h2>

          <div className="beyond-teaching__illustration">
            <img
              src={manOnPaper}
              alt="Student crossing finish line illustration"
              className="beyond-teaching__image"
            />
          </div>
        </div>
      </div>

      <div className="beyond-teaching__stats">
        <div className="beyond-teaching__stats-content">
          <h3 className="beyond-teaching__stats-title">
            We are an international company operating in the US, Latin America,
            and Israel
          </h3>

          <p className="beyond-teaching__stats-date">
            As of March 2025, we have:
          </p>

          <div className="beyond-teaching__stats-container">
            <div className="beyond-teaching__stat">
              <div className="beyond-teaching__stat-number">1,100+</div>
              <div className="beyond-teaching__stat-label">Alumni</div>
            </div>

            <div className="beyond-teaching__stat">
              <div className="beyond-teaching__stat-number">82%</div>
              <div className="beyond-teaching__stat-label">
                6-month relevant employment rate
              </div>
            </div>

            <div className="beyond-teaching__awards">
              <img
                src={bestBootcamp}
                alt="TripleTen awards and recognitions"
                className="beyond-teaching__awards-image"
              />
              <img
                src={bestBootcamp}
                alt="TripleTen awards and recognitions"
                className="beyond-teaching__awards-image"
              />
              <img
                src={bestBootcamp}
                alt="TripleTen awards and recognitions"
                className="beyond-teaching__awards-image"
              />
              <img
                src={bestBootcamp}
                alt="TripleTen awards and recognitions"
                className="beyond-teaching__awards-image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="beyond-teaching__recognition-wrapper">
        <div className="beyond-teaching__recognition">
          <figure className="beyond-teaching__recognition-figure">
            <img src={forbes} alt="beyond-teaching__recognition-image" />
          </figure>
          <p className="beyond-teaching__recognition-text">
            FES is included by Forbes in "5 Coding Bootcamps to Consider"
          </p>
        </div>
        <div className="beyond-teaching__recognition">
          <figure className="">
            <img src={yahooFinance} alt="" />
          </figure>
          <p className="beyond-teaching__recognition-text">
            FES's New Data Report Reveals Hiring Trends for Career Pivoters
            Eyeing Tech
          </p>
        </div>
        <div className="beyond-teaching__recognition">
          <figure className="">
            <img src={fortuneEducation} alt="" />
          </figure>
          <p className="beyond-teaching__recognition-text">
            FES is the overall best Software Engineer bootcamp for 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default BeyondTeaching;
