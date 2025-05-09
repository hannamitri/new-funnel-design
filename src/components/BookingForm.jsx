import React, { useState } from "react";
import { Check } from "lucide-react";
// import "./BookingForm.css";

function BookingForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    marketing: false,
  });

  // Calculate the time remaining until the deadline
  const deadline = new Date("May 15, 2025 23:59:00 PST");
  const now = new Date();
  const difference = deadline - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would submit the form data to a server here

    // Move to the next step
    if (step < 3) {
      setStep(step + 1);
    }
  };

  return (
    <section className="booking-form-section">
      <div className="booking-container">
        <div className="booking-left">
          {/* Advisor Images */}
          <div className="advisor-images">
            <img
              src="	https://tripleten.com/usa-assets/usa-main/tild3365-3730-4632-b566-633730636538__ellipse_150_1.png"
              alt="Advisor 1"
              className="advisor-img"
            />
            <img
              src="	https://tripleten.com/usa-assets/usa-main/tild3365-3730-4632-b566-633730636538__ellipse_150_1.png"
              alt="Advisor 2"
              className="advisor-img"
            />
            <img
              src="	https://tripleten.com/usa-assets/usa-main/tild3365-3730-4632-b566-633730636538__ellipse_150_1.png"
              alt="Advisor 3"
              className="advisor-img"
            />
          </div>

          {/* Booking Heading */}
          <h2 className="booking-heading">
            Book a call with an advisor
            <br />
            by May 15th to take{" "}
            <span className="discount-badge-booking">25% off</span>
            <br />
            your tuition!
          </h2>

          {/* Countdown Timer */}
          <div className="countdown-timer">
            <div className="timer-box">
              <div className="timer-value">{days}</div>
              <div className="timer-label">days</div>
            </div>
            <div className="timer-box">
              <div className="timer-value">{hours}</div>
              <div className="timer-label">hours</div>
            </div>
            <div className="timer-box">
              <div className="timer-value">{minutes}</div>
              <div className="timer-label">minutes</div>
            </div>
            <div className="timer-box">
              <div className="timer-value">{seconds}</div>
              <div className="timer-label">seconds</div>
            </div>
          </div>

          {/* Feature Points */}
          <div className="feature-points">
            <div className="feature-item">
              <div className="feature-icon">
                <Check />
              </div>
              <div className="feature-text">
                <span className="feature-title">
                  Guarantee: Job or 100% money back
                </span>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <Check />
              </div>
              <div className="feature-text">
                <span className="feature-title">
                  No IT or STEM background needed
                </span>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <Check />
              </div>
              <div className="feature-text">
                <span className="feature-title">
                  Remote program with personal support
                </span>
              </div>
            </div>
          </div>

          {/* Discount Terms */}
          <div className="discount-terms">
            Discount applies to Software Engineering, BI Analytics, Quality
            Assurance, Cyber Security, UX/UI Design, and Data Science programs.
            Book a call before 11:59 pm PST on May 15th, 2025, to qualify for
            the promotion. This offer is available to new students who enroll in
            the upfront and monthly payment options.
          </div>
        </div>

        <div className="booking-right">
          {/* Form Progress */}
          <div className="form-progress">
            <div className={`progress-step ${step >= 1 ? "active" : ""}`}>
              <div className="step-number">1</div>
              <div className="step-label">Contact details</div>
            </div>
            <div className="progress-line"></div>
            <div className={`progress-step ${step >= 2 ? "active" : ""}`}>
              <div className="step-number">2</div>
              <div className="step-label">Q&A</div>
            </div>
            <div className="progress-line"></div>
            <div className={`progress-step ${step >= 3 ? "active" : ""}`}>
              <div className="step-number">3</div>
              <div className="step-label">Call booking</div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="booking-form">
            {step === 1 && (
              <div className="form-step">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="First and last name"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="marketing"
                      checked={formData.marketing}
                      onChange={handleChange}
                      className="form-checkbox"
                    />
                    <span className="checkbox-text">
                      I consent to marketing calls and text messages, including
                      those made with an autodialed or artificial voice
                      messages. Message and data rates may apply. Unsubscribe
                      anytime per our{" "}
                      <a href="#privacy" className="form-link">
                        Privacy Policy
                      </a>
                      . Consent is not a condition of purchase.
                    </span>
                  </label>
                </div>

                <button type="submit" className="form-button">
                  Continue
                </button>

                <div className="form-footer">
                  By clicking 'Continue', you agree to FES's{" "}
                  <a href="#privacy" className="form-link">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="#terms" className="form-link">
                    Terms Of Use
                  </a>
                  .
                </div>
              </div>
            )}

            {/* Additional steps would be implemented here */}
            {step === 2 && (
              <div className="form-step">
                <h3 className="form-step-title">Tell us about your goals</h3>
                {/* Q&A form fields would go here */}
                <button type="submit" className="form-button">
                  Continue
                </button>
              </div>
            )}

            {step === 3 && (
              <div className="form-step">
                <h3 className="form-step-title">Choose a time for your call</h3>
                {/* Calendar booking interface would go here */}
                <button type="submit" className="form-button">
                  Book Call
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default BookingForm;
