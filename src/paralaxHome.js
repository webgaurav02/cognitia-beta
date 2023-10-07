import prl1 from './images/prl1.png';
import prl2 from './images/prl2.png';
import prl3 from './images/prl3.png';
import prl5 from './images/prl5.png';
import prl7 from './images/prl7.png';
import bgend from './images/bgend.png'
import TextBlock from './textBlock';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function ParalaxHome() {
    return(
        <div className='w-screen h-screen '>
      <Parallax pages={2} className='animation'>

      {/* <ParallaxLayer 
          offset={1}
          speed={0.5}>
            <TextBlock/>
        </ParallaxLayer> */}

        <ParallaxLayer  
          offset={0}
          speed={1}>  
          <div className='animation_layer'>
            <img src={prl1} alt="background" className='w-[900px] sm:w-[1920px] opacity-100 object-cover'/>  
          </div>        
          </ParallaxLayer>

        <ParallaxLayer 
          offset={0.1}
          speed={1.3}>
          <div className='animation_layer'>
            <img src={prl2} alt="background" className='w-[900px] sm:w-[1920px] opacity-100 object-cover'/>  
          </div>     
        </ParallaxLayer>

        <ParallaxLayer 
          offset={0.9}
          speed={2}>
            <TextBlock/>
        </ParallaxLayer>


        <ParallaxLayer 
          offset={0.3}
          speed={1.5}>
            <div className='animation_layer'>
            <img src={prl3} alt="background" className='w-[900px] sm:w-[1920px] opacity-100 object-cover'/>  
          </div> 
        </ParallaxLayer>



        <ParallaxLayer 
          offset={0.1}
          speed={2.4}>
          <div className='animation_layer'>
            <img src={prl5} alt="background" className='w-[900px] sm:w-[1920px] opacity-100 object-cover'/>  
          </div>     
        </ParallaxLayer>

        <ParallaxLayer 
          offset={0}
          speed={2}>
            <div className='animation_layer'>
            <img src={prl7} alt="background" className='w-[900px] sm:w-[1920px] opacity-100 object-cover'/>  
          </div> 
        </ParallaxLayer>



        <ParallaxLayer 
          offset={1}
          speed={0}>
            <div className='animation_layer'>
            <img src={bgend} alt="background" className='w-[900px] sm:w-[1920px] opacity-100 object-cover sm:-translate-y-[35vh]'></img>  
          </div> 
        </ParallaxLayer>
      
        <ParallaxLayer
          offset={0.2}
          speed={-1}>
          <div className='font-poppins w-screen h-[768px] xl:h-[500px] 2xl:h-[768px] -translate-y-72 sm:-translate-y-10 text-white z-50'> 
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


      </Parallax>
    </div>

    )
}

export default ParalaxHome;