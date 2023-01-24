import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ListItem from "./ListItem";
import "./Work.css";

const Work = () => {
  const [projects, setProjects] = useState();
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="work_wrapper w-3/4 mx-auto py-12 min-h-screen">
      <h3>Projects</h3>
      <div className="project__list grid grid-cols-2 gap-12 py-12">
        {
          projects?.map(project => <ListItem 
            key={project.id}
            project={project} ></ListItem>)
        }
      </div>
    </div>
  );
};

export default Work;
