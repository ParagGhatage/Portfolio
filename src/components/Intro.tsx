'use client'

import React from "react";
import { Vortex } from "./ui/vortex";

export function Intro() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-white text-3xl md:text-6xl font-bold text-center  ">
        Hi, I&apos;m Parag
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center text">
          
          A dedicated Full Stack Web Developer specializing in Next.js and React.js.
        </p>
        
      </Vortex>
    </div>
  );
}
