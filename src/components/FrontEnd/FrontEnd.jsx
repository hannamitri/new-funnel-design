import React from "react";
import jake from "../../assets/jake.png";
import "./frontEnd.css"; // Assuming you have a CSS file for styles
import ImpactStats from "../ImpactStats/ImpactStats";
import AfterFES from "../AfterFES/AfterFES";
import CoursePaceSelection from "../CoursePaceSelection/CoursePaceSelection";
import CareerPath from "../CareerPath/CareetPath";
import EmployersSection from "../Employer";
import AdvisorCta from "../AdvisorCta/AdvisorCta";
import TrainingHeader from "../TrainingHeader/TrainingHeader";

const FrontEnd = () => {
  return (
    <div className="software-page">
      <div className="software-page-wrapper">
        <header className="software-page__header">
          <div className="container">
            <div className="software-page__hero">
              <div className="software-page__info">
                <div className="software-page__profile">
                  <div className="software-page__profile-image">
                    <img src={jake} alt="Jake McCambley" />
                    <div className="software-page__play-button">
                      <span className="software-page__play-icon"></span>
                    </div>
                  </div>
                  <div className="software-page__profile-details">
                    <h3 className="software-page__profile-name">
                      Jake McCambley
                    </h3>
                    <div className="software-page__profile-career">
                      <div className="software-page__career-item">
                        <span className="software-page__career-label">
                          Before
                        </span>
                        <span className="software-page__career-value">
                          Wilderness Guide
                        </span>
                      </div>
                      <div className="software-page__career-item">
                        <span className="software-page__career-label">Now</span>
                        <span className="software-page__career-value">
                          Software Engineer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="software-page__content">
                <div className="software-page__badges">
                  <span className="software-page__badge software-page__badge--part-time">
                    9 months part-time
                  </span>
                  <span className="software-page__badge software-page__badge--full-time">
                    4 months full-time
                  </span>
                  <span className="software-page__badge software-page__badge--guarantee">
                    Money-back guarantee
                  </span>
                </div>
                <h1 className="software-page__title">
                  Software
                  <br />
                  Engineering
                  <br />
                  Bootcamp
                </h1>
                <p className="software-page__description">
                  Join our Software Engineering Bootcamp part-time or full-time
                  to learn a remote-friendly job that pays ~$70,000 to start
                </p>
                <div className="software-page__cta">
                  <a href="#book-call" className="software-page__button">
                    Book a call
                  </a>
                  <div className="software-page__cohort">
                    <span>Cohort #220 starts on May 8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="software-page__main">
          <section className="software-page__awards">
            <div className="container">
              <div className="software-page__badges-container">
                <div className="software-page__award-badge">
                  <img
                    src="/path-to-career-karma-badge.png"
                    alt="Career Karma Best Coding Bootcamps 2025"
                  />
                </div>
                <div className="software-page__award-badge">
                  <img
                    src="/path-to-career-finder-badge.png"
                    alt="Best Bootcamps 2024 Software Engineering"
                  />
                </div>
                <div className="software-page__award-badge">
                  <img
                    src="/path-to-switchup-badge.png"
                    alt="Switchup Best Bootcamps 2025"
                  />
                </div>
                <div className="software-page__award-badge">
                  <img
                    src="/path-to-coursereport-badge.png"
                    alt="Course Report Best Coding Bootcamp 2025"
                  />
                </div>
              </div>
            </div>
          </section>

          <div className="container">
            <section className="software-page__value-prop">
              <h2 className="software-page__value-title">
                Online training and support
                <br />
                designed for your real life
              </h2>

              <div className="software-page__stats">
                <div className="software-page__stat">
                  <div className="software-page__stat-number">+$15k</div>
                  <div className="software-page__stat-description">
                    average graduate
                    <br />
                    salary increase
                  </div>
                </div>

                <div className="software-page__stat">
                  <div className="software-page__stat-number">1,1k+</div>
                  <div className="software-page__stat-description">
                    Software Engineering
                    <br />
                    graduates
                  </div>
                </div>

                <div className="software-page__stat">
                  <div className="software-page__stat-number">82%</div>
                  <div className="software-page__stat-description">
                    of Software Engineering
                    <br />
                    grads find a tech job
                    <br />
                    within 6 months
                  </div>
                </div>
              </div>

              <div className="software-page__outcomes">
                <p>
                  All numbers come from our 2025 Graduate Outcomes Report{" "}
                  <span className="software-page__link-icon">🔗</span>
                </p>
              </div>
            </section>
          </div>
          <ImpactStats />
          <AfterFES />
          <CoursePaceSelection />
          <CareerPath />
          <EmployersSection />
          <AdvisorCta />
          <TrainingHeader />
        </main>
      </div>
    </div>
  );
};

export default FrontEnd;
