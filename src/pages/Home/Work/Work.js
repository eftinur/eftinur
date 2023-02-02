import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ListItem from "./ListItem";
import "./Work.css";
import { motion, useAnimation } from "framer-motion";
import { useLocation } from "react-router-dom";

const Work = () => {
  const [projects, setProjects] = useState();
  const { pathname } = useLocation();
  console.log(projects);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div>
      {
        pathname.includes("home")
        ?
        <div className="work_wrapper w-3/4 mx-auto py-12 min-h-fit">
        <motion.h3
          initial={{ opacity: 0, y: "100px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: "100px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="project__list grid grid-cols-1 lg:grid-cols-3 place-items-center gap-12"
        >
          {projects?.map((project) => (
            <ListItem key={project.id} project={project}></ListItem>
          ))}
        </motion.div>
      </div>
      :
      <div className="work_wrapper w-3/4 mx-auto py-12 min-h-screen">
        <motion.h3
          initial={{ opacity: 0, y: "100px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: "100px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="project__list grid grid-cols-1 lg:grid-cols-3 place-items-center gap-12"
        >
          {projects?.map((project) => (
            <ListItem key={project.id} project={project}></ListItem>
          ))}
        </motion.div>
      </div>
      }
    </div>
  );
};

export default Work;
