import { ChevronDown } from "lucide-react";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../assets/Logo.png";
import React, { useEffect, useState } from "react";

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
    <nav className={`nav ${isScrolled ? "solid" : "transparent"}`}>
      <div className={`container nav__container nav-conatiner-burger`}>
        <div
          className={`logo-links-wrapper ${
            isScrolled ? "solid" : "transparent"
          }`}
        >
          <div className="nav__logo">
            <img src={Logo} className="logo" alt="Logo" />
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
        </div>

        <button className="btn book-btn">Book Call</button>
        <GiHamburgerMenu
          className="burger"
          onClick={() => setOpenModal(true)}
        />

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
                <li>
                  <a href="#programs" onClick={() => setOpenModal(false)}>
                    Programs
                  </a>
                </li>
                <li>
                  <a href="#why-us" onClick={() => setOpenModal(false)}>
                    Why FES?
                  </a>
                </li>
                <li>
                  <a href="#resources" onClick={() => setOpenModal(false)}>
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={() => setOpenModal(false)}>
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
