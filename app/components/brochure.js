import { algreya, jost, montserrat, poppins } from "../utils/fonts";
import Image from "next/image";
import brochure_banner from "../assets/images/brochure_banner.png";

export default function Brochure (){

    return(
        <div className=" flex h-[50vh] w-screen justify-center items-center">
            <div className="flex flex-col md:flex-row w-[80vw] h-[40vh] border-[1px] border-stone-600">
                <div className=" flex flex-col  h-full w-full">
                    <div className="flex px-5 md:px-20 items-center  h-full w-full 
                    text-white text-lg md:text-2xl font-semibold">
                        <div className={jost.className}>Download the Cognitia Event Brochure here</div>
                    </div>
                    <div className="flex px-5 md:px-20 md:items-center  h-full w-full 
                    text-white text-2xl font-semibold">
                        <button className=" h-2/5 w-4/5 rounded-lg bg-[#E1ABE8] text-base text-black">
                            <div className={jost.className}>
                            Download Brochure
                            </div>
                        </button>
                    </div>
                </div>
                <div className=" h-full w-full relative">
                    <Image src={brochure_banner} fill={true}></Image>
                </div>

            </div>
        </div>

    );
}