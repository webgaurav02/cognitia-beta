
import Carousel from 'react-elastic-carousel'
import EventBox from './eventBoxes';

const breakPoints=[
  {width:1, itemsToShow: 1},
  {width:550, itemsToShow: 2},
  {width:768, itemsToShow: 2},
  {width:1200, itemsToShow: 3}
];

export default function EventCarousel () {
  return (
    <>
    <div className='w-full h-[250px] '>
      <div className='flex justify-center bg-[#101010] w-full h-full mt-0'>
        <Carousel
          breakPoints={breakPoints}
          pagination={false}
          >
          <EventBox
            eventName="Hack the box" 
            eventDescription="Sit in front of a box and pretend you know how to hack like you're mr.robot" 
            dpt="coding"
            time="2nd Nov 9:50"
          />
          <EventBox 
            eventName="Relay Typing" 
            eventDescription="Pretend like you know how to code but you're just typing someone else's algorithm" 
            dpt="robotics"
            time="3rd Nov 1:00"
            />
          <EventBox 
            eventName="Hack the box" 
            eventDescription="Sit in front of a box and pretend you know how to hack like you're mr.robot" 
            dpt="departmental"
            time="2nd Nov 9:50"
            />
          <EventBox
            eventName="Hack the box" 
            eventDescription="Sit in front of a box and pretend you know how to hack like you're mr.robot" 
            dpt="coding"
            time="2nd Nov 9:50"
            />
         <EventBox 
            eventName="Relay Typing" 
            eventDescription="Pretend like you know how to code but you're just typing someone else's algorithm" 
            dpt="robotics"
            time="3rd Nov 1:00"
            />
          <EventBox 
            eventName="Hack the box" 
            eventDescription="Sit in front of a box and pretend you know how to hack like you're mr.robot" 
            dpt="departmental"
            time="2nd Nov 9:50"
            />
        </Carousel>
      </div>
    </div>
    </>
  );
}
