import React from "react";
import { CheckCircle } from "lucide-react";

function HowWeWork() {
  return (
    <section className="how-we-work-section">
      <div className="container">
        <div className="section-header">
          <h3 className="section-subtitle">How we work</h3>
          <h2 className="section-title">
            Go from newbie to pro
            <br />
            in months. Here's how
          </h2>
        </div>

        <div className="journey-steps">
          <div className="journey-line"></div>

          <div className="journey-step">
            <div className="step-icon">
              <CheckCircle size={24} color="#4f45e4" />
            </div>
            <h3 className="step-title">Constant practice</h3>
            <p className="step-description">
              Our platform serves up concepts and coding practice in bite-size
              lessons, so you're always reinforcing what you just learned.
            </p>
          </div>

          <div className="journey-step">
            <div className="step-icon">
              <CheckCircle size={24} color="#4f45e4" />
            </div>
            <h3 className="step-title">Non-stop support</h3>
            <p className="step-description">
              1-on-1 tutoring, daily tutors' hours, hundreds of video lessons,
              and a personal learning coach to keep you on track!
            </p>
          </div>

          <div className="journey-step">
            <div className="step-icon">
              <CheckCircle size={24} color="#4f45e4" />
            </div>
            <h3 className="step-title">Professional job-search support</h3>
            <p className="step-description">
              Our career coaches review your resume, LinkedIn, and portfolio,
              prep you for interviews, and guide your process.
            </p>
          </div>

          <div className="journey-step">
            <div className="step-icon">
              <CheckCircle size={24} color="#4f45e4" />
            </div>
            <h3 className="step-title">Deep portfolio</h3>
            <p className="step-description">
              Use your new skills to build projects, stack them in a portfolio,
              use that portfolio to impress employers.
            </p>
          </div>
        </div>

        {/* <div className="illustration-container">
          <img
            src="	https://tripleten.com/usa-assets/usa-main/tild3365-3730-4632-b566-633730636538__ellipse_150_1.png"
            alt="Learning journey illustration showing a student with laptop and various coding elements"
            className="journey-illustration"
          />
        </div> */}
      </div>
    </section>
  );
}

export default HowWeWork;
