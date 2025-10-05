import React, { useState } from 'react';

interface PromptGeneratorProps {
  promptFunction: (subject: string, topic: string) => string;
}

const PromptGenerator: React.FC<PromptGeneratorProps> = ({ promptFunction }) => {
  const [subject, setSubject] = useState('');
  const [topic, setTopic] = useState('');
  const [copied, setCopied] = useState(false);

  const generatedPrompt = promptFunction(subject || 'your subject', topic || 'your topic');

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPrompt.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-brand-text">Your Subject</label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="e.g., Science, History, Art"
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan"
        />
      </div>
      <div>
        <label htmlFor="topic" className="block text-sm font-medium text-brand-text">Your Topic</label>
        <input
          type="text"
          id="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="e.g., Photosynthesis, The Cold War"
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan"
        />
      </div>
      {/* FIX: Add a copy button and properly structure the prompt display area. */}
      <div className="p-4 bg-brand-light-blue rounded-md border border-brand-cyan/30">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-semibold text-brand-dark-blue">Your Generated Prompt:</h4>
          <button 
            onClick={handleCopy} 
            className="px-3 py-1 text-sm bg-brand-cyan text-white rounded-md hover:bg-brand-dark-blue transition-colors"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <pre className="whitespace-pre-wrap text-sm text-brand-text bg-white p-3 rounded-md font-mono">{generatedPrompt.trim()}</pre>
      </div>
    </div>
  );
};
// FIX: Add missing default export.
export default PromptGenerator;
