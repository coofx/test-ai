
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DashboardPreview from './components/DashboardPreview';

const App: React.FC = () => {
  return (
    <div className="min-h-screen hero-gradient overflow-x-hidden relative">
      <Navbar />
      <main className="pt-32 pb-24 relative z-10">
        <Hero />
        <div className="mt-20 px-4 max-w-[1240px] mx-auto">
          <DashboardPreview />
        </div>
      </main>
      
      <div className="fixed top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-blue-100/40 rounded-full mix-blend-multiply filter blur-[120px] pointer-events-none"></div>
      <div className="fixed top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-sky-100/40 rounded-full mix-blend-multiply filter blur-[120px] pointer-events-none"></div>
    </div>
  );
};

export default App;
