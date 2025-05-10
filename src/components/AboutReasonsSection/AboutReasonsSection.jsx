import React from "react";
import "./AboutReasonsSection.css";

const AboutReasonsSection = () => {
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
    <div className="about-reasons">
      <div className="about-reasons__content">
        <h2 className="about-reasons__title">
          Need more reasons
          <br />
          to choose FES?
        </h2>

        <ul className="about-reasons__list">
          {reasons.map((reason) => (
            <li key={reason.id} className="about-reasons__item">
              <div className="about-reasons__text">{reason.text}</div>
              <a href={reason.link} className="about-reasons__link">
                Learn more <span className="about-reasons__arrow">→</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutReasonsSection;
