import React, { useState } from "react";
import "./Resume.css";
import download from "../assets/svg/download.svg";
import resume from "../assets/vasanth.pdf";
import resumeimg from "../assets/vasanth.jpg";

const Resume = () => {
  return (
    <div className="resume">
      <a href={resume}>
          <img src={download} alt="" />
          Download
      </a>
      <img id="image" src={resumeimg} alt="" />
      <a href={resume}>
          <img src={download} alt="" />
          Download
      </a>
    </div>
  );
};

export default Resume;
