import React from "react";
import "./ResourcesSection.css";
import headphoneGuy from "../../assets/headphoneGuy.webp";

const ResourcesSection = () => {
  const resources = [
    {
      id: 1,
      type: "Quiz",
      title: "Quiz: Is It Time for You to Switch Careers?",
      image: headphoneGuy,
      backgroundColor: "white",
    },
    {
      id: 2,
      type: "Ebook",
      title: "Being There: Choosing Tech to Balance Parenthood and Work",
      backgroundColor: "#74c095", // Green
    },
    {
      id: 3,
      type: "Ebook",
      title: "Externships: Your Ultimate Guide",
      backgroundColor: "#74c095", // Green
    },
  ];

  return (
    <div className="resources">
      <h2 className="resources__title">Browse our resources</h2>

      <div className="resources__grid">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="resources__card"
            style={{ backgroundColor: resource.backgroundColor }}
          >
            {resource.image && (
              <div className="resources__image-container">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="resources__image"
                />
              </div>
            )}

            <div className="resources__content">
              <span className="resources__type">{resource.type}</span>
              <h3 className="resources__card-title">{resource.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="resources__action">
        <a href="#" className="resources__button">
          Explore More
        </a>
      </div>
    </div>
  );
};

export default ResourcesSection;
