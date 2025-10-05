
import React from 'react';
import { Link } from 'react-router-dom';
import { LearnerAttribute } from '../types';
import { ICONS } from '../constants';

const HomePage: React.FC = () => {
  const ambitions = [
    { name: LearnerAttribute.Creative, icon: ICONS.creative, description: 'Fostering imagination and original ideas.', to: '/creative', color: 'purple', disabled: true },
    { name: LearnerAttribute.Collaborative, icon: ICONS.collaborative, description: 'Working together to achieve common goals.', to: '/collaborative', color: 'blue', disabled: true },
    { name: LearnerAttribute.Curious, icon: ICONS.curious, description: 'Encouraging inquiry and a love for learning.', to: '/curious', color: 'green', disabled: false },
    { name: LearnerAttribute.Committed, icon: ICONS.committed, description: 'Developing resilience and dedication.', to: '/committed', color: 'yellow', disabled: true },
    { name: LearnerAttribute.Compassionate, icon: ICONS.compassionate, description: 'Promoting empathy and understanding.', to: '/compassionate', color: 'pink', disabled: true },
    { name: LearnerAttribute.Critical, icon: ICONS.critical, description: 'Analyzing information and forming reasoned judgments.', to: '/critical', color: 'red', disabled: true },
  ];
  
  // This is a bit of a hack to make sure Tailwind's JIT compiler includes the dynamic classes.
  // In a real app, you would configure safelists in tailwind.config.js
  const colorClasses = 'bg-purple-100 text-purple-500 bg-blue-100 text-blue-500 bg-green-100 text-green-500 bg-yellow-100 text-yellow-500 bg-pink-100 text-pink-500 bg-red-100 text-red-500';

  return (
    <div className="space-y-16">
      <div className="text-center p-10 md:p-16 rounded-lg bg-brand-light-blue animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark-blue mb-4">Welcome to the Visible Thinking Hub</h1>
        <p className="text-lg md:text-xl text-brand-text max-w-3xl mx-auto mb-8">
          A collaborative space for educators to deepen their practice, share resources, and foster thoughtful, curious, and compassionate learners through Visible Thinking Routines.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/routines-explained" className="px-8 py-3 bg-brand-cyan text-white font-semibold rounded-lg shadow-md hover:bg-brand-dark-blue transition-all duration-300 transform hover:scale-105">
            Explore Routines
          </Link>
          <Link to="/community" className="px-8 py-3 bg-white text-brand-cyan font-semibold rounded-lg shadow-md border border-brand-cyan hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            Join the Community
          </Link>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-blue mb-10">The Six Learner Ambitions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ambitions.map((ambition, index) => {
            const CardComponent = ambition.disabled ? 'div' : Link;
            const cardProps = ambition.disabled ? {} : { to: ambition.to };

            return (
              <CardComponent
                key={ambition.name}
                {...cardProps}
                className={`p-8 bg-white rounded-lg shadow-md text-center transition-all duration-300 opacity-0 animate-fade-in-up flex flex-col items-center ${
                  ambition.disabled
                    ? 'cursor-not-allowed'
                    : 'transform hover:-translate-y-2 hover:shadow-2xl'
                }`}
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                aria-disabled={ambition.disabled}
              >
                <div className={`mb-5 w-24 h-24 rounded-full flex items-center justify-center bg-${ambition.color}-100 ${ambition.disabled ? 'grayscale' : ''}`}>
                  <span className={`text-${ambition.color}-500`}>{ambition.icon}</span>
                </div>
                <h3 className={`text-2xl font-bold text-brand-dark-blue mb-2 ${ambition.disabled ? 'opacity-50' : ''}`}>{ambition.name}</h3>
                
                {ambition.disabled ? (
                  <div className="flex-grow flex items-center justify-center pt-1">
                    <span className="bg-gray-500 text-white font-semibold py-1 px-3 rounded-full text-sm">Coming Soon</span>
                  </div>
                ) : (
                  <p className="text-brand-text flex-grow">{ambition.description}</p>
                )}
              </CardComponent>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
