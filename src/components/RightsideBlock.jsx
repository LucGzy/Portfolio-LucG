import { FaCarSide, FaFolderPlus, FaSearchLocation } from "react-icons/fa";

import profilepic from "/img/PPOPC.webp";

export default function RighsideBlock() {
  return (
    <div
      id="right-block"
      className=" w-[50%] pt-80 h-full flex flex-col  items-center pl-6 "
    >
      <img className=" w-[40%] rounded-xl  mb-4" src={profilepic} />
      <div className=" w-full flex flex-col items-start pl-[30%]">
        <div className=" mb-2 flex flex-row items-center">
          <FaCarSide
            style={{ marginRight: "15px" }}
            className="text-xl bp1:text-sm"
          />
          <p className="text-xl font-body  text-white bp1:text-sm">
            Transport : Voiture et Permis B
          </p>
        </div>
        <div className="mb-2 flex flex-row items-center">
          <FaSearchLocation
            style={{ marginRight: "15px" }}
            className="text-xl bp1:text-sm"
          />
          <p className="text-xl font-body  text-white bp1:text-sm ">
            Localisation : Departement de la Vienne, France
          </p>
        </div>
        <div className="flex flex-row">
          <FaFolderPlus
            style={{ marginRight: "15px" }}
            className="text-xl mt-1 bp1:text-sm"
          />
          <p className=" text-xl font-body  text-white bp1:text-sm">
            Autres compétences :<span> Ingénieur du son et photographie</span>
          </p>
        </div>
      </div>
    </div>
  );
}
