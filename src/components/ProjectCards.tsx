'use client'

import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

export function AnimatedPin() {
  return (
    <div className="flex flex-col sm:flex-row mb-28 items-center sm:justify-center  mt-0 border-spacing-2 border-white w-screen h-auto sm:h-[30rem]">
  <PinContainer
    title="https://www.explora.cyou"
    href="https://www.explora.cyou"
    className="mb-4 sm:mb-0 sm:ml-4"
  >
    <div className="flex sm:flex-col p-4 tracking-tight text-slate-100/50 w-screen sm:w-[20rem] h-auto sm:h-[20rem]">
      <h3 className="font-bold text-base text-slate-100 mb-2">
        Explora
      </h3>

      <div className="p-3">
      <div className="text-base font-normal mb-4">
        <span className="text-slate-500">
        Explora is an innovative web application designed to help users discover and plan their perfect trips.
        </span>
      </div>
      
      <Image
        src="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Explora"
        height="1000"
        width="400"
        className="object-contain w-screen"
      />
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
      <div className="text-base font-normal mb-4">
        <span className="text-slate-500">
          YouTube clone with all features.
        </span>
      </div>
      
      <Image
        src="https://images.pexels.com/photos/2823936/pexels-photo-2823936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Thunder-Tube"
        height="100"
        width="400"
        className="object-contain w-full"
      />
      </div>
      
    </div>
  </PinContainer>

  
</div>

  );
}
