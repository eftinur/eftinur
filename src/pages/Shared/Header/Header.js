import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import nurLogo from '../../../assets/nur_logo.png'
import './Header.css';

const Header = () => {
  const menuItems = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      {/* <li>
        <HashLink to="/#about">About</HashLink>
      </li> */}
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/contact">Contact Me</Link>
      </li>
    </>
  );
  return (
    <div className="navbar w-3/4 mx-auto justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow text-[#363636] rounded-box w-52 text-lg"
          >
            {menuItems}
          </ul>
        </div>
        <a className="logo_title normal-case text-2xl" href="/home"><img className="w-28 h-28" src={nurLogo} alt="" /></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg text-[#363636]">
          {menuItems}
        </ul>
      </div>
      
    </div>
  );
};

export default Header;
