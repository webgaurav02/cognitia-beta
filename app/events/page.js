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
import Link from "next/link";
import coding1 from "../assets/defaults/coding1.png";
import coding3 from "../assets/defaults/coding3.png";
import coding4 from "../assets/defaults/coding4.png";
import coding5 from "../assets/defaults/coding5.png";
import PopularEvents from "../components/popular-events";
import PopularEvent from "../components/popular-events-card";

async function EventBody() {
  let data = await getEvents();
  function buildLine() {
    return (
      <hr className="w-[90%] t-4 h-[1px] mx-auto bg-gray-100 border-0 rounded dark:bg-[#9A9A9A]"></hr>
    );
  }
  function buildFiltersList() {
    return (
      <div
        id="filters"
        className="flex flex-row justify-between overflow-x-scroll mt-6 mb-4 pr-5 space-x-1"
      >
        <FilterButton type={"cc"} name={"CODING"} />
        <FilterButton type={"rc"} name={"ROBOTIC"} />
        <FilterButton type={"ac"} name={"ASTRONOMY"} />
        <FilterButton type={"dp"} name={"DEPARTMENTAL"} />
        <FilterButton type={"ac"} name={"GAMING"} />
        <FilterButton type={"rc"} name={"PHOTOGRAPHY"} />
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
                  Browse all the upcoming events of cognitia 2K24 compiled for
                  you in one easy to navigate page. So? What are you waiting
                  for?
                </div>
              </div>
              <Link href="#events">
                <div className="flex flex-row ml-2 items-center mt-2  md:mt-6">
                  <RegisterIcon />
                  <div className={montserrat.className}>
                    <div className="text-sm font-normal md:text-xl text-[#DADADA]">
                      Register Now!
                    </div>
                  </div>
                </div>
              </Link>
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

  function buildPopularEvents() {
    return (
      <div className="md:ml-32 md:mr-32 p-6">
        <div className="rounded-xl flex flex-col mt-6 ml-2">
          <div className={jost.className}>
            <div className="text-white font-semibold leading-9 text-[2.6rem] md:text-6xl mb-2">
              Popular events coming up
            </div>
          </div>
          <div className="text-[#8A8A8A] mt-1 font-medium leading-tight text-sm md:text-xl mb-4">
            <div className={poppins.className}>
              {" "}
              catch the most popular events and get registered!
            </div>
          </div>
        </div>
        <div className="">
          <div className="container my-8 mt-8 mb-12 md:mb-40">
            <div className="grid justify-center sm:justify-start lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 md:gap-48">
              <PopularEvent
                name={"Hackathon"}
                shortDescription={
                  "Participants will be given a problem statement and they must build a website or a mobile application as a solution, within a speciﬁed amount of time. Innovate and create!"
                }
              />
              <PopularEvent
                name={"Robo Rumble"}
                shortDescription={
                  "A competition in which teams fight with their bots in an arena, with the winning bot being crowned the winner.Create a wireless bot with special weapons that can compete with other bots."
                }
              />
              <PopularEvent
                name={"Tech Charades"}
                shortDescription={
                  "Tech Charades is a fun game that combines the classic game of charades with a modern technological twist"
                }
              />
            </div>
          </div>
        </div>
        <div className={jost.className}>
          <div className="text-white font-bold text-4xl md:text-6xl mb-2">
            Browse all our events
          </div>
        </div>
        <div className="text-[#8A8A8A] font-medium leading-tight text-sm md:text-xl mb-4">
          <div className={poppins.className}>
            {" "}
            browse through our large catalogue of events down under!
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      {buildTopBanner()}
      {buildFiltersList()}
      {buildPopularEvents()}
      <div className="relative">
        <div id="events" className="absolute -top-64 w-10 h-96"></div>
      </div>
      <EventTabs data={data} />
    </div>
  );
}

export default function EventList() {
  function buildLine() {
    return (
      <hr className="w-[90%] t-4 h-[1px] mx-auto bg-gray-100 border-0 rounded dark:bg-[#9A9A9A]"></hr>
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
      <hr className="w-[90%] t-4 h-[1px] mx-auto bg-gray-100 border-0 rounded dark:bg-[#9A9A9A]"></hr>
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
