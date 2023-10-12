"use client";

import React, { useState, useEffect } from "react";
import ScrollDownGif from "./scrolldown.gif";
import Image from "next/image";
export default function ScrollDown() {
  const [canShow, setCanShow] = useState(false);

  // Set Time out
  useEffect(() => {
    const timer = setTimeout(() => setCanShow(true), 3000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="text-md sm:text-xl text-white font-poppinsbold flex justify-end duration-300 w-screen sm:-translate-x-10 opacity-70">
      {canShow ? (
        <div>
          <div className="translate-y-16 sm:translate-y-20 -translate-x-8 sm:translate-x-0">Scroll Down</div>
          <Image src={ScrollDownGif} className="w-[80px] sm:w-full -translate-x-8 sm:-translate-x-5 translate-y-10"></Image>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
