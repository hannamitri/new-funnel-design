import React from "react";
import guyWithBeard from "../../assets/guyWithBeard.webp";
import "./TeamProfiles.css"; // Import the CSS file for styling

const TeamProfiles = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Maggie Elentukh",
      title: "VP Global Communications",
      image: guyWithBeard,
    },
    {
      id: 2,
      name: "Katie Sawyer",
      title: "Director of Content Marketing",
      image: guyWithBeard,
    },
    {
      id: 3,
      name: "Chris Whitney",
      title: "Director of Industry Experiences",
      image: guyWithBeard,
    },
    {
      id: 4,
      name: "Stephen Hudson",
      title: "Curriculum Lead",
      image: guyWithBeard,
    },
    {
      id: 5,
      name: "Daniel Odegaard",
      title: "Senior Recruiter",
      image: guyWithBeard,
    },
    {
      id: 6,
      name: "Anastasia Noga",
      title: "Head of Learning Community",
      image: guyWithBeard,
    },
    {
      id: 7,
      name: "Sharahn McClung",
      title: "Career Coach",
      image: guyWithBeard,
    },
    {
      id: 8,
      name: "Asya Ubogova",
      title: "Head of Curriculum",
      image: guyWithBeard,
    },
  ];

  return (
    <div className="team-profiles">
      <div className="team-profiles__grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-profiles__card">
            <div className="team-profiles__image-container">
              <img
                src={member.image}
                alt={member.name}
                className="team-profiles__image"
              />
            </div>
            <div className="team-profiles__info">
              <h3 className="team-profiles__name">{member.name}</h3>
              <p className="team-profiles__title">{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamProfiles;
