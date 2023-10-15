import { algreya, jost, montserrat, poppins } from "../utils/fonts";
import Image from "next/image";
import brochure_banner from "../assets/images/brochure_banner.png";
import Link from "next/link";

export default function Brochure() {
  return (
    <div className=" flex h-[50vh] w-screen justify-center items-center">
      <div className="flex flex-col md:flex-row w-[80vw] h-[40vh] border-[1px] border-stone-600">
        <div className=" flex flex-col  h-full w-full items-center">
          <div
            className="flex px-5 md:px-20 items-center  h-full w-full 
                    text-white text-lg md:text-3xl font-semibold text-center"
          >
            <div className={jost.className}>
              View the Cognitia Event Brochure here
            </div>
          </div>
          <div
            className="flex px-5 md:px-20 md:items-center  h-full w-full 
                    text-white text-2xl font-semibold self-center"
          >
            <Link href="https://drive.google.com/file/d/1vDGXmcInC3vFnctD7SEdOT8yJH1yz3uH/view?usp=sharing">
              <button className="p-3 self-center rounded-lg md:text-xl bg-[#E1ABE8] text-base text-black">
                <div className={jost.className}>View Brochure</div>
              </button>
            </Link>
          </div>
        </div>
        <div className=" h-full w-full relative">
          <Image src={brochure_banner} fill={true}></Image>
        </div>
      </div>
    </div>
  );
}
