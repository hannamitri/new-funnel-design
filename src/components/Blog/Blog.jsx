import React, { useState } from "react";
import "./Blog.css";
import holdingHeart from "../../assets/holdingHeart.png";
import ArticlesGrid from "../ArticlesGrid/ArticlesGrid";
import PodcastBanner from "../PodcastBanner/PodcastBanner";
import ResourcesSection from "../ResourcesSection/ResourcesSection";
import CareerCards from "../CareerCards/CareerCards";
import Footer from "../Footer";

const Blog = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="blog-section">
      <div className="blog-section__wrapper">
        <header className="blog-section__header">
          <h2 className="blog-section__title">FES Blog</h2>
          <p className="blog-section__subtitle">
            All the news that's fit to{" "}
            <span className="blog-section__code">print()</span>
          </p>
        </header>

        <div className="blog-section__article">
          <div className="blog-section__content">
            <span className="blog-section__tag">Ebook</span>
            <h3 className="blog-section__article-title">
              Being There: Choosing Tech to Balance Parenthood and Work
            </h3>
            <a href="#" className="blog-section__read-link">
              Read now <span className="blog-section__arrow">→</span>
            </a>
          </div>

          <div className="blog-section__image-container">
            <img
              src={holdingHeart}
              alt="Hands holding a heart illustration"
              className="blog-section__image"
            />
          </div>
        </div>

        <div className="blog-section__newsletter">
          <h3 className="blog-section__newsletter-title">
            We help you land your dream job
          </h3>

          <div className="blog-section__email-container">
            <input
              type="email"
              placeholder="Your email address"
              className="blog-section__input"
              value={email}
              onChange={handleEmailChange}
            />
            <button className="blog-section__button" onClick={handleSubmit}>
              Stay in touch
            </button>
          </div>

          <p className="blog-section__disclaimer">
            By submitting this form, you accept{" "}
            <a href="#" className="blog-section__link">
              the Privacy Policy
            </a>{" "}
            and consent to receive marketing emails from FES.
          </p>
        </div>
        <ArticlesGrid />
        <PodcastBanner />
        <ResourcesSection />
        <CareerCards />
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
