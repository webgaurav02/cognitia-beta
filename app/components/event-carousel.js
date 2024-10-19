"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import EventCard from "./event-box";
import "./event-carousel.css";
import "swiper/css";
import "swiper/css/free-mode";

import "swiper/css/pagination";

export default function EventCarousel() {
  return (
    <div className="h-64">
      {/* <Swiper
        slidesPerView={4}
        // spaceBetween={15}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <EventCard
            eventName="Hack the box"
            eventDescription="Sit in front of a box and pretend you know how to hack like you're mr.robot"
            dpt="coding"
            time="2nd Nov 9:50"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <EventCard
            eventName="Hack the box"
            eventDescription="Sit in front of a box and pretend you know how to hack like you're mr.robot"
            dpt="coding"
            time="2nd Nov 9:50"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <EventCard
            eventName="Hack the box"
            eventDescription="Sit in front of a box and pretend you know how to hack like you're mr.robot"
            dpt="coding"
            time="2nd Nov 9:50"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <EventCard
            eventName="Hack the box"
            eventDescription="Sit in front of a box and pretend you know how to hack like you're mr.robot"
            dpt="coding"
            time="2nd Nov 9:50"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <EventCard
            eventName="Hack the box"
            eventDescription="Sit in front of a box and pretend you know how to hack like you're mr.robot"
            dpt="coding"
            time="2nd Nov 9:50"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <EventCard
            eventName="Hack the box"
            eventDescription="Sit in front of a box and pretend you know how to hack like you're mr.robot"
            dpt="coding"
            time="2nd Nov 9:50"
          />
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
}
