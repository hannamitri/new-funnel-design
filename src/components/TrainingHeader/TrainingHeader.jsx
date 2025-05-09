import React from "react";
import "./TrainingHeader.css"; // Assuming you have a CSS file for styles
import cursor from "../../assets/cursor.svg"; // Assuming you have a cursor image

const TrainingHeader = () => {
  return (
    <div className="training-header">
      <div className="training-header__content">
        <h1 className="training-header__title">
          Online <span className="training-header__cursor">↗</span> training
          <br />
          and support designed
          <br />
          for your <span className="training-header__highlight">real life</span>
        </h1>

        <div className="training-header__features">
          <div className="training-header__feature training-header__feature--left">
            <div className="training-header__check">✓</div>
            <p className="training-header__text">
              No IT or STEM background
              <br />
              needed. Our program
              <br />
              is beginner-friendly!
            </p>
          </div>

          <div className="training-header__feature training-header__feature--center">
            <div className="training-header__check">✓</div>
            <p className="training-header__text">
              No entrance exams
              <br />
              or pre-requisites.
            </p>
          </div>

          <div className="training-header__feature training-header__feature--right">
            <div className="training-header__check">✓</div>
            <p className="training-header__text">
              Flexible program with
              <br />
              regular project deadlines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingHeader;
