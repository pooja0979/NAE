import React from 'react';

interface DownloadableTemplateProps {
  imageUrl: string;
  routineName: string;
}

const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

const DownloadableTemplate: React.FC<DownloadableTemplateProps> = ({ imageUrl, routineName }) => {
  const fileName = `${routineName.replace(/ /g, '_').replace(/[|']/g, '').toLowerCase()}_template.png`;
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-brand-accent">
      <h2 className="text-2xl font-bold text-brand-dark-blue mb-4">Downloadable Worksheet</h2>
      <p className="text-brand-text mb-4">
        Download this ready-to-use visual template for your students. It can be used on a digital whiteboard or printed out.
      </p>
      <div className="bg-brand-gray p-4 rounded-lg border border-gray-200">
        <img src={imageUrl} alt={`${routineName} Template`} className="w-full rounded-md shadow-md border" />
      </div>
      <a
        href={imageUrl}
        download={fileName}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-brand-cyan to-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
      >
        <DownloadIcon />
        Download Template
      </a>
    </div>
  );
};

export default DownloadableTemplate;
