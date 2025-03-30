'use client';

import React from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  videoSrc: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, videoSrc, description, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
      className="relative bg-gradient-to-r from-purple-500 to-pink-500 p-1 rounded-xl shadow-2xl"
    >
      <div className="bg-gray-900 bg-opacity-90 backdrop-blur-sm rounded-xl p-6 flex flex-col h-full">
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <div className="w-full h-48 relative mb-4 overflow-hidden rounded-lg">
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        <p className="flex-1 text-gray-300 mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start px-4 py-2 bg-white text-gray-900 font-semibold rounded hover:bg-gray-200 transition"
        >
          Visit {title}
        </a>
      </div>
    </motion.div>
  );
};

export function AnimatedPin() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-black py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <ProjectCard
          title="NeuroCure"
          videoSrc="/neuro-cure.mp4"
          description="NeuroCure leverages advanced deep learning techniques to detect and classify brain tumors with precision."
          link="https://neuro-cure-frontend.vercel.app"
        />
        <ProjectCard
          title="Artify"
          videoSrc="/Artify_post.mp4"
          description="Artify transforms your images into stunning artworks using the magic of neural style transfer."
          link="https://artify-art-three.vercel.app"
        />
        <ProjectCard
          title="Briefly"
          videoSrc="/Briefly_post.mp4"
          description="Briefly is your go-to NLP chatbot for navigating Indian law documents effortlessly."
          link="https://briefly-law.vercel.app"
        />
        <ProjectCard
          title="Explora"
          videoSrc="/explora2.mp4"
          description="Explora helps you uncover and plan your perfect trips with innovative travel solutions."
          link="https://explora.cyou"
        />
        <ProjectCard
          title="Thunder-Tube"
          videoSrc="/thunder.mp4"
          description="Thunder-Tube is a full stack YouTube clone built with modern tech like React, MongoDB, Express, and NodeJS."
          link="https://thunder-tube.vercel.app/"
        />
      </div>
    </div>
  );
}
