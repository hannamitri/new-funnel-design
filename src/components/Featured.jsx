import React from "react";

function Featured() {
  return (
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
  );
}

export default Featured;
