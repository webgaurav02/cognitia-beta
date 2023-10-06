
export default function Timeline(){
    return(
        <div className=" bg-[rgb(16,16,16)] h-[768px] w-screen">
            <div className=" mx-3 mt-10 md:0 md:mx-36 md:grid grid-rows-1 grid-cols-3 h-full font-poppins">
                <div className="flex px-5 translate-y-10 md:px-0 md:translate-y-0 self-center col-span-1 text-white text-3xl md:text-8xl font-poppinsbold"> 
                    Here's a timeline of all the events
                </div>
                <div className="grid grid-rows-3 col-span-2 text-xs md:text-xl h-3/4 w-full md:h-full md:w-full"> 
                    <div className="grid grid-rows-2 py-2 px-2 md:py-6 md:px-20 flex-col self-end justify-self-center h-24 md:h-40 md:w-11/12 bg-white 
                      hover:bg-black hover:text-white hover:border-stone-300 hover:border-2 hover:shadow-white shadow-lg hover:translate-x-4
                        rounded-lg md:rounded-3xl text-[#1A202C] duration-300">
                        <div className="flex md:text-xl">
                            <div className="self-center ">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.5" width="16" height="16" rx="8" fill="#626262" fill-opacity="0.3"/>
                                <circle cx="8" cy="8.5" r="4" fill="white"/>
                                </svg>
                            </div>
                            <div className="self-center">Nov 2nd </div>
                        </div>
                        <div className="flex w-full h-full overflow-clip">
                            <div className="md:w-1/4 border-r-2 border-[#486284] md:mr-10">
                                <div className=" md:text-xl font-poppinsbold">Hack the box</div>
                                <div>Time-10:15</div>
                            </div>
                            <div className="md:w-1/4 border-r-2 border-[#486284] md:mr-10">
                                <div className=" md:text-xl font-poppinsbold">Andha Biswas</div>
                                <div>Time-11:15</div>
                            </div>
                            <div className="md:w-1/4 border-r-2 border-[#486284] md:mr-10">
                                <div className=" md:text-xl font-poppinsbold">Hack the box</div>
                                <div>Time-10:15</div>
                            </div>
                            <div className="md:w-1/4 border-r-2 border-[#486284] md:mr-10">
                                <div className=" md:text-xl font-poppinsbold">Andha Biswas</div>
                                <div>Time-11:15</div>
                            </div>
                        </div>                                         
                    </div>
                    <div className="grid grid-rows-2 py-2 px-2 md:py-6 md:px-20 flex-col self-center justify-self-center h-24  md:h-40 md:w-11/12 bg-white 
                    hover:bg-black hover:text-white hover:border-stone-300 hover:border-2 hover:shadow-white shadow-lg hover:translate-x-4
                    rounded-lg md:rounded-3xl text-[#1A202C] duration-300">
                        <div className="flex md:text-xl">
                            <div className="self-center ">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.5" width="16" height="16" rx="8" fill="#626262" fill-opacity="0.3"/>
                                <circle cx="8" cy="8.5" r="4" fill="white"/>
                                </svg>
                            </div>
                            <div className="self-center">Nov 2nd </div>
                        </div>
                        <div className="flex w-full h-full overflow-clip">
                            <div className="md:w-1/4 border-r-2 border-[#486284] md:mr-10">
                                <div className=" md:text-xl font-poppinsbold">Hack the box</div>
                                <div>Time-10:15</div>
                            </div>
                            <div className="md:w-1/4 border-r-2 border-[#486284] md:mr-10">
                                <div className=" md:text-xl font-poppinsbold">Andha Biswas</div>
                                <div>Time-11:15</div>
                            </div>
                            <div className="md:w-1/4 border-r-2 border-[#486284] md:mr-10">
                                <div className=" md:text-xl font-poppinsbold">Hack the box</div>
                                <div>Time-10:15</div>
                            </div>
                            <div className="md:w-1/4 border-r-2 border-[#486284] md:mr-10">
                                <div className=" md:text-xl font-poppinsbold">Andha Biswas</div>
                                <div>Time-11:15</div>
                            </div>
                        </div>                                         
                    </div>
                    <div className="grid grid-rows-2 py-2 px-2 md:py-6 md:px-20 flex-col self-start justify-self-center h-24 md:h-40 md:w-11/12 bg-white 
                    hover:bg-black hover:text-white hover:border-stone-300 hover:border-2 hover:shadow-white shadow-lg hover:translate-x-4
                    rounded-lg md:rounded-3xl text-[#1A202C] duration-300">
                        <div className="flex md:text-xl">
                            <div className="self-center ">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.5" width="16" height="16" rx="8" fill="#626262" fill-opacity="0.3"/>
                                <circle cx="8" cy="8.5" r="4" fill="white"/>
                                </svg>
                            </div>
                            <div className="self-center">Nov 2nd </div>
                        </div>
                        <div className="flex w-full h-full overflow-clip">
                            <div className="md:w-1/4 border-r-2 border-[#486284] md:mr-10">
                                <div className=" md:text-xl font-poppinsbold">Hack the box</div>
                                <div>Time-10:15</div>
                            </div>
                            <div className="md:w-1/4 border-r-2 border-[#486284] md:mr-10">
                                <div className=" md:text-xl font-poppinsbold">Andha Biswas</div>
                                <div>Time-11:15</div>
                            </div>
                            <div className="md:w-1/4 border-r-2 border-[#486284] md:mr-10">
                                <div className=" md:text-xl font-poppinsbold">Hack the box</div>
                                <div>Time-10:15</div>
                            </div>
                            <div className="md:w-1/4 border-r-2 border-[#486284] md:mr-10">
                                <div className=" md:text-xl font-poppinsbold">Andha Biswas</div>
                                <div>Time-11:15</div>
                            </div>
                        </div>                                         
                    </div>
                </div>
            </div>
        </div>
    )
}