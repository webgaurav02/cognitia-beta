import "./event-list.css";
import NavBar from "../components/nav-bar";
import FilterButton from "../components/filter-button";
import { jost, montserrat, poppins } from "../utils/fonts";
import "./event-list.css";
import EventBox from "../components/event-box";
import Footer from "../components/footer";
import { Suspense } from "react";
import Grid from "../components/grid";
import EventTabs from "../components/event-tabs";
import { getEvents } from "../utils/services";
import RegisterIcon from "../components/register-icon";
import Image from "next/image";
import Girl from "../assets/girl.png";

async function EventBody() {
  let data = await getEvents();
  function buildLine() {
    return (
      <hr class="w-[90%] t-4 h-[1px] mx-auto bg-gray-100 border-0 rounded dark:bg-[#9A9A9A]"></hr>
    );
  }
  function buildFiltersList() {
    return (
      <div
        id="filters"
        className="flex flex-row justify-between -translate-x-16 lg:-translate-x-28 mt-6 mb-4 space-x-1"
      >
        <FilterButton type={"cc"} name={"CODING"} />
        <FilterButton type={"rc"} name={"ROBOTIC"} />
        <FilterButton type={"ac"} name={"ASTRO"} />
        <FilterButton type={"cc"} name={"CODING"} />
        <FilterButton type={"rc"} name={"ROBOTIC"} />
        <FilterButton type={"dp"} name={"DEPART"} />
        <FilterButton type={"rc"} name={"ASTRO"} />
        <FilterButton type={"cc"} name={"CODING"} />
        <FilterButton type={"dp"} name={"DEPART"} />
      </div>
    );
  }
  function buildTopBanner() {
    return (
      <div className="relative overflow-visible">
        <div className="absolute w-48 md:w-80 md:h-80 h-48 bg-purple-600 z-10 -top-6 -left-20 rounded-full opacity-30 filter blur-xl animate-blob"></div>
        <div className="absolute w-48 md:w-80 md:h-80 h-48 delay-1000 bg-indigo-600 z-10 -top-20 -right-28 rounded-full opacity-30 filter blur-xl animate-blob"></div>
        <div className="relative z-20 ml-2 md:ml-32 md:mr-32">
          {" "}
          <div className="lg:flex md:mb-20 lg:items-center 2xl:space-x-72">
            <div>
              <div className={jost.className}>
                <div className="text-white md:text-[5rem] text-5xl font-semibold ml-4 mt-14 mr-4">
                  Explore your <span className="text-[#61E2F4]">Cognitia </span>
                  Events in one place
                </div>
              </div>
              <div className={poppins.className}>
                <div
                  className={
                    "text-[#8A8A8A] font-normal md:text-xl text-sm ml-4 mt-4 mr-6 md:mt-8"
                  }
                >
                  Browse all the upcoming events of cognitia 2K23 compiled for
                  you in one easy to navigate page. So? What are you waiting
                  for?
                </div>
              </div>
              <div className="flex flex-row ml-2 items-center mt-2  md:mt-6">
                <RegisterIcon />
                <div className={montserrat.className}>
                  <div className="text-sm font-normal md:text-xl text-[#DADADA]">
                    Register Now!
                  </div>
                </div>
              </div>
            </div>

            <Image
              className="overflow-y-clip md:mt-14"
              src={Girl}
              width={900}
              height={900}
              alt={"girl"}
              priority={true}
            ></Image>
          </div>
        </div>
      </div>
    );
  }
  function buildCodingEvents() {
    return (
      <div className="pl-24 mt-6">
        <div
          className={`bg-[#D1ED9F] p-2 w-48
     rounded-lg h-12 text-center justify-center`}
        >
          <span className="font-bold text-2xl">Coding</span>
        </div>
        {/* <EventBox
          eventName="Hack the box"
          eventDescription="Sit in front of a box and pretend you know how to hack like you're mr.robot"
          dpt="coding"
          time="2nd Nov 9:50"
        /> */}
      </div>
    );
  }
  function buildRoboticEvents() {
    return (
      <div className="pl-24 mt-6">
        <div
          className={`bg-[#FFC691] p-2 w-48
     rounded-lg h-12 text-center flex flex-col justify-center`}
        >
          <span className="font-bold text-2xl">Robotic</span>
        </div>
        <EventBox
          eventName="Hack the box"
          eventDescription="Sit in front of a box and pretend you know how to hack like you're mr.robot"
          dpt="coding"
          time="2nd Nov 9:50"
        />
      </div>
    );
  }
  function buildDepartmentalEvents() {
    return (
      <div className="pl-24 mt-6">
        <div
          className={`bg-[#E1ABE8] p-2  w-48
     rounded-lg h-12 text-center flex flex-col justify-center`}
        >
          <span className="font-bold text-2xl">Departmental</span>
        </div>
        <EventBox
          eventName="Hack the box"
          eventDescription="Sit in front of a box and pretend you know how to hack like you're mr.robot"
          dpt="coding"
          time="2nd Nov 9:50"
        />
      </div>
    );
  }
  function buildPopularEvents() {
    return (
      <div className="md:ml-32 md:mr-32 p-6">
        <div className="rounded-xl flex flex-col mt-6">
          <div className={jost.className}>
            <div className="text-white font-bold text-4xl md:text-6xl mb-2">
              Popular events coming up
            </div>
          </div>
          <div className="text-[#8A8A8A] font-medium text-sm md:text-xl mb-4">
            <div className={poppins.className}>
              {" "}
              catch the most popular events and get registered!
            </div>
          </div>
        </div>
        <div className="">
          <Grid>
            <EventBox
              eventName="Hack the box"
              eventDescription="Sit in front of a box and pretend you know how to hack like you're mr.robot"
              dpt="coding"
              time="2nd Nov 9:50"
              shortDescription={
                "Tech Charades is a fun game that combines the classic game of charades with a modern technological twist"
              }
            />
            <EventBox
              eventName="Hack the box"
              eventDescription="Sit in front of a box and pretend you know how to hack like you're mr.robot"
              dpt="coding"
              time="2nd Nov 9:50"
              shortDescription={
                "Tech Charades is a fun game that combines the classic game of charades with a modern technological twist"
              }
            />
            <EventBox
              eventName="Hack the box"
              eventDescription="Sit in front of a box and pretend you know how to hack like you're mr.robot"
              dpt="coding"
              time="2nd Nov 9:50"
              shortDescription={
                "Tech Charades is a fun game that combines the classic game of charades with a modern technological twist"
              }
            />
          </Grid>
        </div>
      </div>
    );
  }
  return (
    <div>
      {buildTopBanner()}
      {buildFiltersList()}
      {buildPopularEvents()}
      <EventTabs data={data} />
    </div>
  );
}

export default function EventList() {
  function buildLine() {
    return (
      <hr class="w-[90%] t-4 h-[1px] mx-auto bg-gray-100 border-0 rounded dark:bg-[#9A9A9A]"></hr>
    );
  }
  return (
    <>
      <div className={montserrat.className}>
        <div className="bg-[#101010] absolute flex flex-col w-[100%] overflow-clip">
          <NavBar />
          {/* {buildLine()} */}
          <Suspense fallback={<Skeleton></Skeleton>}>
            <EventBody />
          </Suspense>
          <Footer />
        </div>
      </div>
    </>
  );
}

function Skeleton() {
  function buildLine() {
    return (
      <hr class="w-[90%] t-4 h-[1px] mx-auto bg-gray-100 border-0 rounded dark:bg-[#9A9A9A]"></hr>
    );
  }
  return (
    <div className="w-[98vw] relative h-[90vh] overflow-y-hidden bg-[#101010]">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[60vw] md:w-[40vw] h-[25vh] bg-neutral-800 rounded-lg mt-20 mb-12"></div>
        {buildLine()}
        <div className="flex flex-row space-x-10">
          <div className="md:w-[20vw] md:h-[10vh] bg-neutral-800 rounded-lg md:mt-20"></div>
          <div className="md:w-[20vw] md:h-[10vh] bg-neutral-800 rounded-lg md:mt-20"></div>
          <div className="md:w-[20vw] md:h-[10vh] bg-neutral-800 rounded-lg md:mt-20"></div>
        </div>
        <div className="flex flex-row space-x-10">
          <div className="w-[80vw] h-[3vh] md:w-[40vw]  md:h-[5vh] bg-neutral-800 rounded-lg mt-20"></div>
        </div>
        <div className="flex flex-row space-x-10">
          <div className="w-[80vw] h-[3vh] md:w-[40vw]  md:h-[5vh] bg-neutral-800 rounded-lg mt-20"></div>
        </div>
        <div className="flex flex-row space-x-10">
          <div className="w-[80vw] h-[3vh] md:w-[40vw]  md:h-[5vh] bg-neutral-800 rounded-lg mt-20"></div>
        </div>
        <div className="flex flex-row space-x-10">
          <div className="w-[70vw] md:w-[10vw]  md:h-[5vh] bg-neutral-800 rounded-lg mt-20"></div>
          <div className="w-[70vw] md:w-[10vw]  md:h-[5vh] bg-neutral-800 rounded-lg mt-20"></div>
        </div>
      </div>
    </div>
  );
}
