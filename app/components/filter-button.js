import { montserrat } from "../utils/fonts";
import Link from "next/link";

export default function FilterButton({ type, name }) {
  let color;
  if (type === "cc") {
    color = "#D1ED9F";
  } else if (type === "rc") {
    color = "#FFC691";
  } else {
    color = "#E1ABE8";
  }
  return (
    <Link href="#events">
      <div className={montserrat.className}>
        {" "}
        <div className="flex flex-row space-x-3 ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 71 70"
            fill="none"
            className="w-8 lg:w-14"
          >
            <rect
              x="0.749902"
              y="0.35"
              width="69.3"
              height="69.3"
              rx="24.85"
              stroke="white"
              strokeWidth="0.7"
            />
            <path
              d="M23 20.5C21.6193 20.5 20.5 21.6193 20.5 23V45.5C20.5 46.8807 21.6193 48 23 48C24.3807 48 25.5 46.8807 25.5 45.5V25.5H45.5C46.8807 25.5 48 24.3807 48 23C48 21.6193 46.8807 20.5 45.5 20.5H23ZM46.2322 49.7678C47.2085 50.7441 48.7915 50.7441 49.7678 49.7678C50.7441 48.7915 50.7441 47.2085 49.7678 46.2322L46.2322 49.7678ZM21.2322 24.7678L46.2322 49.7678L49.7678 46.2322L24.7678 21.2322L21.2322 24.7678Z"
              fill="white"
            />
          </svg>
          {type === "cc" ? (
            <div
              className={`p-2  w-24 lg:w-48
    rounded-xl h-9 lg:h-16 text-center  border-bgcoding border-[1px] flex flex-col justify-center`}
            >
              <span
                className={`font-extrabold text-md lg:text-3xl text-bgcoding`}
              >
                {name}
              </span>
            </div>
          ) : (
            <></>
          )}
          {type === "rc" ? (
            <div
              className={`p-2 w-24 lg:w-48
    rounded-xl h-9 lg:h-16 text-center border-[1px] border-bgrobotics flex flex-col justify-center`}
            >
              <span
                className={`font-extrabold text-md lg:text-3xl text-bgrobotics`}
              >
                {name}
              </span>
            </div>
          ) : (
            <></>
          )}
          {type === "dp" ? (
            <div
              className={`p-2 w-24 lg:w-48
    rounded-xl h-9 lg:h-16 text-center border-[1px] border-bgcoding flex flex-col justify-center`}
            >
              <span
                className={`font-extrabold text-md lg:text-3xl text-bgcoding`}
              >
                {name}
              </span>
            </div>
          ) : (
            <></>
          )}
          {type === "ac" ? (
            <div
              className={`p-2 w-24 lg:w-48
    rounded-xl h-9 lg:h-16 text-center border-[1px] border-purple-600 flex flex-col justify-center`}
            >
              <span
                className={`font-extrabold text-md lg:text-3xl text-purple-600`}
              >
                {name}
              </span>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </Link>
  );
}
