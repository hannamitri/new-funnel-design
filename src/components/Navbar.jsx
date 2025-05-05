import { ChevronDown } from "lucide-react";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../assets/Logo.png";
import React, { useEffect, useState } from "react";
import { IoKey } from "react-icons/io5";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = openModal ? "hidden" : "auto";
  }, [openModal]);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const programsDropdownItems = [
    "Web Development",
    "Data Science",
    "UX/UI Design",
    "Digital Marketing",
    "Cybersecurity",
  ];

  const whyUsDropdownItems = [
    "2025 Outcomes report",
    "Flexible payment options",
    "1000+ successful graduates",
    "Real industry experience",
    "One-on-one support",
    "Student reviews",
  ];

  const resourcesDropdownItems = [
    "Blog",
    "Tutorials",
    "Free courses",
    "Documentation",
    "Career advice",
  ];

  return (
    <>
      <div className={`${isScrolled ? "nav-replacement" : ""}`}> </div>
      <nav className={`nav ${isScrolled ? "solid" : ""}`}>
        <GiHamburgerMenu
          className={`burger ${isScrolled ? "solid" : ""}`}
          onClick={() => setOpenModal(true)}
        />
        <div
          className={`container nav__container nav-conatiner-burger ${
            isScrolled ? "solid" : ""
          }`}
        >
          <div className={`logo-links-wrapper ${isScrolled ? "solid" : ""}`}>
            <div className="nav__logo">
              <img src={Logo} className="logo" alt="Logo" />
            </div>
          </div>
          <ul className="nav__links">
            <li className="dropdown">
              <a
                href="#programs"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("programs");
                }}
                className="dropdown-toggle"
              >
                Programs
                <ChevronDown
                  size={16}
                  className={`dropdown-arrow ${
                    activeDropdown === "programs" ? "rotated" : ""
                  }`}
                />
              </a>
              {activeDropdown === "programs" && (
                <div className="dropdown-menu">
                  {programsDropdownItems.map((item, index) => (
                    <a key={index} href="#" className="dropdown-item">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </li>

            <li className="dropdown">
              <a
                href="#why-us"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("why-us");
                }}
                className="dropdown-toggle"
              >
                Why FES?
                <ChevronDown
                  size={16}
                  className={`dropdown-arrow ${
                    activeDropdown === "why-us" ? "rotated" : ""
                  }`}
                />
              </a>
              {activeDropdown === "why-us" && (
                <div className="dropdown-menu">
                  {whyUsDropdownItems.map((item, index) => (
                    <a key={index} href="#" className="dropdown-item">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </li>

            <li className="dropdown">
              <a
                href="#resources"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("resources");
                }}
                className="dropdown-toggle"
              >
                Resources
                <ChevronDown
                  size={16}
                  className={`dropdown-arrow ${
                    activeDropdown === "resources" ? "rotated" : ""
                  }`}
                />
              </a>
              {activeDropdown === "resources" && (
                <div className="dropdown-menu">
                  {resourcesDropdownItems.map((item, index) => (
                    <a key={index} href="#" className="dropdown-item">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </li>

            <li>
              <a href="#about">About</a>
            </li>
          </ul>
          <div className="buttons-wrapper">
            <button className="login-btn">
              Login
              <IoKey className="key" />
            </button>
            <button className="btn book-btn">Book Call</button>
          </div>

          {/* Mobile Modal Overlay */}
          {openModal && (
            <div className={`overlay open`} onClick={() => setOpenModal(false)}>
              <div
                className={`burger-modal open-modal`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="burger-modal-header">
                  <button
                    className="close-modal-btn"
                    onClick={() => setOpenModal(false)}
                  >
                    &times;
                  </button>
                </div>
                <ul className="burger-modal-links">
                  <li className="burger-modal-link-wrapper">
                    <h1>Programs</h1>
                    <a className="burger-modal-link" href="#programs">
                      Web Development
                    </a>
                    <a className="burger-modal-link" href="#programs">
                      Quality Assurance
                    </a>
                    <a className="burger-modal-link" href="#programs">
                      Business Intelligence Analytics
                    </a>
                    <a className="burger-modal-link" href="#programs">
                      Data Science
                    </a>
                    <a className="burger-modal-link" href="#programs">
                      Cyber Security
                    </a>
                    <a className="burger-modal-link" href="#programs">
                      UX/UI Design
                    </a>
                    <a className="burger-modal-link" href="#programs">
                      Not sure? Take our career quiz!
                    </a>
                  </li>
                  <li className="burger-modal-link-wrapper">
                    <h1>Why FES</h1>
                    <a className="burger-modal-link" href="#programs">
                      2025 Outcomes report
                    </a>
                    <a className="burger-modal-link" href="#programs">
                      Flexible payment options
                    </a>
                    <a className="burger-modal-link" href="#programs">
                      1000+ successful graduates
                    </a>
                    <a className="burger-modal-link" href="#programs">
                      Real industry experience
                    </a>
                    <a className="burger-modal-link" href="#programs">
                      One-on-one support
                    </a>
                    <a className="burger-modal-link" href="#programs">
                      Student reviews
                    </a>
                  </li>
                  <li className="burger-modal-link-wrapper">
                    <h1>Resources</h1>
                    <a className="burger-modal-link" href="#programs">
                      About TripleTen
                    </a>
                    <a className="burger-modal-link" href="#programs">
                      FAQ
                    </a>
                    <a className="burger-modal-link" href="#programs">
                      Documentation
                    </a>
                    <a className="burger-modal-link" href="#programs">
                      Career advice
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
