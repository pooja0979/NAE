
import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CuriousPage from './pages/CuriousPage';
import RoutineDetailPage from './pages/RoutineDetailPage';
import ExamplesLibraryPage from './pages/ExamplesLibraryPage';
import CommunityUploadsPage from './pages/CommunityUploadsPage';
import RoutinesExplainedPage from './pages/RoutinesExplainedPage';
import CollaborativePage from './pages/CollaborativePage';
import CreativePage from './pages/CreativePage';
import CommittedPage from './pages/CommittedPage';
import CompassionatePage from './pages/CompassionatePage';
import CriticalPage from './pages/CriticalPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-brand-gray text-brand-text">
        <Header />
        <main className="flex-grow container mx-auto p-4 md:p-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/curious" element={<CuriousPage />} />
            <Route path="/collaborative" element={<CollaborativePage />} />
            <Route path="/creative" element={<CreativePage />} />
            <Route path="/committed" element={<CommittedPage />} />
            <Route path="/compassionate" element={<CompassionatePage />} />
            <Route path="/critical" element={<CriticalPage />} />
            <Route path="/routine/:id" element={<RoutineDetailPage />} />
            <Route path="/examples" element={<ExamplesLibraryPage />} />
            <Route path="/community" element={<CommunityUploadsPage />} />
            <Route path="/routines-explained" element={<RoutinesExplainedPage />} />
          </Routes>
        </main>
        <footer className="bg-brand-dark-blue text-white text-center p-4">
          <p>&copy; 2024 Thinking Routines Toolkit for NAE</p>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
