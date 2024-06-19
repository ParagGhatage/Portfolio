"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

export function CardGradient() {
  return (
    <div>
        <a href="https://thunder-tube.vercel.app/">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        
        
    
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Thunder-Tube
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Full stack YouTube clone with all its features.

          It uses ReactJS as a frontend framework,
          MongoDB as a database and
          Express and NodeJS for backend

        </p>
        <div className=" p-5 w-20 rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
        
        <a href="https://github.com/ParagGhatage/Thunder-Tube">Source Code</a>
        
        </div>
          
        
      </BackgroundGradient>
      </a>
    </div>
  );
}
