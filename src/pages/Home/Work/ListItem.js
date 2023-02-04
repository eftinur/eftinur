import React from "react";
import "./Work.css";
import { motion } from "framer-motion";
import { useContext } from "react";
import { MOUSE_CONTEXT } from "../../../context/MouseContext";

const ListItem = ({ project }) => {
  const { elementEnter, elementLeave } = useContext(MOUSE_CONTEXT);
  return (
    <motion.div
      onMouseEnter={elementEnter}
      onMouseLeave={elementLeave}
      initial={{ opacity: 0, y: "300px" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="list__item"
    >
      <img src={project.image} alt="" />
      <h4 className="pt-4">{project.name}</h4>

      <motion.button
        whileHover={{ scale: 1.3, originX: 0, color: "#6225E6" }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex items-center w-fit py-3"
      >
        <a className="underline" href={project.page} target="blank">
          Go to website
        </a>
      </motion.button>
    </motion.div>
  );
};

export default ListItem;
