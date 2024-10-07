import React from "react";
import "./About.css"

import gif3 from "../assets/gif/gif3.gif";

import java from "../assets/langs/java.png";
import python from "../assets/langs/python.png";
import reacticon from "../assets/langs/react.png";
import node from "../assets/langs/node.png";
import express from "../assets/langs/express.png";
import html from "../assets/langs/html.png";
import css from "../assets/langs/css.png";
import js from "../assets/langs/js.png";
import oracle from "../assets/langs/oracle.png";
import mongodb from "../assets/langs/mongodb.png";
import tailwind from "../assets/langs/tailwind.png";
import bootstrap from "../assets/langs/bootstrap.png";

import vscode from "../assets/vscode.png";
import windows from "../assets/windows.png";
import postman from "../assets/postman.png";
import github from "../assets/github.png";
import gitbash from "../assets/gitbash.png";


const About = () => {
  return (
    <div className="About">
      <div className="about-container">
        <div className="about-text">
        <div className="content">
          <h1>Know Who <span>I'M</span></h1>
          <br />
          <p id="text">
            Hi Everyone, I am <span>Vasanth</span> from <span>Tamil Nadu, India</span>.
            <br />
            I am currently unemployed and looking for a Job.
            <br />
            I have completed Integrated <span>BSc</span> in <span>Computer Science</span>. 
            <br />
            <br />
            Apart from coding, some <span>other activities</span> that I love to do!.
          </p>
          <ul>
            <li>Playing Vollyball</li>
            <li>Drawing Sketches</li>
            <li>Travelling</li>
          </ul>
          <div>
            <p id="slogan">"Strive to build things that make a difference!"<br/> -Soumyajit</p>
          </div>
          </div>
          <div className="image">
          <img src={gif3} alt="" /></div>
        </div>
        <div className="about-tech">
          <h1 id="skills">Professional <span>Skillsets</span></h1>
          <div className="langs">
          <span><img src={java} alt="" /></span>
          <span><img src={python} alt=""/></span>
          <span><img src={reacticon} alt="" /></span>
          <span><img src={node} alt="" /></span>
          <span><img src={express} alt="" /></span>
          <span><img src={html} alt="" /></span>
          <span><img src={css} alt="" /></span>
          <span><img src={js} alt="" /></span>
          <span><img src={mongodb} alt="" /></span>
          <span><img src={oracle} alt="" /></span>
          <span><img src={tailwind} alt="" /></span>
          <span><img src={bootstrap} alt="" /></span>
          </div>
        </div>
        <div className="about-tools">
          <h1 id="tools"><span>Tools</span> I Use</h1>
          <div className="tools">
          <span><img src={windows} alt=""/></span>
          <span><img src={vscode} alt=""/></span>
          <span><img src={postman} alt=""/></span>
          <span><img src={github} alt=""/></span>
          <span><img src={gitbash} alt=""/></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
