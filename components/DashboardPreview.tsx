
import React, { useState } from 'react';
import Sidebar from './Sidebar.tsx';
import DashboardHeader from './DashboardHeader.tsx';
import TemplateCard from './TemplateCard.tsx';
import { FileText, Search, Share2, Layers, Filter, Upload, Plus } from 'lucide-react';

const DashboardPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'saved'>('all');

  return (
    <div className="dashboard-container bg-white rounded-[32px] overflow-hidden flex min-h-[780px] w-full">
      <Sidebar />

      <div className="flex-1 flex flex-col bg-[#fbfcfd]">
        <DashboardHeader />
        
        <div className="p-10 flex-1 overflow-y-auto dashboard-scroll">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <h2 className="text-[28px] font-[800] text-slate-900 tracking-tight">Templates</h2>
              <p className="text-slate-500 text-sm mt-1 font-medium">Choose a template to start creating content.</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Search templates..." 
                  className="pl-10 pr-12 py-3 bg-white border border-slate-200 rounded-2xl text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                />
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 px-1.5 py-0.5 border border-slate-200 rounded text-[9px] text-slate-400 font-bold">
                  ⌘ K
                </div>
              </div>
              
              <button className="flex items-center gap-2 px-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">
                <Filter className="w-4 h-4" />
                Filter
              </button>

              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-5 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-[800] text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
                  <Upload className="w-4 h-4" />
                  Upload
                </button>
                <button className="flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-2xl text-sm font-[800] shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-colors">
                  <Plus className="w-4 h-4" />
                  Create
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 p-1.5 bg-slate-100/80 rounded-2xl w-fit mb-10 border border-slate-200/50">
            <button 
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2.5 text-xs font-[800] rounded-xl transition-all ${activeTab === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              All Templates
            </button>
            <button 
              onClick={() => setActiveTab('saved')}
              className={`px-6 py-2.5 text-xs font-[800] rounded-xl transition-all ${activeTab === 'saved' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Saved Templates
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TemplateCard 
              title="Blog Post"
              description="Turn ideas into long-form blogs optimized for SEO and high readability scores."
              tag="SEO Ready"
              icon={<FileText className="w-5 h-5" />}
            />
            <TemplateCard 
              title="Social Media Post"
              description="Create viral-ready posts for Twitter, LinkedIn, and Instagram in just a few clicks."
              tag="Social"
              icon={<Share2 className="w-5 h-5" />}
            />
            <TemplateCard 
              title="Email Newsletter"
              description="Design captivating email campaigns that your subscribers will actually want to read."
              tag="Popular"
              icon={<Layers className="w-5 h-5" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
