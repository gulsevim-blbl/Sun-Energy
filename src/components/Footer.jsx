import React from "react";
import "../styles/Footer.css";
import FooterLogo from "../assets/footerLogo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="About">
          <div className="logo">
            <img src={FooterLogo} alt="Logo" />
          </div>
          <span className="Lorem-ipsum-dolor-sit-amet-consectetuer-adipiscing-elit-Aenean-commodo">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo
          </span>
        </div>
        <div className="Info">
          <span className="Information">Information</span>
          <ul>
            <li>Industry analytics</li>
            <li>News and release</li>
            <li>Events</li>
            <li>About us</li>
          </ul>
        </div>
        <div className="Links">
          <span className="Useful-Links">Useful Links</span>
          <ul>
            <li>Services</li>
            <li>Partners</li>
            <li>Innovation</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="Contact">
          <span className="Contact">Contact</span>
          <ul>
            <li>Headquarters</li>
            <li>Manager</li>
            <li>Sales</li>
            <li>why Us</li>
          </ul>
        </div>
      </div>
      <div className="Bottom-section">
        <span className="Copyright-2022">Copyright &copy;2022</span>
        <span className="Terms">Terms</span>
        <span className="Privacy">Privacy</span>
        <span className="Policy-and-Cookie-Policy">
          Policy and Cookie Policy
        </span>
      </div>
    </div>
  );
};

export default Footer;
