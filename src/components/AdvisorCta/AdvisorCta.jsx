import React from "react";
import "./AdvisorCta.css";
import jake from "../../assets/jake.png";

const AdvisorCta = () => {
  return (
    <div className="advisor-cta">
      <div className="advisor-cta__avatars">
        <img src={jake} alt="Advisor" className="advisor-cta__avatar" />
        <img src={jake} alt="Advisor" className="advisor-cta__avatar" />
        <img src={jake} alt="Advisor" className="advisor-cta__avatar" />
      </div>

      <h2 className="advisor-cta__title">
        Book a call with an advisor by May 15th
        <br />
        to take <span className="advisor-cta__highlight">25% off</span> your
        tuition!
      </h2>

      <button className="advisor-cta__button">Book a call</button>
    </div>
  );
};

export default AdvisorCta;
