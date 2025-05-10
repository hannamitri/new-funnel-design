import React, { useState } from "react";
import "./CareerSignup.css";
import girlOnIpad from "../../assets/girlOnIpad.webp";
import Nav from "../Navbar";

const CareerSignup = () => {
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
  };

  return (
    <>
      <Nav />
      <div className="career">
        <div className="career__content">
          <div className="career__promo">
            <div className="career__tag">
              <span className="career__heart-icon">♥</span> Free career event
            </div>

            <div className="career__image-container">
              <img
                src={girlOnIpad}
                alt="Person with laptop"
                className="career__image"
              />

              <div className="career__title-container">
                <h2 className="career__title">
                  Top 5<br />
                  high-paying
                  <br />
                  tech skills
                  <br />
                  for 2025
                </h2>
              </div>

              <div className="career__timer">Starts in 00:04:42</div>
            </div>

            <p className="career__subtitle">
              What to know before you switch to tech
            </p>
          </div>

          <div className="career__form-container">
            <h3 className="career__form-title">
              Reserve your spot and join us!
            </h3>

            <div className="career__form">
              <div className="career__input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="First and last name"
                  className="career__input"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="career__input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="career__input"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="career__input-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  className="career__input"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="career__checkbox-group">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  className="career__checkbox"
                  checked={formData.consent}
                  onChange={handleInputChange}
                />
                <label htmlFor="consent" className="career__checkbox-label">
                  I consent to marketing calls and text messages, including
                  those made with an autodialed or artificial voice messages.
                  Message and data rates may apply. Unsubscribe anytime per our{" "}
                  <a href="#" className="career__link">
                    Privacy Policy
                  </a>
                  . Consent is not a condition of purchase.
                </label>
              </div>

              <button className="career__button" onClick={handleSubmit}>
                Continue
              </button>

              <p className="career__disclaimer">
                By clicking 'Continue', you agree to FES's{" "}
                <a href="#" className="career__link">
                  Privacy Policy{" "}
                </a>
                and{" "}
                <a href="#" className="career__link">
                  Terms Of Use
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerSignup;
