import React from "react";
import "./ImpactStats.css"; // Assuming you have a CSS file for styles
import womanLaptop from "../../assets/womanLaptop.webp";
import coolEmoji from "../../assets/coolEmoji.svg";

function ImpactStats() {
  return (
    <section className="software-page__intro">
      <div className="container">
        <h2 className="software-page__intro-title">
          Become a Software Engineer
          <br />
          with{" "}
          <span className="software-page__logo-text">
            <img
              src={coolEmoji}
              alt="FES icon"
              className="software-page__small-logo"
            />
            FES
          </span>
        </h2>

        <div className="software-page__benefits">
          <div className="software-page__benefit">
            <div className="software-page__benefit-icon">✓</div>
            <div className="software-page__benefit-text">
              Our guarantee:
              <br />
              job in tech or 100%
              <br />
              money back*
            </div>
          </div>

          <div className="software-page__benefit">
            <div className="software-page__benefit-icon">✓</div>
            <div className="software-page__benefit-text">
              No IT or STEM
              <br />
              background needed
            </div>
          </div>

          <div className="software-page__benefit">
            <div className="software-page__benefit-icon">✓</div>
            <div className="software-page__benefit-text">
              4.8/5 rating across
              <br />
              1k+ reviews
            </div>
          </div>
        </div>

        <div className="software-page__disclaimer">
          *Get a relevant job in 10 months or your tuition back when you
          complete our included Career Services package and make a good-faith
          effort to find a job. Details in our{" "}
          <a href="#terms" className="software-page__link">
            Terms of Use
          </a>
          .
        </div>

        <div className="software-page__career-info">
          <div className="software-page__image-container">
            <img
              src={womanLaptop}
              alt="Software developer working on laptop"
              className="software-page__developer-image"
            />
          </div>

          <div className="software-page__essential-profession">
            <h3 className="software-page__career-title">
              An essential profession in
              <br />
              the tech industry
            </h3>

            <div className="software-page__career-description">
              <p>
                Software Engineers build the apps and websites you use every
                day. Software Engineers, a.k.a. Developers, create and maintain
                everything in your phone and on your computer. Tech companies
                and household names in every industry need lots of Software
                Engineers.
              </p>
            </div>
          </div>

          <div className="software-page__job-stats">
            <div className="software-page__salary-info">
              <div className="software-page__salary">
                <div className="software-page__salary-amount">$70,000</div>
                <div className="software-page__salary-description">
                  Our grads' starting pay
                </div>
                <div className="software-page__salary-bar software-page__salary-bar--short"></div>
              </div>

              <div className="software-page__salary">
                <div className="software-page__salary-amount">$94,000</div>
                <div className="software-page__salary-description">
                  In 1-3 years
                </div>
                <div className="software-page__salary-bar software-page__salary-bar--long"></div>
              </div>

              <div className="software-page__salary-source">
                Source: Glassdoor.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImpactStats;
