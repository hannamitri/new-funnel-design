import React from "react";
import womanLaptopCouch from "../../assets/womanLaptopCouch.jpg";
import "./CareerPath.css";

const CareerPath = () => {
  return (
    <div className="career-path">
      <div className="career-path__image-container">
        <img
          src={womanLaptopCouch}
          alt="Woman working on laptop on yellow couch"
          className="career-path__image"
        />
      </div>

      <h2 className="career-path__title">How you get a new career</h2>

      <div className="career-path__timeline-container">
        <div className="career-path__line" />

        <div className="career-path__steps">
          <div className="career-path__step">
            <div className="career-path__step-number">1</div>
            <h3 className="career-path__step-title">
              Training and support designed for real life
            </h3>
            <button className="career-path__button">
              Tell me more <span className="career-path__button-icon">↓</span>
            </button>
          </div>

          <div className="career-path__step">
            <div className="career-path__step-number">2</div>
            <h3 className="career-path__step-title">
              Real industry experience and the best portfolio for the job
            </h3>
            <button className="career-path__button">
              Take a closer look{" "}
              <span className="career-path__button-icon">↓</span>
            </button>
          </div>

          <div className="career-path__step">
            <div className="career-path__step-number">3</div>
            <h3 className="career-path__step-title">
              Job search prep, career coaching, and lifelong career support
            </h3>
            <button className="career-path__button">
              Wow! What's that?{" "}
              <span className="career-path__button-icon">↓</span>
            </button>
          </div>

          <div className="career-path__step career-path__step--final">
            <div className="career-path__final-label">New job</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPath;
