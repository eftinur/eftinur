import React from "react";
import { useLoaderData } from "react-router-dom";

const ProjectDetails = () => {
  const project = useLoaderData();
  console.log(project);
  const {
    details,
    img1,
    img2,
    img3,
    feature1,
    feature2,
    feature3,
    feature4,
    feature5,
    liveLink,
    gitClient,
    gitServer,
  } = project;
  return (
    <div className="w-3/4 mx-auto py-7">
      <div className="flex justify-evenly items-center flex-col lg:flex-row py-4 bg-base-200">
        <div className="w-full lg:w-2/4">
          <img src={img1} alt="" className="object-cover" />
        </div>
        <div className="w-full lg:w-1/3">
          <div className="py-4 lg:pb-4">
            <img src={img2} alt="" />
          </div>
          <div>
            {" "}
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
      <div className="mt-7">
        <h3 className="text-3xl">Project Details</h3>
        <p className="text-xl">{details}</p>
      </div>
      <div>
        <h3 className="text-3xl mt-7">Project Features</h3>
        <ul className="text-xl">
          <li>1. {feature1}</li>
          <li>2. {feature2}</li>
          <li>3. {feature3}</li>
          <li>3. {feature4}</li>
          <li>3. {feature5}</li>
        </ul>
        <button class="btn text-lg mt-12">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Link Link
          </a>
        </button>
        <button class="btn text-lg mt-12 mx-6">
          <a
            href={gitClient}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub-Client
          </a>
        </button>
        <button class="btn text-lg mt-12">
          <a
            href={gitServer}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub-Server
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
