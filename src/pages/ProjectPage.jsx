import { Link, useNavigate, useParams } from "react-router-dom";
import projectdata from "../projectdata.json";
import Slider from "../components/Slider";
import "react-icons/fa";
import { FaArrowDown, FaArrowLeft, FaArrowUp } from "react-icons/fa";

export default function ProjectPage() {
  const { index } = useParams();
  const project = projectdata[index];
  const Navigate = useNavigate();

  if (!project) {
    Navigate("/404");
    return <div>Project not found</div>;
  }

  // Render your ProjectPage component using the project data
  return (
    <div
      className=" p-10 min-h-screen
    h-full flex flex-col w-full bg-gradient-to-br from-blue-900 to-purple-900 items-center justify-center "
    >
      <a
        className=" justify-center items-center flex flex-row absolute top-2 left-24 text-5xl text-white"
        href={"/"}
      >
        <FaArrowLeft />
        <p className="text-xl pl-4">Home</p>
      </a>
      <div className="flex flex-col project-page items-center justify-center">
        <h1 className="pb-8 font-body text-white text-xl">{project.title}</h1>
        <Slider images={project.additionalimages} />
        <p className="font-body text-white pt-8 w-[55%] mb-5">
          {project.details}
        </p>
        <a
          className="pt-2 font-body text-white bg-zinc-400 rounded-lg p-2"
          href={project.link}
        >
          {project.link}
        </a>
      </div>
      <div>
        <p className="absolute  top-[85%] font-body text-white left-36  ">
          Projects
        </p>
        <Link
          className=" flex flex-col items-center absolute top-100 left-24 text-5xl text-white "
          to={`/project/${Number(index) + 1}`}
        >
          <FaArrowDown />
          <p className="text-lg">Next</p>
        </Link>
        <Link
          className={`flex flex-col items-center absolute top-100 left-48 text-5xl text-white
          `}
          style={{ opacity: index === "0" ? 0.5 : 1 }}
          to={index === "0" ? "#" : `/project/${Number(index) - 1}`}
          disabled={index === "0"}
        >
          <FaArrowUp />
          <p className="text-lg">Previous</p>
        </Link>
      </div>
    </div>
  );
}
