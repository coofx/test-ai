
import React from 'react';
import { Bell, ChevronDown } from 'lucide-react';

const DashboardHeader: React.FC = () => {
  return (
    <header className="h-16 border-b border-slate-100 bg-white flex items-center justify-end px-8 gap-6">
      <button className="relative p-2 text-slate-400 hover:bg-slate-50 rounded-full transition-colors">
        <Bell className="w-5 h-5" />
        <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
      </button>

      <div className="flex items-center gap-3 pl-6 border-l border-slate-100 group cursor-pointer">
        <img 
          src="https://picsum.photos/id/64/40/40" 
          alt="User Profile" 
          className="w-9 h-9 rounded-full object-cover ring-2 ring-slate-100 ring-offset-1"
        />
        <div className="hidden sm:block">
          <p className="text-sm font-bold text-slate-800 leading-tight">Vela Aguilar</p>
          <p className="text-[10px] text-slate-400 font-medium leading-tight">vela@dashboard.com</p>
        </div>
        <ChevronDown className="w-4 h-4 text-slate-400 transition-transform group-hover:translate-y-0.5" />
      </div>
    </header>
  );
};

export default DashboardHeader;
