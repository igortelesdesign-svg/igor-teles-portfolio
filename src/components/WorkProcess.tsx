import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { workProcessSteps } from '../data/portfolioData';
import { 
  Search, 
  Compass, 
  Feather, 
  Figma, 
  Terminal, 
  CheckCircle2, 
  Rocket, 
  HeartHandshake,
  Workflow
} from 'lucide-react';

export const WorkProcess: React.FC = () => {
  const { lang, t } = useLanguage();

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search': return <Search className="w-5 h-5 text-blue-400" />;
      case 'Compass': return <Compass className="w-5 h-5 text-emerald-400" />;
      case 'Feather': return <Feather className="w-5 h-5 text-amber-400" />;
      case 'Figma': return <Figma className="w-5 h-5 text-purple-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-cyan-400" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-teal-400" />;
      case 'Rocket': return <Rocket className="w-5 h-5 text-indigo-400" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-rose-400" />;
      default: return <Workflow className="w-5 h-5 text-[#2563EB]" />;
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.3em] text-[#2563EB] mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>{lang === 'pt' ? 'METODOLOGIA DE TRABALHO' : 'WORK PROCESS & PIPELINE'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight uppercase">
            {lang === 'pt' ? 'PROCESSO ESTRUTURADO EM 8 ETAPAS' : 'OUR 8-STEP EXECUTION PIPELINE'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/60 font-light">
            {lang === 'pt'
              ? 'Uma metodologia clara e transparente para garantir entregas rápidas, sem retrabalho e com previsibilidade total.'
              : 'A structured, agile workflow ensuring predictability, transparent communication, and high technical quality.'}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workProcessSteps.map((stepItem) => (
            <div
              key={stepItem.step}
              className="p-6 rounded-2xl glass-card border border-white/10 hover:border-blue-500/30 transition-all duration-300 relative group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center">
                  {getStepIcon(stepItem.icon)}
                </div>
                <span className="font-heading font-extrabold text-2xl text-neutral-700 group-hover:text-[#2563EB] transition-colors">
                  0{stepItem.step}
                </span>
              </div>

              <h3 className="font-heading font-bold text-base text-white dark:text-white light:text-slate-900 mb-2">
                {t(stepItem.title)}
              </h3>

              <p className="text-xs text-neutral-400 dark:text-neutral-400 light:text-slate-600 leading-relaxed">
                {t(stepItem.description)}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
