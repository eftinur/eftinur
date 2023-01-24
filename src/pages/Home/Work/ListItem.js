import React from "react";
import { Link } from "react-router-dom";
import './Work.css';

const listItem = ({project}) => {
  return (
    <div className="list__item">
      <img src={project.image} alt="" />
      <h4>{project.name}</h4>
      <Link>Front-end</Link>
      <Link>Backend</Link>
      <Link>Live-page</Link>
    </div>
  );
};

export default listItem;
