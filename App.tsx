
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DashboardPreview from './components/DashboardPreview';

const App: React.FC = () => {
  return (
    <div className="min-h-screen hero-gradient overflow-x-hidden">
      <Navbar />
      <main className="pt-24 pb-20">
        <Hero />
        <div className="mt-16 px-4 max-w-[1200px] mx-auto">
          <DashboardPreview />
        </div>
      </main>
      
      {/* Decorative background blurs */}
      <div className="fixed -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse pointer-events-none"></div>
      <div className="fixed -top-24 -right-24 w-96 h-96 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse pointer-events-none delay-700"></div>
    </div>
  );
};

export default App;
