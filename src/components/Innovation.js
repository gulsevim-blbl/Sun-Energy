import React from "react";
import "../styles/Innovation.css";
import Button from "../assets/Ic_Arrow.png";
import InnovationImage from "../assets/Asset (1).png";

const Innovation = () => {
  return (
    <div className="innovation-container">
      <div className="innovation-image">
        <img src={InnovationImage} alt="resim" />
      </div>
      <div className="Content">
        <div className="Benefits">
          <header>
            <span className="benefits">BENEFITS</span>
            <div className="Line"></div>
          </header>
          <span className="Solving-the-energy-transition-trilemma">
            Solving the energy transition trilemma
          </span>
          <div className="Description">
            <span className="Learn-More">
              Learn More
              <img className="arrow-icon" src={Button} alt="button" />
            </span>
          </div>
        </div>
        <div class="Line-2"></div>
        <span class="Read-Digitals-new-white-paper-on-sustainability-and-profitability-and-understand-how-you-can-unlock">
          Read Digital's new white paper on sustainability and profitability and
          understand how you can unlock balanced energy and business models
          while better managing asset risk and carbon emissions.
        </span>
      </div>
    </div>
  );
};

export default Innovation;
