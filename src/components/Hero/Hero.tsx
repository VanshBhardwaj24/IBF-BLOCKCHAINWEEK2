import logo from "public/IBF_logo.png";
import Image from "next/image";

import Timer from "./timer";

export default function Hero() {
  return (
    <div className="pt-9 p-3 h-screen bg-black">
      <Image
        src={logo}
        alt={"IBF logo"}
        width="100"
        h-full
        className="mx-auto"
      />

      <div className="h-full flex flex-col justify-center items-center">
        <h1
          className="text-5xl text-center flex flex-col font-extrabold text-[#ff00c6] from-[#ff00c6] via-[#ff5478] to-[#ff8a05 py-0 mt-6
        sm:text-4xl md:text-4xl md:mt-10 md:text-center lg:text-8xl"
        >
          BLOCKCHAIN WEEK{" "}
          <div className="md:block hidden sm:block text-white" />
          <span className="text-[#9da5d7] from-[#ff00c6] via-[#ff5478] to-[#ff8a05]font-bold ">
            {" "}
            2024
          </span>
        </h1>

        <h2
          className="mt-2 text-center mb-4 text-md font-bold text-white 
          md:text-2xl lg:text-3xl xl:text-3xl sm:text-3xl lg:mt-5  "
        >
          <span className=" text-[#cdd360] from-[#ff00c6] via-[#ff5478] to-[#ff8a05 font-semibold">
            Dive
          </span>{" "}
          into Future with
          <span
            className="mx-1 text-transparent bg-clip-text
            bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-stone-200 via-red-300 to-lime-200
            lg:mx-2 sm:mx-3 font-bold "
          >
            Web3
          </span>
        </h2>

        <div className="mt-10">
          <h2
            className="text-xl text-transparent bg-clip-text
            bg-gradient-to-b text-[#ff00c6] from-[#ff00c6] via-[#ff5478] to-[#ff8a05]
            text-center font-bold text-monserrat
            sm:text-md md:text-md lg:text-2xl xl:text-2xl"
          >
            APRIL 15TH - 20TH 2024
          </h2>
        </div>

        <div className="flex items-center justify-center py-10">
          <a
            target="_blank"
            href=" https://forms.gle/B14Ff1jTZkuwxSVK7 "
            className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
          >
            <span className="w-full h-full bg-gradient-to-br from-[#ee5daa] via-[#ff54cc] to-[#763768] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
              <span className="relative text-white tracking-widest text-xl">
                REGISTER
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
