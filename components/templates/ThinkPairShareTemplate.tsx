import React from 'react';
import { TemplateContentProps } from '../../types';

const ArrowIcon = () => (
    <svg className="w-8 h-8 text-brand-cyan hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);

export const ThinkPairShareTemplate: React.FC<TemplateContentProps> = ({ content }) => {
    return (
        <div className="p-8 bg-white rounded-2xl border-4 border-gray-200 font-sans shadow-lg max-w-4xl mx-auto">
            <div className="text-center bg-brand-dark-blue text-white p-4 rounded-t-xl mb-6">
                <p className="text-sm tracking-widest uppercase">Thinking Routine</p>
                <h2 className="text-4xl font-bold font-serif italic tracking-wider">THINK • PAIR • SHARE</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 items-center">
                {/* THINK */}
                <div className="flex flex-col text-center">
                    <div className="bg-brand-cyan text-white p-3 rounded-lg shadow-md mb-2">
                        <h3 className="text-2xl font-bold">1. THINK</h3>
                    </div>
                    <p className="text-brand-text mb-2">Individually, what are your ideas?</p>
                    <div className="min-h-[16rem] bg-brand-light-blue rounded-lg p-2 border border-dashed border-brand-cyan text-brand-text">
                        {content?.think || ''}
                    </div>
                </div>

                 <ArrowIcon />

                {/* PAIR */}
                 <div className="flex flex-col text-center my-4 md:my-0">
                    <div className="bg-brand-accent text-brand-dark-blue p-3 rounded-lg shadow-md mb-2">
                        <h3 className="text-2xl font-bold">2. PAIR</h3>
                    </div>
                    <p className="text-brand-text mb-2">With a partner, discuss and build on your ideas.</p>
                    <div className="min-h-[16rem] bg-yellow-100 rounded-lg p-2 border border-dashed border-yellow-400 text-brand-text">
                        {content?.pair || ''}
                    </div>
                </div>
            </div>
            
            {/* SHARE */}
            <div className="mt-6 flex flex-col text-center">
                 <div className="bg-rose-500 text-white p-3 rounded-lg shadow-md mb-2">
                    <h3 className="text-2xl font-bold">3. SHARE</h3>
                </div>
                <p className="text-brand-text mb-2">Share your combined ideas with the whole class.</p>
                <div className="min-h-[8rem] bg-rose-100 rounded-lg p-2 border border-dashed border-rose-400 text-brand-text">
                    {content?.share || ''}
                </div>
            </div>
        </div>
    );
};