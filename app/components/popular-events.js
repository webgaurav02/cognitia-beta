import { montserrat } from "../utils/fonts";
import EventCarousel from "./event-carousel";
import Grid from "./grid";
import PopularEvent from "./popular-events-card";
export default function PopularEvents() {
  return (
    <div className="">
      <div className="mt-14 md:mt-20">
        <div className=" mx-10 sm:mx-36 text-white font-semibold text-4xl sm:text-4xl md:text-6xl self-center font-poppinsbold">
          <span className={montserrat.className}>
            Popular <span className="">events</span> coming up
          </span>
        </div>
        <div className=""></div>
        <div className="container my-8 md:ml-36 mt-14 mb-24 md:mt-24 md:mb-40">
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
    </div>
  );
}
