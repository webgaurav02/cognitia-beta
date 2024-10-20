import { algreya, jost, montserrat, poppins } from "../utils/fonts";
import Image from "next/image";
import brochure_banner from "../assets/cognitia-2024-banner.png";
import Link from "next/link";

export default function Brochure() {
  return (
    <div className=" flex h-[50vh] w-screen justify-center items-center">
      <div className="flex flex-col-reverse md:flex-row w-[80vw] h-[40vh] border-[1px] border-stone-600">
        <div className=" flex flex-col  h-full w-full items-center">
          <div
            className="flex px-5 md:px-28 items-center justify-self-center  h-full w-full 
                    text-white text-lg md:text-3xl font-semibold text-center"
          >
            <div className={jost.className}>
              View the Cognitia Event Brochure here
            </div>
          </div>
          <div
            className="flex px-5 md:px-20 md:items-center  h-full w-full 
                    text-white text-2xl font-semibold self-center items-center justify-center"
          >
            <Link
              legacyBehavior
              href="https://drive.google.com/file/d/1PuwowhgQ74I52FGulV0SPLlwR9ccgexJ/view?usp=sharing"
            >
              <a target="_blank" rel="noopener noreferrer">
                <button className="flex p-3 self-center justify-center items-center space-x-2 rounded-lg md:text-xl bg-[#E1ABE8] text-base text-black w-[70vw] h-10 md:h-14 md:w-[30vw]">        
                  <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.65389 11.139H12.2756V6.29837H13.6033V11.8305C13.6033 12.0139 13.5334 12.1898 13.4089 12.3195C13.2844 12.4492 13.1155 12.522 12.9395 12.522H0.990029C0.813963 12.522 0.645109 12.4492 0.520611 12.3195C0.396114 12.1898 0.326172 12.0139 0.326172 11.8305V6.29837H1.65389V11.139ZM8.29246 4.22382H11.6117L6.96475 9.06444L2.31774 4.22382H5.63703V0.074707H8.29246V4.22382Z" fill="#101010"/>
                  </svg>
                  <div className={jost.className}>View Brochure</div>
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div className=" h-full w-full relative">
          <Image src={brochure_banner} fill></Image>
        </div>
      </div>
    </div>
  );
}
