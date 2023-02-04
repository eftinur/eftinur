import React, { useContext } from "react";
import { MOUSE_CONTEXT } from "../../../context/MouseContext";
import "./Footer.css";

const Footer = () => {
  const { elementEnter, elementLeave } = useContext(MOUSE_CONTEXT);

  return (
    <footer className="footer_wrapper w-3/4 my-8 mx-auto">
      <div className="flex justify-between items-center flex-col md:flex-row text-xs">
        <p onMouseEnter={elementEnter} onMouseLeave={elementLeave}>
          Copyright © 2023 - All right reserved
        </p>
        <div className="flex items-center mx-auto md:mx-0">
          <p
            onMouseEnter={elementEnter}
            onMouseLeave={elementLeave}
            className="mr-3"
          >
            Connect:
          </p>
          <a
            onMouseEnter={elementEnter}
            onMouseLeave={elementLeave}
            href="https://www.linkedin.com/in/eftinur/"
            target="blank"
          >
            <img
              className="w-8 h-8"
              src="https://img.icons8.com/color/96/null/linkedin.png"
              alt=""
            />
          </a>
          <a
            onMouseEnter={elementEnter}
            onMouseLeave={elementLeave}
            href="https://twitter.com/eftinur90"
            target="blank"
          >
            <img
              className="w-8 h-8"
              src="https://img.icons8.com/color/96/null/twitter--v1.png"
              alt=""
            />
          </a>
          <a
            onMouseEnter={elementEnter}
            onMouseLeave={elementLeave}
            href="https://github.com/eftinur"
            target="blank"
          >
            <img
              className="w-8 h-8"
              src="https://img.icons8.com/fluency/96/null/github.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
