import React from 'react';
import { Link } from 'react-router-dom';
import { CURIOUS_ROUTINES } from '../constants';
import { ICONS } from '../constants';
import PageNavigation from '../components/PageNavigation';

const RoutineCard: React.FC<{ routine: (typeof CURIOUS_ROUTINES)[0], delay: number }> = ({ routine, delay }) => (
  <Link 
    to={`/routine/${routine.id}`} 
    className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full opacity-0 animate-fade-in-up group"
    style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
  >
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-brand-dark-blue group-hover:text-brand-cyan transition-colors duration-300">{routine.name}</h5>
    <p className="font-normal text-brand-text">{routine.description}</p>
  </Link>
);

const CuriousPage: React.FC = () => {
  return (
    <div>
      <PageNavigation />
      <div className="flex items-center text-left mb-10 bg-white p-6 rounded-lg shadow-md border-l-4 border-brand-cyan">
        <span className="text-brand-cyan mr-4">{ICONS.curious}</span>
        <div>
          <h1 className="text-4xl font-bold text-brand-dark-blue">Curious</h1>
          <p className="text-md text-gray-600">A selection of routines to foster curiosity and deeper inquiry.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CURIOUS_ROUTINES.map((routine, index) => (
          <RoutineCard key={routine.id} routine={routine} delay={index * 100} />
        ))}
      </div>
    </div>
  );
};

export default CuriousPage;