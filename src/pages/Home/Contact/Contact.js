import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact_wrapper w-3/4 mx-auto py-40 h-screen">
      <div>
        <h3>
          Let’s make something <br /> together, say hi!
        </h3>
        <p>
          Email:{" "}
          <a
            className="underline inline-block"
            href="mailto:eftinur90@gmail.com"
          >
            {" "}
            eftinur90@gmail.com
          </a>
        </p>
        <p className="social_media">
          On the internet:
          <a href="">
            <div className="flex items-center">
              <img
                className="w-8 h-8"
                src="https://img.icons8.com/color/96/null/linkedin.png"
                alt=""
              />
              <p>LinkedIn</p>{" "}
            </div>
          </a>
          <a href="">
            <div className="flex items-center">
              <img
                className="w-8 h-8"
                src="https://img.icons8.com/color/96/null/twitter--v1.png"
                alt=""
              />
              <p>Twitter</p>{" "}
            </div>
          </a>
          <a href="">
            <div className="flex items-center">
              <img
                className="w-8 h-8"
                src="https://img.icons8.com/fluency/96/null/github.png"
                alt=""
              />
              <p>GitHub</p>{" "}
            </div>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
