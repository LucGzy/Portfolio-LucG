import { FaCarSide, FaFolderPlus, FaSearchLocation } from "react-icons/fa";

import profilepic from "/img/PPOPC.webp";

export default function RighsideBlock() {
  return (
    <div
      id="right-block"
      className=" w-[50%] pt-48 h-full flex flex-col  items-center"
    >
      <img className=" w-[40%] rounded-xl  mb-4" src={profilepic} />
      <div className=" w-full flex flex-col items-start pl-[30%]">
        <div className=" mb-2 flex flex-row items-center">
          <FaCarSide style={{ marginRight: "15px" }} className="text-xl" />
          <p className="text-xl font-body font-medium text-white">
            Transport : Voiture et Permis B
          </p>
        </div>
        <div className="mb-2 flex flex-row items-center">
          <FaSearchLocation
            style={{ marginRight: "15px" }}
            className="text-xl"
          />
          <p className="text-xl font-body  text-white ">
            Localisation : Departement de la Vienne, France
          </p>
        </div>
        <div className="flex flex-row">
          <FaFolderPlus
            style={{ marginRight: "15px" }}
            className="text-xl mt-1"
          />
          <p className=" text-xl font-body  text-white">
            Autres compétences :
            <br />
            <span style={{ marginLeft: "20px" }}>-Ingénieur du son</span>
            <br />
            <span style={{ marginLeft: "20px" }}>-Photographe</span>
          </p>
        </div>
      </div>
    </div>
  );
}
