import React from "react";
import "./Footer.css";

import ig from "../assets/svg/instagram.svg";
import fb from "../assets/svg/facebook.svg";
import li from "../assets/svg/linkedin.svg";
import twt from "../assets/svg/twitter.svg";
import gh from "../assets/svg/github.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Designed and Developed by Vasanth</p>
      <p>Copyright &copy; 2024 Va</p>
      <div className="social-img">
        <a href="https://github.com/vasanth26102004/"><img src={gh} alt=""/></a>
        <a href="https://www.instagram.com/sketchy._ghost?utm_source=qr&igsh=MWIwZ2tmNHYzcWUweg=="><img src={ig} alt=""/></a>
        <a href="https://www.facebook.com/share/birB7YULcLQkghzL/?mibextid=qi2Omg"><img src={fb} alt=""/></a>
        <a href="https://www.linkedin.com/in/vasanth2610?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={li} alt=""/></a>
        <a href="https://x.com/Vasanth_2610"><img src={twt} alt=""/></a>
      </div>
    </div>
  );
};

export default Footer;
