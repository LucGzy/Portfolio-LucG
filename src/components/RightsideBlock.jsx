import { FaCarSide, FaFolderPlus, FaSearchLocation } from "react-icons/fa";

import profilepic from "/img/PPOPC.webp";

export default function RighsideBlock() {
  return (
    <div
      id="right-block"
      className=" w-[50%] pt-80 h-full flex flex-col  items-center pl-6 bp5:pt-8 bp5:pl-0 slide-in"
    >
      <img
        className=" w-[40%] rounded-xl  mb-4 bp3:w-[60%] delay-75  transition-all duration-500 hover:scale-105"
        src={profilepic}
      />
      <div className=" w-full flex flex-col items-start pl-[30%] bp5:pl-0">
        <div className=" mb-2 flex flex-row items-center">
          <FaCarSide className=" mr-[10px] text-xl bp1:text-sm bp3:text-2xl" />
          <p className="text-xl font-body  text-white bp1:text-sm ">
            Transport : Voiture et Permis B
          </p>
        </div>
        <div className="mb-2 flex flex-row items-center">
          <FaSearchLocation className="mr-[15px] text-xl bp1:text-sm bp3:text-2xl" />
          <p className="text-xl font-body  text-white bp1:text-sm ">
            Localisation : Departement de la Vienne, France
          </p>
        </div>
        <div className="flex flex-row">
          <FaFolderPlus className=" mr-[15px] text-xl mt-1 bp1:text-sm bp3:text-2xl" />
          <p className=" text-xl font-body  text-white bp1:text-sm">
            Autres compétences :<span> Ingénieur du son et photographie</span>
          </p>
        </div>
      </div>
    </div>
  );
}
