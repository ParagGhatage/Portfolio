"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { SparklesCore } from "./ui/sparkles";
import Link from "next/link";

export function Sparkles() {
  return (
    <div className="h-[10rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md mt-20">
      <h1 className="text-4xl md:text-5xl lg:text-9xl font-bold text-center text-white relative z-20">
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
          className="w-full "
          particleColor="E633FF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full  bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}

export function CardGradient() {
  return (
    <div className="flex flex-col  sm:flex-row justify-around items-center sm:items-start ">
      
      <Link href="https://www.explora.cyou" className="sm:mb-0">
        <BackgroundGradient className="rounded-[22px] max-w-sm  sm:w-auto flex flex-col  p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <div className="p-5 sm:p-5  rounded-full   pr-1 py-1 text-white flex items-center space-x-1 bg-black m-2 text-xl font-bold dark:bg-zinc-800">
            Try now &rarr;
          </div>
          <div className="flex flex-col  ">
          <p className=" font-bold sm:text-3xl text-2xl text-black mt-4 mb-2 dark:text-neutral-200">
                Explora
              </p>
              <div className="video-container">
      <video 
        src="/explora1.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="video"
      />
    </div>
            <div>
              
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Explora is an innovative web application designed to help users discover
                and plan their perfect trips. Whether you&apos;re an avid traveler or
                someone looking to explore new destinations, our platform offers
                comprehensive tools and features to enhance your travel planning
                experience.
              </p>
            </div>
          </div>
          <Link href="https://github.com/ParagGhatage/Explora">
          <div className="p-5 sm:p-5 w-38 rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xl font-bold dark:bg-zinc-800">
            Source Code
          </div>
          </Link>
        </BackgroundGradient>
      </Link>

      <Link href="https://thunder-tube.vercel.app/" className="sm:mb-0">
        <BackgroundGradient className="rounded-[22px] max-w-sm w-full sm:w-auto flex flex-col justify-between p-4 sm:p-10 bg-white dark:bg-zinc-900">
          

        <div className="p-5 sm:p-5  rounded-full   pr-1 py-1 text-white flex items-center space-x-1 bg-black m-2 text-xl font-bold dark:bg-zinc-800">
            Try now &rarr;
          </div>
          <div className="flex flex-col  ">
          <p className=" font-bold sm:text-3xl text-2xl text-black mt-4 mb-2 dark:text-neutral-200">
                Thunder-Tube
              </p>
              </div>
          
          <div className="flex flex-col ">
          <div className="video-container">
      <video 
        src="/thunder.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="video"
      />
    </div>
            <div className="sm:mb-20">
              
              <p className="text-sm text-neutral-600  dark:text-neutral-400 ">
                Full stack YouTube clone with all its features. It uses ReactJS as a
                frontend framework, MongoDB as a database, and Express and NodeJS for
                backend.
              </p>
            </div>
          </div>
          <div className="p-5 sm:p-5 w-38 rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xl font-bold dark:bg-zinc-800">
            <Link href="https://github.com/ParagGhatage/Thunder-Tube">Source Code</Link>
          </div>
        </BackgroundGradient>
      </Link>

    </div>
  );
}
