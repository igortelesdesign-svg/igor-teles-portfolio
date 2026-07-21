import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle, Code2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-neutral-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card text-xs font-bold text-[#2563EB] mb-3 border border-blue-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{lang === 'pt' ? 'Experiência Profissional' : 'Work Experience'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white dark:text-white light:text-slate-900 tracking-tight">
            {lang === 'pt' ? 'Histórico de Liderança e Resultados' : 'Proven Track Record & Leadership'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 dark:text-neutral-400 light:text-slate-600">
            {lang === 'pt'
              ? 'Uma trajetória consolidada em agências digitais, consultorias e desenvolvimento de produtos escaláveis.'
              : 'Over a decade of hands-on impact across digital agencies, scale-up advisory, and software engineering.'}
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-2xl glass-card border border-white/10 hover:border-blue-500/30 transition-all hover:bg-white/5 group"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block mb-1">
                    {exp.company}
                  </span>
                  <h3 className="text-xl font-bold font-heading text-white dark:text-white light:text-slate-900">
                    {t(exp.role)}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-white/10">
                    <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-white/10">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p className="mt-6 text-sm text-neutral-300 dark:text-neutral-300 light:text-slate-700 leading-relaxed">
                {t(exp.summary)}
              </p>

              {/* Key Results */}
              <div className="mt-6 space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  {lang === 'pt' ? 'Principais Conquistas & Impacto:' : 'Key Achievements & Impact:'}
                </h4>
                {exp.keyResults.map((result, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{t(result)}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-neutral-500 mr-2 flex items-center gap-1">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Stack:</span>
                </span>
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-white/10 text-neutral-300 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
