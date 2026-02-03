import React from 'react';
import { LayoutGrid, FileText, Search, BarChart2, Grid, Database, Settings, ShieldCheck } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-[280px] border-r border-slate-100 bg-white p-8 flex flex-col gap-10">
      <div className="flex items-center gap-3 px-2">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </div>
        <span className="text-2xl font-[900] text-slate-900 tracking-tighter">Texty</span>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-[11px] font-[800] text-slate-400 uppercase tracking-[0.2em] px-3 mb-5">Main Menu</h3>
          <nav className="space-y-1.5">
            <SidebarNavItem icon={<LayoutGrid className="w-[18px] h-[18px]" />} label="Dashboard" />
            <SidebarNavItem icon={<Grid className="w-[18px] h-[18px]" />} label="Templates" active />
            <SidebarNavItem icon={<FileText className="w-[18px] h-[18px]" />} label="Content Library" />
            <SidebarNavItem icon={<Search className="w-[18px] h-[18px]" />} label="SEO Optimizer" />
            <SidebarNavItem icon={<BarChart2 className="w-[18px] h-[18px]" />} label="Performance" />
            <SidebarNavItem icon={<Database className="w-[18px] h-[18px]" />} label="Integrations" />
          </nav>
        </div>

        <div>
          <h3 className="text-[11px] font-[800] text-slate-400 uppercase tracking-[0.2em] px-3 mb-5">Workspace</h3>
          <nav className="space-y-1.5">
            <SidebarNavItem icon={<Settings className="w-[18px] h-[18px]" />} label="Settings" />
            <SidebarNavItem icon={<ShieldCheck className="w-[18px] h-[18px]" />} label="Access Control" />
          </nav>
        </div>
      </div>

      <div className="mt-auto">
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
          <p className="text-xs font-bold text-slate-800 mb-2">Pro Plan Active</p>
          <div className="w-full bg-slate-200 rounded-full h-1.5 mb-3">
            <div className="bg-blue-600 h-1.5 rounded-full w-[65%]"></div>
          </div>
          <p className="text-[10px] text-slate-500 font-medium">6,500 / 10,000 words used</p>
        </div>
      </div>
    </aside>
  );
};

const SidebarNavItem: React.FC<{ icon: React.ReactNode; label: string; active?: boolean }> = ({ icon, label, active }) => (
  <a 
    href="#" 
    className={`flex items-center gap-3.5 px-3 py-3 rounded-2xl text-[14px] font-[700] transition-all group ${
      active 
        ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/10' 
        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
    }`}
  >
    <span className={active ? 'text-white' : 'text-slate-400 group-hover:text-blue-600 transition-colors'}>{icon}</span>
    {label}
  </a>
);

export default Sidebar;