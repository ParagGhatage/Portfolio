import React from 'react';

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="container mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-semibold">My Resume</h1>
        </header>

        <div className="flex justify-center items-center">
          {/* PDF Viewer */}
          <object
            data="/parag_ghatage_resume.pdf"
            type="application/pdf"
            width="100%"
            height="800px"
            className="border-2 border-gray-300 rounded-lg"
          >
            <p>Your browser does not support PDFs. Please download the resume to view it.</p>
          </object>
        </div>

       
      </div>
    </div>
  );
};

export default ResumePage;
