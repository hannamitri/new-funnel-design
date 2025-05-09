import React from "react";
import "./SocialProof.css";
import yahooFinanceLogo from "../../assets/yahooFinance.svg";
import forbesAdvisor from "../../assets/forbesAdvisor.svg";
import fortuneEducation from "../../assets/fortuneEducation.svg";
import april from "../../assets/april.webp";
import josh from "../../assets/josh.png";
import apostrophe from "../../assets/apostrophe.svg";
import sheldonProfile from "../../assets/sheldon.png";

const SocialProof = () => {
  const experts = [
    {
      id: 1,
      name: "April Hostler",
      title: "Director Of Admissions,",
      company: "TripleTen",
      bio: "April's focus is to empower individuals to build a life by investing in themselves first. She brings insights from 17+ years in B2B, project management, product management, and more!",
    },
    {
      id: 2,
      name: "Josh Horwitz",
      title: "Senior Software Engineer,",
      company: "FoCast",
      bio: "Experienced Software Engineer with years of expertise in full stack web application development. Certified AWS Solutions Architect Associate.",
    },
  ];

  return (
    <div className="social-proof">
      <div className="social-proof__content">
        <h2 className="social-proof__title">
          We get people of all backgrounds into tech careers. Trusted by
          thousands of students in the US.
        </h2>

        <div className="social-proof__logos">
          <div className="social-proof__logo-item">
            <img
              src={yahooFinanceLogo}
              alt="Yahoo Finance"
              className="social-proof__logo-image"
            />
            <p className="social-proof__quote">
              TripleTen's New Data Report Reveals Hiring Trends for Career
              Pivoters Eyeing Tech
            </p>
          </div>

          <div className="social-proof__logo-item">
            <img
              src={forbesAdvisor}
              alt="Forbes Advisor"
              className="social-proof__logo-image"
            />
            <p className="social-proof__quote">
              TripleTen is included by Forbes in "5 Coding bootcamps to
              consider"
            </p>
          </div>

          <div className="social-proof__logo-item">
            <img
              src={fortuneEducation}
              alt="Fortune Education"
              className="social-proof__logo-image"
            />
            <p className="social-proof__quote">
              TripleTen is the overall best Software Engineering bootcamp for
              2024
            </p>
          </div>
        </div>

        <h2 className="social-proof__experts-title">Meet the experts</h2>

        <div className="social-proof__experts">
          {experts.map((expert) => (
            <div key={expert.id} className="social-proof__expert-card">
              <div className="social-proof__expert-photo-container">
                <img
                  src={expert.id === 1 ? april : josh}
                  alt={expert.name}
                  className="social-proof__expert-photo"
                />
              </div>

              <div className="social-proof__expert-info">
                <h3 className="social-proof__expert-name">{expert.name}</h3>
                <p className="social-proof__expert-title">
                  {expert.title}{" "}
                  <span className="social-proof__expert-company">
                    {expert.company}
                  </span>
                </p>

                <p className="social-proof__expert-bio">{expert.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="social-proof__testimonial">
        <img
          src={apostrophe}
          alt="Quote"
          className="social-proof__quote-icon"
        />
        <h2 className="social-proof__testimonial-text">
          The non-technical parts of the job, I'd say those are some of the best
          things I learned. They helped me land a job.
        </h2>
        <div className="social-proof__testimonial-author">
          <img
            src={sheldonProfile}
            alt="Sheldon Kinsler"
            className="social-proof__author-photo"
          />
          <div className="social-proof__author-info">
            <div className="social-proof__author-name-container">
              <span className="social-proof__linkedin-icon">in</span>
              <h3 className="social-proof__author-name">Sheldon Kinsler</h3>
            </div>
            <p className="social-proof__author-title">Business Analyst</p>
            <p className="social-proof__author-details">
              TripleTen BI Analytics graduate
            </p>
            <p className="social-proof__author-details">
              Former real estate agent
            </p>
          </div>
          <a href="#" className="social-proof__blog-link">
            Read in blog
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
