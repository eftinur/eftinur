import React from "react";
import "./Banner.css";
import { motion } from "framer-motion";
import { useContext } from "react";
import { MOUSE_CONTEXT } from "../../../context/MouseContext";

const Banner = () => {
  const { elementEnter, elementLeave } = useContext(MOUSE_CONTEXT);

  return (
    <section id="banner" className="flex w-3/4 mx-auto">
      <motion.div
        initial={{ x: "-100vw " }}
        animate={{ x: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.3, delay: 1 }}
        className="banner_wrapper text-left flex flex-col justify-center text-3xl md:text-4xl leading-snug"
      >
        <h1 onMouseEnter={elementEnter} onMouseLeave={elementLeave}>
          Hello, <br />
          I'm Efti, a web developer <br />
          with a passion for <br />
          building smooth interfaces.
        </h1>
        <button
          onMouseEnter={elementEnter}
          onMouseLeave={elementLeave}
          className="custom__btn my-8"
        >
          <a
            href="https://drive.google.com/file/d/185T9XOQdeFk4XEaUe_iMywocXg-7CIs2/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View resume
          </a>
        </button>
      </motion.div>
    </section>
  );
};

export default Banner;
