import React from "react";
import "./Banner.css";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section id="banner" className="flex w-3/4 mx-auto">
      <motion.div
        initial={{ x: "-100vw " }}
        animate={{ x: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.3, delay: 1  }}
        className="banner_wrapper text-left flex flex-col justify-center text-3xl md:text-5xl leading-snug"
      >
        <h1>
          Hello, I'm Efti, a <br />
          developer with a passion for <br />
          building smooth interfaces.
        </h1>
        <button class="w-fit mt-10 text-sm">
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
