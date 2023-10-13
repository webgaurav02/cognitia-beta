import EventCarousel from "./event-carousel";
export default function PopularEvents() {
  return (
    <div className="h-screen w-screen">
      <div className="mt-20 sm:mt-0 sm:grid sm:grid-rows-5 sm:grid-cols-7 h-full font-poppins">
        <div className=" mx-10 sm:mx-36 sm:row-span-3 sm:col-span-5 text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl self-center font-poppinsbold">
          Psst...
          <br /> check out the most popular events
        </div>
        <div className=" mx-10 mt-40 sm:mx-36 sm:row-span-3 sm:col-span-5 text-neutral-600 text-3xl sm:text-4xl md:text-5xl lg:text-7xl self-center font-poppinsbold">
          Coming soon...
        </div>
        <div className="col-span-2 row-span-3"></div>
        <div className="pt-20 sm:pt-0 col-span-7 row-span-2">
          <EventCarousel />
        </div>
      </div>
    </div>
  );
}
