'use client'

import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

export function AnimatedPin() {
  return (
    <div className="flex flex-col sm:flex-row mb-28 items-center sm:justify-center  mt-0 border-spacing-2 border-white w-screen h-auto sm:h-[30rem]">

    
    

  <PinContainer
    title="https://explora.cyou"
    href="https://explora.cyou"
    className="mb-4 sm:mb-0 sm:ml-4"
  >
    <div className="flex sm:flex-col p-4 tracking-tight text-slate-100/50 w-screen sm:w-[20rem] h-auto sm:h-[20rem]">
      <h3 className="font-bold text-base text-slate-100 mb-2">
        Explora
      </h3>

      <div className="p-3">
      <div className="video-container">
      <video 
        src="/explora2.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="video"
      />
    </div>

      <div className="text-base font-normal mb-4">
        <span className="text-slate-500">
        Explora is an innovative web application designed to help users discover and plan their perfect trips.
        </span>
      </div>
      
      
      </div>
      
    </div>
  </PinContainer>

  <PinContainer
    title="https://neuro-cure-frontend.vercel.app" // Update with the actual link
    href="https://neuro-cure-frontend.vercel.app" // Update with the actual link
    className="mb-4 sm:mb-0 sm:ml-4"
>
    <div className="flex sm:flex-col p-4 tracking-tight text-slate-100/50 w-screen sm:w-[20rem] h-auto sm:h-[20rem]">
        <h3 className="font-bold text-base text-slate-100 mb-2">
            NeuroCure
        </h3>

        <div className="p-3">
            <div className="video-container">
                <video 
                    src="/neuro-cure.mp4" // Update with the actual video file
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="video"
                />
            </div>

            <div className="text-base font-normal mb-4">
                <span className="text-slate-500">
                    NeuroCure is a cutting-edge software designed to accurately detect and classify brain tumors using advanced deep learning techniques.
                </span>
            </div>
        </div>
    </div>
</PinContainer>


  <PinContainer
    title="https://thunder-tube.vercel.app/"
    href="https://thunder-tube.vercel.app/"
    className="mb-4 mt-12 sm:mt-0 sm:mb-0 sm:mr-4"
  >
    <div className="flex  p-4 tracking-tight sm:flex justify-between w-screen sm:flex-col text-slate-100/50 sm:w-[20rem]  sm:h-[20rem]">
      <h3 className="font-bold text-base text-slate-100 mb-2">
        Thunder-Tube
      </h3>
      <div className="p-3">
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
      <div className="text-base font-normal mb-4">
        <span className="text-slate-500">
        Full stack YouTube clone with all its features. It uses ReactJS as a
                frontend framework, MongoDB as a database, and Express and NodeJS for
                backend.
        </span>
      </div>
      
      
      </div>
      
    </div>
  </PinContainer>

  
</div>

  );
}
