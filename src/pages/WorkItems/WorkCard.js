import React from "react";
import { Link } from "react-router-dom";

const WorkCard = ({ project }) => {
  //   const { id, name, details, image } = project;
  console.log(project);
  return (
    <div className="flex flex-col items-center">
      <div className="top">
        <img className="w-full" src={project.image} alt="Shoes" />
      </div>
      <div className="bottom h-full bg-white shadow-xl px-6 py-4">
        <h2 className="card-title mb-4">{project.name}</h2>
        <p>{project.details}</p>
        <Link
          to={`/projects/${project.id}`}
          className="btn btn-link common-btn w-fit capitalize rounded-none px-0 text-[#FF4655]"
        >
          Click here
        </Link>

        {/* <Link
          to={`/projects/${project.id}`}
          className="w-fit mt-8 capitalize rounded-none"
        >
          <button class="button w-fit mt-8">
            <span class="button_lg">
              <span class="button_sl"></span>
              <span class="button_text">Click here</span>
            </span>
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default WorkCard;
