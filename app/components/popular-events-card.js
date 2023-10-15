"use client";

import { jost, poppins } from "../utils/fonts";
import Clock from "./clock";
import RegisterIcon from "./register-icon";
import LinesEllipsis from "react-lines-ellipsis";

export default function PopularEvent({ name, shortDescription }) {
  return (
    <div className={jost.className}>
      <div className="w-80 h-58  rounded-lg border-[1px] bg-[#101010] hover:bg-[#171717] ease-in-out duration-500   border-[#313131] pb-6 pl-12 pt-8 pr-12 md:pl-16 md:pr-16  md:w-[28rem] md:pt-12 md:pb-12">
        <div className="flex flex-row items-center">
          <Clock />
          <div className="text-[#E1ABE8] ml-2 text-xs md:text-lg">
            Time: to be announced.
          </div>
        </div>
        <div>
          {" "}
          <div className="text-white font-medium text-xl mt-4 md:mt-8 md:text-4xl">
            {name}
          </div>
          <div className="text-[#9C9C9C] text-md font-[400] leading-tight mt-2 md:text-lg md:leading-5 md:mt-4">
            <div className={jost.className}>
              <LinesEllipsis
                className="text-justify"
                text={shortDescription}
                maxLine={2}
                ellipsis="..."
              />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <RegisterIcon />
            <div className={jost.className}>
              <div className="text-white hover:text-[#E1ABE8] duration-300 ease-in-out font-normal md:text-lg underline underline-offset-2 cursor-pointer">
                coming soon!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
