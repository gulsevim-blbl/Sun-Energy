import React from "react";
import "../styles/Services.css";
import Cloud from "../assets/Cloud.png";
import Image1 from "../assets/ServicesImage.png";
import Image2 from "../assets/ServicesImageiki.png";
import HydoPower from "../assets/Hydro Power.png";
import Blur from "../assets/blur.png";
import More from "../assets/Ic_Arrow.png";

const Services = () => {
  return (
    <div className="services-container">
      <div className="cloud">
        <img src={Cloud} alt="Bulut"></img>
      </div>
      <div className="blur">
        <img src={Blur} alt="Blur" />
      </div>
      <div className="services-image1">
        <img src={Image1} alt="resim" />
      </div>
      <div className="services-image2">
        <img src={Image2} alt="resim2" />
      </div>
      <div className="hypor-power">
        <img src={HydoPower} alt="Hypor Power" />
      </div>
      <div className="text">
        <span className="text1">
          Decarbonization is mission, critical for the planet
        </span>
        <div className="Learn-More">
          <a href="/">
            <span className="More">Learn More</span>
            <img src={More} alt="More Icon" />
          </a>
        </div>
        <div className="Description">
          <span className="The-global-energy-landscape-will-change-more-in-the-next-10-years-than-in-the-previous-hundred-As-t">
            The global energy landscape will change more in the next 10 years
            than in the previous hundred. As the world’s energy sector moves
            away from fossil fuels toward renewable energy sources, industrial
            companies are challenged with addressing this transition in
            transformative ways.
          </span>
          <span className="Renewable-Energy-harnesses-the-earths-most-abundant-resources-the-strength-of-the-wind-the-heat">
            Renewable Energy harnesses the earth’s most abundant resources – the
            strength of the wind, the heat of the sun, ,and the force of water;
            delivering green electrons to power the world’s biggest economies
            and the most remote communities.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Services;
