import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import Ic_Globe from "../assets/Ic_Globe.png";
import Video from "../assets/Video.png";
import Container from "../assets/Container.png";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="title">
        <span className="RENEWABLE-ENERGY">RENEWABLE-ENERGY</span>
        <span className="Digital-in-the-Future-of-Energy">
          Digital in the Future of Energy
        </span>
      </div>
      <div className="Heading">
        <span className="Enable-reliable-cost-effective-and-dispatchable-power">
          Enable reliable, cost effective and dispatchable power
        </span>
        <span className="Sun-Energy-has-accumulated-more-than-9-gigawatts-of-total-global-installed-base-and-backlog-for-its">
          Sun Energy has accumulated more than 9 gigawatts of total global
          installed base and backlog for its inverter technology...
        </span>
        <button>
          <img src={Ic_Globe} alt="Save Earth Icon" />
          Save Earth
        </button>
      </div>
      <div className="Card">
        <div className="Stats">
          <span className="M">10M+</span>
          <span className="Worldwide-product-sales-per-year">
            Worldwide product sales per year
          </span>
        </div>
        <div className="Image">
          <img src={Video} alt="Video" />
        </div>
      </div>
      <div className="Container">
        <div className="Image">
          <img src={Container} alt="Container" />
          <span className="Reducing-carbon-and-costs-while-providing-sustainable-reliable-and-affordable-power">
            Reducing carbon and costs while providing sustainable, reliable, and
            affordable power
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
