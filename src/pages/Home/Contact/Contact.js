import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="contact_wrapper w-3/4 mx-auto flex items-center h-screen">
      <motion.div
      initial={{ x: '-100vw '}}
      animate={{ x: 0 }}
      transition={{ duration: 1, type: "spring", bounce: 0.3 }}
      >
        <h3>
          Let’s make something <br /> together, say hi!
        </h3>
        <p>
          Email:{" "}
          <a
            className="underline inline-block text-[#6225E6]"
            href="mailto:eftinur90@gmail.com"
          >
            {" "}
            eftinur90@gmail.com
          </a>
        </p>
        <p className="social_media">
          On the internet:
          <a href="https://www.linkedin.com/in/eftinur/" target="blank">
            <motion.div
              whileHover={{ scale: 1.3, originX: 0, color: "#6225E6" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center w-fit"
            >
              <img
                className="w-8 h-8"
                src="https://img.icons8.com/color/96/null/linkedin.png"
                alt=""
              />
              <p>LinkedIn</p>{" "}
            </motion.div>
          </a>
          <a href="https://twitter.com/eftinur90" target="blank">
            <motion.div
              whileHover={{ scale: 1.3, originX: 0, color: "#6225E6" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center w-fit"
            >
              <img
                className="w-8 h-8"
                src="https://img.icons8.com/color/96/null/twitter--v1.png"
                alt=""
              />
              <p>Twitter</p>{" "}
            </motion.div>
          </a>
          <a href="https://github.com/eftinur" target="blank">
            <motion.div
              whileHover={{ scale: 1.3, originX: 0, color: "#6225E6" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center w-fit"
            >
              <img
                className="w-8 h-8"
                src="https://img.icons8.com/fluency/96/null/github.png"
                alt=""
              />
              <p>GitHub</p>{" "}
            </motion.div>
          </a>
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
