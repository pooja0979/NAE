
import React from 'react';
import { Link } from 'react-router-dom';
import { COMMITTED_ROUTINES } from '../constants';
import { ICONS } from '../constants';
import { ThinkingRoutine } from '../types';
import PageNavigation from '../components/PageNavigation';

const RoutineCard: React.FC<{ routine: ThinkingRoutine, delay: number }> = ({ routine, delay }) => (
  <Link
    to={`/routine/${routine.id}`}
    className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full opacity-0 animate-fade-in-up group"
    style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
  >
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-brand-dark-blue group-hover:text-brand-cyan transition-colors duration-300">{routine.name}</h5>
    <p className="font-normal text-brand-text">{routine.description}</p>
  </Link>
);

const CommittedPage: React.FC = () => {
  return (
    <div>
      <PageNavigation />
      <div className="flex items-center text-left mb-10 bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
        <span className="text-yellow-500 mr-4">{ICONS.committed}</span>
        <div>
          <h1 className="text-4xl font-bold text-brand-dark-blue">Committed</h1>
          <p className="text-md text-gray-600">Developing resilience and dedication.</p>
        </div>
      </div>
      {COMMITTED_ROUTINES.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMMITTED_ROUTINES.map((routine, index) => (
            <RoutineCard key={routine.id} routine={routine} delay={index * 100} />
          ))}
        </div>
      ) : (
        <div className="text-center bg-white p-10 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-brand-dark-blue">More Routines Coming Soon!</h2>
            <p className="text-brand-text mt-2">Check back later for routines focused on commitment.</p>
        </div>
      )}
    </div>
  );
};

export default CommittedPage;
