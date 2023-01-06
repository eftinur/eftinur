import React, { useEffect, useState } from "react";
import WorkCard from "./WorkCard";
import "./WorkItems.css";

const WorkItems = () => {
  const [projects, setprojects] = useState([]);
  useEffect(() => {
    fetch("https://eftinur-serv.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => setprojects(data));
  }, []);
  console.log(projects);

  return (
    <div className="work py-32">
      <h3 className="text-3xl w-3/4 mx-auto mb-12">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-3/4 mx-auto">
        {projects.map((project, index) => (
          <WorkCard key={index} project={project}></WorkCard>
        ))}
      </div>
    </div>
  );
};

export default WorkItems;
