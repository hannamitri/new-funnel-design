import React from "react";
import joshProfile from "../../assets/josh.png";
import aprilProfile from "../../assets/april.webp";
import coolEmoji from "../../assets/coolEmoji.svg";
import "./JumpstartSection.css";

const JumpstartSection = () => {
  const benefits = [
    {
      id: 1,
      title: "Find out which professional skills get you hired",
      description:
        "We asked hundreds of U.S. tech decision makers what they're looking for in entry-level job applicants. Now we're sharing these insights with you!",
    },
    {
      id: 2,
      title: "Find out how FES gets you job-ready",
      description:
        "Our students don't just learn professional tools—they become professionals. A deep curriculum and individual career coaching get you to the finish line.",
    },
    {
      id: 3,
      title:
        "Get the must-do checklist to successfully enter the tech industry",
      description:
        "Success requires a compelling, coherent, and memorable professional narrative. We'll show you how to craft one, step-by-step.",
    },
  ];

  return (
    <div className="jumpstart">
      <div className="jumpstart__content">
        <div className="jumpstart__quotes">
          <div className="jumpstart__quote jumpstart__quote--left">
            <p className="jumpstart__quote-text">
              Let's look at the most in-demand skillsets and how they develop
              into careers
            </p>
            <div className="jumpstart__expert">
              <img
                src={joshProfile}
                alt="Josh Horwitz"
                className="jumpstart__expert-photo"
              />
              <span className="jumpstart__expert-name">Josh Horwitz</span>
            </div>
          </div>

          <div className="jumpstart__quote jumpstart__quote--right">
            <p className="jumpstart__quote-text">
              Your experience prior to tech is valuable and can inform your
              work, as well as your career decisions
            </p>
            <div className="jumpstart__expert ">
              <img
                src={aprilProfile}
                alt="April Hostler"
                className="jumpstart__expert-photo"
              />
              <span className="jumpstart__expert-name">April Hostler</span>
            </div>
          </div>
        </div>

        <h2 className="jumpstart__title">
          In less than 2 hours,{" "}
          <img
            src={coolEmoji}
            alt="Smiley face"
            className="jumpstart__smiley"
          />{" "}
          you'll find out how to jumpstart your tech career
        </h2>

        <div className="jumpstart__benefits">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="jumpstart__benefit">
              <h3 className="jumpstart__benefit-title">{benefit.title}</h3>
              <p className="jumpstart__benefit-text">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JumpstartSection;
