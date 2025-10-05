import React, { useRef, useCallback } from 'react';
import * as htmlToImage from 'html-to-image';

interface DownloadableInteractiveTemplateProps {
  children: React.ReactNode;
  routineName: string;
}

const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

const DownloadableInteractiveTemplate: React.FC<DownloadableInteractiveTemplateProps> = ({ children, routineName }) => {
    const templateRef = useRef<HTMLDivElement>(null);

    const onDownload = useCallback(() => {
        if (templateRef.current === null) {
            return;
        }

        htmlToImage.toPng(templateRef.current, { cacheBust: true, pixelRatio: 2, backgroundColor: '#ffffff' })
            .then((dataUrl) => {
                const link = document.createElement('a');
                const fileName = `${routineName.replace(/ /g, '_').replace(/[|':]/g, '').toLowerCase()}.png`;
                link.download = fileName;
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.error('Oops, something went wrong!', err);
                alert('Could not download image. Please try again.');
            });
    }, [templateRef, routineName]);
    
    // Determine if this is a blank template or a pre-filled example
    const isExample = routineName.includes(':'); // Heuristic: example titles usually have a colon

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-brand-accent">
            <h2 className="text-2xl font-bold text-brand-dark-blue mb-4">{isExample ? 'Completed Example' : 'Interactive Template'}</h2>
            <p className="text-brand-text mb-4">
                {isExample 
                    ? 'Download this completed example to use as a reference or teaching aid in your classroom.'
                    : 'Use this template on your interactive whiteboard or download it as an image for students to use.'
                }
            </p>
            <div className="bg-brand-gray p-4 sm:p-8 rounded-lg border border-gray-200">
                <div ref={templateRef}>
                    {children}
                </div>
            </div>
            <button
                onClick={onDownload}
                className="mt-6 inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-brand-cyan to-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
                <DownloadIcon />
                {isExample ? 'Download Example as Image' : 'Download Template as Image'}
            </button>
        </div>
    );
};

export default DownloadableInteractiveTemplate;