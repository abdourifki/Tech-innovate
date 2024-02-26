import Image, { StaticImageData } from "next/image";
import design from "../../assets/icons8-design-64.png";
import cube from "../../assets/icons8-cubes-64.png";
import diamond from "../../assets/icons8-diamant-100.png";
import strategy from "../../assets/icons8-panneau-de-stratégie-100.png";
import arrowup from "../../assets/icons8-flèche-haut-50 (1).png";
import aboutimage from "../../assets/about.jpg";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";

interface Team {
  name: string;
  description:string;
  picture:StaticImageData;
  
}

export default function Service() {
  
   const teamWork:Team[] =[
    {
        name:"MARK ZELLERS",
        description:"co-Founder",
        picture:image1
    },
    {
        name:"JOHN ZELLERS",
        description:"co-Founder",
        picture:image2
    },
    {
        name:"KIM YUN SON",
        description:"client success Manager",
        picture:image3
    },
    {
        name:"ANDRE GARCIA",
        description:"Director of opérations",
        picture:image4
    }

   ]


  return (
    <>
      <div className="flex flex-col items-end ">
        <button className="mt-5 mr-4 overflow-hidden relative w-32 p-2 h-12 bg-red-600 text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
          Let's Talk!
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-red-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-500 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
          <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
            Contact!
          </span>
        </button>
      </div>
      <div className="flex items-center justify-center">
        <h1 className="text-6xl font-bold border-b-4 border-red-500">
          Services
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-14 pt-16 mt-2 p-5">
        <div className=" card-container h-[400px] pl-4 pt-4 cursor-pointer bg-slate-50">
          <Image src={design} alt="design" className="card-icon"></Image>
          <h2 className=" text-2xl font-bold pt-7 mb-8">Product Design</h2>
          <p className="pr-2">
            Notre équipe de designers s'engage à créer des produits au design
            moderne et esthétiquement plaisant. Chaque élément visuel est
            soigneusement choisi pour refléter notre engagement envers
            l'innovation.
          </p>
          <Image src={arrowup} alt="arrow" className=" arrow-icon w-9 transform rotate-45 pt-6 hidden "></Image>
        </div>
        <div className="card-container h-[400px] pl-4 pt-4 mt-8 bg-slate-50 ">
          <Image src={cube} alt="design" className="w-14 card-icon"></Image>
          <h2 className=" text-2xl font-bold pt-12 mb-8">Web Developpement</h2>
          <p className="pr-2">
            Donnez vie à votre présence en ligne avec notre équipe de
            développement web. Des sites dynamiques, intuitifs et performants,
            nous transformons vos idées en expériences utilisateur
            exceptionnelles.
          </p>
          <Image src={arrowup} alt="arrow" className=" arrow-icon w-9 transform rotate-45 pt-3 hidden "></Image>
        </div>
        <div className="card-container h-[400px] pl-4 pt-4 bg-slate-50 ">
          <Image src={diamond} alt="design" className="w-14 card-icon"></Image>
          <h2 className=" text-2xl font-bold pt-12 mb-8">Branding Identity</h2>
          <p className="pr-2">
            Transformez votre identité visuelle avec notre service de Branding
            Identity Card. Chaque détail est soigneusement conçu pour créer une
            connexion mémorable avec votre audience, capturant l'essence unique
            de votre marque.
          </p>
          <Image src={arrowup} alt="arrow" className=" arrow-icon w-9 transform rotate-45 pt-3 hidden "></Image>
        </div>
        <div className="card-container h-[400px] pl-4 pt-4 mt-8 bg-slate-50 ">
          <Image src={strategy} alt="design" className="w-14 card-icon"></Image>
          <h2 className=" card-title text-2xl font-bold pt-12 mb-4">Contact Strategy</h2>
          <p className="pr-2">
          Mettez en avant votre histoire avec notre approche stratégique du contenu. De la planification à l'exécution, nous créons un contenu significatif qui renforce votre positionnement sur le marché et engage votre audience de manière authentique.
          </p>
          <Image src={arrowup} alt="arrow" className=" arrow-icon w-9 transform rotate-45 pt-2 hidden "></Image>
        </div>
      </div>
      <div className="flex items-center justify-center gap-32">
        <div className="w-4/12">
            <Image src={aboutimage} alt="about" className="w-full h-[490px] mt-16"></Image>
        </div>
        <div className="flex flex-col items-start justify-center w-[37%] mt-12  ">
            <h1 className="text-5xl font-bold border-b-4 border-red-500 mb-8">WHAT WE OFFER</h1>
            <p className="text-xl mt-6 mb-9 ">We’ve delivered solutions to hundreds of <br/>clients in too many industries to count.</p>
            
            <div className="flex gap-4 mb-4 items-start justify-center ">
            <span className="font-bold text-red-600 text-2xl">01.</span><p className="font-bold text-2xl border-b-2 border-gray-300 pb-3 ">Unlimited Possibilities</p>
            </div>
            <div className="flex gap-4 mb-4">
            <span className="font-bold text-red-600 text-2xl">02.</span><p className="font-bold text-2xl mr-2 border-b-2 border-gray-300 pb-3">Process Optimization</p>
            </div>
            <div className="flex gap-4">
            <span className="font-bold text-red-600 text-2xl">03.</span><p className="font-bold text-2xl  border-b-2 border-gray-300 pb-3 pr-8">Exceptional Standing</p>
            </div>
            <button className=" mt-10 relative group cursor-pointer text-sky-50  overflow-hidden h-16 w-64 rounded-md bg-red-800 p-2 flex justify-center items-center font-extrabold">

            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-red-900"></div>
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-red-800"></div>
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-red-700"></div>
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-red-600"></div>
            <p className="z-10">See more</p>
            </button>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <h1 className="text-5xl font-bold border-b-4 border-red-500 mt-10">OUR EXPERTS</h1>
      </div>
      <div className="flex gap-10">
  {teamWork.map((item, index) => (
    <div key={index} className="relative group overflow-hidden">
      <div className="m-6 group-hover:opacity-75 transition-opacity duration-500">
        <Image src={item.picture} alt="image" className="w-full h-auto rounded-lg" />
        <div className="inset-0 bg-black opacity-25 group-hover:opacity-80 transition-opacity duration-300"></div>
      </div>
      <div className="ml-2 transform translate-y-full group-hover:translate-y-0 absolute bottom-0 left-0 w-full bg-white p-4 transition-transform duration-300">
        <h1 className="font-bold">{item.name}</h1>
        <p>{item.description}</p>
      </div>
    </div>
  ))}
</div>






</>
  );
}
