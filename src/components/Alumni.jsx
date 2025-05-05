import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const profiles = [
  {
    id: 1,
    name: "Jake McCambley",
    image:
      "https://tripleten.com/usa-assets/usa-main/tild3762-3634-4862-a631-646164616332__5ce3ef103d1a2e0716ce.jpg",
    former: "Wilderness Guide",
    current: "Software Engineer",
    company: "Zencare",
  },
  {
    id: 2,
    name: "Tiffany Hall",
    image:
      "https://tripleten.com/usa-assets/usa-main/tild3762-3634-4862-a631-646164616332__5ce3ef103d1a2e0716ce.jpg",
    former: "Special Ed Teacher",
    current: "Full-stack Developer",
    company: "Scholastic",
  },
  {
    id: 3,
    name: "Alex Johnson",
    image:
      "https://tripleten.com/usa-assets/usa-main/tild3762-3634-4862-a631-646164616332__5ce3ef103d1a2e0716ce.jpg",
    former: "Graphic Designer",
    current: "UX Engineer",
    company: "TechCorp",
  },
  {
    id: 4,
    name: "Maria Rodriguez",
    image:
      "https://tripleten.com/usa-assets/usa-main/tild3762-3634-4862-a631-646164616332__5ce3ef103d1a2e0716ce.jpg",
    former: "Marketing Specialist",
    current: "Product Manager",
    company: "Innovate Inc",
  },
];

function AlumniShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleCount = () => (window.innerWidth <= 900 ? 1 : 2);
  const [visibleProfiles, setVisibleProfiles] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => setVisibleProfiles(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : profiles.length - visibleProfiles
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < profiles.length - visibleProfiles ? prev + 1 : 0
    );
  };

  const backgrounds = [
    "Teachers",
    "Nurses",
    "Managers",
    "Service reps",
    "Salespeople",
    "Admins",
  ];

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

        <div className="carousel-container">
          <div
            className="carousel-slides"
            style={{
              transform: `translateX(-${
                (100 / visibleProfiles) * currentIndex
              }%)`,
            }}
          >
            {profiles.map((profile) => (
              <div key={profile.id} className="profile-card">
                <h2 className="profile-name">{profile.name}</h2>

                <div className="profile-image-container">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="profile-image"
                  />
                </div>

                <div className="info-section">
                  <div className="info-block">
                    <div className="info-icon">
                      <svg
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" />
                      </svg>
                    </div>
                    <div className="info-text-group">
                      <p className="info-label">Former</p>
                      <p className="info-value">{profile.former}</p>
                    </div>
                  </div>

                  <div className="info-block">
                    <div className="info-icon">
                      <svg
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div className="info-text-group">
                      <p className="info-label">{profile.current}</p>
                      <p className="info-value">at {profile.company}</p>
                    </div>
                  </div>
                </div>

                <button className="watch-button">
                  Watch movie
                  <span className="play-icon">▶</span>
                </button>

                <button className="watch-button">
                  <svg
                    className="linkedin-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  <span className="linkedin-text">LinkedIn</span>
                </button>
              </div>
            ))}
          </div>

          <div className="navigation-container">
            <button onClick={handlePrev} className="nav-button">
              <ChevronLeft size={24} />
            </button>
            <button onClick={handleNext} className="nav-button">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlumniShowcase;
