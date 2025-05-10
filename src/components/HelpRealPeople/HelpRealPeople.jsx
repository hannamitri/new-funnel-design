import React from "react";
import peopleIllustration from "../../assets/peopleOnCouch.webp";
import "./HelpRealPeople.css";

const HelpRealPeople = () => {
  const benefits = [
    {
      id: 1,
      title: "Designed for life",
      description:
        "Online, part-time, friendly and easy-to-follow. Taught from the ground up, in bite-size lessons.",
    },
    {
      id: 2,
      title: "The best portfolio for the job",
      description:
        "Industry projects that demonstrate exactly what employers look for.",
    },
    {
      id: 3,
      title: "Career services",
      description:
        "Hands-on career and interview coaching. Resume and portfolio review, tech interview prep.",
    },
  ];

  return (
    <div className="real-people">
      <div className="real-people__content">
        <div className="real-people__illustration">
          <img
            src={peopleIllustration}
            alt="People sitting on couch with laptops"
            className="real-people__image"
          />
        </div>

        <div className="real-people__text">
          <h2 className="real-people__title">
            We help real people{" "}
            <span className="real-people__highlight">with busy lives</span> make
            the leap into tech and build careers with staying power
          </h2>

          <p className="real-people__description">
            Do you have a full-time job? Kids? Elderly parents? An education
            you're still paying off? Is taking months off from your life to
            learn something new just not an option? FES is for you.
          </p>
        </div>
        <div className="real-people__benefits">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="real-people__card">
              <h1 className="real-people__card-title">{benefit.title}</h1>
              <p className="real-people__card-description">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpRealPeople;
