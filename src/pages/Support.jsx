import React from "react";
import "../styles/Support.css";
import SupportImage from "../assets/SupportImage.png";
import Arrow from "../assets/Arrow.png";
const Support = () => {
  return (
    <div className="support-container">
      <div className="SupportImage">
        <img src={SupportImage} alt="resim" />
      </div>
      <div className="Cardtwo">
        <span className="Partnering-to-drive-digitization-of-the-power-sector">
          Partnering to drive digitization of the power sector
        </span>
        <span className="In-partnership-with-some-of-the-worlds-largest-utilities-and-energy-producers-were-helping-to-dri">
          In partnership with some of the world’s largest utilities and energy
          producers, we’re helping to drive digitization. Model entire networks
          to help power utilities reduce costs.
        </span>
        <button>
          <span className="Learn-More-Support">Learn More</span>
          <img src={Arrow} alt="resim " />
        </button>
      </div>
    </div>
  );
};

export default Support;
