import { jakarta, poppins } from "../utils/fonts";
import { montserrat } from "../utils/fonts";

export default function Timeline() {
  function Container({ date, event1, event2, event3 }) {
    return (
      <>
        <div className={jakarta.className}>
          <div
            className="z-10 justify-self-center w-72 sm:w-96 md:w-[32vw] mb-10 content-center
           cursor-pointer
          bg-white rounded-2xl
          hover:bg-[#C7DFFF] hover:text-black  hover:border-2  shadow-lg hover:translate-x-4 duration-300
          text-[#1A202C]  flex flex-col mt-10 sm:mt-0 pb-2 md:pb-0"
          >
            <div className="md:text-xl relative  flex flex-col p-2">
              <div
                className="flex justify-center content-center text-center items-center absolute 
    bg-[#B2CEF4] rounded-2xl border-black border-[1px]
    font-bold text-xs md:text-sm p-1 xl:text-lg
    w-32 h-10 md:w-4/12 md:h-14  left-0 translate-x-[64%] md:translate-x-[100%] -top-6 md:-top-7
    "
              >
                {date}
              </div>

              <div className="mx-6 mt-6 md:mx-10 flex space-x-4">
                <div className="self-center ">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
                  >
                    <rect
                      y="0.5"
                      width="16"
                      height="16"
                      rx="8"
                      fill="grey"
                      fillOpacity="1"
                    />
                    <circle
                      cx="8"
                      cy="8.5"
                      r="4"
                      fill="white"
                      className="bg-black"
                    />
                  </svg>
                </div>
                <div className={jakarta.className}>
                  {" "}
                  <div className="self-center text-sm md:text-lg font-semibold">
                    {event1}
                  </div>
                </div>
              </div>
              <div className="mx-6 md:mx-10 flex space-x-4  mt-2  md:mt-5">
                <div className="self-center ">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
                  >
                    <rect
                      y="0.5"
                      width="16"
                      height="16"
                      rx="8"
                      fill="grey"
                      fillOpacity="1"
                    />
                    <circle
                      cx="8"
                      cy="8.5"
                      r="4"
                      fill="white"
                      className="bg-black"
                    />
                  </svg>
                </div>
                <div className="self-center text-sm md:text-lg font-semibold">
                  {event2}
                </div>
              </div>
              {event3 && <div className="mx-6 md:mx-10 flex space-x-4  mt-2  md:mt-5 md:mb-5">
                <div className="self-center ">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
                  >
                    <rect
                      y="0.5"
                      width="16"
                      height="16"
                      rx="8"
                      fill="grey"
                      fill-opacity="1"
                    />
                    <circle
                      cx="8"
                      cy="8.5"
                      r="4"
                      fill="white"
                      className="bg-black"
                    />
                  </svg>
                </div>
                <div className="self-center text-sm md:text-lg font-semibold">
                  {event3}
                </div>
              </div>}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="relative bg-[rgb(16,16,16)] w-screen">
      <div
        className="z-10 justify-items-center space-y-10  mt-0 md:mt-20 sm:space-y-0
        h-full w-screen md:px-36
        font-poppins flex flex-col lg:flex-row items-center mb-10"
      >
        <div className={montserrat.className}>
          <div
            className="self-center
                px-5 translate-y-10 md:px-0 md:translate-y-0  md:h-full md:items-center
                text-white text-4xl md:text-4xl lg:text-6xl font-bold mb-4"
          >
            Here&apos;s a <span className="text-[#61E2F3]">Timeline</span> of
            the events
          </div>
          <div className={poppins.className}>
            <div
              className="flex self-center col-span-1 row-span-1
                px-5 translate-y-10 md:px-0 md:translate-y-0  md:h-full md:items-center
                text-[#8A8A8A] text-sm sm:text-lg font-bold mb-4"
            >
              or you could always download the brochure including all the
              details of the event, down below
            </div>
          </div>
        </div>
        <div className="relative flex flex-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1000"
            height="500"
            viewBox="0 0 870 629"
            fill="none"
            className="absolute -left-40"
          >
            <path
              d="M137.05 9.02896C34.3835 119.362 -109.35 388.429 137.05 582.029C445.05 824.029 84.5502 -86.471 310.55 43.529C536.55 173.529 306.55 718.529 534.55 611.529C762.55 504.529 426.55 -73.471 577.55 9.02896C728.55 91.529 952.55 282.529 838.05 365.029C723.55 447.529 600.55 482.029 637.05 564.029C673.55 646.029 870.05 646.029 854.05 582.029"
              stroke="#454545"
            />
          </svg>
          <div className="relative z-10">
            <Container
              date={"7th November"}
              event1={"Official commencement of the Cognitia 2023 event"}
              event2={"Inauguration Ceremony at 3:00PM"}
            />
            <Container
              date={"8th November"}
              event1={"Coding Contest by the Coding Club"}
              event2={"Drone Event by the Robotics Club"}
              event3={"Pinnacle Perspective by the Taskforce Club"}
            />
            <Container
              date={"9th November"}
              event1={"Roborumble by the Robotics Club"}
              event2={"Jam Session"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
