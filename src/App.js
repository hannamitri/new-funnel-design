import logo from "./logo.svg";
import "./App.css";
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

function App() {
  return (
    <div>
      <Navbar />
      <PromotionBanner />
      <Hero />
      <Featured />
      <JobGuarantee />
      <CTA />
      <Pricing />
      <HowWeWork />
      <Alumni />
      <Employer />
      <ProTips />
      <BookingForm />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
