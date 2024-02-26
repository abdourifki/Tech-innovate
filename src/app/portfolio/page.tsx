import Cardcontainer from "@/components/Cardcontainer";
import Image from "next/image";
import pic1 from "@/assets/portfolio1.jpg";
import pic2 from "@/assets/portfolio2.jpg";
import pic3 from "@/assets/portfolio3.jpg";
import pic4 from "@/assets/portfolio4.jpg";
import pic5 from "@/assets/portfolio5.jpg";
import pic6 from "@/assets/portfolio6.jpg";

export default function portfolio() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold border-b-4 border-red-500 mt-28">
        Showcasing Our Finest Work
        </h1>
        <p className="text-xl mt-10">
          {" "}
          " Explore the impact we've made for our clients and envision how we
          can bring your ideas to life."
        </p>
      </div>
      <div className="flex items-center justify-center mt-20">
      <div className="grid grid-cols-3 grid-rows-2 gap-x-14 gap-y-7 w-[70%]">
        <Cardcontainer picture={pic1} title="GUINESS" />
        <Cardcontainer picture={pic2} title="THE CREATIVE PAIN" />
        <Cardcontainer picture={pic3} title="SPOOKY TIME " />
        <Cardcontainer picture={pic4} title="MATCH SOLVER" />
        <Cardcontainer picture={pic5} title="STICKERS" />
        <Cardcontainer picture={pic6} title="ART SOLVER" />
      </div>
      </div>
      
    </>
  );
}
