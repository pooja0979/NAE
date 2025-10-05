
import React from 'react';
import { MOCK_EXAMPLES, ALL_ROUTINES } from '../constants';
import PageNavigation from '../components/PageNavigation';
import DownloadableInteractiveTemplate from '../components/DownloadableInteractiveTemplate';
import { Example } from '../types';

const ExampleCard: React.FC<{ example: Example, index: number }> = ({ example, index }) => {
    const routine = ALL_ROUTINES.find(r => r.id === example.routineId);
    if (!routine || !routine.interactiveTemplateComponent) {
        return null;
    }

    const TemplateComponent = routine.interactiveTemplateComponent;
    const routineName = routine.name;

    return (
        <div 
            className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col group animate-fade-in-up opacity-0 border-t-4 border-brand-cyan"
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
        >
            <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                    <div>
                        <h3 className="text-2xl font-bold text-brand-dark-blue">{example.title}</h3>
                        <p className="text-md text-gray-500">{routineName}</p>
                    </div>
                    <div className="text-right flex-shrink-0 ml-4">
                        <span className="text-xs font-semibold bg-brand-cyan text-white py-1 px-3 rounded-full">{example.subject}</span>
                        <span className="mt-1 block text-xs font-semibold bg-brand-accent text-brand-dark-blue py-1 px-3 rounded-full">{example.keyStage}</span>
                    </div>
                </div>
                <p className="text-brand-text mb-4"><strong>Topic:</strong> {example.topic}</p>
            </div>
            
            <div className="bg-gray-50 px-2 py-4 flex-grow">
                 <DownloadableInteractiveTemplate routineName={example.title}>
                    <TemplateComponent content={example.templateContent} />
                </DownloadableInteractiveTemplate>
            </div>
        </div>
    );
};

const ExamplesLibraryPage: React.FC = () => {
  return (
    <div>
      <PageNavigation />
      <div className="text-center mb-10 bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-brand-dark-blue">Examples Library</h1>
        <p className="text-lg text-gray-600 mt-2">Explore and download ready-to-use examples for your classroom.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {MOCK_EXAMPLES.map((example, index) => (
          <ExampleCard key={example.id} example={example} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ExamplesLibraryPage;