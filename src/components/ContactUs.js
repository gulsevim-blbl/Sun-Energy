import React from "react";
import ContactUs from "../styles/ContactUs.css";
import contactusİmage from "../assets/contactUs.png";
import contactusinfo from "../assets/ContactInfo.png";
const ContactUS = () => {
  return (
    <div className="contact-us-container">
      <img className="contactusimage" src={contactusİmage} alt="resim" />
      <img className="contactusinfo" src={contactusinfo} alt="info" />
      <div className="contactusform">
        <div className="ContentTextForm">
          <div className="HeadingContent">
            <span className="Contact-us">Contact us</span>
            <span className="The-Big-Oxmox-advised-her-not-to-do-so-because-there-were-thousands-of-bad-Commas-wild-Question-Ma">
              The Big Oxmox advised her not to do so, because there were
              thousands of bad Commas, wild Question Marks and devious Semikoli.
            </span>
          </div>
          <div className="wrapper">
            <div className="Inputs">
              <div className="Input-box-name">
                <span className="Your-name">Your Name</span>
              </div>
              <div className="Input-box-email">
                <span className="Your-Email-Address"> Your Email Address</span>
              </div>
              <div className="Input_box">
                <span className="Question">Question</span>
              </div>
            </div>
            <button className="contactButton">
              <span className="Send-Question">Send Question</span>
              <div className="arrow">
                <div className="arrow-right"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
