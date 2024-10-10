import React, { useState, useEffect } from "react";
import "./Project.css";
import project from "../project";
import ProjectItem from "./ProjectItem";

const Project = () => {
  const [projectData, setProjectData] = useState([]);
  return (
    <div className="project">
      <h1>
        My Recent <span>Works</span>
      </h1>
      <p>Here are some Projects that i've worked on</p>
      <div className="project-content">
        {project.length > 0 ? (
          project.map((item, i) => (
            <div className="each-project" key={i}>
              <ProjectItem
                id={item.id}
                name={item.name}
                description={item.description}
                technologies={item.technologies}
                image={item.image}
                repo={item.repo}
                preview={item.preview}
              />
            </div>
          ))
        ) : (
          <div className="no-project">
            <p>No Project Available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
