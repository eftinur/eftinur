import React from "react";
import "./Work.css";
import { a } from "react-router-dom";

const listItem = ({ project }) => {
  return (
    <div className="list__item">
      <img src={project.image} alt="" />
      <h4 className="pt-4">{project.name}</h4>

      <div className="flex items-center">
        <p className="pr-3">Visit: </p>
        <a href={project.page} target="blank">
          <img
            className="w-6 h-6 mr-3"
            src="https://img.icons8.com/color/48/null/web.png"
            alt=""
          />
        </a>
        <a href={project.frontend} target="blank">
          <img
            className="w-6 h-6 mr-3"
            src="https://img.icons8.com/fluency/96/null/github.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default listItem;
