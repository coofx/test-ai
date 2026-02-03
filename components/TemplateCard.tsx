
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
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group relative flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="px-2.5 py-1 bg-blue-50 text-blue-600 text-[9px] font-bold uppercase rounded-md tracking-wider">
          {tag}
        </span>
        <button className="text-slate-300 hover:text-red-500 transition-colors">
          <Heart className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
          <span className="text-slate-600 group-hover:text-blue-600">{icon}</span>
        </div>
        <h4 className="text-lg font-bold text-slate-800">{title}</h4>
      </div>

      <p className="text-xs text-slate-500 font-medium leading-relaxed pr-2">
        {description}
      </p>

      {/* Decorative element on hover */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></div>
    </div>
  );
};

export default TemplateCard;
