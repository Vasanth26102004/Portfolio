import React from "react";
import gif1 from "../assets/gif/gif1.gif";
import bggif from "../assets/gif/gear1.gif";
import pfp from "../assets/pfp.png";

import ig from "../assets/svg/instagram.svg";
import fb from "../assets/svg/facebook.svg";
import li from "../assets/svg/linkedin.svg";
import twt from "../assets/svg/twitter.svg";
import gh from "../assets/svg/github.svg";

import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="user-info">
      <img className="bg-img" src={bggif} alt="" />
        <div className="user-info-text">
          <h2>
            <span>Hi!</span> There<span>!</span>
            <img />
          </h2>
          <h2>
            I'm <span id="name">Vasanth</span>
          </h2>
          <p id="roles">Web Developer</p>
        </div>
        <div id="user-info-img">
          <img src={gif1} alt="" />
        </div>
      </div>

      <div className="intro">
        <div className="intro-text">
          <h3>
            let me <span> introduce </span> myself
          </h3>
          <p>
            I am a web developer with a passion for creating user-friendly and
            visually appealing websites.
          </p>
          <p>
            I fell in love with programming and I have at least learnt
            something, I think… 🤷‍♂️
          </p>
          <p>
            I am fluent in classics like <span> Java, Javascript and Python</span>.
          </p>
          <p>
            My field of Interest's are building new 
            <span> Web Technologies and Products </span> 
            and also in areas related to <span> Blockchain</span>.
          </p>
          <p>
            Whenever possible, I also apply my passion for developing products
            with <span> Node.js </span> and
            <span> Modern Javascript Library and Frameworks </span> like
            <span> React.js and Next.js </span>.
          </p>
        </div>
        <div className="intro-img">
          <img src={pfp} alt="" />
        </div>
      </div>
      
      <div className="find-me">
        <h1>find me on</h1>
        <p>Feel free to <span> connect </span> with me</p>
        <div className="find-me-img">
          <a href="https://github.com/vasanth26102004"><img src={gh} alt=""/></a>
          <a href="https://www.instagram.com/sketchy._ghost?utm_source=qr&igsh=MWIwZ2tmNHYzcWUweg=="><img src={ig} alt=""/></a>
          <a href="https://www.facebook.com/share/birB7YULcLQkghzL/?mibextid=qi2Omg"><img src={fb} alt=""/></a>
          <a href="https://www.linkedin.com/in/vasanth2610?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={li} alt=""/></a>
          <a href="https://x.com/Vasanth_2610"><img src={twt} alt=""/></a>
        </div>
      </div>
    </div>
  );
};

export default Home;
