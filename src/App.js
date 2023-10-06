import './App.css';
import Timeline from './timeline.js'
import PopularEvents from './pop.js'
import Footer from './footer';
import prl1 from './prl1.png';
import prl2 from './prl2.png';
import prl3 from './prl3.png';
import prl4 from './prl4.png';
import prl5 from './prl5.png';
import prl6 from './prl6.png';
import prl7 from './prl7.png';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';


function App() {
  return (
    <>
    <div className='fixed h-10 sm:h-24 w-screen bg-[#1A1A1A] border-b-2 border-stone-300 z-50'></div>
    <div className='w-screen h-screen '>
      <Parallax pages={2} className='animation'>

        <ParallaxLayer  
          offset={0}
          speed={0.2}>  
          <div className='animation_layer'>
            <img src={prl1} alt="background" className='w-[900px] sm:w-[1920px] opacity-100 object-cover'/>  
          </div>        
          </ParallaxLayer>


        <ParallaxLayer 
          offset={0.1}
          speed={1}>
          <div className='animation_layer'>
            <img src={prl2} alt="background" className='w-[900px] sm:w-[1920px] opacity-100 object-cover'/>  
          </div>     
        </ParallaxLayer>

                
        <ParallaxLayer
          offset={0.2}
          speed={-0.9}>
          <div className='font-poppins w-screen h-[768px] xl:h-[500px] 2xl:h-[768px] -translate-y-72 sm:translate-y-0 text-white'> 
          <div className=' px-2 md:px-36 grid grid-cols-1 sm:grid sm:grid-rows-7 sm:grid-cols-5 pt-52 sm:pt-0 sm:h-full'>
            <div className=' py-2 sm:py-0 row-span-2 col-span-3 lg:col-span-2 text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-7xl 2xl:text-9xl self-end duration-500'>
          COGNITIA 2K23 FEST
          </div>
          <div className='flex justify-end content-center row-span-6 lg:col-span-3 '> </div>
          <div className=' py-2 sm:py-0 row-span-2 col-span-2 text-md sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl text-gray-400 self-center duration-500'>Welcome to Cognitia, NIT Meghalaya’s annual tech and cultural fest. Explore all events and get registered now! </div>
        <div className='  py-2 sm:py-0 row-span-2 col-span-2 '><button className='border-black rounded-lg bg-[#F8D57E] text-black h-10 w-40 sm:h-20 sm:w-72 text-2xl hover:bg-white duration-500'>View Events</button></div>
        </div>
        </div>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={0.2}
          speed={1}>
            <div className='animation_layer'>
            <img src={prl3} alt="background" className='w-[900px] sm:w-[1920px] opacity-100 object-cover'/>  
          </div> 
        </ParallaxLayer>



        {/* <ParallaxLayer 
          offset={0.4}
          speed={1}>
          <div className='animation_layer'>
            <img src={prl5} alt="background" className='w-[900px] sm:w-[1920px] opacity-100 object-cover'/>  
          </div>     
        </ParallaxLayer> */}

        {/* <ParallaxLayer 
          offset={0.5}
          speed={3}>
            <div className='animation_layer'>
            <img src={prl6} alt="background" className='w-[900px] sm:w-[1920px] opacity-100 object-cover'/>  
          </div> 
        </ParallaxLayer> */}

        <ParallaxLayer 
          offset={0}
          speed={2}>
            <div className='animation_layer'>
            <img src={prl7} alt="background" className='w-[900px] sm:w-[1920px] opacity-100 object-cover'/>  
          </div> 
        </ParallaxLayer>



      </Parallax>
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
