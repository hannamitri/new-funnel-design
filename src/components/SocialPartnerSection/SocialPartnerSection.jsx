import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import band from "../../assets/band.svg";
import "./SocialPartnerSection.css";
import emojiClosedEyes from "../../assets/emojiClosedEyes.svg";

const SocialPartnerSection = () => {
  return (
    <div className="social-partner-section">
      <div className="social-partner-section__social">
        <h2 className="social-partner-section__title">
          Get{" "}
          <span
            className="social-partner-section__emoji"
            role="img"
            aria-label="wink"
          >
            <img src={emojiClosedEyes} alt="" />
          </span>{" "}
          to know us on social media
        </h2>
        <div className="social-partner-section__icons">
          <a href="#" className="icon-btn">
            <FaFacebookF />
          </a>
          <a href="#" className="icon-btn">
            <FaInstagram />
          </a>
          <a href="#" className="icon-btn">
            <FaYoutube />
          </a>
          <a href="#" className="icon-btn">
            <FaTwitter />
          </a>
          <a href="#" className="icon-btn">
            <FaLinkedinIn />
          </a>
          <a href="#" className="icon-btn">
            <FaTiktok />
          </a>
        </div>
      </div>

      {/* ——— Partner CTA Block ——— */}
      <div className="social-partner-section__partner">
        <div className="partner__illustration">
          <img src={band} alt="People jamming & collaborating" />
        </div>
        <div className="partner__content">
          <h3 className="partner__title">
            Want to help get more folks into tech?
          </h3>
          <button className="partner__button">Partner with us</button>
        </div>
      </div>
    </div>
  );
};

export default SocialPartnerSection;
