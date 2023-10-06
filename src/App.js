import './App.css';
import Timeline from './timeline.js'
import PopularEvents from './pop.js'
import Footer from './footer';
// colors 90A8ED FF90E8 FFC900 23A094 
function App() {
  return (
    <>
    <div className='fixed h-24 w-screen bg-[#1A1A1A] border-b-2 border-stone-300 z-50'></div>
    <div className='h-24'></div>
    <div id="bgPic" className='opacity-50'></div>
    <div className='font-poppins w-screen h-[768px] text-white -translate-y-full absolute'> 
      <div className=' px-36 grid grid-rows-7 grid-cols-5 h-full '>
        <div className=' row-span-2 col-span-2 text-9xl self-end'>COGNITIA 2K23 FEST</div>
        <div className='flex justify-end content-center row-span-6 col-span-3 '> </div>
        <div className=' row-span-2 col-span-2 text-3xl text-gray-400 self-center'>Welcome to Cognitia, NIT Meghalaya’s annual tech and cultural fest. Explore all events and get registered now! </div>
        <div className=' row-span-2 col-span-2 '><button className='border-black rounded-lg bg-[#F8D57E] text-black h-20 w-72 text-2xl hover:bg-white'>View Events</button></div>
    </div>
      
    </div>
    <div className='flex justify-center'>
      <div className="w-11/12 border-b-2 border-stone-300"></div>
    </div>

    <Timeline />

    <div className='flex justify-center'>
      <div className="w-11/12 border-b-2 border-stone-300"></div>
    </div>

    <PopularEvents/>

    <div className='flex justify-center'>
      <div className="w-11/12 border-b-2 border-stone-300"></div>
    </div>

    <Footer/>

    </>
  );
}

export default App;
