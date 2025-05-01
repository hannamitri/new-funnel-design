import React from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
} from "lucide-react";
// import { FaTiktok } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Footer Navigation */}
        <div className="footer-nav">
          {/* Programs Column */}
          <div className="footer-col">
            <h3 className="footer-heading">Beginner-friendly tech bootcamps</h3>
            <ul className="footer-links">
              <li>
                <a href="/data-science">Part-time Data Science bootcamp</a>
              </li>
              <li>
                <a href="/software-engineering">
                  Part-time Software Engineering bootcamp
                </a>
              </li>
              <li>
                <a href="/quality-assurance">
                  Part-time Quality Assurance bootcamp
                </a>
              </li>
              <li>
                <a href="/bi-analytics">Part-time BI Analytics bootcamp</a>
              </li>
              <li>
                <a href="/cyber-security">Part-time Cyber Security bootcamp</a>
              </li>
              <li>
                <a href="/ux-ui-design">Part-time UX/UI Design bootcamp</a>
              </li>
              <li>
                <a href="/intro-sql">Free Intro to SQL</a>
              </li>
              <li>
                <a href="/career-quiz">Can't decide? Take a career quiz!</a>
              </li>
            </ul>
          </div>

          {/* Why FES Column */}
          <div className="footer-col">
            <h3 className="footer-heading">Why FES</h3>
            <ul className="footer-links">
              <li>
                <a href="/real-experience">Real industry experience</a>
              </li>
              <li>
                <a href="/support">One-on-one support</a>
              </li>
              <li>
                <a href="/payment-options">Flexible payment options</a>
              </li>
              <li>
                <a href="/graduates">1000+ successful graduates</a>
              </li>
              <li>
                <a href="/outcomes">2025 Outcomes report</a>
              </li>
              <li>
                <a href="/comparison">Comparison</a>
              </li>
              <li>
                <a href="/reviews">Student reviews</a>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div className="footer-col">
            <h3 className="footer-heading">About FES</h3>
            <ul className="footer-links">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
              <li>
                <a href="/support">Support</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/podcast">Podcast</a>
              </li>
              <li>
                <a href="/universities">For universities</a>
              </li>
              <li>
                <a href="/sitemap">Site map</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <div className="contact-item">
            <h4 className="contact-heading">support@fes.com</h4>
            <p className="contact-text">For all your questions</p>
          </div>

          <div className="contact-item">
            <h4 className="contact-heading">press@fes.com</h4>
            <p className="contact-text">For all media inquiries</p>
          </div>

          <div className="contact-item">
            <h4 className="contact-heading">+1 (800) 736-4461</h4>
            <p className="contact-text">9am-8pm ET, Mon-Thu</p>
            <p className="contact-text">9am-6pm ET, Fri-Sun</p>
          </div>

          <div className="contact-item">
            <p className="contact-text address">
              1603 Capitol Ave,
              <br />
              Suite #512A, Cheyenne,
              <br />
              WY 82001
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <a
            href="https://facebook.com/fes"
            className="social-icon"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://instagram.com/fes"
            className="social-icon"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://youtube.com/fes"
            className="social-icon"
            aria-label="YouTube"
          >
            <Youtube size={20} />
          </a>
          <a
            href="https://twitter.com/fes"
            className="social-icon"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://linkedin.com/company/fes"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          {/* <a
            href="https://tiktok.com/@fes"
            className="social-icon"
            aria-label="Tiktok"
          >
            <FaTiktok size={24} />
          </a> */}
        </div>

        {/* Legal Footer */}
        <div className="footer-legal">
          <p className="copyright">© FES, {currentYear}</p>

          <div className="legal-links">
            <a href="/terms">Terms of use</a>
            <a href="/code-of-conduct">Code of Conduct</a>
            <a href="/regulatory">Regulatory Information</a>
            <a href="/referral">Referral program</a>
            <a href="/privacy">Privacy policy</a>
            <a href="/cookies">Manage cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
