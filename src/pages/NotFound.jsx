import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
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
      <h1 className="text-8xl text-white font-body mb-5">Error 404</h1>
      <p className="text-5xl text-white font-body bp1:text-2xl">
        This page doesn't exist, you went too far !
      </p>
    </div>
  );
}
