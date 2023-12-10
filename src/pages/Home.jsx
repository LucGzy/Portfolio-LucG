import LeftsideBlock from "../components/LeftsideBlock";
import ProjectGrid from "../components/Projects";
import RighsideBlock from "../components/RightsideBlock";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div
      className=" p-10 min-h-screen
      h-full flex flex-col w-full bg-gradient-to-br from-blue-900 to-purple-900 bp5:p-2"
    >
      <div
        id="Info-Block"
        className=" relative h-fit flex flex-row justify-around align-middle bp5:flex-col bp5:items-center"
      >
        <LeftsideBlock />
        <div className="">
          <p className=" z-[1] font-body text-8xl absolute top-[10%] translate-x-[50%] bp1:text-6xl bp3:text-4xl bp5:hidden">
            Portfolio
          </p>
          <p className=" z-[1] font-body text-8xl absolute top-[45%] translate-x-[-56.5%] bp1:text-6xl bp3:text-4xl bp4:translate-x-[-56%] bp5:pl-8 bp5:top-12 bp5:text-white bp5:text-lg">
            Luc Gouzy
          </p>
          <p className=" z-[1] font-body text-8xl absolute top-[80%] translate-x-[-180.5%] bp1:text-6xl bp3:text-4xl bp5:hidden">
            Projects
          </p>
          <div
            style={{ width: "2px" }}
            className=" self-center bg-white min-h-screen h-full bp5:hidden"
          ></div>
        </div>
        <RighsideBlock />
      </div>
      <ProjectGrid />
      <Footer />
    </div>
  );
}
