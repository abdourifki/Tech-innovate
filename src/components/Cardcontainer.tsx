import { StaticImageData } from "next/image";
import  Image from "next/image";

type Props = { picture: StaticImageData; title: string };
const Cardcontainer = ({ picture, title }: Props) => {
  return (
    <div className="shadow-xl bg-gray-50  p-6  transform transition-transform hover:scale-105">
  <div>
    <Image src={picture} alt="pic" className="h-[300px] rounded-lg" />
  </div>
  <h1 className="text-center mt-4 font-bold">{title}</h1>
</div>

  );
};


export default Cardcontainer;