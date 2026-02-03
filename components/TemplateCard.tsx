
import React from 'react';
import { Heart } from 'lucide-react';

interface TemplateCardProps {
  title: string;
  description: string;
  tag: string;
  icon: React.ReactNode;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ title, description, tag, icon }) => {
  return (
    <div className="bg-white p-7 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all hover:-translate-y-1 group relative flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase rounded-lg tracking-wider">
          {tag}
        </span>
        <button className="text-slate-300 hover:text-rose-500 transition-colors">
          <Heart className="w-5 h-5" />
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-300">
          <span className="transition-colors">{icon}</span>
        </div>
        <h4 className="text-[19px] font-[800] text-slate-900 tracking-tight">{title}</h4>
      </div>

      <p className="text-[13px] text-slate-500 font-medium leading-[1.6] pr-2">
        {description}
      </p>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-1 bg-blue-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></div>
    </div>
  );
};

export default TemplateCard;
