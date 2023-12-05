import { Link } from "react-router-dom";
import projectdata from "../projectdata.json";

export default function ProjectGrid() {
  return (
    <div
      id="Project-grid"
      className="flex flex-row flex-wrap w-full justify-between pt-[80px] "
    >
      {projectdata.map((project, index) => (
        <Link
          key={index}
          to={`/project/${index}`}
          className="w-[48%] mb-8 pb-2 bg-zinc-500/80 backdrop-blur-10  rounded-xl drop-shadow-lg shadow-lg  transition-all delay-50 duration-500 hover:scale-105"
        >
          <div id="Project-card">
            <img
              src={project.image}
              alt={`Project ${index + 1}`}
              className="mb-2 rounded-xl rounded-br-none rounded-bl-none"
            />
            <h1 className="font-body font-medium pl-2 text-white">
              {project.title}
            </h1>
            <p className="font-body pl-2 text-white">{project.skills}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
