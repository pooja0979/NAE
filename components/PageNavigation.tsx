import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const BackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);

const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

const PageNavigation: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center space-x-4 mb-8">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center justify-center px-4 py-2 bg-white text-brand-dark-blue font-semibold rounded-lg shadow-md hover:bg-brand-light-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-cyan transition-all duration-300"
            >
                <BackIcon />
                Go Back
            </button>
            <Link
                to="/"
                className="flex items-center justify-center px-4 py-2 bg-brand-dark-blue text-white font-semibold rounded-lg shadow-md hover:bg-brand-cyan focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-cyan transition-all duration-300"
            >
                <HomeIcon />
                Home
            </Link>
        </div>
    );
};

export default PageNavigation;
