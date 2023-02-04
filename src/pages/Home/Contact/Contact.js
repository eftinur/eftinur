import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { MOUSE_CONTEXT } from "../../../context/MouseContext";

const Contact = () => {
  const { pathname } = useLocation();
  const { elementEnter, elementLeave } = useContext(MOUSE_CONTEXT);
  return (
    <>
      {pathname.includes("contact") ? (
        <div className="contact_wrapper w-3/4 mx-auto flex items-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: "100px" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 onMouseEnter={elementEnter} onMouseLeave={elementLeave}>
              Let’s make something <br /> together, say hi!
            </h3>
            <p onMouseEnter={elementEnter} onMouseLeave={elementLeave}>
              Email:{" "}
              <a
                onMouseEnter={elementEnter}
                onMouseLeave={elementLeave}
                className="underline inline-block text-[#6225E6]"
                href="mailto:eftinur90@gmail.com"
              >
                {" "}
                eftinur90@gmail.com
              </a>
            </p>
            <p
              onMouseEnter={elementEnter}
              onMouseLeave={elementLeave}
              className="social_media"
            >
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
        </div>
      ) : (
        <div className="contact_wrapper w-3/4 mx-auto flex items-center py-12">
          <motion.div
            initial={{ opacity: 0, y: "100px" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 onMouseEnter={elementEnter} onMouseLeave={elementLeave}>
              Let’s make something <br /> together, say hi!
            </h3>
            <p onMouseEnter={elementEnter} onMouseLeave={elementLeave}>
              Email:{" "}
              <motion.a whileHover={{ scale: 1.3, originX: 0, color: "#6225E6" }}
                  transition={{ type: "spring", stiffness: 300 }}
                className="underline inline-block text-[#6225E6]"
                href="mailto:eftinur90@gmail.com"
              >
                {" "}
                eftinur90@gmail.com
              </motion.a>
            </p>
            <p
              onMouseEnter={elementEnter}
              onMouseLeave={elementLeave}
              className="social_media"
            >
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
        </div>
      )}
    </>
  );
};

export default Contact;
