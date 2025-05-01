import React from "react";
import { Play } from "lucide-react";
// import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-wrapper">
      {/* Promotional banner */}
      <div className="promo-banner">
        <div className="promo-content">
          <div className="promo-text">Graduate into a career you'll love!</div>

          <div className="promo-badge">
            <div className="discount">
              <span className="discount-amount">25</span>
              <span className="discount-percent">
                %<br />
                off
              </span>
            </div>
          </div>

          <div className="countdown">
            <span>14 d</span> : <span>13 h</span> : <span>39 m</span> :{" "}
            <span>20 s</span>
          </div>

          <button className="claim-btn">Claim offer</button>
        </div>
      </div>

      {/* Main hero section */}
      <div className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Learn the job.
              <br />
              Get the job.
            </h1>

            <p className="hero-description">
              FES online coding bootcamps enable people with busy lives to make
              the transition into tech.
            </p>

            <button className="cta-button">Book a call</button>
          </div>

          <div className="hero-media">
            <div className="testimonial-card">
              <button className="watch-story">
                <Play size={20} />
                <span>Watch Tiffany Hall's story</span>
              </button>

              <div className="career-transition">
                <div className="transition-item">
                  <span className="transition-label">Before</span>
                  <span className="transition-value">Special Ed Teacher</span>
                </div>

                <div className="transition-item">
                  <span className="transition-label">Now</span>
                  <span className="transition-value">Full-stack Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured in section */}
        <div className="featured-section">
          <div className="featured-container">
            <div className="featured-item">
              <div className="featured-logo">Forbes ADVISOR</div>
              <p className="featured-text">
                FES is included by Forbes
                <br />
                in "5 Coding bootcamps to consider"
              </p>
            </div>

            <div className="featured-item">
              <div className="featured-logo">yahoo!finance</div>
              <p className="featured-text">
                FES's New Data Report Reveals
                <br />
                Hiring Trends for Career Pivoters Eyeing Tech
              </p>
            </div>

            <div className="featured-item">
              <div className="featured-logo">FORTUNE | EDUCATION</div>
              <p className="featured-text">
                FES is the overall best Software
                <br />
                Engineering bootcamp for 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
