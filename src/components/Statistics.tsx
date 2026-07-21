import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { statisticsData } from '../data/portfolioData';
import { Award, CheckCircle2, Globe2, Sparkles } from 'lucide-react';

export const Statistics: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-r from-blue-950/40 via-neutral-950 to-indigo-950/40 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {statisticsData.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-panel border border-white/10 text-center hover:border-[#2563EB] transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white dark:text-white light:text-slate-900 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-[#2563EB]">
                {stat.value}
              </div>
              <p className="mt-2 text-xs font-semibold text-neutral-400 dark:text-neutral-400 light:text-slate-600">
                {t(stat.label)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
