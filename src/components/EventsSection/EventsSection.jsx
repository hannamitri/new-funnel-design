import React from "react";
import "./EventsSection.css";
import manMeeting from "../../assets/manMeeting.jpg";

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title:
        "FES's 2022 In-Person Event: A Day of Community, Connection, and Career Growth",
      description:
        "FES's 2022 in-person event united students, alumni, and staff for learning, networking, and career growth, featuring interactive sessions and industry insights to empower attendees in tech.",
      image: manMeeting,
      learnMoreLink: "#",
    },
    {
      id: 2,
      title: "FES's Tech Talks: Career Pivot 101 – Live in Los Angeles!",
      description:
        "FES's Tech Talks: Career Pivot 101 gathered students, alumni, and professionals in LA for career insights, networking, and community, highlighting alumni success and shared journeys into tech.",
      image: manMeeting,
      learnMoreLink: "#",
    },
    {
      id: 3,
      title: "FES at SXSW: Making Waves in Austin!",
      description:
        "FES debuted at SXSW in March, engaging career changers, tech enthusiasts, and industry leaders, showcasing the accessibility of tech careers through conversations and networking.",
      image: manMeeting,
      learnMoreLink: "#",
    },
  ];

  return (
    <div className="events-section">
      <div className="events-section__content">
        <h2 className="events-section__title">
          FES Events:
          <br />
          Past & Upcoming
        </h2>

        <div className="events-section__grid">
          {events.map((event) => (
            <div key={event.id} className="events-section__card">
              <div className="events-section__image-container">
                <img
                  src={event.image}
                  alt={event.title}
                  className="events-section__image"
                />
              </div>

              <h3 className="events-section__event-title">{event.title}</h3>

              <p className="events-section__description">{event.description}</p>

              <a href={event.learnMoreLink} className="events-section__link">
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
