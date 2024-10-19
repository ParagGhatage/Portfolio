"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { SparklesCore } from "./ui/sparkles";
import Link from "next/link";

interface Project {
  name: string;
  description: string;
  videoSrc: string;
  projectLink: string;
  githubLink: string;
}

const projects: Project[] = [
  
  {
    name: "NeuroCure",
    description: "NeuroCure is a cutting-edge application designed to accurately detect and classify brain tumors using advanced deep learning techniques. Our platform aims to provide reliable and efficient solutions for medical professionals in the field of neuroimaging.",
    videoSrc: "/neuro-cure.mp4",
    projectLink: "https://neuro-cure-frontend.vercel.app",
    githubLink: "https://github.com/ParagGhatage/NeuroCure",
  },
  {
    name: "Briefly",
    description: "Briefly is an NLP-powered chatbot trained on Indian law documents, providing reliable answers to legal queries. Designed to assist users in navigating complex legal information effortlessly.",
    videoSrc: "/Briefly_post.mp4", // Add the video source for Briefly
    projectLink: "https://briefly-law.vercel.app", // Update with the actual project link
    githubLink: "https://github.com/ThunderTechVentures/Briefly", // Update with the actual GitHub link
  },
  {
    name: "Explora",
    description: "Explora is an innovative web application designed to help users discover and plan their perfect trips. Whether you're an avid traveler or someone looking to explore new destinations, our platform offers comprehensive tools and features to enhance your travel planning experience.",
    videoSrc: "/explora2.mp4",
    projectLink: "https://explora.cyou",
    githubLink: "https://github.com/ParagGhatage/Explora",
  },
  {
    name: "Thunder-Tube",
    description: "Full stack YouTube clone with all its features. It uses ReactJS as a frontend framework, MongoDB as a database, and Express and NodeJS for backend.",
    videoSrc: "/thunder.mp4",
    projectLink: "https://thunder-tube.vercel.app/",
    githubLink: "https://github.com/ParagGhatage/Thunder-Tube",
  },
  
];

// Define the ProjectCard component with props
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Link href={project.projectLink} className="p-4">
      <BackgroundGradient className="rounded-[22px] max-w-sm flex flex-col p-4 sm:p-10 bg-white dark:bg-zinc-900 shadow-md transition-transform transform hover:scale-105">
        <div className="p-5 rounded-full text-white flex items-center space-x-1 bg-black m-2 text-xl font-bold dark:bg-zinc-800">
          Try now &rarr;
        </div>
        <div className="flex flex-col">
          <p className="font-bold sm:text-3xl text-2xl text-black mt-4 mb-2 dark:text-neutral-200">
            {project.name}
          </p>
          <div className="video-container">
            <video
              src={project.videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="video"
            />
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
            {project.description}
          </p>
        </div>
        <Link href={project.githubLink}>
          <div className="p-5 w-38 rounded-full text-white flex items-center space-x-1 bg-black mt-4 text-xl font-bold dark:bg-zinc-800">
            Source Code
          </div>
        </Link>
      </BackgroundGradient>
    </Link>
  );
};

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
          className="w-full"
          particleColor="E633FF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}

export function CardGradient() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
}
