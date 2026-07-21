import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { techIcons } from '../data/portfolioData';
import { TechIcon } from '../types/portfolio';
import { 
  Code2, 
  Server, 
  Figma, 
  Bot, 
  Box, 
  Layers, 
  Cpu, 
  Sparkles 
} from 'lucide-react';

export const TechStackGrid: React.FC = () => {
  const { lang } = useLanguage();
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: { pt: 'Todas', en: 'All' } },
    { id: 'frontend', label: { pt: 'Front-end', en: 'Front-end' } },
    { id: 'backend', label: { pt: 'Back-end', en: 'Back-end' } },
    { id: 'design', label: { pt: 'Design', en: 'Design' } },
    { id: 'ai', label: { pt: 'IA & Automação', en: 'AI & Automations' } },
    { id: 'devops', label: { pt: 'Futuras & DevOps', en: 'Future & DevOps' } },
  ];

  const filteredIcons = filter === 'all'
    ? techIcons
    : techIcons.filter(item => item.category === filter);

  return (
    <section className="py-24 relative overflow-hidden bg-neutral-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.3em] text-[#2563EB] mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>{lang === 'pt' ? 'STACK DE FERRAMENTAS' : 'TOOLING & ECOSYSTEM'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight uppercase">
            {lang === 'pt' ? 'TECNOLOGIAS & FERRAMENTAS DOMINADAS' : 'TECHNOLOGIES & DESIGN ECOSYSTEM'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/60 font-light">
            {lang === 'pt'
              ? 'Conjunto de tecnologias utilizadas na criação de soluções robustas, escaláveis e de alta qualidade.'
              : 'Cutting-edge development tools, creative suites, and cloud infrastructure engineered for global scale.'}
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                  filter === cat.id
                    ? 'bg-[#2563EB] text-white border-[#2563EB]'
                    : 'bg-white/5 border-white/10 text-neutral-300 hover:border-white'
                }`}
              >
                {cat.label[lang]}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredIcons.map((tech, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl glass-card border transition-all duration-300 hover:-translate-y-1 text-center group ${
                tech.isFuture 
                  ? 'border-dashed border-indigo-500/40 bg-indigo-950/10' 
                  : 'border-white/10 hover:border-[#2563EB]'
              }`}
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-[#2563EB] group-hover:text-white transition-all text-[#2563EB]">
                <Code2 className="w-6 h-6" />
              </div>

              <h4 className="font-heading font-bold text-xs text-white dark:text-white light:text-slate-900 group-hover:text-[#2563EB] transition-colors">
                {tech.name}
              </h4>

              <p className="text-[10px] text-neutral-400 mt-1">
                {tech.level || 'Dominado'}
              </p>

              {tech.isFuture && (
                <span className="inline-block mt-2 px-2 py-0.5 rounded bg-indigo-600/20 text-indigo-400 text-[9px] font-bold">
                  {lang === 'pt' ? 'Espaço Futuro' : 'Future Roadmap'}
                </span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
