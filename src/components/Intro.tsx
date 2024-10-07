'use client'

import React from "react";
import { Vortex } from "./ui/vortex";

export function Intro() {
  return (
    <div className=" mx-auto rounded-md w-full  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
              <h2 className="text-white text-4xl sm:text-6xl font-bold text-center">
        Hi, I&apos;m Parag
      </h2>
      <p className="text-white text-3xl sm:text-4xl max-w-xl mt-6 text-center">
        A passionate Machine Learning enthusiast driven by the power of AI to create innovative solutions.
      </p>
        
      </Vortex>
    </div>
  );
}
