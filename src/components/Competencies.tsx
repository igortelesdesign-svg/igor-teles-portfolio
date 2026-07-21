import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { skillsData } from '../data/portfolioData';
import { SkillItem } from '../types/portfolio';
import { 
  TrendingUp, 
  Palette, 
  Code2, 
  CheckCircle2, 
  Sparkles,
  BarChart3
} from 'lucide-react';

export const Competencies: React.FC = () => {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'marketing' | 'design' | 'development'>('all');

  const filteredSkills = activeTab === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeTab);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'marketing': return <TrendingUp className="w-4 h-4 text-emerald-400" />;
      case 'design': return <Palette className="w-4 h-4 text-amber-400" />;
      case 'development': return <Code2 className="w-4 h-4 text-blue-400" />;
      default: return <Sparkles className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.3em] text-[#2563EB] mb-3">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>{lang === 'pt' ? 'MATRIZ DE COMPETÊNCIAS' : 'SKILLS & TECHNICAL MATRIX'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight uppercase">
            {lang === 'pt' ? 'HABILIDADES E NÍVEL TÉCNICO' : 'TECHNICAL PROFICIENCY & CORE SKILLS'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/60 font-light">
            {lang === 'pt'
              ? 'Uma visão transparente do domínio técnico em Marketing, Design de Produto e Engenharia de Software.'
              : 'A transparent view of technical mastery across Strategic Marketing, Product Design, and Full Stack Engineering.'}
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                activeTab === 'all'
                  ? 'bg-[#2563EB] text-white border-[#2563EB]'
                  : 'bg-white/5 border-white/10 text-neutral-300 hover:border-white'
              }`}
            >
              {lang === 'pt' ? 'Todas as Habilidades' : 'All Competencies'}
            </button>
            <button
              onClick={() => setActiveTab('marketing')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                activeTab === 'marketing'
                  ? 'bg-emerald-600 text-white border-emerald-500'
                  : 'bg-white/5 border-white/10 text-neutral-300 hover:border-white'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              <span>Marketing ({skillsData.filter(s => s.category === 'marketing').length})</span>
            </button>
            <button
              onClick={() => setActiveTab('design')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                activeTab === 'design'
                  ? 'bg-amber-600 text-white border-amber-500'
                  : 'bg-white/5 border-white/10 text-neutral-300 hover:border-white'
              }`}
            >
              <Palette className="w-3.5 h-3.5 text-amber-400" />
              <span>Design ({skillsData.filter(s => s.category === 'design').length})</span>
            </button>
            <button
              onClick={() => setActiveTab('development')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                activeTab === 'development'
                  ? 'bg-blue-600 text-white border-blue-500'
                  : 'bg-white/5 border-white/10 text-neutral-300 hover:border-white'
              }`}
            >
              <Code2 className="w-3.5 h-3.5 text-blue-400" />
              <span>{lang === 'pt' ? 'Desenvolvimento' : 'Development'} ({skillsData.filter(s => s.category === 'development').length})</span>
            </button>
          </div>
        </div>

        {/* Competencies Progress Bars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl glass-card border border-white/10 hover:border-blue-500/30 transition-all hover:bg-white/5"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-neutral-800 border border-white/10">
                    {getCategoryIcon(skill.category)}
                  </div>
                  <span className="font-heading font-bold text-sm text-white dark:text-white light:text-slate-900">
                    {skill.name}
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-[#2563EB]">
                  {skill.level}%
                </span>
              </div>

              {/* Animated Progress Bar */}
              <div className="w-full h-2.5 bg-neutral-800 rounded-full overflow-hidden p-0.5 border border-white/5">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ${
                    skill.category === 'marketing'
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-400'
                      : skill.category === 'design'
                      ? 'bg-gradient-to-r from-amber-500 to-orange-400'
                      : 'bg-gradient-to-r from-[#2563EB] to-indigo-400'
                  }`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
