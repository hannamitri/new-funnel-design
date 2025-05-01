import React, { useState } from "react";
import { Clock, ArrowRight, ArrowLeft, Play, Linkedin } from "lucide-react";

function AlumniShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Alumni data
  const alumni = [
    {
      id: 1,
      name: "Jake McCambley",
      image: "/api/placeholder/300/300",
      former: "Wilderness Guide",
      current: "Software Engineer",
      company: "Zencare",
      hasMovie: true,
    },
    {
      id: 2,
      name: "Tiffany Hall",
      image: "/api/placeholder/300/300",
      former: "Special Ed Teacher",
      current: "Full-stack Developer",
      company: "Scholastic",
      hasMovie: true,
    },
    {
      id: 3,
      name: "Chuk Okoli",
      image: "/api/placeholder/300/300",
      former: "Refinery Operations Specialist",
      current: "Machine Learning Engineer",
      company: "Leidos",
      hasMovie: true,
    },
  ];

  // Career backgrounds
  const backgrounds = [
    "Teachers",
    "Nurses",
    "Managers",
    "Service reps",
    "Salespeople",
    "Admins",
  ];

  // Slide navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === alumni.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? alumni.length - 1 : prev - 1));
  };

  return (
    <div className="alumni-showcase">
      <div className="container">
        <div className="alumni-header">
          <div className="alumni-heading">
            <h2 className="main-heading">
              1.1k+ <span className="pixel-heart">❤</span> alumni.
            </h2>
            <div className="highlight-box">
              <span className="percentage">80%</span> from a non-STEM
              background!
            </div>
          </div>

          <div className="background-tags">
            {backgrounds.map((background, index) => (
              <div className="background-tag" key={index}>
                • {background}
              </div>
            ))}
          </div>
        </div>

        <div className="alumni-slider">
          <div className="alumni-cards">
            {alumni.map((alum, index) => (
              <div
                className={`alumni-card ${
                  index === currentSlide ? "active" : ""
                }`}
                key={alum.id}
                style={{
                  transform: `translateX(${(index - currentSlide) * 100}%)`,
                }}
              >
                <h3 className="alumni-name">{alum.name}</h3>
                <div className="alumni-photo">
                  <img src={alum.image} alt={alum.name} />
                </div>

                <div className="career-info">
                  <div className="former-career">
                    <Clock size={18} />
                    <div className="info-text">
                      <span className="info-label">Former</span>
                      <span className="info-value">{alum.former}</span>
                    </div>
                  </div>

                  <div className="current-career">
                    <div className="info-text">
                      <span className="info-label">Current</span>
                      <span className="info-value">
                        {alum.current} at {alum.company}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="alumni-actions">
                  {alum.hasMovie && (
                    <a href="#" className="watch-movie-btn">
                      Watch movie <Play size={16} />
                    </a>
                  )}

                  <a href="#" className="linkedin-btn">
                    <Linkedin size={18} /> LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="slider-controls">
            <button
              className="slider-btn prev"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              className="slider-btn next"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlumniShowcase;
