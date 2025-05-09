import React from "react";
import "./AfterFES.css";
import pfp from "../../assets/womanLaptop.webp";
import linkedIn from "../../assets/linkedIn.svg";
import github from "../../assets/github.svg";

const AfterFES = () => {
  return (
    <section className="after-FES">
      <div className="container">
        <h2 className="after-FES__title">You after FES</h2>

        <div className="after-FES__content">
          <div className="after-FES__profile">
            <div className="after-FES__avatar-container">
              <img
                src={pfp}
                alt="Software Engineer Profile"
                className="after-FES__avatar"
              />
            </div>

            <div className="after-FES__info">
              <h3 className="after-FES__role">Software Engineer</h3>

              <div className="after-FES__social">
                <a
                  href="#linkedin"
                  className="after-FES__social-link after-FES__social-link--linkedin"
                >
                  <span className="after-FES__social-icon">
                    <img src={linkedIn} alt="LinkedIn icon" />
                  </span>
                  LinkedIn
                </a>
                <a
                  href="#github"
                  className="after-FES__social-link after-FES__social-link--github"
                >
                  <span className="after-FES__social-icon">
                    <img src={github} alt="GitHub icon" />
                  </span>
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="after-FES__details">
            <div className="after-FES__column">
              <h4 className="after-FES__column-title">Education</h4>
              <div className="after-FES__education">
                <div className="after-FES__school">
                  FES Software Engineering Bootcamp
                </div>
                <div className="after-FES__period">Jan-Sept 2024</div>
              </div>
            </div>

            <div className="after-FES__column">
              <h4 className="after-FES__column-title">Expected salary</h4>
              <div className="after-FES__salary">$70,000</div>
            </div>
          </div>
        </div>

        <div className="after-FES__skills-container">
          <div className="after-FES__skills-column">
            <h4 className="after-FES__column-title">Hard Skills</h4>
            <div className="after-FES__skills-badges">
              <span className="after-FES__skill-badge after-FES__skill-badge--html">
                <span className="after-FES__skill-icon">▦</span> HTML
              </span>
              <span className="after-FES__skill-badge after-FES__skill-badge--css">
                <span className="after-FES__skill-icon">▦</span> CSS3
              </span>
              <span className="after-FES__skill-badge after-FES__skill-badge--js">
                <span className="after-FES__skill-icon">JS</span> JavaScript
              </span>
              <span className="after-FES__skill-badge after-FES__skill-badge--git">
                <span className="after-FES__skill-icon">▦</span> Git
              </span>
              <span className="after-FES__skill-badge after-FES__skill-badge--github">
                <span className="after-FES__skill-icon">▦</span> GitHub
              </span>
              <span className="after-FES__skill-badge after-FES__skill-badge--devtools">
                <span className="after-FES__skill-icon">▦</span> Chrome DevTools
              </span>
              <span className="after-FES__skill-badge after-FES__skill-badge--bash">
                <span className="after-FES__skill-icon">▦</span> Bash
              </span>
              <span className="after-FES__skill-badge after-FES__skill-badge--bem">
                <span className="after-FES__skill-icon">▦</span> BEM
              </span>
              <span className="after-FES__skill-badge after-FES__skill-badge--prettier">
                <span className="after-FES__skill-icon">▦</span> Prettier
              </span>
              <span className="after-FES__skill-badge after-FES__skill-badge--react">
                <span className="after-FES__skill-icon">▦</span> React
              </span>
              <span className="after-FES__skill-badge after-FES__skill-badge--node">
                <span className="after-FES__skill-icon">▦</span> Node.js and
                Express.js
              </span>
              <span className="after-FES__skill-badge after-FES__skill-badge--mongodb">
                <span className="after-FES__skill-icon">▦</span> MongoDB
              </span>
              <span className="after-FES__skill-badge after-FES__skill-badge--postman">
                <span className="after-FES__skill-icon">▦</span> Postman
              </span>
              <span className="after-FES__skill-badge after-FES__skill-badge--jest">
                <span className="after-FES__skill-icon">▦</span> Jest
              </span>
              <span className="after-FES__skill-badge after-FES__skill-badge--eslint">
                <span className="after-FES__skill-icon">▦</span> ESLint
              </span>
              <span className="after-FES__skill-badge after-FES__skill-badge--nginx">
                <span className="after-FES__skill-icon">▦</span> Nginx
              </span>
              <span className="after-FES__skill-badge after-FES__skill-badge--pm2">
                <span className="after-FES__skill-icon">▦</span> pm2
              </span>
              <span className="after-FES__skill-badge after-FES__skill-badge--certbot">
                <span className="after-FES__skill-icon">▦</span> Certbot
              </span>
              <span className="after-FES__skill-badge after-FES__skill-badge--webpack">
                <span className="after-FES__skill-icon">▦</span> Webpack
              </span>
              <span className="after-FES__skill-badge after-FES__skill-badge--figma">
                <span className="after-FES__skill-icon">▦</span> Figma
              </span>
            </div>
          </div>

          <div className="after-FES__skills-column">
            <h4 className="after-FES__column-title">Soft Skills</h4>
            <div className="after-FES__skills-badges">
              <span className="after-FES__skill-badge after-FES__skill-badge--soft">
                Teamwork
              </span>
              <span className="after-FES__skill-badge after-FES__skill-badge--soft">
                Problem solving
              </span>
              <span className="after-FES__skill-badge after-FES__skill-badge--soft">
                Time Management
              </span>
              <span className="after-FES__skill-badge after-FES__skill-badge--soft">
                Project Management
              </span>
              <span className="after-FES__skill-badge after-FES__skill-badge--soft">
                Adaptability
              </span>
            </div>
          </div>

          <div className="after-FES__skills-column">
            <h4 className="after-FES__column-title">Projects</h4>
            <div className="after-FES__project">
              <h5 className="after-FES__project-title">Web marketplace</h5>
              <p className="after-FES__project-description">
                740+ hours of coding in JavaScript, React.js, Node.js, HTML5,
                CSS3, BEM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterFES;
