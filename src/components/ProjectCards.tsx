'use client';

import React from "react";

export function AnimatedPin() {
  return (
    <div className="mb-28 w-screen h-auto sm:h-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        

        {/* NeuroCure Card */}
        <div className="border border-gray-300 rounded-lg shadow-lg p-4 bg-gray-800 text-slate-100">
          <h3 className="font-bold text-lg mb-2">NeuroCure</h3>
          <div className="video-container mb-3">
            <video 
              src="/neuro-cure.mp4"
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-auto rounded"
            />
          </div>
          <p className="text-base font-normal text-slate-500 mb-4">
            NeuroCure is a cutting-edge software designed to accurately detect and classify brain tumors using advanced deep learning techniques.
          </p>
          <a href="https://neuro-cure-frontend.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            Visit NeuroCure
          </a>
        </div>

        {/* Briefly Card */}
        <div className="border border-gray-300 rounded-lg shadow-lg p-4 bg-gray-800 text-slate-100">
          <h3 className="font-bold text-lg mb-2">Briefly</h3>
          <div className="video-container mb-3">
            <video 
              src="/Briefly_post.mp4" // Add the actual video file for Briefly
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-auto rounded"
            />
          </div>
          <p className="text-base font-normal text-slate-500 mb-4">
            Briefly is an NLP-powered chatbot trained on Indian law documents, providing reliable answers to legal queries. Designed to assist users in navigating complex legal information effortlessly.
          </p>
          <a href="https://briefly-law.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            Visit Briefly
          </a>
        </div>

        {/* Explora Card */}
        <div className="border border-gray-300 rounded-lg shadow-lg p-4 bg-gray-800 text-slate-100">
          <h3 className="font-bold text-lg mb-2">Explora</h3>
          <div className="video-container mb-3">
            <video 
              src="/explora2.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-auto rounded"
            />
          </div>
          <p className="text-base font-normal text-slate-500 mb-4">
            Explora is an innovative web application designed to help users discover and plan their perfect trips.
          </p>
          <a href="https://explora.cyou" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            Visit Explora
          </a>
        </div>

        {/* Thunder-Tube Card */}
        <div className="border border-gray-300 rounded-lg shadow-lg p-4 bg-gray-800 text-slate-100">
          <h3 className="font-bold text-lg mb-2">Thunder-Tube</h3>
          <div className="video-container mb-3">
            <video 
              src="/thunder.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-auto rounded"
            />
          </div>
          <p className="text-base font-normal text-slate-500 mb-4">
            Full stack YouTube clone with all its features. It uses ReactJS as a frontend framework, MongoDB as a database, and Express and NodeJS for backend.
          </p>
          <a href="https://thunder-tube.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            Visit Thunder-Tube
          </a>
        </div>

        

      </div>
    </div>
  );
}
