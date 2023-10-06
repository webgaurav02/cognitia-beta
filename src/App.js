import './App.css';
import Timeline from './timeline.js'
import PopularEvents from './pop.js'
import Footer from './footer';
import background from './background.jpg'


function App() {
  return (
    <>
    <div className='fixed h-10 sm:h-24 w-screen bg-[#1A1A1A] border-b-2 border-stone-300 z-50'></div>
    <div className='h-10 sm:h-24'></div>
    <div id="bgPic" className='w-screen'>
    <img src={background} alt="background" className='w-screen h-full opacity-70 object-cover z-10'/>
    </div>
    <div className='font-poppins w-screen h-[768px] text-white -translate-y-full absolute'> 
      <div className=' px-2 md:px-36 grid grid-rows-7 grid-cols-5 pt-52 sm:pt-0 sm:h-full '>
        <div className=' py-2 sm:py-0 row-span-2 col-span-3 lg:col-span-2 text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl self-end hover:bg-white peer/title hover:text-black duration-500'>COGNITIA 2K23 FEST</div>
        <div className='flex justify-end content-center row-span-6 lg:col-span-3 '> </div>
        <div className=' py-2 sm:py-0 row-span-2 col-span-2 text-md sm:text-xl md:text-xl lg:text-2xl xl:text-3xl text-gray-400 self-center peer-hover/title:bg-white peer-hover/title:text-black hover:bg-white hover:text-black duration-500'>Welcome to Cognitia, NIT Meghalaya’s annual tech and cultural fest. Explore all events and get registered now! </div>
        <div className='  py-2 sm:py-0 row-span-2 col-span-2 '><button className='border-black rounded-lg bg-[#F8D57E] text-black h-20 w-72 text-2xl hover:bg-white'>View Events</button></div>
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
