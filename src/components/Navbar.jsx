import {
  Star,
  Users,
  Code,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Book,
  Send,
  Github,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Logo from "../assets/Logo.png";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container nav__container">
        <div className="nav__logo">
          {/* <span className="text-primary">FES</span> */}
          <img src={Logo} className="logo" alt="" />
        </div>
        <ul className="nav__links">
          <li>
            <a href="#programs">Programs</a>
          </li>
          <li>
            <a href="#why-us">Why FES?</a>
          </li>
          <li>
            <a href="#resources">Resources</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact" className="btn btn-primary">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
