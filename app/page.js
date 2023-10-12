import Image from "next/image";
import GIF from "./assets/umaru-kawaii.gif";
import "./components/text-block.css";
import { jost } from "./utils/fonts";

export default async function Home() {
  return (
    <>
      <div className="absolute flex flex-row justify-center items-center w-full h-full bg-black">
        <div>
          {" "}
          <div className="flex flex-col justify-center">
            <Image width={800} height={800} src={GIF}></Image>
            <div className={jost.className}>
              <div className="text-white text-4xl text-center mt-8">
                Website under construction 👷‍♂️🚧
              </div>
              <div className="text-neutral-600 text-xl text-center mt-8">
                We are hard at work, visit again soon!
              </div>
              <div className="text-neutral-600 text-md text-center mt-2">
                - Cognitia 2023 dev team
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
