
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
      <div className="bg-white/80 backdrop-blur-md rounded-full px-8 py-3 flex items-center justify-between border border-white shadow-lg">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </div>
          <span className="text-xl font-extrabold text-slate-900 tracking-tight">Texty</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
            Features
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" /></svg>
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
            Products
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" /></svg>
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">Pricing</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Blogs</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-sm font-semibold text-slate-700 hover:text-blue-600">Login</button>
          <button className="blue-gradient-btn px-6 py-2.5 rounded-full text-sm font-bold text-white transition-transform active:scale-95">
            Try for free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
