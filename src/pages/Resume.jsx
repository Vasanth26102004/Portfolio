import React, { useState } from "react";
import "./Resume.css";
import download from "../assets/svg/download.svg";
import resume from "../assets/vasanth.pdf";
import resumeimg from "../assets/vasanth.jpg";

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div className="resume">
      <a href={resume}>
          <img src={download} alt="" />
          Download
      </a>
      <img src={resumeimg} alt="" width='800px'/>
      <a href={resume}>
          <img src={download} alt="" />
          Download
      </a>
    </div>
  );
};

export default Resume;
