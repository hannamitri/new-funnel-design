import React from "react";

function CTABanner() {
  return (
    <div className="cta-banner-section">
      {/* <div className="advisor-images-top">
        <div className="advisor-image advisor-1">
          <img src="/api/placeholder/60/60" alt="Advisor" />
        </div>
        <div className="advisor-image advisor-2">
          <img src="/api/placeholder/60/60" alt="Advisor" />
        </div>
      </div> */}

      <div className="cta-banner-container">
        <div className="advisor-images-main">
          <div className="advisor-image-group">
            <div className="advisor-image advisor-3">
              <img src="/api/placeholder/70/70" alt="Advisor" />
            </div>
            <div className="advisor-image advisor-4">
              <img src="/api/placeholder/70/70" alt="Advisor" />
            </div>
            <div className="advisor-image advisor-5">
              <img src="/api/placeholder/70/70" alt="Advisor" />
            </div>
          </div>
        </div>

        <div className="cta-message">
          <h2 className="cta-heading">
            Book a call with an advisor by May 15th
            <br />
            to take <span className="discount-badge">25% off</span> your
            tuition!
          </h2>
          <a href="#book-call" className="cta-button">
            Book a call
          </a>
        </div>
      </div>
    </div>
  );
}

export default CTABanner;
