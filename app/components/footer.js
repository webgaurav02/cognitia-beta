import { jakarta } from "../utils/fonts";
import Link from "next/link";
import Logo from "../assets/logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <>
    <div className="h-[40vh] md:h-[110vh]">
      <div className={jakarta.className}>
      <div className="flex justify-center">
          <div className="w-11/12 border-b-2 border-stone-300"></div>
      </div>
      <div className="relative">
        <div
        className="md:px-20 px-5 lg:px-32 xl:px-48 2xl:px-64 visible md:invisible
        w-screen h-[40vh] 
        text-white font-poppins bg-[#101010]"
      >
        <div className="px-8 grid grid-flow-col grid-rows-6 grid-cols-2 w-full h-full">
          <div className=" font-poppinsbold text-2xl sm:text2xl mt-6 row-span-1 col-span-2 ">
            COGNITIA
          </div>
          <div className=" font-poppinsbold text-xl row-span-1 self-center">
            Links
          </div>
          <div className="flex-row space-y-2 row-span-2 ">
            <div><Link href="/">Home</Link></div>
            <div><Link href="/events">Events</Link></div>
            <div><Link href="/team">Team</Link></div>
          </div>
            <div className=" text-xs sm:text-lg xl:text-lg flex-row row-span-2 col-span-2">
            < div className="flex=col space-y-4 text-justify">
              <div>
              The official NIT Meghalaya Tech and cultural landing page and
              registration portal
              </div>
              <div className="flex space-x-2">
              <div>
                <a href="https://www.facebook.com/NITMcognitia/">
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0C8.50646 0 0 8.50646 0 19C0 29.4935 8.50646 38 19 38C29.4935 38 38 29.4935 38 19C38 8.50646 29.4935 0 19 0ZM23.5006 13.1298H20.6447C20.3062 13.1298 19.9302 13.5751 19.9302 14.1669V16.2292H23.5026L22.9623 19.1702H19.9302V27.9993H16.5597V19.1702H13.5019V16.2292H16.5597V14.4994C16.5597 12.0175 18.2816 10.0007 20.6447 10.0007H23.5006V13.1298Z" fill="white"/>
                  </svg>
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/cognitia_nitm">
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.9375 19C24.9375 20.5747 24.3119 22.0849 23.1984 23.1984C22.0849 24.3119 20.5747 24.9375 19 24.9375C17.4253 24.9375 15.9151 24.3119 14.8016 23.1984C13.6881 22.0849 13.0625 20.5747 13.0625 19C13.0625 18.6616 13.0981 18.331 13.1595 18.0104H11.0833V25.9211C11.0833 26.4714 11.5286 26.9167 12.0789 26.9167H25.9231C26.1868 26.9161 26.4395 26.811 26.6258 26.6244C26.8121 26.4377 26.9167 26.1848 26.9167 25.9211V18.0104H24.8405C24.9019 18.331 24.9375 18.6616 24.9375 19ZM19 22.9583C19.5199 22.9582 20.0348 22.8557 20.5151 22.6566C20.9954 22.4575 21.4318 22.1657 21.7994 21.798C22.1669 21.4302 22.4585 20.9937 22.6573 20.5133C22.8562 20.0328 22.9585 19.518 22.9583 18.998C22.9582 18.4781 22.8557 17.9632 22.6566 17.4829C22.4575 17.0026 22.1657 16.5662 21.798 16.1986C21.4302 15.8311 20.9937 15.5395 20.5133 15.3407C20.0328 15.1418 19.518 15.0396 18.998 15.0397C17.9479 15.0399 16.941 15.4573 16.1986 16.2C15.4563 16.9427 15.0394 17.9499 15.0397 19C15.0399 20.0501 15.4573 21.057 16.2 21.7994C16.9427 22.5417 17.9499 22.9586 19 22.9583ZM23.75 14.8438H26.123C26.2807 14.8438 26.4319 14.7813 26.5436 14.67C26.6552 14.5587 26.7182 14.4077 26.7188 14.25V11.877C26.7188 11.719 26.656 11.5675 26.5443 11.4557C26.4325 11.344 26.281 11.2812 26.123 11.2812H23.75C23.592 11.2812 23.4405 11.344 23.3288 11.4557C23.217 11.5675 23.1543 11.719 23.1543 11.877V14.25C23.1562 14.5766 23.4234 14.8438 23.75 14.8438ZM19 0C13.9609 0 9.12816 2.00178 5.56497 5.56497C2.00178 9.12816 0 13.9609 0 19C0 24.0391 2.00178 28.8718 5.56497 32.435C9.12816 35.9982 13.9609 38 19 38C21.4951 38 23.9658 37.5086 26.271 36.5537C28.5762 35.5989 30.6707 34.1993 32.435 32.435C34.1993 30.6707 35.5989 28.5762 36.5537 26.271C37.5086 23.9658 38 21.4951 38 19C38 16.5049 37.5086 14.0342 36.5537 11.729C35.5989 9.42383 34.1993 7.32928 32.435 5.56497C30.6707 3.80066 28.5762 2.40113 26.271 1.44629C23.9658 0.49145 21.4951 0 19 0ZM28.8958 26.697C28.8958 27.9062 27.9062 28.8958 26.697 28.8958H11.303C10.0938 28.8958 9.10417 27.9062 9.10417 26.697V11.303C9.10417 10.0938 10.0938 9.10417 11.303 9.10417H26.697C27.9062 9.10417 28.8958 10.0938 28.8958 11.303V26.697Z" fill="white"/>
                </svg>
                </a>
              </div>
              <div>
                <a href="https://twitter.com/cognitia_nitm?lang=en">
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0C8.50646 0 0 8.50646 0 19C0 29.4935 8.50646 38 19 38C29.4935 38 38 29.4935 38 19C38 8.50646 29.4935 0 19 0ZM26.7286 15.5642C26.7366 15.7265 26.7385 15.8888 26.7385 16.0471C26.7385 20.995 22.9761 26.697 16.0926 26.697C14.0586 26.7004 12.0669 26.1162 10.357 25.0147C10.6479 25.0503 10.9468 25.0642 11.2496 25.0642C13.0031 25.0642 14.6161 24.4684 15.8967 23.463C15.1163 23.4477 14.3602 23.1893 13.7337 22.7238C13.1071 22.2584 12.6414 21.609 12.4015 20.8664C12.9619 20.9729 13.5392 20.9506 14.0897 20.801C13.2427 20.6298 12.481 20.1708 11.9338 19.502C11.3866 18.8333 11.0875 17.9958 11.0873 17.1317V17.0861C11.592 17.3652 12.1699 17.5354 12.7834 17.5552C11.9894 17.0266 11.4273 16.2147 11.2121 15.2854C10.9969 14.3561 11.1448 13.3797 11.6256 12.5558C12.5656 13.7117 13.7379 14.6572 15.0665 15.3312C16.3952 16.0053 17.8505 16.3928 19.3384 16.4686C19.1493 15.6657 19.2307 14.8228 19.57 14.0709C19.9093 13.319 20.4876 12.7003 21.2148 12.3109C21.9421 11.9216 22.7776 11.7834 23.5915 11.9179C24.4053 12.0524 25.152 12.452 25.7153 13.0546C26.5528 12.8889 27.356 12.5817 28.0903 12.1461C27.8112 13.0133 27.2267 13.7496 26.4456 14.2183C27.1875 14.129 27.9119 13.9295 28.595 13.6266C28.0933 14.3784 27.4612 15.0346 26.7286 15.5642Z" fill="white"/>
                </svg>
                </a>
              </div>
              </div>
            </div>
          </div>
          <div className="  font-poppinsbold text-xl row-span-1 self-center">
            Socials
          </div>
          <div className="flex-row space-y-2 row-span-2 ">
            <div>
              <a href="https://www.facebook.com/NITMcognitia/">Facebook</a>
            </div>
            <div>
              <a href="https://www.instagram.com/cognitia_nitm">instagram</a>
            </div>
            <div>
              <a href="https://twitter.com/cognitia_nitm?lang=en">Twitter</a>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
        <div className="py-6 w-11/12 border-t-2 border-b-2 border-stone-300 border-opacity-40 mb-10  text-white">
          ©2023 NIT-Meghalaya. All rights reserved
        </div>
        </div>
        </div>

      <div>
        <div className="absolute top-0 left-0 invisible md:visible 
        w-screen h-[20px] sm:h-[110vh] 
      text-white bg-[#101010]">
          <div className="grid grid-cols-3 h-[20px] sm:h-[30vh] content-center
                md:px-20 lg:px-32 xl:px-48 2xl:px-64">
            <div className="flex-row col-span-1 justify-center py-10 pr-10">
              <div className="flex w-full h-1/2 text-xl space-x-2">
                <div><Image width={30} src={Logo} alt="logo" /></div>
                <div>COGNITIA</div>
              </div>
              <div className="w-full h-1/2 sm:text-xs md:md 2xl:text-lg">
                The official NIT Meghalaya Tech and Cultural fest Landing page and registration portal
              </div>
            </div>

            <div className="flex col-span-1 w-full h-full px-8">
              <div className="flex-row w-full self-center">
                <div className="sm:text-md md:text-lg lg:text-lg 2xl:text-2xl">What is NIT Meghalaya&#39;s motto&#63;</div>
                <div className="flex space-x-5">
                  <input type="text" className="w-5/6 h-[4vh] rounded-md self-center"></input> 
                  <button>
                  <svg className="self-center" width="40" height="40" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26Z" fill="#F8D57E"/>
                    <path d="M35.4142 27.4142C36.1953 26.6332 36.1953 25.3668 35.4142 24.5858L22.6863 11.8579C21.9052 11.0768 20.6389 11.0768 19.8579 11.8579C19.0768 12.6389 19.0768 13.9052 19.8579 14.6863L31.1716 26L19.8579 37.3137C19.0768 38.0948 19.0768 39.3611 19.8579 40.1421C20.6389 40.9232 21.9052 40.9232 22.6863 40.1421L35.4142 27.4142ZM33 28H34V24H33V28Z" fill="#101010"/>
                  </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex col-span-1 justify-end py-14">
            <div className="flex space-x-2 self-end">
              <div>
                <a href="https://www.facebook.com/NITMcognitia/">
                <svg width="50" height="50" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0C8.50646 0 0 8.50646 0 19C0 29.4935 8.50646 38 19 38C29.4935 38 38 29.4935 38 19C38 8.50646 29.4935 0 19 0ZM23.5006 13.1298H20.6447C20.3062 13.1298 19.9302 13.5751 19.9302 14.1669V16.2292H23.5026L22.9623 19.1702H19.9302V27.9993H16.5597V19.1702H13.5019V16.2292H16.5597V14.4994C16.5597 12.0175 18.2816 10.0007 20.6447 10.0007H23.5006V13.1298Z" fill="white"/>
                  </svg>
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/cognitia_nitm">
                <svg width="50" height="50" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.9375 19C24.9375 20.5747 24.3119 22.0849 23.1984 23.1984C22.0849 24.3119 20.5747 24.9375 19 24.9375C17.4253 24.9375 15.9151 24.3119 14.8016 23.1984C13.6881 22.0849 13.0625 20.5747 13.0625 19C13.0625 18.6616 13.0981 18.331 13.1595 18.0104H11.0833V25.9211C11.0833 26.4714 11.5286 26.9167 12.0789 26.9167H25.9231C26.1868 26.9161 26.4395 26.811 26.6258 26.6244C26.8121 26.4377 26.9167 26.1848 26.9167 25.9211V18.0104H24.8405C24.9019 18.331 24.9375 18.6616 24.9375 19ZM19 22.9583C19.5199 22.9582 20.0348 22.8557 20.5151 22.6566C20.9954 22.4575 21.4318 22.1657 21.7994 21.798C22.1669 21.4302 22.4585 20.9937 22.6573 20.5133C22.8562 20.0328 22.9585 19.518 22.9583 18.998C22.9582 18.4781 22.8557 17.9632 22.6566 17.4829C22.4575 17.0026 22.1657 16.5662 21.798 16.1986C21.4302 15.8311 20.9937 15.5395 20.5133 15.3407C20.0328 15.1418 19.518 15.0396 18.998 15.0397C17.9479 15.0399 16.941 15.4573 16.1986 16.2C15.4563 16.9427 15.0394 17.9499 15.0397 19C15.0399 20.0501 15.4573 21.057 16.2 21.7994C16.9427 22.5417 17.9499 22.9586 19 22.9583ZM23.75 14.8438H26.123C26.2807 14.8438 26.4319 14.7813 26.5436 14.67C26.6552 14.5587 26.7182 14.4077 26.7188 14.25V11.877C26.7188 11.719 26.656 11.5675 26.5443 11.4557C26.4325 11.344 26.281 11.2812 26.123 11.2812H23.75C23.592 11.2812 23.4405 11.344 23.3288 11.4557C23.217 11.5675 23.1543 11.719 23.1543 11.877V14.25C23.1562 14.5766 23.4234 14.8438 23.75 14.8438ZM19 0C13.9609 0 9.12816 2.00178 5.56497 5.56497C2.00178 9.12816 0 13.9609 0 19C0 24.0391 2.00178 28.8718 5.56497 32.435C9.12816 35.9982 13.9609 38 19 38C21.4951 38 23.9658 37.5086 26.271 36.5537C28.5762 35.5989 30.6707 34.1993 32.435 32.435C34.1993 30.6707 35.5989 28.5762 36.5537 26.271C37.5086 23.9658 38 21.4951 38 19C38 16.5049 37.5086 14.0342 36.5537 11.729C35.5989 9.42383 34.1993 7.32928 32.435 5.56497C30.6707 3.80066 28.5762 2.40113 26.271 1.44629C23.9658 0.49145 21.4951 0 19 0ZM28.8958 26.697C28.8958 27.9062 27.9062 28.8958 26.697 28.8958H11.303C10.0938 28.8958 9.10417 27.9062 9.10417 26.697V11.303C9.10417 10.0938 10.0938 9.10417 11.303 9.10417H26.697C27.9062 9.10417 28.8958 10.0938 28.8958 11.303V26.697Z" fill="white"/>
                </svg>
                </a>
              </div>
              <div>
                <a href="https://twitter.com/cognitia_nitm?lang=en">
                <svg width="50" height="50" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0C8.50646 0 0 8.50646 0 19C0 29.4935 8.50646 38 19 38C29.4935 38 38 29.4935 38 19C38 8.50646 29.4935 0 19 0ZM26.7286 15.5642C26.7366 15.7265 26.7385 15.8888 26.7385 16.0471C26.7385 20.995 22.9761 26.697 16.0926 26.697C14.0586 26.7004 12.0669 26.1162 10.357 25.0147C10.6479 25.0503 10.9468 25.0642 11.2496 25.0642C13.0031 25.0642 14.6161 24.4684 15.8967 23.463C15.1163 23.4477 14.3602 23.1893 13.7337 22.7238C13.1071 22.2584 12.6414 21.609 12.4015 20.8664C12.9619 20.9729 13.5392 20.9506 14.0897 20.801C13.2427 20.6298 12.481 20.1708 11.9338 19.502C11.3866 18.8333 11.0875 17.9958 11.0873 17.1317V17.0861C11.592 17.3652 12.1699 17.5354 12.7834 17.5552C11.9894 17.0266 11.4273 16.2147 11.2121 15.2854C10.9969 14.3561 11.1448 13.3797 11.6256 12.5558C12.5656 13.7117 13.7379 14.6572 15.0665 15.3312C16.3952 16.0053 17.8505 16.3928 19.3384 16.4686C19.1493 15.6657 19.2307 14.8228 19.57 14.0709C19.9093 13.319 20.4876 12.7003 21.2148 12.3109C21.9421 11.9216 22.7776 11.7834 23.5915 11.9179C24.4053 12.0524 25.152 12.452 25.7153 13.0546C26.5528 12.8889 27.356 12.5817 28.0903 12.1461C27.8112 13.0133 27.2267 13.7496 26.4456 14.2183C27.1875 14.129 27.9119 13.9295 28.595 13.6266C28.0933 14.3784 27.4612 15.0346 26.7286 15.5642Z" fill="white"/>
                </svg>
                </a>
              </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-11/12 border-b-2 border-stone-300 border-opacity-40"></div>
          </div>
          <div className="grid grid-flow-col grid-cols-3 grid-rows-4 h-[20px] sm:h-[70vh]
          md:px-20 lg:px-32 xl:px-48 2xl:px-64">
            <div className="flex row-span-1 col-span-1 items-end ">
              <div className="flex flex-col items-start xl:text-4xl font-bold w-34 space-y-2">
                <div>CONTACT US</div>
                <div className="w-11/12 border-t-4 border-yellow-400 self-center"></div>
              </div>
            </div>
            <div className="flex row-span-2 col-span-1 py-10">
              <div className="flex flex-col xl:text-md 2xl:text-xl space-y-2">
                <div><b>Address</b>: Bijni Complex, Laitumkhrah Shillong-793003, Meghalaya, India</div>
                <div><b>Phone</b>: 0364-2501294</div>
                <div><b>Fax</b>:0364-2501113a</div>
              </div>
            </div>
            <div className="flex row-span-1 col-span-1 h-full w-full">
              <button className="border-[1px] border-white rounded-[300px] w-32 h-10 xl:w-56 xl:h-10 xl:text-xl">Contact Now</button>
           </div>
            
            <div className="flex row-span-1 col-span-1 items-end justify-center -translate-x-10 lg:-translate-x-16 xl:-translate-x-0 2xl:-translate-x-0">
              <div className="flex flex-col items-start xl:text-4xl font-bold w-34 space-y-2">
                <div>USEFUL LINKS</div>
                <div className="w-11/12 border-t-4 border-yellow-400 self-center"></div>
              </div>
            </div>
            <div className="flex row-span-2 col-span-1 py-10 justify-center">
              <div className="flex flex-col xl:text-md 2xl:text-xl space-y-2 2xl:space-y-4 -translate-x-12 lg:-translate-x-20 xl:-translate-x-20 2xl:-translate-x-16">
                <div><Link href="/">Home</Link></div>
                <div><Link href="/events">Events</Link></div>
                <div><Link href="/team">Shop</Link></div>
                <div><Link href="/team">Teams</Link></div>
                <div><Link href="/team">Report Bugs</Link></div>
              </div>
            </div>
            <div className="flex row-span-1 col-span-1 h-full w-full justify-center">
              <button className="border-[1px] border-white rounded-[300px] w-32 h-10 xl:w-56 xl:h-10 xl:text-xl -translate-x-8 lg:-translate-x-14 xl:-translate-x-3 2xl:translate-x-5">Begin Adventure</button>
            </div>

            <div className="flex row-span-1 col-span-1 items-end justify-end -translate-x-36">
              <div className="flex flex-col items-center xl:text-4xl font-bold w-34 space-y-2">
                <div>EXTRAS</div>
                <div className="w-11/12 border-t-4 border-yellow-400 self-center"></div>
              </div>
            </div>
            <div className="flex row-span-2 col-span-1 py-10 justify-end">
            <div className="flex flex-col xl:text-md 2xl:text-xl space-y-4 -translate-x-8 lg:-translate-x-8 xl:-translate-x-28">
                <div><Link href="/">Special Thanks</Link></div>
                <div><Link href="/events">The Development Process</Link></div>
                <div><Link href="/team">Want to collaborate?</Link></div>
                <div><Link href="/team">Archives</Link></div>
              </div>
            </div>
            <div className="flex row-span-1 col-span-1 h-full w-full justify-end">
              <button className="border-[1px] border-white rounded-[300px] w-32 h-10 xl:w-56 xl:h-10 xl:text-xl -translate-x-20 xl:-translate-x-16 2xl:-translate-x-0">Donate</button>
            </div>
            

          </div>
          <div className="flex justify-center">
        <div className="py-6 w-11/12 border-t-2 border-b-2 border-stone-300 border-opacity-40 mb-10  text-white">
          ©2023 NIT-Meghalaya. All rights reserved
        </div>
        </div>
       
      </div>
      </div>
      
      </div>
      </div>
      </div>
    </>
  );
}
