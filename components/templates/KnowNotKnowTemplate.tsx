import React from 'react';
import { TemplateContentProps } from '../../types';

const BulletList: React.FC<{ items?: string[] }> = ({ items }) => {
    if (!items || !Array.isArray(items)) {
        return null;
    }
    return (
        <ul className="space-y-2">
            {items.map((item, index) => (
                <li key={index} className="flex items-start">
                    <span className="mr-2 text-gray-500">•</span>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
};

export const KnowNotKnowTemplate: React.FC<TemplateContentProps> = ({ content }) => {
    return (
        <div className="p-8 bg-white rounded-2xl border-4 border-gray-200 font-sans shadow-lg max-w-4xl mx-auto">
            <div className="text-center bg-brand-dark-blue text-white p-4 rounded-t-xl mb-6">
                <p className="text-sm tracking-widest uppercase">Thinking Routine</p>
                <h2 className="text-4xl font-bold font-serif italic tracking-wider">KNOW | NOT KNOW | WANT TO KNOW</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* KNOW */}
                <div className="flex flex-col">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white text-center py-2 px-4 rounded-t-lg shadow-lg font-bold text-xl">KNOW</div>
                    <div className="flex-grow bg-green-50 p-4 rounded-b-lg border-2 border-green-600/50">
                        <p className="font-semibold text-green-800 mb-2">What I already know:</p>
                        <div className="min-h-[20rem] bg-white/70 rounded-md p-2 text-brand-text">
                            <BulletList items={content?.know as string[]} />
                        </div>
                    </div>
                </div>

                {/* NOT KNOW */}
                <div className="flex flex-col">
                    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white text-center py-2 px-4 rounded-t-lg shadow-lg font-bold text-xl">NOT KNOW</div>
                    <div className="flex-grow bg-red-50 p-4 rounded-b-lg border-2 border-red-600/50">
                        <p className="font-semibold text-red-800 mb-2">What I don't know:</p>
                        <div className="min-h-[20rem] bg-white/70 rounded-md p-2 text-brand-text">
                            <BulletList items={content?.notKnow as string[]} />
                        </div>
                    </div>
                </div>

                {/* WANT TO KNOW */}
                <div className="flex flex-col">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-2 px-4 rounded-t-lg shadow-lg font-bold text-xl">WANT TO KNOW</div>
                    <div className="flex-grow bg-blue-50 p-4 rounded-b-lg border-2 border-blue-600/50">
                        <p className="font-semibold text-blue-800 mb-2">What I want to know:</p>
                        <div className="min-h-[20rem] bg-white/70 rounded-md p-2 text-brand-text">
                             <BulletList items={content?.wantToKnow as string[]} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};