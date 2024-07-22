'use client'

import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import React from "react";
import Link from "next/link";


export function ProjectText() {
  const words = [
    {
      text: "Let's",
      className: "text-white",
    },
    {
      text: "have",
      className: "text-white",
    },
    {
      text: "a",
      className: "text-white",
    },
    {
      text: "look",
      className: "text-white",
    },
    {
        text: "at",
        className: "text-white",
      },
      {
        text: "some",
        className: "text-white",
      },
    {
      text: "Projects",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[30rem]  mt-24 sm:mt-0 ">
      <p className="text-neutral-200  text-base sm:text-xl  ">
        Software changes how the world functions.
      </p>
      <TypewriterEffectSmooth  words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        
      </div>
        <Link href={"/projects"}>
        <button  className=" bg-white  p-5 rounded-2xl text-black text-2xl ">
        Projects
        </button>
        </Link>
      
    </div>
    
  );
}





