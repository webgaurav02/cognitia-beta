import Logo from "./images/logo.png";

export default function NavBar() {
  function buildLine() {
    return (
      <hr class=" duration-300 w-[100%] t-4 h-[1px] mx-auto bg-gray-100 border-0 rounded dark:bg-[#9A9A9A]"></hr>
    );
  }
  return (
    <>
      <div class="w-full z-50 h-24 backdrop-filter backdrop-blur-md border-b border-gray-200 bg-opacity-40 sticky top-0 bg-[#101010] pr-6 pl-6 md:pr-12 md:pl-12">
        <div className="h-full flex flex-row justify-between content-center">
          <div className="text-neutral-200 md:text-[30px] self-center font-medium text-2xl">
            <img className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px]" src={Logo} />
          </div>
          <div className="flex flex-row self-center text-neutral-200 font-medium space-x-6 md:text-lg text-sm">
            <div className="cursor-pointer">Home</div>
            <div className="cursor-pointer">Events</div>
            <div className="cursor-pointer">Teams</div>
          </div>
        </div>
        {/* {buildLine()} */}
      </div>
    </>
  );
}