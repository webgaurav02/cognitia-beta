import React ,{useState , useEffect} from 'react'
import ScrollDownGif from './scrolldown.gif'
export default function ScrollDown(){
  const [canShow , setCanShow] = useState(false)
  
  // Set Time out
  useEffect(()=>{
    const timer = setTimeout( () => setCanShow(true) , 3000)
    return () => clearTimeout(timer);
  })
  
  return (
    <div className='text-xl text-white font-poppinsbold flex justify-end duration-300 w-screen  sm:-translate-x-10 opacity-70'>
        {canShow 
            ? 
            <div>
                <div className='translate-y-10 translate-x-4'>
                    Scroll Down
                </div>
                <img src={ScrollDownGif}></img> 

            </div>: <> 
            </>
        }
    </div>
  )
}