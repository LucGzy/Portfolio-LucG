/* eslint-disable react/no-unescaped-entities */
export default function LeftsideBlock() {
  return (
    <div id="left-block" className=" w-[50%] flex flex-col">
      <div className="w-[500px] h-[2px] bg-white shadow-sm ml-0 m-5 bp2:w-[350px]"></div>
      <div className="w-[400px] h-[2px] bp2:w-[250px] bg-white shadow-sm ml-0 m-5"></div>
      <p className=" text-2xl leading-8  h-fit w-[70%] font-body text-slate-50 bp1:text-sm">
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
