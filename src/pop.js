import EventCarousel from "./eventCarousel";

export default function PopularEvents(){
    return(
        <div className="h-screen w-screen">
            <div className="grid grid-rows-5 grid-cols-7 h-full font-poppins">
                <div className="mx-36 row-span-3 col-span-5 text-white text-8xl self-center font-poppinsbold">
                    Psst...<br/> check out the most popular events
                </div>
                <div className="row-span-2 col-span-7 justify-self-center w-11/12">
                    <EventCarousel/>
                </div>
            </div>
        </div>
    );
}