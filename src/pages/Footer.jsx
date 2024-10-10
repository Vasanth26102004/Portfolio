import React from "react";
import "./Footer.css";

import ig from "../assets/svg/instagram.svg";
import fb from "../assets/svg/facebook.svg";
import li from "../assets/svg/linkedin.svg";
import twt from "../assets/svg/twitter.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Designed and Developed by Vasanth</p>
      <p>Copyright &copy; 2024 Va</p>
      <div className="social-img">
        <a href=""><img src={ig} alt="" /></a>
        <a href=""><img src={fb} alt="" /></a>
        <a href=""><img src={li} alt="" /> </a>
        <a href=""><img src={twt} alt="" /></a>
      </div>
    </div>
  );
};

export default Footer;
