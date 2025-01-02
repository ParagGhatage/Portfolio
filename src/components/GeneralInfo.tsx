'use client'

import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";

export function GeneralInfo() {
  return (
    <div className="flex items-center mt-20 sm:mt-5 justify-center bg-[#0E0E10] h-[20rem] mb-40  rounded-2xl w-full">
      <TextRevealCard
      
      text="one line at a time"
      revealText="Coding the future">
      
  <TextRevealCardTitle className="font-mono font-bold">
  Open Source Enthusiast | AI/ML Specialist | Full-Stack Developer 
  </TextRevealCardTitle>
  <TextRevealCardDescription className="mt-2">
    A passionate technologist with expertise in creating intelligent systems and scalable applications. 
    My achievements include developing innovative AI projects like NeuroCure for brain tumor detection and Artify for AI-generated art. 
    As a dedicated open-source contributor, I’ve collaborated on impactful projects, built production-ready applications like Explora, and deployed solutions using cutting-edge technologies such as TensorFlow, React, and Docker. 
    I’m committed to pushing the boundaries of technology to solve real-world challenges and build a better future.
  </TextRevealCardDescription>
</TextRevealCard>


    </div>
  );
}
