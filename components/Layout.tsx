import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Score Meaning', path: '/score-meaning' },
    { name: 'Average Score', path: '/average-score' },
    { name: 'Questions List', path: '/questions-list' },
    { name: 'History', path: '/history' },
    { name: 'Safe Version', path: '/safe-version' },
    { name: 'Compare', path: '/compare' },
    { name: 'Share', path: '/share-score' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-slate-800 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-red-700 transition-colors">R</div>
                <span className="font-bold text-xl tracking-tight text-slate-900 group-hover:text-red-600 transition-colors">Rice Purity Test</span>
              </Link>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-6">
              {navLinks.slice(0, 5).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-bold transition-colors hover:text-red-600 ${
                    location.pathname === link.path ? 'text-red-600' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-slate-600 hover:text-red-600 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-bold ${
                    location.pathname === link.path
                      ? 'bg-red-50 text-red-600'
                      : 'text-slate-600 hover:bg-gray-50 hover:text-red-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 mt-12 border-t-4 border-red-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Rice Purity Test</h3>
              <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                The official online tool for the Rice Purity Test. Calculate, share, and compare your purity score anonymously.
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-red-400 transition-colors">Rice Purity Test</Link></li>
                <li><Link to="/score-meaning" className="hover:text-red-400 transition-colors">Score Meaning</Link></li>
                <li><Link to="/average-score" className="hover:text-red-400 transition-colors">Average Score</Link></li>
                <li><Link to="/questions-list" className="hover:text-red-400 transition-colors">Questions List</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/history" className="hover:text-red-400 transition-colors">History</Link></li>
                <li><Link to="/safe-version" className="hover:text-red-400 transition-colors">Safe Version</Link></li>
                <li><Link to="/compare" className="hover:text-red-400 transition-colors">Compare Scores</Link></li>
                <li><Link to="/share-score" className="hover:text-red-400 transition-colors">Share Score</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Rice Purity Test Online. All rights reserved. Disclaimer: This test is for entertainment purposes only.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;