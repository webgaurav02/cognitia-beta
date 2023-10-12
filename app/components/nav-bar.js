import Link from "next/link";
import Logo from "../assets/logo.png";
import Image from "next/image";
import { jakarta } from "../utils/fonts";

export default function NavBar() {
  function buildLine() {
    return (
      <hr class=" duration-300 w-[100%] t-4 h-[1px] mx-auto bg-gray-100 border-0 rounded dark:bg-[#9A9A9A]"></hr>
    );
  }
  return (
    <>
      <div class="w-full z-50 h-24 backdrop-filter backdrop-blur-md border-b border-gray-200 bg-opacity-40 sticky top-0 bg-[#101010] pr-6 pl-6">
        <div className="h-full flex flex-row justify-between content-center md:mr-32 md:ml-32">
          <div className="text-neutral-200 md:text-[30px] self-center font-medium text-2xl">
            <Link href={"/"}>
              <Image width={80} height={80} src={Logo} alt="logo" />
            </Link>
          </div>

          <div className="flex flex-row self-center text-neutral-200 font-medium space-x-6 md:text-lg text-sm">
            <Link className={jakarta.className} href="/">
              <div className="cursor-pointer">Home</div>
            </Link>
            <Link className={jakarta.className} href={"/events"}>
              <div className="cursor-pointer">Events</div>
            </Link>
            <Link className={jakarta.className} href={"/team"}>
              <div className="cursor-pointer">Teams</div>
            </Link>
          </div>
        </div>
        {/* {buildLine()} */}
      </div>
    </>
  );
}
