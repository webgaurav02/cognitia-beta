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
  function buildHeader() {
    return (
      <div className={poppins.className}>
        <div className="text-xs flex flex-row justify-evenly mt-8 md:text-2xl lg:ml-32 lg:mr-32">
          {tabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => {
                setActiveTab(index);
              }}
              className={`${
                activeTab == index ? "text-neutral-200" : "text-neutral-700"
              } border-b-4 pb-4 pl-4 pr-4 ${
                activeTab == index ? "border-violet-800" : "border-neutral-700"
              } duration-300 cursor-pointer`}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      {buildHeader()}
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
