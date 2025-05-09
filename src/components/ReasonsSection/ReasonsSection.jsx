import React from "react";
import "./ReasonsSection.css";

const ReasonsSection = () => {
  const reasons = [
    {
      id: 1,
      text: "We'll help along the way",
      link: "#",
    },
    {
      id: 2,
      text: "We offer externships for work experience",
      link: "#",
    },
    {
      id: 3,
      text: "We offer flexible payment options",
      link: "#",
    },
    {
      id: 4,
      text: "Our grad success metrics are phenomenal",
      link: "#",
    },
  ];

  return (
    <div className="reasons">
      <div className="reasons__content">
        <h2 className="reasons__title">
          Need more reasons
          <br />
          to choose FES?
        </h2>

        <ul className="reasons__list">
          {reasons.map((reason) => (
            <li key={reason.id} className="reasons__item">
              <span className="reasons__text">{reason.text}</span>
              <a href={reason.link} className="reasons__link">
                Learn more <span className="reasons__arrow">→</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="reasons__advisors">
          <p className="reasons__advisors-text">
            Talk to our advisors
            <span className="reasons__advisors-avatars">
              <img
                src="/api/placeholder/30/30"
                alt="Advisor"
                className="reasons__advisor-avatar"
              />
              <img
                src="/api/placeholder/30/30"
                alt="Advisor"
                className="reasons__advisor-avatar"
              />
              <img
                src="/api/placeholder/30/30"
                alt="Advisor"
                className="reasons__advisor-avatar"
              />
            </span>
            to find out how you can get in risk-free
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReasonsSection;
