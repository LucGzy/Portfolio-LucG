import profilepic from "/img/PPOPC.webp";

export default function Home() {
  return (
    <div
      className=" p-10
     h-screen flex w-full bg-gradient-to-br from-blue-900 to-purple-900"
    >
      <div className=" h-fit flex flex-row">
        <div id="text-block" className=" flex flex-col">
          <div
            style={{ width: "500px", height: "2px" }}
            className=" bg-white shadow-sm ml-0 m-5"
          ></div>
          <div
            style={{ width: "400px", height: "2px" }}
            className=" bg-white shadow-sm ml-0 m-5"
          ></div>
          <p
            style={{ width: "33%", height: "2px" }}
            className=" font-body text-slate-50"
          >
            Passionné par les technologies de l'information et de la
            communication ainsi que la musique depuis longtemps, j'ai d'abord
            obtenu un diplôme d'ingénieur du son. Par la suite, j'ai voulu
            approfondir mes bases personnelles dans le domaine du développement.
            J'ai donc suivi une formation diplômante sur OpenClassrooms dans le
            développement web front-end et me voici maintenant ici, prêt à
            entreprendre vos projets.
          </p>
        </div>
        <div id="profilepic-block" className=" pt-24 h-full flex pl-24">
          <img className=" rounded-xl" src={profilepic} />
        </div>
        {/* <div>
          <Projects />
        </div> */}
      </div>
    </div>
  );
}
