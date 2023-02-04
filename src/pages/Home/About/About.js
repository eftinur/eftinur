import React, { useContext } from "react";
import "./About.css";
import { motion } from "framer-motion";
import aboutMe from "../../../assets/aboutMe__photo.png";
import { MOUSE_CONTEXT } from "../../../context/MouseContext";

const About = () => {
  const { elementEnter, elementLeave } = useContext(MOUSE_CONTEXT);

  return (
    <section className="py-12">
      <div className="about_brief w-3/4 mx-auto text-center">
        <motion.h3
          onMouseEnter={elementEnter}
          onMouseLeave={elementLeave}
          initial={{ opacity: 0, y: "100px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About
        </motion.h3>
        <div className="flex justify-center items-center flex-col">
          <motion.div
            initial={{ opacity: 0, y: "100px" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center w-full lg:w-2/4"
          >
            <figure>
              <img
                onMouseEnter={elementEnter}
                onMouseLeave={elementLeave}
                className="rounded-lg w-full mx-auto my-10"
                src={aboutMe}
                alt=""
              />
            </figure>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "100px" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <p onMouseEnter={elementEnter} onMouseLeave={elementLeave}>
              I am a Front-end Developer with a passion for modern technologies
              and I specialize in using HTML, CSS, JavaScript, ReactJS, and
              other MERN Stack technologies to create interactive and scalable
              web applications. I am currently seeking new opportunities to
              collaborate and contribute to innovative projects.
            </p>
            <p onMouseEnter={elementEnter} onMouseLeave={elementLeave}>
              I have excellent communication and interpersonal skills and am
              able to work well both individually and in a team. I’m a lifelong
              learner currently learning MaterialUI, Next.js, Socket.IO, and
              TypeScript. In my free time I love playing football, reading
              books, and cycling.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
