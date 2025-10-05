import React from 'react';
import { TemplateContentProps } from '../../types';

export const ThreeCsTemplate: React.FC<TemplateContentProps> = ({ content }) => {
    return (
        <div className="p-8 bg-white rounded-2xl border-4 border-gray-200 font-sans shadow-lg max-w-4xl mx-auto">
            <div className="text-center bg-brand-dark-blue text-white p-4 rounded-t-xl mb-6">
                <p className="text-sm tracking-widest uppercase">Thinking Routine</p>
                <h2 className="text-4xl font-bold font-serif italic tracking-wider">THE THREE C'S</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mb-6">
                {/* Column 1: Check & Challenge */}
                <div className="space-y-6">
                    {/* Check */}
                    <div className="flex flex-col">
                        <div className="bg-gradient-to-r from-brand-cyan to-blue-500 text-white text-center py-2 px-4 rounded-full shadow-lg mb-3 font-bold text-xl">CHECK</div>
                        <div className="h-48 bg-brand-light-blue p-4 rounded-lg border-2 border-brand-cyan/50 text-brand-dark-blue">
                            <p className="font-semibold mb-2">List 3-5 key facts you already know about the topic.</p>
                            <p className="whitespace-pre-wrap text-sm">{content?.check || ''}</p>
                        </div>
                    </div>
                    
                    {/* Challenge */}
                    <div className="flex flex-col">
                         <div className="bg-gradient-to-r from-yellow-400 to-brand-accent text-brand-dark-blue text-center py-2 px-4 rounded-full shadow-lg mb-3 font-bold text-xl">CHALLENGE</div>
                         <div className="h-48 bg-yellow-100 p-4 rounded-lg border-2 border-brand-accent/50 text-brand-dark-blue">
                            <p className="font-semibold mb-2">Identify 2-3 things you don't fully understand.</p>
                             <p className="whitespace-pre-wrap text-sm">{content?.challenge || ''}</p>
                        </div>
                    </div>
                </div>

                {/* Column 2: Crack */}
                <div className="flex flex-col h-full">
                    <div className="bg-gradient-to-r from-rose-500 to-red-600 text-white text-center py-2 px-4 rounded-full shadow-lg mb-3 font-bold text-xl">CRACK</div>
                    <div className="flex-grow bg-rose-100 p-4 rounded-lg border-2 border-rose-500/50 flex flex-col items-center justify-center text-center">
                        <div className="text-6xl mb-2">👑</div>
                        <h3 className="text-xl font-bold text-rose-800">One-Minute Expert</h3>
                        <p className="font-semibold text-brand-dark-blue mt-2">A volunteer explains a tricky concept to the class, clarifying misunderstandings for everyone.</p>
                         <p className="whitespace-pre-wrap text-sm mt-2 italic text-gray-700">{content?.crack || ''}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};