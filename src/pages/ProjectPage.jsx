import { Link, useNavigate, useParams } from "react-router-dom";
import projectdata from "../projectdata.json";
import Slider from "../components/Slider";
import "react-icons/fa";
import { FaArrowDown, FaArrowLeft, FaArrowUp } from "react-icons/fa";

export default function ProjectPage() {
  const { index } = useParams();
  const project = projectdata[index];
  const NbofProject = projectdata.length;
  const Navigate = useNavigate();
  console.log(NbofProject);
  console.log(String(NbofProject));

  if (!project) {
    Navigate("/404");
  }

  return (
    <div
      className=" p-10 min-h-screen
    h-scren flex flex-col w-full bg-gradient-to-br from-blue-900 to-purple-900 items-center justify-center pt-24 "
    >
      <a
        className=" justify-center items-center flex flex-row absolute top-2 left-24 text-5xl text-white bp3:left-10 bp4:left-2"
        href={"/Portfolio-LucG/"}
      >
        <FaArrowLeft />
        <p className="text-xl pl-4">Home</p>
      </a>
      <div className="flex flex-col slide-in items-center justify-center">
        <h1 className="pb-8 font-body text-white text-xl">{project.title}</h1>
        <Slider images={project.additionalimages} />
        <p className="font-body text-white pt-8 w-[55%] mb-5 bp3:w-[70%] bp5:w-[90%] bp5:text-justify">
          {project.details}
        </p>
        <div className="flex flex-col items-center">
          <p className=" font-body mr-2">Github Repo</p>
          <a
            className="pt-2 font-body text-white bg-zinc-400 rounded-lg mb-2 p-2"
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            {project.link}
          </a>
        </div>
        {project.liveversion && (
          <div className="flex flex-col items-center">
            <p className=" font-body mr-2"> Live Version</p>
            <a
              className="pt-2 font-body text-white bg-zinc-400 rounded-lg p-2 bp3:mb-36"
              href={project.liveversion}
              target="_blank"
              rel="noreferrer"
            >
              {project.liveversion}
            </a>
          </div>
        )}
      </div>
      <div>
        <p className="slide-inprojects h-fit absolute  top-[85%] font-body text-white left-64 bp3:bottom-0 bp3:left-[61%] ">
          Projects
        </p>
        <Link
          className=" flex flex-col items-center absolute bottom-5 left-24 text-5xl text-white  bp3:left-[40%]"
          style={{ opacity: index === String(NbofProject - 1) ? 0.5 : 1 }}
          to={
            index === String(NbofProject - 1)
              ? "#"
              : `/project/${Number(index) + 1}`
          }
          disabled={index === String(NbofProject - 1)}
        >
          <FaArrowDown />
          <p className="text-lg">Next</p>
        </Link>
        <Link
          className={`flex flex-col items-center absolute bottom-5 left-48 text-5xl text-white  bp3:left-[55%] 
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
