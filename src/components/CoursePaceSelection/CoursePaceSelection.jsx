import React, { useState } from "react";
import "./CoursePaceSelection.css"; // Assuming you have a CSS file for styles

const CoursePaceSelection = () => {
  const [selectedOption, setSelectedOption] = useState("full-time");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="pace-selection">
      <h1 className="pace-selection__title">
        Select the pace that fits your life and goals
      </h1>

      <div className="pace-selection__options">
        <div
          className={`pace-selection__option ${
            selectedOption === "full-time"
              ? "pace-selection__option--selected"
              : ""
          }`}
          onClick={() => handleOptionSelect("full-time")}
        >
          <div className="pace-selection__option-header">
            <h2 className="pace-selection__option-title">Full-time</h2>
            {selectedOption === "full-time" && (
              <div className="pace-selection__recommended">
                <span className="pace-selection__recommended-icon">✓</span>{" "}
                Recommended
              </div>
            )}
          </div>

          <div className="pace-selection__option-detail">
            <span className="pace-selection__icon">📅</span> 4 months
          </div>

          <div className="pace-selection__option-detail">
            <span className="pace-selection__icon">🕒</span> 40-50 hours/week
          </div>

          <div className="pace-selection__option-detail">
            <span className="pace-selection__icon">📋</span>
            <span className="pace-selection__highlight pace-selection__highlight--structured">
              Structured
            </span>{" "}
            learning with daily live sessions
          </div>

          <div className="pace-selection__option-detail">
            <span className="pace-selection__icon">💼</span> Learning and career
            support
          </div>

          <ul className="pace-selection__bullet-list">
            <li>
              Career prep starts{" "}
              <span className="pace-selection__highlight pace-selection__highlight--day">
                day 1
              </span>
            </li>
            <li>Fixed full-time schedule with two live lectures daily</li>
          </ul>

          <div className="pace-selection__option-tag">
            <span className="pace-selection__icon pace-selection__icon--tag">
              🎯
            </span>{" "}
            Fast-track to a tech career
          </div>
        </div>

        <div
          className={`pace-selection__option ${
            selectedOption === "part-time"
              ? "pace-selection__option--selected"
              : ""
          }`}
          onClick={() => handleOptionSelect("part-time")}
        >
          <div className="pace-selection__option-header">
            <h2 className="pace-selection__option-title">Part-time</h2>
            {selectedOption === "part-time" && (
              <div className="pace-selection__recommended">
                <span className="pace-selection__recommended-icon">✓</span>{" "}
                Recommended
              </div>
            )}
          </div>

          <div className="pace-selection__option-detail">
            <span className="pace-selection__icon">📅</span> 9 months
          </div>

          <div className="pace-selection__option-detail">
            <span className="pace-selection__icon">🕒</span> 20-25 hours/week
          </div>

          <div className="pace-selection__option-detail">
            <span className="pace-selection__icon">📋</span>
            <span className="pace-selection__highlight pace-selection__highlight--flexible">
              Flexible
            </span>{" "}
            schedule to fit your life
          </div>

          <div className="pace-selection__option-detail">
            <span className="pace-selection__icon">💼</span> Learning and career
            support
          </div>

          <ul className="pace-selection__bullet-list">
            <li>
              Career prep begins{" "}
              <span className="pace-selection__highlight pace-selection__highlight--months">
                three months in
              </span>
            </li>
            <li>Weekly live sessions and regular office hours</li>
          </ul>

          <div className="pace-selection__option-tag">
            <span className="pace-selection__icon pace-selection__icon--tag">
              🚶
            </span>{" "}
            Learn at your own pace
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePaceSelection;
