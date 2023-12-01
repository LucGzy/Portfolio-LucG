import { useParams } from "react-router-dom";
import projectdata from "../projectdata.json";
import Slider from "../components/Slider";

export default function ProjectPage() {
  const { index } = useParams();
  const project = projectdata[index];

  if (!project) {
    // Handle case when project is not found
    return <div>Project not found</div>;
  }

  // Render your ProjectPage component using the project data
  return (
    <div
      className=" p-10 min-h-screen
    h-full flex flex-col w-full bg-gradient-to-br from-blue-900 to-purple-900 items-center justify-center"
    >
      <h1 className="pb-8 font-body text-white text-xl">{project.title}</h1>
      <Slider images={project.additionalimages} />
      <p className="font-body text-white pt-8">{project.details}</p>
      <a className="pt-2 font-body text-white" href={project.link}>
        {project.link}
      </a>
    </div>
  );
}
