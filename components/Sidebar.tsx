
import React from 'react';
import { LayoutGrid, FileText, Search, BarChart2, Share2, Layers, Grid, Database, Settings, ShieldCheck } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 border-r border-slate-100 bg-white p-6 flex flex-col gap-8">
      <div className="flex items-center gap-2 px-2">
        <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </div>
        <span className="text-xl font-extrabold text-slate-900 tracking-tight">Texty</span>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 mb-4">General</h3>
          <nav className="space-y-1">
            <SidebarNavItem icon={<LayoutGrid className="w-4 h-4" />} label="Dashboard" />
            <SidebarNavItem icon={<Grid className="w-4 h-4" />} label="Templates" active />
            <SidebarNavItem icon={<FileText className="w-4 h-4" />} label="Content Library" />
            <SidebarNavItem icon={<Search className="w-4 h-4" />} label="SEO Tools" />
            <SidebarNavItem icon={<BarChart2 className="w-4 h-4" />} label="Analytics" />
            <SidebarNavItem icon={<Database className="w-4 h-4" />} label="Integrations" />
            <SidebarNavItem icon={<Layers className="w-4 h-4" />} label="All Tools" />
          </nav>
        </div>

        <div>
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 mb-4">Account</h3>
          <nav className="space-y-1">
            <SidebarNavItem icon={<Settings className="w-4 h-4" />} label="Settings" />
            <SidebarNavItem icon={<ShieldCheck className="w-4 h-4" />} label="Security" />
          </nav>
        </div>
      </div>
    </aside>
  );
};

const SidebarNavItem: React.FC<{ icon: React.ReactNode; label: string; active?: boolean }> = ({ icon, label, active }) => (
  <a 
    href="#" 
    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
      active 
        ? 'bg-blue-50 text-blue-600 border border-blue-100/50 shadow-sm' 
        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
    }`}
  >
    <span className={active ? 'text-blue-600' : 'text-slate-400'}>{icon}</span>
    {label}
  </a>
);

export default Sidebar;
