import React, { useState } from "react";
import "./ArticlesGrid.css";
import tiredWoman from "../../assets/tiredWoman.jpg";
import hired from "../../assets/hired.png";
import bullseye from "../../assets/bullseye.png";
import nana from "../../assets/nana.png";
import manMeeting from "../../assets/manMeeting.jpg";
import orangeVest from "../../assets/orangeVest.png";
import drewSelf from "../../assets/drewSelf.png";
import toaster from "../../assets/toaster.png";
import piggyBank from "../../assets/piggyBank.webp";
import marlonNunez from "../../assets/marlonNunez.webp";
import warningSign from "../../assets/warningSign.webp";
import rocket from "../../assets/rocket.webp";

const ArticlesGrid = () => {
  const [activeFilter, setActiveFilter] = useState("View All");

  const filters = [
    "View All",
    "Externships",
    "Programming Languages",
    "Learning Resources",
    "How FES Works",
    "Student Stories",
    "Job Profiles",
    "Soft Skills",
    "Job Search",
  ];

  const articles = [
    {
      id: 1,
      title: "Career Plateau? 7 Clear Signs You're Stuck—and How to Break Free",
      image: tiredWoman,
      tags: ["BI Analytics", "Student Stories"],
    },
    {
      id: 2,
      title: "5 Grads Who Landed Tech Jobs Without a Background in STEM",
      image: hired,
      tags: ["Student Stories"],
    },
    {
      id: 3,
      title:
        "4 out of 5 FES Grads Land Jobs in Tech. This Expert Knows Why.",
      image: bullseye,
      tags: ["How FES Works", "Student Stories"],
    },
    {
      id: 4,
      title: "How Mock Interviews Help You Land the Job",
      image: manMeeting,
      tags: ["Job Search"],
    },
    {
      id: 5,
      title: "Meet a FES Learning Coach: Nana Khmaladze",
      image: nana,
      tags: ["How FES Works"],
    },
    {
      id: 6,
      title: "The Value of Hard Skills in Turbulent Times",
      image: orangeVest,
      tags: ["Soft Skills", "Job Search"],
    },
    {
      id: 7,
      title:
        "From Customer Service to Payroll Analyst: Drew Self’s FES Story",
      image: drewSelf,
      tags: ["BI Analytics", "Student Stories"],
    },
    {
      id: 8,
      title:
        "These Three Burnt-Out Workers Escaped Their 60-Hour Weeks. You Can, Too.",
      image: toaster,
      tags: ["Student Stories", "Job Search"],
    },
    {
      id: 9,
      title:
        "Can I Afford a Bootcamp? All About How to Pay, Financial Aid, and More.",
      image: piggyBank,
      tags: ["How FES works"],
    },
    {
      id: 10,
      title:
        "Recapturing Professional Passion and Time for What Matters: Marlon Nunez’s FES Story",
      image: marlonNunez,
      tags: ["Software Engineering", "Student stories"],
    },
    {
      id: 11,
      title: "11 Signs It's Time to Switch Careers",
      image: warningSign,
      tags: ["Job search"],
    },
    {
      id: 12,
      title:
        "All About FES’s Learning Coaches: How They Fuel Student Success",
      image: rocket,
      tags: ["How FES works"],
    },
  ];

  // Filter articles based on active filter
  const filteredArticles =
    activeFilter === "View All"
      ? articles
      : articles.filter((article) => article.tags.includes(activeFilter));

  return (
    <div className="articles-grid">
      <div className="articles-grid__filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`articles-grid__filter-btn ${
              activeFilter === filter ? "articles-grid__filter-btn--active" : ""
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="articles-grid__container">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            className="articles-grid__article"
            style={
              article.backgroundColor
                ? { backgroundColor: article.backgroundColor }
                : {}
            }
          >
            <div
              className={`articles-grid__image-container ${
                article.darkBg ? "articles-grid__image-container--dark" : ""
              }`}
            >
              {article.coachTag && (
                <span className="articles-grid__coach-tag">
                  {article.coachTag}
                </span>
              )}
              <img
                src={article.image}
                alt={article.title}
                className="articles-grid__image"
              />
            </div>

            <div className="articles-grid__content">
              <div className="articles-grid__tags">
                {article.tags.map((tag) => (
                  <span key={tag} className="articles-grid__tag">
                    {tag}
                  </span>
                ))}
              </div>

              {article.personName && !article.subtitle && (
                <h3 className="articles-grid__person-name">
                  {article.personName}
                </h3>
              )}

              {article.subtitle && (
                <div className="articles-grid__header-with-subtitle">
                  <span className="articles-grid__subtitle">
                    {article.subtitle}
                  </span>
                  <h3 className="articles-grid__person-name">
                    {article.personName}
                  </h3>
                </div>
              )}

              <h3 className="articles-grid__title">{article.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesGrid;
