'use client'

import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

export function AnimatedPin() {
  return (
    <div className="h-[30rem] w-full flex items-center justify-center mt-0 border-spacing-2 border-white ">
      <PinContainer
        title="https://thunder-tube.vercel.app/"
        href="https://thunder-tube.vercel.app/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Thunder-Tube
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              YouTube clone with all features.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          <Image
          src={`https://images.pexels.com/photos/2823936/pexels-photo-2823936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
          alt="Thunder-Tube"
          height="1000"
          width="400"
          className="object-contain"
        />
        </div>
      </PinContainer>

      <PinContainer
        title="https://thunder-tube.vercel.app/"
        href="https://thunder-tube.vercel.app/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Connectify
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Brings all social media apps at one place
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          <Image
          src={`https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=600`}
          alt="Connectify"
          height="1000"
          width="400"
          className="object-contain"
        />
        </div>
      </PinContainer>

    </div>
  );
}
