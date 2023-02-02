import React from "react";
import { Link } from "react-router-dom";
import eftiLogo from "../../../assets/efti__logo.png";
import "./Header.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

const Header = () => {
  const menuItems = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>

      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  const [isActive, setIsActive] = useState(false);
  return (
    // <motion.div
    // initial={{ y: -100 }}
    // animate={{ y: 0 }}
    // transition={{ type: "spring", bounce: 0.3 }}
    // className="navbar w-3/4 mx-auto justify-between">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <label tabIndex={0} className="btn btn-ghost lg:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16"
    //           />
    //         </svg>
    //       </label>
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-compact dropdown-content mt-3 p-2 shadow text-[#363636] rounded-box w-52 text-lg"
    //       >
    //         {menuItems}
    //       </ul>
    //     </div>
    //     <a className="logo_title" href="/home">
    //       <img className="w-2/4 h-2/4" src={eftiLogo} alt="" />
    //     </a>
    //   </div>
    //   <div className="navbar-center hidden lg:flex">
    //     <ul className="menu menu-horizontal px-1 text-lg text-[#363636]">
    //       {menuItems}
    //     </ul>
    //   </div>
    // </motion.div>
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 115}}
      className="navbar w-3/4 mx-auto px-0"
    >
      <>
        <img className="w-24 h-24" src={eftiLogo} alt="" />
      </>
      <ul
        onClick={() => setIsActive(false)}
        className={isActive ? "nav-links-mobile" : "nav-links"}
      >
        <motion.li
          whileHover={{ scale: 1.3, originX: 0, color: "#6225E6" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link to="/home">Home</Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.3, originX: 0, color: "#6225E6" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link to="/projects">Projects</Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.3, originX: 0, color: "#6225E6" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link to="/blogs">Blogs</Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.3, originX: 0, color: "#6225E6" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link to="/contact">Contact</Link>
        </motion.li>
      </ul>
      <button onClick={() => setIsActive(!isActive)} className="toggle-btn">
        {isActive ? <FaTimes /> : <FaBars />}
      </button>
    </motion.nav>
  );
};

export default Header;
