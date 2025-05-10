import React from "react";
import "./Career.css";
import CareerSignup from "../CareerSignup/CareerSignup";
import SocialProof from "../SocialProof/SocialProof";
import JumpstartSection from "../JumpstartSection/JumpstartSection";
import GuideBanner from "../GuideBanner/GuideBanner";
import Footer from "../Footer";

function Career() {
  return (
    <div className="career-container">
      <CareerSignup />
      <SocialProof />
      <JumpstartSection />
      <GuideBanner />
      <Footer />
    </div>
  );
}

export default Career;
