import React from 'react';
import { useParams } from 'react-router-dom';
import { ALL_ROUTINES } from '../constants';
import PromptGenerator from '../components/PromptGenerator';
import PageNavigation from '../components/PageNavigation';
import DownloadableInteractiveTemplate from '../components/DownloadableInteractiveTemplate';

const RoutineDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const routine = ALL_ROUTINES.find(r => r.id === id);

  if (!routine) {
    return <div className="text-center text-red-500">Thinking routine not found.</div>;
  }
  
  const InteractiveTemplate = routine.interactiveTemplateComponent;

  return (
    <div className="space-y-8 animate-fade-in-up">
      <PageNavigation />
      <div className="bg-white p-8 rounded-lg shadow-md bg-gradient-to-r from-brand-cyan to-blue-500 text-white">
        <h1 className="text-4xl font-extrabold mb-2">{routine.name}</h1>
        <p className="text-lg opacity-90">{routine.targetDisposition}</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-brand-accent">
          {routine.detailedExplanation ? (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-brand-dark-blue mb-3">What is it?</h2>
                <p className="text-lg text-brand-text leading-relaxed" dangerouslySetInnerHTML={{ __html: routine.detailedExplanation.whatIsIt.replace(/"/g, '&quot;').replace(/(\w+ "crack" \w+)/g, '<strong>$1</strong>') }}></p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-brand-dark-blue mb-4">{routine.detailedExplanation.howToUse.title}</h2>
                <ul className="space-y-4">
                  {routine.detailedExplanation.howToUse.subjects.map((subject, index) => (
                    <li key={index} className="flex items-start">
                       <span className="text-brand-cyan font-bold mr-3 text-2xl mt-1">▸</span>
                       <div>
                         <strong className="text-lg text-brand-dark-blue">{subject.name}:</strong>
                         <span className="text-lg text-brand-text"> {subject.description}</span>
                       </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold text-brand-dark-blue mb-4">How It Works</h2>
              <ul className="space-y-4">
                {routine.steps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 bg-brand-cyan text-white rounded-full h-10 w-10 flex items-center justify-center font-bold text-lg mr-4 shadow-md">{index + 1}</div>
                    <div>
                      <h4 className="font-semibold text-lg text-brand-dark-blue">{step.title}</h4>
                      <p className="text-brand-text">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-brand-accent">
          <h2 className="text-2xl font-bold text-brand-dark-blue mb-4">AI Prompt Generator</h2>
          <PromptGenerator promptFunction={routine.chatGptPrompt} />
        </div>
      </div>
      
      {InteractiveTemplate && (
        <DownloadableInteractiveTemplate routineName={routine.name}>
          <InteractiveTemplate />
        </DownloadableInteractiveTemplate>
      )}

    </div>
  );
};

export default RoutineDetailPage;