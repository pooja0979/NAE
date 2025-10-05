import React from 'react';
import { TemplateContentProps } from '../../types';

const DownArrow = () => (
    <svg className="w-10 h-10 text-gray-300 mx-auto my-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
);

export const CuriosityDigTemplate: React.FC<TemplateContentProps> = ({ content }) => {
    return (
        <div className="p-8 bg-white rounded-2xl border-4 border-gray-200 font-sans shadow-lg max-w-4xl mx-auto">
            <div className="text-center bg-brand-dark-blue text-white p-4 rounded-t-xl mb-6">
                <p className="text-sm tracking-widest uppercase">Thinking Routine</p>
                <h2 className="text-4xl font-bold font-serif italic tracking-wider">CURIOSITY DIG</h2>
            </div>

            <div className="relative flex flex-col items-center">
                {/* Level 1 */}
                <div className="w-full bg-brand-cyan/80 p-6 rounded-xl shadow-md text-white">
                    <h3 className="text-2xl font-bold mb-2 text-center">Initial Question</h3>
                    <p className="text-center text-lg mb-4">What is one QUESTION you have about the topic?</p>
                    <div className="min-h-[5rem] bg-white/80 rounded-lg border-2 border-dashed border-white p-2 text-brand-dark-blue">
                        {content?.initial || ''}
                    </div>
                </div>
                
                <DownArrow />

                {/* Level 2 */}
                <div className="w-11/12 bg-brand-cyan/60 p-6 rounded-xl shadow-md text-white">
                    <h3 className="text-2xl font-bold mb-2 text-center">Dig Deeper</h3>
                    <p className="text-center text-lg mb-4">What questions help you DIG INTO the original question?</p>
                    <div className="min-h-[7rem] bg-white/80 rounded-lg border-2 border-dashed border-white p-2 text-brand-dark-blue whitespace-pre-wrap">
                        {content?.deeper || ''}
                    </div>
                </div>
                
                <DownArrow />

                {/* Level 3 */}
                <div className="w-10/12 bg-brand-cyan/40 p-6 rounded-xl shadow-md text-white">
                    <h3 className="text-2xl font-bold mb-2 text-center">Second Round Dig</h3>
                    <p className="text-center text-lg mb-4">What questions help you DIG INTO your second-round questions?</p>
                     <div className="min-h-[9rem] bg-white/80 rounded-lg border-2 border-dashed border-white p-2 text-brand-dark-blue whitespace-pre-wrap">
                        {content?.second || ''}
                     </div>
                </div>
            </div>
        </div>
    );
};