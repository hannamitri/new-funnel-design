import React from "react";
import "./About.css";
import BeyondTeaching from "../BeyondTeaching/BeyondTeaching";
import Navbar from "../Navbar";
import PromotionBanner from "../PromotionBanner";
import HelpRealPeople from "../HelpRealPeople/HelpRealPeople";
import TeamSection from "../TeamSection/TeamSection";
import TeamProfiles from "../TeamProfiles/TeamProfiles";
import EventsSection from "../EventsSection/EventsSection";
import SocialPartnerSection from "../SocialPartnerSection/SocialPartnerSection";
import AboutReasonsSection from "../AboutReasonsSection/AboutReasonsSection";
import Footer from "../Footer";


function About() {
  return (
    <div className="about-wrapper">
      <Navbar />
      <PromotionBanner />
      <div className="container">
        <BeyondTeaching />
        <HelpRealPeople />
        <TeamSection />
        <TeamProfiles />
        <EventsSection />
        <SocialPartnerSection />
        <AboutReasonsSection />
        <Footer />
      </div>
    </div>
  );
}

export default About;
