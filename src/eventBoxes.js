
  export default function EventBox(props) {
    return (
      <div className=" h-[250px]">
      <div className={props.dpt === "coding" ? 
          "flex translate-y-5 justify-center bg-bgcoding rounded-t-3xl border-[#0A0A0A] w-[500px] h-[200px] ": 
        props.dpt === "robotics" ? 
          "flex justify-center translate-y-5  bg-bgrobotics rounded-t-3xl border-[#0A0A0A] w-[500px] h-[200px] ": 
          "flex justify-center translate-y-5  bg-bgdpt rounded-t-3xl border-[#0A0A0A] w-[500px] h-[200px]"}>
        <div className=" flex relative -translate-y-3 row-span-3 bg-[#181818] border-gray-500  rounded-t-2xl w-[500px] h-[200px] text-center hover:translate-x-0 hover:translate-y-0 duration-300 text-white" >
          <div className="w-5/12 h-full">
            <img src="https://images.unsplash.com/photo-1683009427042-e094996f9780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" alt="EventPic" className="h-full w-full object-cover rounded-tl-2xl" draggable="false"></img>
          </div>
          <div className="flex flex-col rows-7 m-5 text-left w-7/12 h-full">
            <div className="flex h-1/6 space-x-2 w-full">
            <svg width="16" height="21" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.75 0.9H8.55C8.66935 0.9 8.78381 0.947411 8.8682 1.0318C8.95259 1.11619 9 1.23065 9 1.35V8.55C9 8.66935 8.95259 8.78381 8.8682 8.8682C8.78381 8.95259 8.66935 9 8.55 9H0.45C0.330653 9 0.216193 8.95259 0.131802 8.8682C0.0474106 8.78381 0 8.66935 0 8.55V1.35C0 1.23065 0.0474106 1.11619 0.131802 1.0318C0.216193 0.947411 0.330653 0.9 0.45 0.9H2.25V0H3.15V0.9H5.85V0H6.75V0.9ZM0.9 3.6V8.1H8.1V3.6H0.9ZM1.8 5.4H4.05V7.2H1.8V5.4Z" fill="#EAEAEA"/>
              </svg>
                <div>Time : {props.time}</div>
            </div>
            <div className=" h-1/6 w-full">
              <h1 className=" text-2xl font-fleuron ">{props.eventName}</h1>
            </div>
            <div className=" text-sm h-2/6 w-full">
              <p>{props.eventDescription}</p>
            </div>
            <div className=" h-2/6 w-full">
              <button className="flex hover:bg-black hover:text-white space-x-4">
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20.5652" cy="21.1003" r="20.3276" stroke="#EAEAEA" stroke-width="0.469366"/>
                <path d="M13.2903 27.0852C12.9237 27.4518 12.9237 28.0462 13.2903 28.4128C13.6569 28.7794 14.2513 28.7794 14.6179 28.4128L13.2903 27.0852ZM26.8493 15.7925C26.8493 15.2741 26.429 14.8538 25.9106 14.8538L17.462 14.8538C16.9436 14.8538 16.5233 15.2741 16.5233 15.7925C16.5233 16.311 16.9436 16.7313 17.462 16.7313L24.9719 16.7313L24.9719 24.2411C24.9719 24.7596 25.3921 25.1799 25.9106 25.1799C26.429 25.1799 26.8493 24.7596 26.8493 24.2411L26.8493 15.7925ZM14.6179 28.4128L26.5744 16.4563L25.2468 15.1288L13.2903 27.0852L14.6179 28.4128Z" fill="#EAEAEA"/>
              </svg>

                <div className=" translate-y-2"><u>learn more</u></div>
              </button>
            </div>
            </div>
          
        </div>
      </div>
      </div>
    )
  }

  