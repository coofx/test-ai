
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="text-center px-6 mt-12">
      <div className="inline-flex items-center gap-2 px-1.5 py-1.5 pr-4 bg-white border border-slate-100 rounded-full shadow-sm mb-8">
        <span className="bg-blue-600 text-white text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-wider">New</span>
        <span className="text-sm font-medium text-slate-500">Next-Gen Content Solution</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-[800] text-slate-900 leading-[1.1] tracking-tight mb-8">
        The Fastest Way to <br />
        <span className="text-slate-800">Create Quality Content.</span>
      </h1>
      
      <p className="max-w-xl mx-auto text-lg text-slate-500 font-medium mb-10 leading-relaxed">
        From blogs to product descriptions, Notiq helps you <br className="hidden md:block" />
        write, edit, and publish faster than ever.
      </p>
      
      <button className="blue-gradient-btn px-10 py-4 rounded-xl text-lg font-bold text-white transition-all hover:shadow-2xl hover:-translate-y-1 active:scale-95">
        Try for free
      </button>
    </div>
  );
};

export default Hero;
