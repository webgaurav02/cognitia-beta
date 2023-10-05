
export default function Timeline(){
    return(
        <div className=" bg-[#101010] h-[768px] w-screen">
            <div className=" mx-36 grid grid-rows-1 grid-cols-3 h-full font-poppins">
                <div className="flex self-center col-span-1 text-white text-8xl font-poppinsbold"> 
                    Here's a timeline of all the events
                </div>
                <div className="grid grid-rows-3 col-span-2"> 
                    <div className="grid grid-rows-2 py-6 px-20 flex-col self-end justify-self-center h-40 w-11/12 bg-white rounded-3xl text-[#1A202C]">
                        <div className="flex text-xl">
                            <div className="self-center ">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.5" width="16" height="16" rx="8" fill="#626262" fill-opacity="0.3"/>
                                <circle cx="8" cy="8.5" r="4" fill="white"/>
                                </svg>
                            </div>
                            <div className="self-center">Nov 2nd </div>
                        </div>
                        <div className="flex w-full h-full overflow-clip">
                            <div className="w-1/4 border-r-2 border-[#486284] mr-10">
                                <div className=" text-xl font-poppinsbold">Hack the box</div>
                                <div>Time-10:15</div>
                            </div>
                            <div className="w-1/4 border-r-2 border-[#486284] mr-10">
                                <div className=" text-xl font-poppinsbold">Andha Biswas</div>
                                <div>Time-11:15</div>
                            </div>
                            <div className="w-1/4 border-r-2 border-[#486284] mr-10">
                                <div className=" text-xl font-poppinsbold">Hack the box</div>
                                <div>Time-10:15</div>
                            </div>
                            <div className="w-1/4 border-r-2 border-[#486284] mr-10">
                                <div className=" text-xl font-poppinsbold">Andha Biswas</div>
                                <div>Time-11:15</div>
                            </div>
                        </div>                                         
                    </div>
                    <div className="grid grid-rows-2 py-6 px-20 flex-col self-center justify-self-center h-40 w-11/12 bg-white rounded-3xl text-[#1A202C]">
                        <div className="flex text-xl">
                            <div className="self-center">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.5" width="16" height="16" rx="8" fill="#626262" fill-opacity="0.3"/>
                                <circle cx="8" cy="8.5" r="4" fill="white"/>
                                </svg>
                            </div>
                            <div className="self-center">Nov 3rd </div>
                        </div>
                        <div className="flex w-full h-full overflow-clip">
                            <div className="w-1/4 border-r-2 border-[#486284] mr-10">
                                <div className=" text-xl font-poppinsbold">Hack the box</div>
                                <div>Time-10:15</div>
                            </div>
                            <div className="w-1/4 border-r-2 border-[#486284] mr-10">
                                <div className=" text-xl font-poppinsbold">Andha Biswas</div>
                                <div>Time-11:15</div>
                            </div>
                            <div className="w-1/4 border-r-2 border-[#486284] mr-10">
                                <div className=" text-xl font-poppinsbold">Hack the box</div>
                                <div>Time-10:15</div>
                            </div>
                            <div className="w-1/4 border-r-2 border-[#486284] mr-10">
                                <div className=" text-xl font-poppinsbold">Andha Biswas</div>
                                <div>Time-11:15</div>
                            </div>
                        </div>                                         
                    </div>
                    <div className="grid grid-rows-2 py-6 px-20 flex-col self-start justify-self-center h-40 w-11/12 bg-white rounded-3xl text-[#1A202C]">
                        <div className="flex text-xl">
                            <div className="self-center">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.5" width="16" height="16" rx="8" fill="#626262" fill-opacity="0.3"/>
                                <circle cx="8" cy="8.5" r="4" fill="white"/>
                                </svg>
                            </div>
                            <div className="self-center">Nov 4th </div>
                        </div>
                        <div className="flex w-full h-full overflow-clip">
                            <div className="w-1/4 border-r-2 border-[#486284] mr-10">
                                <div className=" text-xl font-poppinsbold">Hack the box</div>
                                <div>Time-10:15</div>
                            </div>
                            <div className="w-1/4 border-r-2 border-[#486284] mr-10">
                                <div className=" text-xl font-poppinsbold">Andha Biswas</div>
                                <div>Time-11:15</div>
                            </div>
                            <div className="w-1/4 border-r-2 border-[#486284] mr-10">
                                <div className=" text-xl font-poppinsbold">Hack the box</div>
                                <div>Time-10:15</div>
                            </div>
                            <div className="w-1/4 border-r-2 border-[#486284] mr-10">
                                <div className=" text-xl font-poppinsbold">Andha Biswas</div>
                                <div>Time-11:15</div>
                            </div>
                        </div>                                         
                    </div>
                </div>
            </div>
        </div>
    )
}