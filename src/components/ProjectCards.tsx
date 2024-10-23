'use client';

import React from "react";

interface ProjectCardProps {
  title: string;
  videoSrc: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, videoSrc, description, link }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-lg p-4 bg-gray-800 text-slate-100">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <div className="video-container mb-3">
        <video 
          src={videoSrc} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-auto rounded"
        />
      </div>
      <p className="text-base font-normal text-slate-500 mb-4">
        {description}
      </p>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-400 hover:underline"
      >
        Visit {title}
      </a>
    </div>
  );
};

export function AnimatedPin() {
  return (
    <div className="mb-28 w-screen h-auto sm:h-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* NeuroCure Card */}
        <ProjectCard
          title="NeuroCure"
          videoSrc="/neuro-cure.mp4"
          description="NeuroCure is a cutting-edge software designed to accurately detect and classify brain tumors using advanced deep learning techniques."
          link="https://neuro-cure-frontend.vercel.app"
        />

        {/* Artify Card */}
        <ProjectCard
          title="Artify"
          videoSrc="/Artify_post.mp4" // Add the actual video file for Briefly
          description="Artify is a cutting-edge neural style transfer application that transforms ordinary images into stunning works of art using deep learning techniques. Leveraging the power of convolutional neural networks, Artify allows users to blend the content of one image with the artistic style of another, creating unique and visually captivating outputs."
          link="https://artify-art-three.vercel.app"
        />

        {/* Briefly Card */}
        <ProjectCard
          title="Briefly"
          videoSrc="/Briefly_post.mp4" // Add the actual video file for Briefly
          description="Briefly is an NLP-powered chatbot trained on Indian law documents, providing reliable answers to legal queries. Designed to assist users in navigating complex legal information effortlessly."
          link="https://briefly-law.vercel.app"
        />

        {/* Explora Card */}
        <ProjectCard
          title="Explora"
          videoSrc="/explora2.mp4"
          description="Explora is an innovative web application designed to help users discover and plan their perfect trips."
          link="https://explora.cyou"
        />

        {/* Thunder-Tube Card */}
        <ProjectCard
          title="Thunder-Tube"
          videoSrc="/thunder.mp4"
          description="Full stack YouTube clone with all its features. It uses ReactJS as a frontend framework, MongoDB as a database, and Express and NodeJS for backend."
          link="https://thunder-tube.vercel.app/"
        />
        
      </div>
    </div>
  );
}
