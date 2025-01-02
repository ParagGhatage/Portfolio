'use client'

import React from "react";
import { Vortex } from "./ui/vortex";
import Link from "next/link";
import {
  IconBrandGmail,
  IconBrandX,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandLeetcode,
  IconBrandGithub,
} from "@tabler/icons-react";


export function Intro() {
  return (
    <div className="mx-auto rounded-md w-full pb-60 sm:pb-32 mt-3 overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center justify-center px-2 md:px-10  w-full "
      >
        <div className="flex flex-col backdrop-blur-md rounded-sm p-2 mb-25 md:flex-row items-center justify-center">
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <div className="hexagon">
              <img
                src="profile-pic.png" // replace with your image URL
                alt="Profile"
                className="sm:w-60 sm:h-60 w-52 h-52"
              />
            </div>
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-white text-4xl sm:text-6xl font-bold">
              Hi, I&apos;m Parag
            </h2>
            <p className="text-white sm:text-4xl max-w-xl mt-6">
              <div className="flex justify-center md:justify-start mt-6 gap-4">
                
                <Link href="https://github.com/ParagGhatage">
                  <IconBrandGithub
                    className="text-black hover:text-gray-800 transition duration-300 bg-white rounded-full p-1"
                    size={40}
                  />
                </Link>

                <Link href="mailto:parag.dev2025@gmail.com">
                  <IconBrandGmail
                    className="text-red-500 bg-black border border-gray-700 rounded-md hover:text-red-700 transition duration-300"
                    size={40}
                  />
                </Link>

                <Link href="https://x.com/PARAG_GHATAGE">
                  <IconBrandX
                    className="text-gray-800 hover:text-gray-950 bg-white rounded-md transition duration-300"
                    size={40}
                  />
                </Link>
                <Link href="https://leetcode.com/u/ParagGhatage/">
                  <IconBrandLeetcode
                    className="text-orange-500 bg-black border border-gray-700 rounded-md hover:text-orange-700 transition duration-300"
                    size={40}
                  />
                </Link>
                <Link href="https://www.linkedin.com/in/parag-ghatage-09685a314/">
                  <IconBrandLinkedin
                    className="text-blue-600 hover:text-blue-800 bg-white rounded-md transition duration-300"
                    size={40}
                  />
                </Link>
              </div>
            </p>
          </div>
        </div>
      </Vortex>
    </div>
  );
}

