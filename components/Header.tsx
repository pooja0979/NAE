import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClasses = "block py-2 px-3 text-white rounded hover:bg-brand-cyan md:hover:bg-transparent md:border-0 md:hover:text-brand-cyan md:p-0 transition-colors duration-300";
  const activeLinkClasses = "text-brand-cyan font-bold";

  return (
    <nav className="bg-brand-dark-blue border-gray-200 shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse group">
           <svg className="w-10 h-10 text-white transform group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/>
            <path d="M12 12a5 5 0 100-10 5 5 0 000 10z"/>
            <path d="M12 12a2 2 0 100-4 2 2 0 000 4z"/>
          </svg>
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white group-hover:text-brand-cyan transition-colors duration-300">Thinking Routines</span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-brand-dark-blue md:flex-row md:items-center md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <NavLink to="/" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} end>Home</NavLink>
            </li>
            <li>
              <NavLink to="/routines-explained" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Routines Explained</NavLink>
            </li>
            <li>
              <NavLink to="/examples" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Examples</NavLink>
            </li>
            <li>
              <NavLink to="/community" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Community</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;