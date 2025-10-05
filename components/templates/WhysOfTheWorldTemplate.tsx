import React from 'react';
import { TemplateContentProps } from '../../types';

export const WhysOfTheWorldTemplate: React.FC<TemplateContentProps> = ({ content }) => {
    return (
        <div className="p-8 bg-white rounded-2xl border-4 border-gray-200 font-sans shadow-lg max-w-4xl mx-auto">
            <div className="text-center bg-brand-dark-blue text-white p-4 rounded-t-xl mb-6">
                <p className="text-sm tracking-widest uppercase">Thinking Routine</p>
                <h2 className="text-4xl font-bold font-serif italic tracking-wider">THE 'WHYS' OF THE WORLD</h2>
            </div>

            <div className="space-y-6">
                {/* Step 1 */}
                <div className="bg-brand-light-blue p-6 rounded-xl border-l-8 border-brand-cyan shadow-md">
                    <h3 className="text-2xl font-bold text-brand-dark-blue mb-2">1. What is something I already know a fair amount about?</h3>
                    <p className="text-brand-text text-lg">Choose a thing, device, custom, law, or event.</p>
                    <div className="mt-4 min-h-[6rem] bg-white rounded-lg border-2 border-dashed border-gray-300 p-2 text-brand-text">
                        {content?.know || ''}
                    </div>
                </div>

                {/* Step 2 */}
                <div className="bg-yellow-100 p-6 rounded-xl border-l-8 border-brand-accent shadow-md">
                    <h3 className="text-2xl font-bold text-brand-dark-blue mb-2">2. Why is this the way it is?</h3>
                    <p className="text-brand-text text-lg">Explore its purpose, history, or cultural significance.</p>
                    <div className="mt-4 min-h-[6rem] bg-white rounded-lg border-2 border-dashed border-gray-300 p-2 text-brand-text">
                        {content?.why || ''}
                    </div>
                </div>

                {/* Step 3 */}
                <div className="bg-rose-100 p-6 rounded-xl border-l-8 border-rose-500 shadow-md">
                    <h3 className="text-2xl font-bold text-brand-dark-blue mb-2">3. How could it be different?</h3>
                    <p className="text-brand-text text-lg">Imagine better versions, fixes, or alternatives from other cultures or times.</p>
                    <div className="mt-4 min-h-[6rem] bg-white rounded-lg border-2 border-dashed border-gray-300 p-2 text-brand-text">
                        {content?.different || ''}
                    </div>
                </div>
            </div>
        </div>
    );
};