import React from "react";
import "./ReviewsSection.css";
import Nav from "../Navbar";

const ReviewsSection = () => {
  return (
    <>
      <Nav />
      <div className="reviews">
        <div className="reviews__header">
          <h2 className="reviews__title">FES Reviews</h2>
          <p className="reviews__subtitle">
            We have gathered feedback from our graduates and students.
            <br />
            Their experiences and insights reflect the quality and impact of
            programs.
          </p>

          <button className="reviews__button">Learn more</button>
        </div>

        <div className="reviews__ratings-container">
          <div className="reviews__rating-item reviews__rating-item--top-left">
            <div className="reviews__score">
              <span className="reviews__star">★</span> 4.87/5
            </div>
            <div className="reviews__platform">
              <img
                src="/api/placeholder/120/40"
                alt="Course Report"
                className="reviews__logo reviews__logo--course-report"
              />
            </div>
          </div>

          <div className="reviews__rating-item reviews__rating-item--bottom">
            <div className="reviews__score">
              <span className="reviews__star">★</span> 4.88/5
            </div>
            <div className="reviews__platform">
              <img
                src="/api/placeholder/120/40"
                alt="SwitchUp"
                className="reviews__logo reviews__logo--switchup"
              />
            </div>
          </div>

          <div className="reviews__rating-item reviews__rating-item--bottom">
            <div className="reviews__score">
              <span className="reviews__star">★</span> 4.8/5
            </div>
            <div className="reviews__platform">
              <img
                src="/api/placeholder/120/40"
                alt="Career Karma"
                className="reviews__logo reviews__logo--career-karma"
              />
            </div>
          </div>

          <div className="reviews__rating-item reviews__rating-item--top-right">
            <div className="reviews__score">
              <span className="reviews__star">★</span> 4.7/5
            </div>
            <div className="reviews__platform">
              <img
                src="/api/placeholder/120/40"
                alt="Trustpilot"
                className="reviews__logo reviews__logo--trustpilot"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewsSection;
