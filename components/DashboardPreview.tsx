
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';
import TemplateCard from './TemplateCard';
import { LayoutGrid, FileText, Search, BarChart2, Share2, Layers, Grid } from 'lucide-react';

const DashboardPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'saved'>('all');

  return (
    <div className="dashboard-container bg-white rounded-3xl overflow-hidden border border-slate-200 flex min-h-[700px]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col bg-slate-50/50">
        <DashboardHeader />
        
        <div className="p-8 flex-1 overflow-y-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-800">Templates</h2>
            <div className="flex items-center gap-4">
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="pl-10 pr-12 py-2.5 bg-white border border-slate-200 rounded-xl text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 px-1.5 py-0.5 border border-slate-200 rounded text-[10px] text-slate-400 font-mono">
                  ⌘ K
                </div>
              </div>
              
              <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
                Filter
              </button>

              <div className="flex items-center gap-2">
                <button className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700">
                  Upload Document
                </button>
                <button className="px-4 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-500/30">
                  Create Content
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-xl w-fit mb-8">
            <button 
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${activeTab === 'all' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-200'}`}
            >
              All Templates
            </button>
            <button 
              onClick={() => setActiveTab('saved')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${activeTab === 'saved' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-200'}`}
            >
              Saved Templates
            </button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TemplateCard 
              title="Blog Post"
              description="Turn ideas into long-form blogs optimized for SEO and readability."
              tag="SEO Ready"
              icon={<FileText className="w-5 h-5" />}
            />
            <TemplateCard 
              title="Social Media Post"
              description="Create engaging posts for Twitter, LinkedIn, and Instagram in seconds."
              tag="All Social Platforms"
              icon={<Share2 className="w-5 h-5" />}
            />
            <TemplateCard 
              title="Email Newsletter"
              description="Create engaging posts for Twitter, LinkedIn, and Instagram in seconds."
              tag="Most Popular"
              icon={<Layers className="w-5 h-5" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
