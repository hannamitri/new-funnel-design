import React from "react";
import { Play } from "lucide-react";
// import "./ResourcesSection.css";

function ResourcesSection() {
  // Blog articles data
  const featuredArticle = {
    title: "Girl Code: Celebrating Women In Tech",
    description:
      "Women in tech are breaking barriers and redefining the industry. This IWD, celebrate their bold career moves, resilience, and success with us.",
    images: [
      "	https://tripleten.com/usa-assets/usa-main/tild3365-3730-4632-b566-633730636538__ellipse_150_1.png",
      "	https://tripleten.com/usa-assets/usa-main/tild3365-3730-4632-b566-633730636538__ellipse_150_1.png",
      "	https://tripleten.com/usa-assets/usa-main/tild3365-3730-4632-b566-633730636538__ellipse_150_1.png",
      "	https://tripleten.com/usa-assets/usa-main/tild3365-3730-4632-b566-633730636538__ellipse_150_1.png",
      "	https://tripleten.com/usa-assets/usa-main/tild3365-3730-4632-b566-633730636538__ellipse_150_1.png",
    ],
    mainImage:
      "https://tripleten.com/usa-assets/usa-main/tild3762-3634-4862-a631-646164616332__5ce3ef103d1a2e0716ce.jpg",
    hasVideo: true,
  };

  const articles = [
    {
      id: 1,
      date: "7/01/2025",
      title: "How to Switch into Tech at 50",
      image:
        "https://tripleten.com/usa-assets/usa-main/tild3762-3634-4862-a631-646164616332__5ce3ef103d1a2e0716ce.jpg",
      url: "#article-1",
    },
    {
      id: 2,
      date: "3/18/2025",
      title: "Let's Talk About the Outcomes Report",
      image:
        "https://tripleten.com/usa-assets/usa-main/tild3762-3634-4862-a631-646164616332__5ce3ef103d1a2e0716ce.jpg",
      url: "#article-2",
    },
    {
      id: 3,
      date: "",
      title: "Choosing Tech to Balance Parenthood and Work",
      image:
        "https://tripleten.com/usa-assets/usa-main/tild3762-3634-4862-a631-646164616332__5ce3ef103d1a2e0716ce.jpg",
      url: "#article-3",
    },
  ];

  return (
    <section className="resources-section">
      <div className="container">
        <div className="resources-header">
          <h2 className="resources-title">
            Pro-tips for building your
            <br />
            career in tech
          </h2>
        </div>

        <div className="resources-content">
          {/* Featured Article (Women in Tech) */}
          <div className="featured-article">
            <div className="women-photos">
              <img
                src={featuredArticle.mainImage}
                alt="Woman in tech"
                className="main-photo"
              />

              <div className="floating-photos">
                {featuredArticle.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Woman in tech ${index + 1}`}
                    className={`float-photo photo-${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="featured-content">
              <h3 className="featured-title">{featuredArticle.title}</h3>
              <p className="featured-description">
                {featuredArticle.description}
              </p>

              {featuredArticle.hasVideo && (
                <a href="#watch-stories" className="video-button">
                  Watch stories <Play size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Regular Articles Grid */}
          <div className="articles-grid">
            {articles.map((article) => (
              <div className="article-card" key={article.id}>
                <a href={article.url} className="article-link">
                  <div className="article-image">
                    <img src={article.image} alt={article.title} />
                  </div>

                  {article.date && (
                    <div className="article-date">{article.date}</div>
                  )}

                  <h3 className="article-title">{article.title}</h3>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResourcesSection;
