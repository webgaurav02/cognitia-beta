"use client";

import { useState } from "react";
import { poppins } from "../utils/fonts";
import Grid from "./grid";
import EventBox from "./event-box";
import { getCodingClubEvents, getRoboticClubEvents } from "../utils/services";

export default function EventTabs({ data }) {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Coding", "Robotics", "Departmental", "Others"];
  let codingClubEvents = getCodingClubEvents(data);
  let roboticClubEvents = getRoboticClubEvents(data);
  // function buildHeader() {
  //   return (
  //     <div className={poppins.className}>
  //       <div className="text-xs flex flex-row justify-evenly mt-8 md:text-2xl lg:ml-32 lg:mr-32">
  //         {tabs.map((tab, index) => (
  //           <div
  //             key={index}
  //             onClick={() => {
  //               setActiveTab(index);
  //             }}
  //             className={`${
  //               activeTab == index ? "text-neutral-200" : "text-neutral-700"
  //             } border-b-4 pb-4 pl-4 pr-4 ${
  //               activeTab == index ? "border-violet-800" : "border-neutral-700"
  //             } duration-300 cursor-pointer`}
  //           >
  //             {tab}
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }

  const Navbar = ({ items, onSelect, activeItem }) => {
    return (
      <div className="w-full pb-0 text-center grid grid-cols-4 items-center  overflow-x-hidden  border-b border-grey   mb-0 box-border transition-transform duration-300 ease-in">
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

  const EventTabs = () => {
    const [currentView, setCurrentView] = useState("Coding");
    const [slideIndex, setSlideIndex] = useState(0);

    const navbarItems = [
      "Coding",
      "Robotics",
      "Astronomy",
      "Departmental",
      "Cultural",
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
    // const CurrentComponent = componentsMap[currentView];
    return (
      <div className="text-white z-10 relative">
        <div className="flex justify-center items-center">
          <div>
            {slideIndex !== 0 && (
              <button
                className="ml-3 pb-2 text-white"
                onClick={handleSlideLeft}
              >
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

          <Navbar
            items={navbarItems.slice(slideIndex, slideIndex + 4)}
            onSelect={handleNavbarClick}
            activeItem={currentView}
          />
          <div>
            {slideIndex !== 1 && (
              <button
                className="mr-3 pb-2 text-white"
                onClick={handleSlideRight}
              >
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
            {slideIndex === 1 && <div className="ml-8"></div>}
          </div>
        </div>
        {/* <ContainerX content={<CurrentComponent />} /> */}
      </div>
    );
  };
  return (
    <div>
      {<EventTabs />}
      <div className="md:ml-20 ml-6 mr-6 lg:ml-36 lg:mr-36">
        {activeTab === 0 ? (
          <Grid>
            {codingClubEvents.map((event, index) => {
              return (
                <EventBox
                  key={index}
                  eventName={event.eventName}
                  shortDescription={event.shortDescription}
                  time={event.eventTime}
                  dpt={"Coding Club"}
                  venue={event.venue}
                  description={event.description}
                  team={event.team}
                />
              );
            })}
          </Grid>
        ) : (
          <></>
        )}
        {activeTab === 1 ? (
          <Grid>
            {roboticClubEvents.map((event, index) => {
              return (
                <EventBox
                  key={index}
                  eventName={event.eventName}
                  shortDescription={event.shortDescription}
                  time={event.eventTime}
                  dpt={"Robotics Club"}
                  venue={event.venue}
                  description={event.description}
                  team={event.team}
                />
              );
            })}
          </Grid>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

// {" "}
//           <EventBox
//             eventName="Hack the box"
//             eventDescription="Sit in front of a box and pretend you know how to hack like you're mr.robot"
//             dpt="coding"
//             time="2nd Nov 9:50"
//           />
//           <EventBox
//             eventName="Hack the box"
//             eventDescription="Sit in front of a box and pretend you know how to hack like you're mr.robot"
//             dpt="coding"
//             time="2nd Nov 9:50"
//           />
//           <EventBox
//             eventName="Hack the box"
//             eventDescription="Sit in front of a box and pretend you know how to hack like you're mr.robot"
//             dpt="coding"
//             time="2nd Nov 9:50"
//           />
//           <EventBox
//             eventName="Hack the box"
//             eventDescription="Sit in front of a box and pretend you know how to hack like you're mr.robot"
//             dpt="coding"
//             time="2nd Nov 9:50"
//           />
//           <EventBox
//             eventName="Hack the box"
//             eventDescription="Sit in front of a box and pretend you know how to hack like you're mr.robot"
//             dpt="coding"
//             time="2nd Nov 9:50"
//           />
//           <EventBox
//             eventName="Hack the box"
//             eventDescription="Sit in front of a box and pretend you know how to hack like you're mr.robot"
//             dpt="coding"
//             time="2nd Nov 9:50"
//           />
//           <EventBox
//             eventName="Hack the box"
//             eventDescription="Sit in front of a box and pretend you know how to hack like you're mr.robot"
//             dpt="coding"
//             time="2nd Nov 9:50"
//           />
//           <EventBox
//             eventName="Hack the box"
//             eventDescription="Sit in front of a box and pretend you know how to hack like you're mr.robot"
//             dpt="coding"
//             time="2nd Nov 9:50"
//           />
//           <EventBox
//             eventName="Hack the box"
//             eventDescription="Sit in front of a box and pretend you know how to hack like you're mr.robot"
//             dpt="coding"
//             time="2nd Nov 9:50"
//           />
