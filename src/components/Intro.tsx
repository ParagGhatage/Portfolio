'use client'

import React from "react";
import { Vortex } from "./ui/vortex";

export function Intro() {
  return (
    <div className="mx-auto rounded-md w-full h-screen overflow-hidden">
  <Vortex
    backgroundColor="black"
    rangeY={800}
    particleCount={500}
    baseHue={120}
    className="flex items-center justify-center px-2 md:px-10 py-4 w-full h-full"
  >
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
        <div className="hexagon">
          <img
            src="profile-pic.png" // replace with your image URL
            alt="Profile"
            className="object-cover w-40 h-40"
          />
        </div>
      </div>

      <div className="text-center md:text-left">
        <h2 className="text-white text-4xl sm:text-6xl font-bold">
          Hi, I&apos;m Parag
        </h2>
        <p className="text-white text-3xl sm:text-4xl max-w-xl mt-6">
          A passionate Machine Learning enthusiast driven by the power of AI to create innovative solutions.
        </p>
      </div>
    </div>
  </Vortex>
</div>

  );
}
