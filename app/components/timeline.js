import { jakarta } from "../utils/fonts";
import { montserrat } from "../utils/fonts";

export default function Timeline() {
  return (
    <div className=" bg-[rgb(16,16,16)] h-[668px] sm:h-screen w-screen">
      <div
        className="grid grid-rows-4 grid-cols-1 justify-items-center space-y-10 sm:space-y-0 md:grid-cols-3 md:grid-rows-1
        h-full w-screen md:px-36
        font-poppins"
      >
        <div className={montserrat.className}>
        <div
          className="flex self-center col-span-1 row-span-1
                px-5 translate-y-10 md:px-0 md:translate-y-0  md:h-full md:items-center
                text-white text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold"
        >
          Here&apos;s a timeline of all the events
        </div>
        </div>
        <div
          className="grid grid-rows-3 row-span-3 md:row-span-1 md:col-span-2 md:justify-items-center
                h-96 w-72 md:h-full md:w-full
                text-xs 2xl:text-xl"
        >
          <div className="md:self-end md:w-10/12 md:h-11/12">
          <div className={jakarta.className}>
          <div
            className="grid grid-rows-2 justify-self-center w-72 h-24 md:w-full md:h-[18vh] content-center
                     
                    bg-white rounded-2xl
                    hover:bg-black hover:text-white hover:border-stone-300 hover:border-2 hover:shadow-white shadow-lg hover:translate-x-4 duration-300
                    text-[#1A202C]"
          >
            <div className="flex md:text-xl relative">
              <div className="flex justify-center content-center items-center absolute 
              bg-[#B2CEF4] rounded-2xl border-black border-[1px]
              font-bold text-md md:text-xs xl:text-2xl
              w-32 h-10 md:w-4/12 md:h-14 left-0 translate-x-[64%] md:translate-x-[100%] -top-6 md:-top-7
              ">
                November 2nd
              </div>
              <div className="flex flex-col space-y-2 xl:space-y-4 2xl:space-y-7">
                <div className="mx-6 mt-6 md:mx-10 md:mt-10 flex space-x-4">
                  <div className="self-center ">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.5"
                        width="16"
                        height="16"
                        rx="8"
                        fill="#626262"
                        fill-opacity="0.3"
                      />
                      <circle cx="8" cy="8.5" r="4" fill="white" />
                    </svg>
                  </div>
                  <div className="self-center sm:text-sm md:text-xs xl:text-xl 2xl:text-2xl">Official commencement of the Cognitia 2k23 event</div>
                </div>
                <div className="mx-6 md:mx-10 flex space-x-4 ">
                  <div className="self-center ">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.5"
                        width="16"
                        height="16"
                        rx="8"
                        fill="#626262"
                        fill-opacity="0.3"
                      />
                      <circle cx="8" cy="8.5" r="4" fill="white" />
                    </svg>
                  </div>
                  <div className="self-center  sm:text-sm md:text-xs xl:text-xl 2xl:text-2xl">Inauguration Ceremony at 9:00am</div>
                </div>
              </div>
            </div>
           </div>
           </div>
           </div>
           <div className="md:self-center md:w-10/12 md:h-11/12">
          <div className={jakarta.className}>
          <div
            className="grid grid-rows-2 justify-self-center w-72 h-24 md:w-full md:h-[18vh] content-center
                     
                    bg-white rounded-2xl
                    hover:bg-black hover:text-white hover:border-stone-300 hover:border-2 hover:shadow-white shadow-lg hover:translate-x-4 duration-300
                    text-[#1A202C]"
          >
            <div className="flex md:text-xl relative">
              <div className="flex justify-center content-center items-center absolute 
              bg-[#B2CEF4] rounded-2xl border-black border-[1px]
              font-bold text-md md:text-xs xl:text-2xl
              w-32 h-10 md:w-4/12 md:h-14 left-0 translate-x-[64%] md:translate-x-[100%] -top-6 md:-top-7
              ">
                November 2nd
              </div>
              <div className="flex flex-col space-y-2 xl:space-y-4 2xl:space-y-7">
                <div className="mx-6 mt-6 md:mx-10 md:mt-10 flex space-x-4">
                  <div className="self-center ">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.5"
                        width="16"
                        height="16"
                        rx="8"
                        fill="#626262"
                        fill-opacity="0.3"
                      />
                      <circle cx="8" cy="8.5" r="4" fill="white" />
                    </svg>
                  </div>
                  <div className="self-center sm:text-sm md:text-xs xl:text-xl 2xl:text-2xl">Official commencement of the Cognitia 2k23 event</div>
                </div>
                <div className="mx-6 md:mx-10 flex space-x-4 ">
                  <div className="self-center ">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.5"
                        width="16"
                        height="16"
                        rx="8"
                        fill="#626262"
                        fill-opacity="0.3"
                      />
                      <circle cx="8" cy="8.5" r="4" fill="white" />
                    </svg>
                  </div>
                  <div className="self-center  sm:text-sm md:text-xs xl:text-xl 2xl:text-2xl">Inauguration Ceremony at 9:00am</div>
                </div>
              </div>
            </div>
           </div>
           </div>
           </div>
           <div className="md:self-start md:w-10/12 md:h-11/12">
          <div className={jakarta.className}>
          <div
            className="grid grid-rows-2 justify-self-center w-72 h-24 md:w-full md:h-[18vh] content-center
                     
                    bg-white rounded-2xl
                    hover:bg-black hover:text-white hover:border-stone-300 hover:border-2 hover:shadow-white shadow-lg hover:translate-x-4 duration-300
                    text-[#1A202C]"
          >
            <div className="flex md:text-xl relative">
              <div className="flex justify-center content-center items-center absolute 
              bg-[#B2CEF4] rounded-2xl border-black border-[1px]
              font-bold text-md md:text-xs xl:text-2xl
              w-32 h-10 md:w-4/12 md:h-14 left-0 translate-x-[64%] md:translate-x-[100%] -top-6 md:-top-7
              ">
                November 2nd
              </div>
              <div className="flex flex-col space-y-2 xl:space-y-4 2xl:space-y-7">
                <div className="mx-6 mt-6 md:mx-10 md:mt-10 flex space-x-4">
                  <div className="self-center ">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.5"
                        width="16"
                        height="16"
                        rx="8"
                        fill="#626262"
                        fill-opacity="0.3"
                      />
                      <circle cx="8" cy="8.5" r="4" fill="white" />
                    </svg>
                  </div>
                  <div className="self-center sm:text-sm md:text-xs xl:text-xl 2xl:text-2xl">Official commencement of the Cognitia 2k23 event</div>
                </div>
                <div className="mx-6 md:mx-10 flex space-x-4 ">
                  <div className="self-center ">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.5"
                        width="16"
                        height="16"
                        rx="8"
                        fill="#626262"
                        fill-opacity="0.3"
                      />
                      <circle cx="8" cy="8.5" r="4" fill="white" />
                    </svg>
                  </div>
                  <div className="self-center  sm:text-sm md:text-xs xl:text-xl 2xl:text-2xl">Inauguration Ceremony at 9:00am</div>
                </div>
              </div>
            </div>
           </div>
           </div>
           </div>
           
            
        </div>
      </div>
    </div>
  );
}
