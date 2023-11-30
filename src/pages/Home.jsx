import LeftsideBlock from "../components/LeftsideBlock";
import RighsideBlock from "../components/RightsideBlock";

export default function Home() {
  return (
    <div
      className=" p-10 min-h-screen
      h-full flex w-full bg-gradient-to-br from-blue-900 to-purple-900"
    >
      <div className=" h-fit flex flex-row justify-around align-middle">
        <LeftsideBlock />
        <div className="">
          <p className=" z-[1] font-body text-8xl absolute top-48 translate-x-[-44%]">
            Portfolio
          </p>
          <p className=" z-[1] font-body text-8xl absolute top-96 translate-x-[-56.5%]">
            Luc Gouzy
          </p>
          <div
            style={{ width: "2px" }}
            className=" self-center bg-white min-h-screen h-full"
          ></div>
        </div>
        <RighsideBlock />
      </div>
      {/* <div>
          <Projects />
        </div> */}
    </div>
  );
}
