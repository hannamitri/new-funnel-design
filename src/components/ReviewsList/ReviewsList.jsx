import React, { useState } from "react";
import "./ReviewsList.css"; // Import your CSS file for styling

const ReviewsList = () => {
  const [selectedProgram, setSelectedProgram] = useState("All programs");
  const [sortOption, setSortOption] = useState("Most useful first");

  // Sample review data
  const reviews = [
    {
      id: 1,
      name: "Jenny Doctor",
      program: "Software Engineering",
      rating: 5,
      review:
        "I cannot sing the praises of FES enough! In just 7 months, I was able to learn the ropes of HTML, CSS and JavaScript, and build a diverse portfolio of apps along the way. Before landing my software engineering job, I was a public school teacher. The most important factor in considering which...",
      fullReview: "Read more",
    },
    {
      id: 2,
      name: "Neetha",
      program: "Business Intelligence Analytics",
      rating: 5,
      review:
        "I am a recent graduate from the Business Intelligence Analysis (BIA) program at FES and it has honestly been one of the best decisions of my career. Having an industry experience in developing frontend of software applications, I wanted to venture into User Experience Design through a certific...",
      fullReview: "Read more",
    },
    {
      id: 3,
      name: "Ronald McGrath",
      program: "Business Intelligence Analytics",
      rating: 5,
      review:
        "FES is a coding boot camp with multiple programs to choose from. I started back on February 2, 2024. I'm 21 and I had no clue what I wanted to do. My life consisted of (before doing this boot camp) waking up, going to the gym, going to work, and then playing games. I hated how little money I w...",
      fullReview: "Read more",
    },
    {
      id: 4,
      name: "Brandon Rossi",
      program: "Quality Assurance",
      rating: 5,
      review:
        "Perhaps you've come across a FES ad in your socials somewhere and thought to yourself, \"Hm, this seems interesting\" and now you've run here to see if it's worth it. Well, I'd be a liar if I hadn't done the same when I initially saw the ads. I came across them myself while already being a junio...",
      fullReview: "Read more",
    },
    {
      id: 5,
      name: "Christopher Abreu",
      program: "Software Engineering",
      rating: 5,
      review:
        "Perhaps you've come across a FES ad in your socials somewhere and thought to yourself, \"Hm, this seems interesting\" and now you've run here to see if it's worth it. Well, I'd be a liar if I hadn't done the same when I initially saw the ads. I came across them myself while already being a junio...",
      fullReview: "Read more",
    },
  ];

  // Program filter options
  const programs = [
    "All programs",
    "Software Engineering",
    "Quality Assurance",
    "Business Intelligence Analytics",
    "Data Science",
  ];

  return (
    <div className="reviews-list">
      <h2 className="reviews-list__title">
        Over 1,000 reviews in all programs
      </h2>

      <div className="reviews-list__container">
        <div className="reviews-list__reviews">
          {reviews.map((review) => (
            <div key={review.id} className="reviews-list__item">
              <div className="reviews-list__user">
                <div className="reviews-list__avatar">
                  <span className="reviews-list__avatar-icon">👤</span>
                </div>
                <div className="reviews-list__user-info">
                  <p className="reviews-list__name">{review.name}</p>
                  <p className="reviews-list__program">
                    Program:{" "}
                    <span className="reviews-list__program-name">
                      {review.program}
                    </span>
                  </p>
                </div>
              </div>

              <div className="reviews-list__rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="reviews-list__star">
                    ★
                  </span>
                ))}
              </div>

              {review.review && (
                <>
                  <p className="reviews-list__text">{review.review}</p>
                  {review.fullReview && (
                    <button className="reviews-list__read-more">
                      {review.fullReview}
                    </button>
                  )}
                  <a href="#" className="reviews-list__source">
                    Read review on Course Report →
                  </a>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="reviews-list__filters">
          <div className="reviews-list__program-filter">
            {programs.map((program) => (
              <button
                key={program}
                className={`reviews-list__filter-btn ${
                  selectedProgram === program
                    ? "reviews-list__filter-btn--active"
                    : ""
                }`}
                onClick={() => setSelectedProgram(program)}
              >
                {program}
              </button>
            ))}
          </div>

          <div className="reviews-list__sort">
            <label className="reviews-list__sort-label">Sort by</label>
            <select
              className="reviews-list__sort-select"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option>Most useful first</option>
              <option>Newest first</option>
              <option>Highest rated</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsList;
