import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CTA from "./components/CTA.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import HowWeWork from "./components/HowWeWork.jsx";
import JobGuarantee from "./components/JobGuarantee.jsx";
import Pricing from "./components/Pricing.jsx";
import Alumni from "./components/Alumni.jsx";
import Employer from "./components/Employer.jsx";
import ProTips from "./components/ProTips.jsx";
import BookingForm from "./components/BookingForm.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";
import PromotionBanner from "./components/PromotionBanner.jsx";
import Featured from "./components/Featured.jsx";
import FrontEnd from "./components/FrontEnd/FrontEnd.jsx";
import { useState, useEffect } from "react";
import StudentReviews from "./components/StudentReviews/StudentReviews.jsx";
import Blog from "./components/Blog/Blog.jsx";
import Career from "./components/Career/Career.jsx";
import About from "./components/About/About.jsx";
import BigFAQ from "./components/BigFAQ/BigFAQ.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/software-engineer" element={<FrontEnd />} />
        <Route path="/student-reviews" element={<StudentReviews />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<BigFAQ />} />
        <Route path="/" element={<Hero />} />
        <Route path="/" element={<Featured />} />
        <Route path="/" element={<JobGuarantee />} />
        <Route path="/" element={<CTA />} />
        <Route path="/" element={<Pricing />} />
        <Route path="/" element={<HowWeWork />} />
        <Route path="/" element={<Alumni />} />
        <Route path="/" element={<Employer />} />
        <Route path="/" element={<ProTips />} />
        <Route path="/" element={<BookingForm />} />
        <Route path="/" element={<FAQ />} />
        <Route path="/" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
