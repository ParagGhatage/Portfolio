'use client'

import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import React from "react";
import Link from "next/link";


export function ProjectText() {
  const words = [
    {
      text: "Let's",
    },
    {
      text: "have",
    },
    {
      text: "a",
    },
    {
      text: "look",
    },
    {
        text: "at",
      },
      {
        text: "some",
      },
    {
      text: "Projects",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[30rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Software changes how the world functions.
      </p>
      <TypewriterEffectSmooth  words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        
      </div>
        <Link href={"/projects"}>
        <button  className=" bg-green-400 hover:bg-blue-500 p-5 rounded-sm text-emerald-50 text-2xl ">
        Projects
        </button>
        </Link>
      
    </div>
    
  );
}





