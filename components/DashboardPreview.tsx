import React, { useState } from 'react';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';
import TemplateCard from './TemplateCard';
import { FileText, Search, Share2, Layers, Filter, Upload, Plus } from 'lucide-react';

const DashboardPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'saved'>('all');

  return (
    <div className="dashboard-container bg-white rounded-[32px] overflow-hidden flex min-h-[800px] w-full border border-slate-200/60">
      <Sidebar />

      <div className="flex-1 flex flex-col bg-[#fbfcfd]">
        <DashboardHeader />
        
        <div className="p-10 flex-1 overflow-y-auto dashboard-scroll">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <h2 className="text-[32px] font-[800] text-slate-900 tracking-tight leading-none">Templates</h2>
              <p className="text-slate-500 text-[15px] mt-2 font-medium">Choose a template to start creating content.</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Search templates..." 
                  className="pl-11 pr-12 py-3.5 bg-white border border-slate-200 rounded-2xl text-[14px] w-full md:w-72 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all shadow-sm placeholder:text-slate-400"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-slate-400" />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 px-1.5 py-0.5 border border-slate-200 rounded text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  ⌘ K
                </div>
              </div>
              
              <button className="flex items-center gap-2 px-5 py-3.5 bg-white border border-slate-200 rounded-2xl text-[14px] font-[700] text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">
                <Filter className="w-4 h-4" />
                Filter
              </button>

              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-6 py-3.5 bg-blue-600 text-white rounded-2xl text-[14px] font-[800] shadow-xl shadow-blue-600/25 hover:bg-blue-700 hover:-translate-y-0.5 transition-all">
                  <Plus className="w-4 h-4" />
                  Create New
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 p-1.5 bg-slate-100/80 rounded-2xl w-fit mb-12 border border-slate-200/50">
            <button 
              onClick={() => setActiveTab('all')}
              className={`px-8 py-3 text-[13px] font-[800] rounded-xl transition-all ${activeTab === 'all' ? 'bg-white text-slate-900 shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
            >
              All Templates
            </button>
            <button 
              onClick={() => setActiveTab('saved')}
              className={`px-8 py-3 text-[13px] font-[800] rounded-xl transition-all ${activeTab === 'saved' ? 'bg-white text-slate-900 shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Saved
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TemplateCard 
              title="Blog Post"
              description="Turn ideas into long-form blogs optimized for SEO and high readability scores."
              tag="SEO Ready"
              icon={<FileText className="w-6 h-6" />}
            />
            <TemplateCard 
              title="Social Media"
              description="Create viral-ready posts for Twitter, LinkedIn, and Instagram in just a few clicks."
              tag="Trending"
              icon={<Share2 className="w-6 h-6" />}
            />
            <TemplateCard 
              title="Email Marketing"
              description="Design captivating email campaigns that your subscribers will actually want to read."
              tag="Popular"
              icon={<Layers className="w-6 h-6" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;