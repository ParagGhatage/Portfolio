'use client'

import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";

export function GeneralInfo() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] h-[20rem] mb-40 rounded-2xl w-full">
      <TextRevealCard
        text="one line at a time"
        revealText="Coding the future"
      >
        <TextRevealCardTitle className="font-mono">
        Machine learning is a field of continuous growth and evolution, where challenges are embraced as opportunities for innovation. I strive to create impactful solutions that push the boundaries of technology and enhance the power of artificial intelligence.


        </TextRevealCardTitle>
        <TextRevealCardDescription>
          .
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
