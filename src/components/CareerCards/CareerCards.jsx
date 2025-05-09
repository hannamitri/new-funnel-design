import React from "react";
import "./CareerCards.css";
import baldGuyLaptop from "../../assets/baldGuyLaptop.webp"; // Assuming you have a logo image
import blondeWoman from "../../assets/blondeWoman.webp"; // Assuming you have a logo image
import girlOnIpad from "../../assets/girlOnIpad.webp"; // Assuming you have a logo image
import curlyHairWoman from "../../assets/curlyHairWoman.webp"; // Assuming you have a logo image
import guyWithBeard from "../../assets/guyWithBeard.webp"; // Assuming you have a logo image
import girlWithHenna from "../../assets/girlWithHenna.webp"; // Assuming you have a logo image

const CareerCards = () => {
  const careers = [
    {
      id: 1,
      title: "Software Engineering",
      duration: "4-9 months",
      description:
        "Build tools and products that will be used every day by millions of people.",
      image: baldGuyLaptop,
    },
    {
      id: 2,
      title: "Business Intelligence Analytics",
      duration: "4 months",
      description:
        "Use accessible tools to make data useful and insightful. Become indispensable without having to code.",
      image: blondeWoman,
    },
    {
      id: 3,
      title: "Quality Assurance",
      duration: "5 months",
      description:
        "Break software and document the results, without knowing code.",
      image: girlOnIpad,
    },
    {
      id: 4,
      title: "Cyber Security",
      duration: "7 months",
      description:
        "Protect people, organizations, networks, and data from security breaches and online threats.",
      image: curlyHairWoman,
    },
    {
      id: 5,
      title: "Data Science",
      duration: "8 months",
      description:
        "Train AI/ML models, turn raw data into predictions. No STEM background required—we cover basic stats and Python.",
      image: guyWithBeard,
    },
    {
      id: 6,
      title: "UX/UI Design",
      duration: "5 months",
      description:
        "UX/UI Designers design apps, websites, and enterprise software so that they're easier to use by more people.",
      image: girlWithHenna,
    },
  ];

  return (
    <div className="career-selection">
      <h2 className="career-selection__title">Choose a career</h2>

      <div className="career-selection__grid">
        {careers.map((career) => (
          <div key={career.id} className="career-selection__card">
            <div className="career-selection__content">
              <span className="career-selection__duration">
                {career.duration}
              </span>
              <h3 className="career-selection__career-title">{career.title}</h3>
              <p className="career-selection__description">
                {career.description}
              </p>

              <a href="#" className="career-selection__button">
                Learn more <span className="career-selection__arrow">→</span>
              </a>
            </div>

            <div className="career-selection__image-container">
              <img
                src={career.image}
                alt={`${career.title} career`}
                className="career-selection__image"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerCards;
