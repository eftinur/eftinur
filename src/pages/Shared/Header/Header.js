import React, { useContext } from "react";
import { Link } from "react-router-dom";
import eftiLogo from "../../../assets/efti__logo.png";
import "./Header.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { MOUSE_CONTEXT } from "../../../context/MouseContext";

const Header = () => {
  const { elementEnter, elementLeave } = useContext(MOUSE_CONTEXT);

  const menuItems = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>

      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  const [isActive, setIsActive] = useState(false);
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 115 }}
      className="navbar w-3/4 mx-auto px-0"
    >
      <Link className="w-20 flex justify-center items-center" to="/">
        <img
          onMouseEnter={elementEnter}
          onMouseLeave={elementLeave}
          className="w-full block -mb-1"
          src={eftiLogo}
          alt=""
        />
      </Link>
      <ul
        onClick={() => setIsActive(false)}
        className={isActive ? "nav-links-mobile" : "nav-links"}
      >
        <motion.li
          onMouseEnter={elementEnter}
          onMouseLeave={elementLeave}
          whileHover={{ scale: 1.3, originX: 0, color: "#6225E6" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link to="/home">Home</Link>
        </motion.li>
        <motion.li
          onMouseEnter={elementEnter}
          onMouseLeave={elementLeave}
          whileHover={{ scale: 1.3, originX: 0, color: "#6225E6" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link to="/projects">Projects</Link>
        </motion.li>
        <motion.li
          onMouseEnter={elementEnter}
          onMouseLeave={elementLeave}
          whileHover={{ scale: 1.3, originX: 0, color: "#6225E6" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link to="/contact">Contact</Link>
        </motion.li>
      </ul>
      <button
        onClick={() => setIsActive(!isActive)}
        className="toggle-btn bg-[#6225E6] px-2 py-2 text-white"
      >
        {isActive ? <FaTimes className="" /> : <FaBars />}
      </button>
    </motion.nav>
  );
};

export default Header;
