import React from 'react';

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="container mx-auto">
        <header className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-semibold">My Resume</h1>
        </header>

        <div className="flex justify-center items-center">
          {/* Responsive PDF Viewer */}
          <div className="w-full h-screen md:h-[80vh] lg:h-[90vh] border-2 border-gray-300 rounded-lg overflow-hidden">
            <iframe
              src="/parag_ghatage_resume.pdf"
              className="w-full h-full"
              title="Resume PDF"
            >
              <p>Your browser does not support PDFs. Please download the resume to view it.</p>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
