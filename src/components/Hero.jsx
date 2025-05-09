import React from "react";
import Featured from "./Featured";
import JobGuarantee from "./JobGuarantee";
import CTA from "./CTA";
import Pricing from "./Pricing";
import HowWeWork from "./HowWeWork";
import Alumni from "./Alumni";
import Employer from "./Employer";
import ProTips from "./ProTips";
import BookingForm from "./BookingForm";
import FAQ from "./FAQ";
import Footer from "./Footer";

function HeroSection() {
  return (
    <>
      <div className="hero-container">
        <img
          src="https://tripleten.com/usa-assets/usa-main/tild3334-3833-4239-a233-386263313331__-__format__webp__resolutiondesktop.png"
          alt=""
          className="hero-image"
        />
        <img
          src="https://tripleten.com/usa-assets/usa-main/tild3066-3564-4330-a437-613466666565__-__format__webp__resolutiontablet.png"
          alt=""
          className="hero-image-small"
        />
        <div className="hero-text">
          <h1>
            Learn the job.
            <br />
            Get the job.
          </h1>
          <p>
            Frontend Simplified online coding bootcamps enable people with busy
            lives to make the transition into tech.
          </p>
          <button className="hero-button">Book a call</button>
          <div className="watch-story">
            <div className="story-info">
              <div className="play-wrapper">
                <div className="play-button">
                  <span className="play-icon">▶</span>
                </div>
                <p className="watch-text">Watch Tiffany Hall's story</p>
              </div>
              <div className="career-transition">
                <div className="before-after">
                  <span className="time-label">Before</span>
                  <span className="job">Special Ed Teacher</span>
                </div>
                <div className="before-after">
                  <span className="time-label">Now</span>
                  <span className="job">Full-stack Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Featured />
      <JobGuarantee />
      <CTA />
      <Pricing />
      <HowWeWork />
      <Alumni />
      <Employer />
      <ProTips />
      <BookingForm />
      <FAQ />
      <Footer />
    </>
  );
}

export default HeroSection;
