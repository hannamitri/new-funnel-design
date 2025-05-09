import React from "react";
import ReviewsSection from "../ReviewsSection/ReviewsSection";
import ReviewsList from "../ReviewsList/ReviewsList";
import ReasonsSection from "../ReasonsSection/ReasonsSection";
import Footer from "../Footer";

function StudentReviews() {
  return (
    <div>
      <ReviewsSection />
      <ReviewsList />
      <ReasonsSection />
      <Footer />
    </div>
  );
}

export default StudentReviews;
