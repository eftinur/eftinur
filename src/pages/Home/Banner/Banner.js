import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section id="banner" className="flex justify-center">
      <div className="banner_wrapper w-3/4 text-left flex flex-col justify-center text-5xl md:text-5xl">
        <h1>
          Hello, I'm Pieter, <br /> 
          developer with a passion for <br />
          building smooth interfaces.
        </h1>
        {/* <button class="text-lg mt-12">
          <a
            href="https://drive.google.com/file/d/185T9XOQdeFk4XEaUe_iMywocXg-7CIs2/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </button> */}

        {/* <button class="button w-fit mt-8">
          <span class="button_lg">
            <span class="button_sl"></span>
            <span class="button_text">Download Now</span>
          </span>
        </button> */}

        <button class="btn-link w-fit mt-10 text-sm">
          <a
            href="https://drive.google.com/file/d/185T9XOQdeFk4XEaUe_iMywocXg-7CIs2/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more
          </a>
        </button>
      </div>
    </section>
  );
};

export default Banner;
