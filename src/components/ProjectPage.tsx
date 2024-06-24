"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { SparklesCore } from "./ui/sparkles";

export function Sparkles() {
  return (
    <div className="h-[10rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
  <h1 className="text-2xl md:text-3xl lg:text-7xl font-bold text-center text-white relative z-20">
    Projects
  </h1>
  <div className="w-full md:w-[40rem] h-40 relative">
    {/* Gradients */}
    <div className="absolute inset-x-5 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
    <div className="absolute inset-x-5 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
    <div className="absolute inset-x-10 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
    <div className="absolute inset-x-10 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

    {/* Core component */}
    <SparklesCore
      background="transparent"
      minSize={0.4}
      maxSize={2}
      speed={1}
      particleDensity={1200}
      className="w-full h-full"
      particleColor="E633FF"
    />

    {/* Radial Gradient to prevent sharp edges */}
    <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
  </div>
</div>

  );
}


export function CardGradient() {
  return (
    <div className="flex flex-col sm:flex-row justify-around items-center sm:items-start">
  <a href="https://thunder-tube.vercel.app/" className="mb-4 sm:mb-0">
    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
      <Image
        src="https://images.pexels.com/photos/2823936/pexels-photo-2823936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Thunder-Tube"
        height="700"
        width="400"
        className="object-contain"
      />
      <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
        Thunder-Tube
      </p>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Full stack YouTube clone with all its features.
        It uses ReactJS as a frontend framework,
        MongoDB as a database and
        Express and NodeJS for backend.
      </p>
      <div className="p-2 sm:p-5 w-32 rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
        <a href="https://github.com/ParagGhatage/Thunder-Tube">Source Code</a>
      </div>
    </BackgroundGradient>
  </a>

  <a href="https://thunder-tube.vercel.app/" className="mb-4 sm:mb-0">
    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
      <Image
        src="https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Connectify"
        height="700"
        width="400"
        className="object-contain"
      />
      <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
        Connectify
      </p>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Messaging web app that brings all your social media apps at one place.
      </p>
      <div className="p-2 sm:p-5 w-32 rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
        <a href="https://github.com/ParagGhatage/Connectify">Source Code</a>
      </div>
    </BackgroundGradient>
  </a>
</div>

  );
}
