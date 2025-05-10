import React from "react";
import "./TeamSection.css";
import { teamMembers } from "../../data/teamMemberPics";

const TeamSection = () => {
  const sizes = ["small", "medium", "large"];

  const renderTeamPhotos = () =>
    teamMembers.map((member, index) => {
      const size = sizes[Math.floor(Math.random() * sizes.length)];
      return (
        <div
          key={index}
          className={`
            team-section__photo
            team-section__photo--pos${index + 1}
            team-section__photo--size-${size}
          `}
        >
          <img src={member} alt={`Team member ${index + 1}`} />
        </div>
      );
    });

  return (
    <div className="team-section">
      <div className="team-section__content">
        {/* Top Quote */}
        <div className="team-section__quote">
          <div className="team-section__quote-mark">"</div>
          <p className="team-section__quote-text">
            We know that you can do this, because we've helped thousands of
            people just like you, from all walks of life, to forge a new path.
          </p>
          <p className="team-section__quote-author">
            Ilya Zelensky
            <span className="team-section__quote-title">CEO</span>
          </p>
        </div>

        {/* CTA */}
        <div className="team-section__cta">
          <button className="team-section__button">
            Read students' stories
          </button>
        </div>

        {/* Photo Cloud + Heading */}
        <div className="team-section__photos">
          {renderTeamPhotos()}

          <div className="team-section__heading">
            <h2 className="team-section__title">
              Our 200-strong distributed US team is here{" "}
              <span className="team-section__highlight">to guide</span> you on
              your journey
            </h2>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="team-section__quote">
          <div className="team-section__quote-mark">"</div>
          <p className="team-section__quote-text">
            Technology is used by everyone, so{" "}
            <span className="team-section__highlight">
              everyone should be represented
            </span>{" "}
            during its creation. We are here to help you not just learn
            technical skills, but to ensure you have the experience and
            confidence to land a role in tech, change your life, and build a
            better digital future.
          </p>
          <p className="team-section__quote-author">
            Elise Detrick
            <span className="team-section__quote-title">
              Chief Product Officer
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
