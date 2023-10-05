import './App.css';
import background from './background.png'
import EventCarousel from './eventCarousel';
// colors 90A8ED FF90E8 FFC900 23A094 
function App() {
  return (
    <>
    <div className='absolute h-24 w-screen bg-[#1A1A1A]'></div>
    <div className=' bg-[#101010] font-poppins w-screen h-screen text-white'> 
      <div className=' px-36 grid grid-rows-7 grid-cols-5 h-screen '>
        <div className=' row-span-2 col-span-2 text-9xl self-end'>COGNITIA 2K23 FEST</div>
        <div className='flex justify-end content-center row-span-6 col-span-3 '>      <img className=' self-center w-5/6 h-4/6 object-cover rounded-2xl' src={background} alt="background" /></div>
        <div className=' row-span-2 col-span-2 text-3xl text-gray-400 self-center'>Welcome to Cognitia, NIT Meghalaya’s annual tech and cultural fest. Explore all events and get registered now! </div>
        <div className=' row-span-2 col-span-2 '><button className='border-black rounded-lg bg-[#F8D57E] text-black h-20 w-72 text-2xl'>View Events</button></div>
      </div>
      </div>
      <EventCarousel/>
      <div className="w-11/12 h-[0px] border-2 border-stone-300"></div>
      </>
  );
}

export default App;
