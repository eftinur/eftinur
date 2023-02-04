import React from "react";
import "./Blogs.css";
import { motion } from "framer-motion";

const Blogs = () => {
  return (
    <motion.div
      initial={{ x: "-100vw " }}
      animate={{ x: 0 }}
      transition={{ duration: 1, type: "spring", bounce: 0.3 }}
      className="blogs_wrapper w-3/4 mx-auto min-h-screen flex justify-center items-center"
    >
      <p className="text-3xl lg:text-6xl">Coming Soon</p>
    </motion.div>
  );
};

export default Blogs;
