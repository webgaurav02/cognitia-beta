"use client";
import { useRef } from "react";
import RegisterIcon from "./register-icon";

export default function RegisterButton() {
  const registerNow = useRef();
  return (
    <div
      ref={registerNow}
      className="flex flex-row ml-2 items-center mt-2  md:mt-6"
    >
      <RegisterIcon />
      <div className={montserrat.className}>
        <div className="text-sm font-normal md:text-xl text-[#DADADA]">
          Register Now!
        </div>
      </div>
    </div>
  );
}
