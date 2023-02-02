import React from "react";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about_brief w-3/4 mx-auto text-center">
      <motion.h3
        initial={{ opacity: 0, y: "100px" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, y: "100px" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p>
          I am a Front-end Developer with a passion for modern technologies and
          I specialize in using HTML, CSS, JavaScript, ReactJS, and other MERN
          Stack technologies to create interactive and scalable web
          applications. I am currently seeking new opportunities to collaborate
          and contribute to innovative projects.
        </p>
        <p>
          I have excellent communication and interpersonal skills and am able to
          work well both individually and in a team. I’m a lifelong learner
          currently learning MaterialUI, Next.js, Socket.IO, and TypeScript. In
          my free time I love playing football, reading books, and cycling.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
