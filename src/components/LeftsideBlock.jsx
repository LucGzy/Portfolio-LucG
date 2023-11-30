/* eslint-disable react/no-unescaped-entities */
export default function LeftsideBlock() {
  return (
    <div id="left-block" className=" w-[50%] flex flex-col">
      <div
        style={{
          width: "500px",
          height: "2px",
        }}
        className=" bg-white shadow-sm ml-0 m-5"
      ></div>
      <div
        style={{
          width: "400px",
          height: "2px",
        }}
        className=" bg-white shadow-sm ml-0 m-5"
      ></div>
      <p className=" text-2xl leading-8  h-fit w-[70%] font-body text-slate-50">
        Passionné par les technologies de l'information et de la communication
        ainsi que la musique, j'ai d'abord obtenu un diplôme d'ingénieur du son.
        <br />
        Par la suite, j'ai voulu approfondir mes bases personnelles dans le
        domaine du développement.
        <br /> J'ai donc suivi une formation diplômante sur OpenClassrooms dans
        le développement web front-end et me voici maintenant ici, prêt à
        entreprendre vos projets.
      </p>
    </div>
  );
}
