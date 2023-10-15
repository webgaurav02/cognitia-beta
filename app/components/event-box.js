"use client";

import { useState } from "react";
import { algreya, jost, montserrat, poppins } from "../utils/fonts";
import Waves from "../assets/Image.png";
import Image from "next/image";
// import Profile from "../assets/profile.png";
import Profile from "../assets/images/download 8.jpg";
import LinesEllipsis from "react-lines-ellipsis";
import Link from "next/link";

export default function EventBox({
  eventName,
  shortDescription,
  dept,
  time,
  venue,
  description,
  team,
  bannerImage,
  rulebook,
  form,
  form3,
}) {
  const [openDetail, setOpenDetail] = useState(false);
  function renderFormLink(form, form3) {
    if (form3) {
      return (
        <div className="flex flex-col">
          <Link legacyBehavior href={form}>
            <a target="_blank" rel="noopener noreferrer">
              <div className="text-[#252525] lg:mt-10 h-12 bg-[#F8D57E] lg:h-16 text-center  text-md rounded-md font-bold flex flex-col justify-center lg:text-xl">
                <span className={jost.className}>
                  Register for 1st and 2nd years!{" "}
                </span>
              </div>
            </a>
          </Link>
          <Link legacyBehavior href={form3}>
            <a target="_blank" rel="noopener noreferrer">
              <div className="text-[#252525] lg:mt-10 mt-5 h-12 bg-[#F8D57E] lg:h-16 text-center  text-md rounded-md font-bold flex flex-col justify-center lg:text-xl">
                <span className={jost.className}>Register for 3rd year! </span>
              </div>
            </a>
          </Link>
        </div>
      );
    }
    return !form ? (
      <div className="text-neutral-300 lg:mt-10 h-12 lg:h-16 text-center border-[1px] text-xs rounded-md font-bold flex flex-col justify-center lg:text-xl">
        <span className={jost.className}>Registrations opening soon! </span>
      </div>
    ) : (
      <Link legacyBehavior href={form}>
        <a target="_blank" rel="noopener noreferrer">
          <div className="text-[#252525] lg:mt-10 h-12 bg-[#F8D57E] lg:h-16 text-center  text-md rounded-md font-bold flex flex-col justify-center lg:text-xl">
            <span className={jost.className}>Register now! </span>
          </div>
        </a>
      </Link>
    );
  }
  function buildLine() {
    return (
      <hr class="w-[94%] lg:w-[88%] t-4 h-[1px] mx-auto bg-gray-100 border-0 rounded dark:bg-[#717171]"></hr>
    );
  }
  function EventDetail() {
    return (
      <div
        className={`${
          openDetail ? "flex" : "hidden"
        } fixed z-50 top-0 left-0 w-[100%] h-[100%] backdrop-blur-lg  flex-col items-center justify-center duration-300`}
      >
        <div
          onClick={() => {
            setOpenDetail(false);
          }}
          className="bg-neutral-200 p-2 rounded-xl font-bold mb-2 cursor-pointer"
        >
          {" "}
          {"< "}back
        </div>
        <div className="2xl:w-[40%] lg:w-[50%] sm:w-[40%] w-[90%] h-[90%] bg-[#0D0D0D] border-[1px] rounded-lg overflow-y-scroll">
          <div className="flex flex-col">
            <Image
              alt="image"
              className="rounded-bl-3xl rounded-br-3xl"
              src={bannerImage}
              width={1000}
              height={1000}
            />

            <div className="flex flex-col pl-4 pr-4 lg:ml-12 lg:mr-12">
              <div className="text-4xl text-[#E9E9E9] font-bold mt-5 lg:text-6xl lg:mt-10">
                {" "}
                <div className={jost.className}>{eventName}</div>
              </div>
              <div className={jost.className}>
                <div className="bg-[#212121] pb-3 pl-2 pr-2 pt-3 mt-4 lg:mt-10 rounded-lg">
                  <div className="ml-2 font-bold lg:text-xl text-xs text-[#E8E8E8]">
                    Grab the Rulebook here{" "}
                  </div>
                  {rulebook ? (
                    <Link legacyBehavior href={rulebook}>
                      <a target="_blank" rel="noopener noreferrer">
                        <div className="bg-[#E8E8E8] font-bold lg:text-xl pt-2 pb-2 text-center pl-4 pr-4 mt-2 ml-2 mr-2 mb-2 rounded-md text-[#101010]">
                          Grab RuleBook
                        </div>
                      </a>
                    </Link>
                  ) : (
                    <div className="bg-[#E8E8E8] font-bold pt-2 pb-2 text-center pl-4 pr-4 mt-2 ml-2 mr-2 mb-2 rounded-md text-[#101010]">
                      Coming Soon!
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col lg:mt-10  text-neutral-300 text-sm font-semibold space-y-4 mt-4 mr-2 mb-2  lg:text-xl ">
                <div className={jost.className}>
                  Venue: {venue?.length === 0 ? "To be decided" : venue}
                </div>
                <div className={jost.className}>
                  Time: {time.length == 0 ? "To be announced" : time}
                </div>
              </div>

              <div className={algreya.className}>
                {" "}
                <div className="mt-2 font-medium text-sm text-white opacity-60 mb-5 lg:text-2xl">
                  {shortDescription}
                </div>
              </div>
              {renderFormLink(form, form3)}
            </div>
            {/* {rulebook ? (
              <Link href={rulebook}>
                <div className="text-2xl text-white">View RuleBook</div>
              </Link>
            ) : (
              <></>
            )} */}
            <div className="font-bold text-neutral-100 text-2xl mt-10 ml-4 mr-4 lg:ml-14 lg:mr-12 lg:text-4xl">
              <div className={jost.className}>About Event</div>
            </div>
            {buildLine()}
            <div className="text-[#9E9E9E] font-medium text-sm mt-3 mr-4 ml-4 lg:text-2xl lg:ml-14 lg:mr-12">
              <div className={algreya.className}>{description}</div>
            </div>
            <div className="font-bold text-neutral-100 text-2xl mt-10 ml-4 mr-4 lg:ml-14 lg:mr-12 lg:text-4xl">
              <div className={jost.className}>Coordinators</div>
            </div>
            {buildLine()}
            <div className="flex-row flex justify-start ml-4 mt-5 space-x-5  lg:overflow-hidden overflow-x-scroll lg:ml-14 lg:mr-12">
              {team?.map((member, index) => {
                return (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-32 h-40 rounded-lg overflow-hidden">
                      <Image
                        alt="profile"
                        width={1000}
                        height={1000}
                        quality={10}
                        loader={({ src, width, quality }) =>
                          `${src}?w=${width}&q=${10}`
                        }
                        src={member.image ? member.image : Profile}
                      ></Image>
                    </div>
                    <span className="text-sm text-[#DEDEDE] text-center font-semibold mt-2">
                      <div className={poppins.className}>
                        {member.name.split(/(\s+)/)[0]}
                      </div>
                    </span>
                    <span className="text-xs text-[#DEDEDE] font-medium">
                      <div className={algreya.className}>{member.position}</div>
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="font-bold text-neutral-100 text-2xl mt-4 ml-4 mr-4 lg:ml-14 lg:mr-12 lg:text-4xl">
              <div className={jost.className}>Contact Us</div>
            </div>
            {buildLine()}
            <div className="text-[#9E9E9E] text-sm mt-3 lg:text-2xl mr-4 ml-4 mb-5 lg:ml-14 lg:mr-12">
              <div className={algreya.className}> Details coming soon..</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <EventDetail />
      <div className="flex flex-col justify-between max-w-sm rounded overflow-hidden shadow-lg">
        <Image
          placeholder="blur"
          alt="image"
          className={"rounded-t-xl object-fill w-full h-full"}
          src={bannerImage}
          height={1000}
          width={1000}
        />
        <div className="h-60 flex flex-col justify-between bg-neutral-800 rounded-b-xl p-6">
          <div className="flex-row flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="14"
              viewBox="0 0 12 14"
              fill="none"
            >
              <path
                d="M9.62397 9.32156L6.00811 13.048L2.39224 9.32156C1.6771 8.58454 1.19009 7.64552 0.992785 6.62325C0.795482 5.60098 0.896751 4.54137 1.28379 3.57841C1.67082 2.61546 2.32624 1.79241 3.16716 1.21334C4.00809 0.634271 4.99674 0.325195 6.00811 0.325195C7.01947 0.325195 8.00813 0.634271 8.84905 1.21334C9.68997 1.79241 10.3454 2.61546 10.7324 3.57841C11.1195 4.54137 11.2207 5.60098 11.0234 6.62325C10.8261 7.64552 10.3391 8.58454 9.62397 9.32156ZM6.00811 6.76621C6.30948 6.76621 6.59852 6.64283 6.81163 6.4232C7.02473 6.20358 7.14446 5.9057 7.14446 5.59511C7.14446 5.28451 7.02473 4.98664 6.81163 4.76701C6.59852 4.54739 6.30948 4.42401 6.00811 4.42401C5.70673 4.42401 5.41769 4.54739 5.20459 4.76701C4.99148 4.98664 4.87176 5.28451 4.87176 5.59511C4.87176 5.9057 4.99148 6.20358 5.20459 6.4232C5.41769 6.64283 5.70673 6.76621 6.00811 6.76621Z"
                fill="#DEDEDE"
              />
            </svg>
            <div className={algreya.className}>
              <div className="text-[#DEDEDE] text-sm ml-2">
                Time: {time.length == 0 ? "To be announced" : time}
              </div>
            </div>
          </div>
          <div>
            <div className={jost.className}>
              <div className="font-normal text-[#EBEBEB] text-2xl mt-2 mb-2">
                {/* <LinesEllipsis text={eventName} maxLine={1} ellipsis="..." /> */}
                {eventName}
              </div>
            </div>
            <div className={poppins.className}>
              <div className="text-white opacity-60 text-sm">
                <LinesEllipsis
                  text={shortDescription}
                  maxLine={2}
                  ellipsis="..."
                />
              </div>
            </div>
          </div>
          <div
            className="border-[1px] rounded-3xl mt-6 h-10 text-center flex flex-row items-center justify-center cursor-pointer"
            onClick={() => {
              setOpenDetail(true);
            }}
          >
            <div className={algreya.className}>
              <div className="text-[#C9C9C9] font-semibold">register</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
