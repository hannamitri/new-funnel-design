import React, { useState } from "react";
import emojiClosedEyes from "../../assets/emojiClosedEyes.svg";
import "./AdmissionsContactForm.css";

const AdmissionsContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consent: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const progressSteps = [
    { number: 1, label: "Contact details", active: true },
    { number: 2, label: "Q&A", active: false },
    { number: 3, label: "Call booking", active: false },
  ];

  return (
    <div className="contact-form">
      <div className="contact-form__header">
        <h2 className="contact-form__title">
          Get all your questions
          <br />
          answered by our <br />
          admissions counselor
        </h2>
      </div>

      <div className="contact-form__container">
        <div className="contact-form__progress">
          {progressSteps.map((step, index) => (
            <div key={step.number} className="contact-form__progress-step">
              <div
                className={`contact-form__step-number ${
                  step.active ? "contact-form__step-number--active" : ""
                }`}
              >
                {step.number}
              </div>
              <div className="contact-form__step-label">{step.label}</div>

              {index < progressSteps.length - 1 && (
                <div className="contact-form__progress-line"></div>
              )}
            </div>
          ))}
        </div>

        <div className="contact-form__form">
          <div className="contact-form__input-group">
            <input
              type="text"
              name="name"
              placeholder="First and last name"
              className="contact-form__input"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="contact-form__input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="contact-form__input"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="contact-form__input-group">
            <div className="contact-form__phone-container">
              <span className="contact-form__phone-prefix">+1</span>
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                className="contact-form__input contact-form__input--phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="contact-form__checkbox-group">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              className="contact-form__checkbox"
              checked={formData.consent}
              onChange={handleInputChange}
            />
            <label htmlFor="consent" className="contact-form__checkbox-label">
              I consent to marketing calls and text messages, including those
              made with an autodialed or artificial voice messages. Message and
              data rates may apply. Unsubscribe anytime per our{" "}
              <a href="#" className="contact-form__link">
                Privacy Policy
              </a>
              . Consent is not a condition of purchase.
            </label>
          </div>

          <button className="contact-form__button" onClick={handleSubmit}>
            Continue
          </button>

          <p className="contact-form__disclaimer">
            By clicking 'Continue', you agree to TripleTen's{" "}
            <a href="#" className="contact-form__link">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="contact-form__link">
              Terms Of Use
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsContactForm;
