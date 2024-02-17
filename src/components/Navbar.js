import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import Icon from "../assets/Icon.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import { FaHome } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { RiExchangeFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { SiAboutdotme } from "react-icons/si";
import { MdContactMail } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const Options = [
    {
      text: "Home",
      icon: <FaHome />,
    },
    {
      text: "Services",
      icon: <MdOutlineMiscellaneousServices />,
    },
    {
      text: "Partners",
      icon: <FaUserCircle />,
    },
    {
      text: "Innovation",
      icon: <RiExchangeFill />,
    },
    {
      text: "Support",
      icon: <BiSupport />,
    },
    {
      text: "About",
      icon: <SiAboutdotme />,
    },
    {
      text: "Contact",
      icon: <MdContactMail />,
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="Sun Energy" />
      </div>
      <div className="navbar-links-container">
        <a href="/">Home</a>
        <a href="/Services">Services</a>
        <a href="/Partners">Partners</a>
        <a href="/Innovation">Innovation</a>
        <a href="/Support">Support</a>
        <a href="/About">About Us</a>
      </div>
      <div className="contact-container">
        <a href="/Contact">
          <span>Contact Us</span>
          <img src={Icon} alt="Contact Icon" />
        </a>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpen(true)} />
      </div>
    </nav>
  );
};

export default Navbar;
