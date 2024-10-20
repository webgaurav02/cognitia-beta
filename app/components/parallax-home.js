"use client";

import prl1 from "../assets/images/prl1.png";
import prl2 from "../assets/images/prl2.png";
import prl3 from "../assets/images/prl3.png";
import prl5 from "../assets/images/prl5.png";
import prl7 from "../assets/images/prl7.png";
import bgend from "../assets/images/bgend.png";
import TextBlock from "./text-block";
import ScrollDown from "./scroll-down";
import Image from "next/image";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Link from "next/link";
import { jost, montserrat, poppins } from "../utils/fonts";

function ParallaxHome() {
  return (
    <div className="w-screen h-screen ">
      <Parallax pages={2} className="animation">
        <ParallaxLayer offset={0} speed={1}>
          <div className="animation_layer">
            <Image
              priority
              quality={30}
              placeholder="blur"
              src={prl1}
              alt="background"
              className="w-[900px] sm:w-[1920px] 2xl:w-[2800px] opacity-100 object-cover blur-[4px] sm:blur-0"
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.1} speed={1.3}>
          <div className="animation_layer">
            <Image
              priority
              quality={30}
              placeholder="blur"
              src={prl2}
              alt="background"
              className="w-[900px] sm:w-[1920px] 2xl:w-[2800px] opacity-100 object-cover blur-[3px] sm:blur-0"
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.3} speed={0}>
          <div className="-translate-y-0 sm:-translate-y-48 xl:-translate-y-24 2xl:-translate-y-24">
            <ScrollDown />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.9} speed={2}>
          <TextBlock />
        </ParallaxLayer>

        <ParallaxLayer offset={0.3} speed={1.5}>
          <div className="animation_layer">
            <Image
              priority
              quality={30}
              placeholder="blur"
              src={prl3}
              alt="background"
              className="w-[900px] sm:w-[1920px] 2xl:w-[2800px] opacity-100 object-cover blur-[3px] sm:blur-0"
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.1} speed={2.4}>
          <div className="animation_layer">
            <Image
              priority
              quality={30}
              placeholder="blur"
              src={prl5}
              alt="background"
              className="w-[900px] sm:w-[1920px] 2xl:w-[2800px] opacity-100 object-cover"
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={2}>
          <div className="animation_layer">
            <Image
              priority
              quality={30}
              placeholder="blur"
              src={prl7}
              alt="background"
              className="w-[900px] sm:w-[1920px] 2xl:w-[2800px] opacity-100 object-cover"
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0}>
          <div className="animation_layer">
            <Image
              priority
              quality={30}
              placeholder="blur"
              src={bgend}
              alt="background"
              className="w-[900px] sm:w-[1920px] 2xl:w-[2800px] opacity-100 object-cover sm:-translate-y-[35vh]"
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.8} speed={0}>
          <ScrollDown />
        </ParallaxLayer>

        <ParallaxLayer offset={0.2} speed={-1}>
          <div className={jost.className}>
            <div
              className="w-screen h-[768px] xl:h-[500px] 2xl:h-[768px] -translate-y-72 sm:-translate-y-10 z-50     
          text-white font-bold mt-6"
            >
              <div
                className="px-2 pt-52 sm:mt-0 sm:pt-0 md:px-36
          grid grid-cols-1 sm:grid sm:grid-rows-7 sm:grid-cols-5 sm:h-full"
              >
                <div
                  className="pl-4 py-2 sm:py-0 self-end pt-10 sm:pt-0
            row-span-2 col-span-3 lg:col-span-3
            text-5xl sm:text-[5rem]"
                >
                  Welcome to Cognitia 2024
                </div>
                <div className="flex justify-end content-center row-span-6 lg:col-span-2">
                  {" "}
                </div>
                <div className="pl-4 mt-2 py-2 sm:py-0
                  row-span-1 col-span-2
                text-sm sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl text-gray-400 lg:mt-10 w-11/12
                self-center">
                  <div className={poppins.className}
                    
                  >
                    NIT Meghalaya&apos;s annual tech fest. Explore all events
                    and get registered now!{" "}
                  </div>
                </div>
                <div className="pl-4 mt-2 py-2 sm:py-0 row-span-1 col-span-3">

                    <div className={jost.className}>
                    <Link href="/events">
                      <button className="border-[#E1ABE8] border-[1px] lg:mt-10 sm:border-2 rounded-lg text-[#E1ABE8] hover:text-black text-lg font-medium h-10 w-32 sm:h-20 sm:w-72 sm:text-2xl hover:bg-[#E1ABE8] duration-500">
                        View Events
                      </button>
                      </Link>
                    </div>

                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default ParallaxHome;
