import React from "react";
import { ArrowRight } from "lucide-react";

function ProgramsPricing() {
  // Program data
  const programs = [
    {
      id: 1,
      duration: "4-9 months",
      title: "Software Engineering",
      description:
        "Build tools and products that will be used every day by millions of people.",
      image:
        "https://tripleten.com/usa-assets/usa-main/tild3762-3634-4862-a631-646164616332__5ce3ef103d1a2e0716ce.jpg",
      monthlyPrice: 240,
      upfrontSavings: 3170,
      hasInstallments: true,
      hasUpfront: true,
      hasLoans: true,
    },
    {
      id: 2,
      duration: "4 months",
      title: "Business Intelligence Analytics",
      description:
        "Use accessible tools to make data useful and insightful. Become indispensable without having to code.",
      image:
        "https://tripleten.com/usa-assets/usa-main/tild3762-3634-4862-a631-646164616332__5ce3ef103d1a2e0716ce.jpg",
      monthlyPrice: 235,
      upfrontSavings: 3190,
      hasInstallments: true,
      hasUpfront: true,
      hasLoans: true,
    },
    {
      id: 3,
      duration: "5 months",
      title: "Quality Assurance",
      description:
        "Break software and document the results, without knowing code.",
      image:
        "https://tripleten.com/usa-assets/usa-main/tild3762-3634-4862-a631-646164616332__5ce3ef103d1a2e0716ce.jpg",
      monthlyPrice: 190,
      upfrontSavings: 1590,
      hasInstallments: true,
      hasUpfront: true,
      hasLoans: true,
    },
    {
      id: 4,
      duration: "7 months",
      title: "Cyber Security",
      description:
        "Protect people, organizations, networks, and data from security breaches and online threats.",
      image:
        "https://tripleten.com/usa-assets/usa-main/tild3762-3634-4862-a631-646164616332__5ce3ef103d1a2e0716ce.jpg",
      monthlyPrice: 240,
      upfrontSavings: 3170,
      hasInstallments: true,
      hasUpfront: true,
      hasLoans: true,
    },
    {
      id: 5,
      duration: "8 months",
      title: "Data Science",
      description:
        "Train AI/ML models, turn raw data into predictions. No CS/STEM background required—we cover basic stats and Python.",
      image:
        "https://tripleten.com/usa-assets/usa-main/tild3762-3634-4862-a631-646164616332__5ce3ef103d1a2e0716ce.jpg",
      monthlyPrice: 240,
      upfrontSavings: 3170,
      hasInstallments: true,
      hasUpfront: true,
      hasLoans: true,
    },
    {
      id: 6,
      duration: "5 months",
      title: "UX/UI Design",
      description:
        "UX/UI Designers design apps, websites, and enterprise software so that theyre easier to use by more people.",
      image:
        "https://tripleten.com/usa-assets/usa-main/tild3762-3634-4862-a631-646164616332__5ce3ef103d1a2e0716ce.jpg",
      monthlyPrice: 190,
      upfrontSavings: 1590,
      hasInstallments: true,
      hasUpfront: true,
      hasLoans: true,
    },
  ];

  // Award badges for the bottom section
  const awardBadges = [
    "	https://tripleten.com/usa-assets/usa-main/tild3365-3730-4632-b566-633730636538__ellipse_150_1.png",
    "	https://tripleten.com/usa-assets/usa-main/tild3365-3730-4632-b566-633730636538__ellipse_150_1.png",
    "	https://tripleten.com/usa-assets/usa-main/tild3365-3730-4632-b566-633730636538__ellipse_150_1.png",
    "	https://tripleten.com/usa-assets/usa-main/tild3365-3730-4632-b566-633730636538__ellipse_150_1.png",
    "	https://tripleten.com/usa-assets/usa-main/tild3365-3730-4632-b566-633730636538__ellipse_150_1.png",
  ];

  return (
    <div className="programs-pricing-section">
      <div className="container">
        {/* Pricing Header */}
        <div className="pricing-header">
          <h2 className="pricing-title">
            The most affordable way
            <br />
            into tech—only at FES.
            <br />
            <span className="pricing-highlight">From $200/month</span>
          </h2>
          <p className="pricing-subtitle">
            We offer payment options for every situation, as well as a
            <br />
            risk-free trial period and money-back guarantee
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="program-grid">
          {programs.map((program) => (
            <div className="program-card" key={program.id}>
              <div className="program-duration">{program.duration}</div>
              <h3 className="program-title">{program.title}</h3>
              <p className="program-description">{program.description}</p>

              <div className="tuition-options">
                <h4>Tuition options:</h4>

                {program.hasInstallments && (
                  <div className="tuition-option">
                    <span className="option-icon">⚡</span>
                    <span className="option-text">
                      Installments with FES from ${program.monthlyPrice}/mo. No
                      credit check, 0% interest, preapproved
                    </span>
                  </div>
                )}

                {program.hasUpfront && (
                  <div className="tuition-option">
                    <span className="option-bullet">•</span>
                    <span className="option-text">
                      Upfront to save up to ${program.upfrontSavings}
                    </span>
                  </div>
                )}

                {program.hasLoans && (
                  <div className="tuition-option">
                    <span className="option-bullet">•</span>
                    <span className="option-text">
                      Loans available w/ credit check
                    </span>
                  </div>
                )}
              </div>

              <div className="program-image">
                <img src={program.image} alt={program.title} />
              </div>
            </div>
          ))}
        </div>

        {/* Career Quiz Section */}
        <div className="career-quiz-section">
          <div className="quiz-content">
            <div className="quiz-icon-left">
              <img src="/api/placeholder/60/60" alt="Lightbulb icon" />
            </div>

            <div className="quiz-text">
              <h3 className="quiz-title">Not sure? Take a career quiz</h3>
              <p className="quiz-subtitle">Find your path in under 5 minutes</p>
              <a href="#quiz" className="quiz-button">
                Take the quiz <ArrowRight size={16} />
              </a>
            </div>

            <div className="quiz-icon-right">
              <img src="/api/placeholder/60/60" alt="Question mark icon" />
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="awards-section">
          <div className="awards-container">
            {awardBadges.map((badge, index) => (
              <div className="award-badge" key={index}>
                <img src={badge} alt={`Award badge ${index + 1}`} />
              </div>
            ))}
          </div>

          <div className="review-score">
            <h3 className="review-title">4.8 out of 5 across 1,200+ reviews</h3>
            <p className="review-subtitle">
              Check us out on <a href="#career-karma">Career Karma</a>,{" "}
              <a href="#switchup">SwitchUp</a>, and{" "}
              <a href="#course-report">Course Report</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramsPricing;
