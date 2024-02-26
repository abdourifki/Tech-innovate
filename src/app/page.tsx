import arrow from "../assets/icons8-flèche-64.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="home-img flex flex-col items-start pt-20">
        <div className="w-[900px] pt-18 pl-8">
          <h1 className=" text-gradient text-white font-bold text-5xl">
            Bienvenue sur Tech Innovate Showcase
          </h1>
        </div>
        <div className="w-[700px] mt-20 pl-10">
          <p className="text-white text-xl">
            Chez Tech Innovate, nous repoussons les limites de l'innovation
            technologique. Notre équipe dévouée travaille avec passion pour
            créer des solutions sur mesure qui répondent à vos besoins les plus
            complexes.
          </p>
        </div>
        <div className="flex items-start pl-10 pt-8 gap-5">
          <div className="hover:-mr-3 duration-700 pl-5">
            <Link href="/service">           
                <Image
                  src={arrow}
                  alt="fleche"
                  className="w-11 cursor-pointer"
                />            
            </Link>
          </div>
          <h1 className="text-white font-bold text-xl pt-2 cursor-pointer">
            Take a look
          </h1>
        </div>
      </div>
    </>
  );
}
