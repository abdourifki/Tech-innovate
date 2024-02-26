import Image from "next/image";
import logo from "../assets/nav-img2.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="w-full h-20 bg-black grid items-center grid-cols-3 ">
        <div className="w-[200px]">
          <Image src={logo} alt="logo"className="pt-3" />
        </div>
         <div>
         <ul className="flex gap-[100px] items-center justify-center font-bold text-white text-xl font-[Poppins] ">
              <Link className="transition-all duration-50 hover:border-b-4 hover:border-amber-500 " href="/">Home</Link>
              <Link className="transition-all duration-50 hover:border-b-4 hover:border-amber-500 " href="/service">Service</Link>
              <Link className="transition-all duration-50 hover:border-b-4 hover:border-amber-500 " href="/portfolio">Portfolio</Link>
              <Link className="transition-all duration-50 hover:border-b-4 hover:border-amber-500 " href="/contact">Contact</Link>
            </ul>
         </div>
      </div>
    </>
  );
}
