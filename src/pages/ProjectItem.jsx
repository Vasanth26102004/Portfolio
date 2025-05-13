import React from "react";
import "./ProjectItem.css";

const ProjectItem = (props) => {
  return (
    import image from {props.image}
    <div className="project-element">
      <div className="laptop">
        <img src={image} alt="" />
      </div>
      <h2 id="name">{props.name}</h2>
      <p id="description">{props.description}</p>
      <p id="technologies">{props.technologies}</p>
      <div className="project-btn">
        <a href={props.repo}>
          <button id="repo-btn">GitHub</button>
        </a>
        <a href={props.preview}>
          <button id="preview-btn">Demo</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
