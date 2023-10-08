"use client";

import "./team.css";
import React, { useState } from "react";
import image1 from "../assets/images/sam.jpeg";
import image2 from "../assets/images/Kilio3.jpg";
import image3 from "../assets/images/Amal.jpg";
import image4 from "../assets/images/Isaiah.jpeg";
import image5 from "../assets/images/Nishant.jpeg";
import image6 from "../assets/images/download 6.png";
import image7 from "../assets/images/download 7.png";
import image8 from "../assets/images/download 8.png";
import image9 from "../assets/images/download 9.png";
import image10 from "../assets/images/download 2.png";
import image11 from "../assets/images/Mayo.jpeg";
import image12 from "../assets/images/temp1.jpg";
import image13 from "../assets/images/temp2.jpg";
import image14 from "../assets/images/temp3.jpg";
import Image from "next/image";
import NavBar from "../components/nav-bar";
import { poppins } from "../utils/fonts";
import Footer from "../components/footer";

const TeamSection = ({ images, names, roles }) => {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-4 mobile:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-4 justify-between  bg-[#101010] mx-5 my-10 lg:my-20 lg:mx-10 font-poppins">
      {images.map((image, index) => (
        <div
          key={index}
          className="border-solid text-center bg-[#1C1C1C] pb-2 w-75% sm:w-100% md:w-100% mb-5 mx-2 lg:mb-10  rounded-t-lg"
        >
          <Image
            width={1000}
            height={1000}
            src={image}
            alt={`Image ${index + 1}`}
            className="object-cover max-w-full h-auto rounded-t-lg"
            placeholder="blur"
          />
          <div className="text-white mt font-poppins font-bold text-xl mt-2 flex flex-col">
            <strong className={poppins.className}>{names[index]}</strong>

            <span className="text-xs text-[#BEBEBE]">{roles[index]}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

function Devteam() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    ,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];
  const names = [
    "Samuel",
    "Kilio ka gf",
    "Amal",
    "Isaiah",
    "Nishant",
    "Marjiba",
    "Gaurav",
    "Marjiba",
    "Gaurav",
  ];
  const roles = [
    "lead developer",
    "Satisfying Kilio",
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
  ];

  return <TeamSection images={images} names={names} roles={roles} />;
}

function Robotics() {
  const images = [
    image11,
    image12,
    image13,
    image14,
    image5,
    image6,
    image7,
    image8,
    image9,
    ,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];
  const names = [
    "Mayo",
    "Kilio",
    "Amal",
    "Isaiah",
    "Nishant",
    "Marjiba",
    "Gaurav",
    "Marjiba",
    "Gaurav",
  ];
  const roles = [
    "Convener",
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
  ];

  return <TeamSection images={images} names={names} roles={roles} />;
}
function Marketing() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    ,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];
  const names = [
    "Samuel",
    "Kilio",
    "Amal",
    "Isaiah",
    "Nishant",
    "Marjiba",
    "Gaurav",
    "Marjiba",
    "Gaurav",
  ];
  const roles = [
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
  ];

  return <TeamSection images={images} names={names} roles={roles} />;
}
function Financing() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    ,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];
  const names = [
    "Samuel",
    "Kilio",
    "Amal",
    "Isaiah",
    "Nishant",
    "Marjiba",
    "Gaurav",
    "Marjiba",
    "Gaurav",
  ];
  const roles = [
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
  ];

  return <TeamSection images={images} names={names} roles={roles} />;
}
function Design() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    ,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];
  const names = [
    "Samuel",
    "Kilio",
    "Amal",
    "Isaiah",
    "Nishant",
    "Marjiba",
    "Gaurav",
    "Marjiba",
    "Gaurav",
  ];
  const roles = [
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
  ];

  return <TeamSection images={images} names={names} roles={roles} />;
}
function Hospitality() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    ,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];
  const names = [
    "Samuel",
    "Kilio",
    "Amal",
    "Isaiah",
    "Nishant",
    "Marjiba",
    "Gaurav",
    "Marjiba",
    "Gaurav",
  ];
  const roles = [
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
  ];

  return <TeamSection images={images} names={names} roles={roles} />;
}
function Cultural() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    ,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];
  const names = [
    "Samuel",
    "Kilio",
    "Amal",
    "Isaiah",
    "Nishant",
    "Marjiba",
    "Gaurav",
    "Marjiba",
    "Gaurav",
  ];
  const roles = [
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
    "lead developer",
  ];

  return <TeamSection images={images} names={names} roles={roles} />;
}

const componentsMap = {
  Devteam,
  Cultural,
  Robotics: Robotics,
  Marketing,
  Financing,
  Design,
  Hospitality,
};

const Navbar1 = ({ items, onSelect, activeItem }) => {
  return (
    <div className="w-full pb-0 text-center grid grid-cols-4 items-center  overflow-x-hidden  border-b border-grey   mb-0 box-border transition-transform duration-300 ease-in bg-[#101010]">
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => onSelect(item)}
          style={{ textAlign: "centre" }}
          className={`cursor-pointer ${
            activeItem === item ? "border-b-2 border-white-500" : ""
          } text-green`}
        >
          <p
            className={`pb-3 text-sm ${
              activeItem === item
                ? "text-[#EBEBEB]"
                : "text-[#EBEBEB] opacity-40"
            } font-plus-jakarta-sans text-sm md:text-lg`}
          >
            {" "}
            {item}
          </p>
        </div>
      ))}
    </div>
  );
};

const ContainerX = ({ content }) => {
  return (
    <div className="flex justify-center items-center h-200 text-white bg-[#101010]">
      {content}
    </div>
  );
};

const Team = () => {
  const [currentView, setCurrentView] = useState("Devteam");
  const [slideIndex, setSlideIndex] = useState(0);

  const navbarItems = [
    "Devteam",
    "Cultural",
    "Robotics",
    "Marketing",
    "Financing",
    "Design",
    "Hospitality",
  ];

  const handleNavbarClick = (item) => {
    setCurrentView(item);
  };

  const handleSlideLeft = () => {
    setSlideIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleSlideRight = () => {
    setSlideIndex((prevIndex) =>
      Math.min(prevIndex + 1, navbarItems.length - 4)
    );
  };
  const CurrentComponent = componentsMap[currentView];
  return (
    <div className="text-white bg-[#101010]">
      <div className="flex justify-center items-center">
        <div>
          {slideIndex !== 0 && (
            <button className="ml-3 pb-2 text-white" onClick={handleSlideLeft}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 52 52"
                fill="none"
              >
                <circle
                  cx="26"
                  cy="26"
                  r="25.5"
                  transform="rotate(-180 26 26)"
                  fill="#131313"
                  stroke="#B8B8B8"
                />
                <path
                  d="M16.5858 24.5858C15.8047 25.3668 15.8047 26.6332 16.5858 27.4142L29.3137 40.1421C30.0948 40.9232 31.3611 40.9232 32.1421 40.1421C32.9232 39.3611 32.9232 38.0948 32.1421 37.3137L20.8284 26L32.1421 14.6863C32.9232 13.9052 32.9232 12.6389 32.1421 11.8579C31.3611 11.0768 30.0948 11.0768 29.3137 11.8579L16.5858 24.5858ZM21 24L18 24L18 28L21 28L21 24Z"
                  fill="#B8B8B8"
                />
              </svg>
            </button>
          )}
          {slideIndex === 0 && <div className="mr-8"></div>}
        </div>

        <Navbar1
          items={navbarItems.slice(slideIndex, slideIndex + 4)}
          onSelect={handleNavbarClick}
          activeItem={currentView}
        />
        <div>
          {slideIndex !== 3 && (
            <button className="mr-3 pb-2 text-white" onClick={handleSlideRight}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 52 52"
                fill="none"
              >
                <circle
                  cx="26"
                  cy="26"
                  r="25.5"
                  fill="#131313"
                  stroke="#B8B8B8"
                />
                <path
                  d="M35.4142 27.4142C36.1953 26.6332 36.1953 25.3668 35.4142 24.5858L22.6863 11.8579C21.9052 11.0768 20.6389 11.0768 19.8579 11.8579C19.0768 12.6389 19.0768 13.9052 19.8579 14.6863L31.1716 26L19.8579 37.3137C19.0768 38.0948 19.0768 39.3611 19.8579 40.1421C20.6389 40.9232 21.9052 40.9232 22.6863 40.1421L35.4142 27.4142ZM31 28H34V24H31V28Z"
                  fill="#B8B8B8"
                />
              </svg>
            </button>
          )}
          {slideIndex === 3 && <div className="ml-8"></div>}
        </div>
      </div>
      <ContainerX content={<CurrentComponent />} />
    </div>
  );
};

function App() {
  return (
    <>
      <div className="h-full w-full bg-[#101010]">
        <NavBar />
        <div className="text-center mx-auto -z-50 w-full bg-[#101010] text-white pb-8">
          {" "}
          <h1
            style={{ letterSpacing: "-1px" }}
            className="pt-10 sm:pt-10 md:pt-10 text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-300 text-center font-poppins tracking-wide leading-tight"
          >
            Meet the badass team
          </h1>
          <div className="flex  flex-col justify-center flex-shrink-0 text-[#EBEBEB] opacity-75 font-plus-jakarta-sans text-sm md:text-lg md:mb-4 mt-2 px-12">
            A special thanks to all the wonderful people who contributed to the
            event! Words can&apos;t express our appreciation for you!
          </div>
        </div>

        <div>
          <Team />
        </div>
        <Footer />
      </div>
    </>
  );
}
export default App;
