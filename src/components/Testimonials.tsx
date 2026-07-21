import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { testimonialsData } from '../data/portfolioData';
import { Quote, Star, MessageSquare } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden bg-neutral-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card text-xs font-bold text-[#2563EB] mb-3 border border-blue-500/20">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{lang === 'pt' ? 'Depoimentos de Clientes & Líderes' : 'Endorsements & Testimonials'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white dark:text-white light:text-slate-900 tracking-tight">
            {lang === 'pt' ? 'Reconhecimento de Parceiros Internacionais' : 'What Leaders & Founders Say'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 dark:text-neutral-400 light:text-slate-600">
            {lang === 'pt'
              ? 'Avaliações de fundadores, executivos e líderes de produto na Europa e nas Américas.'
              : 'Feedback from founders, VPs of Product, and engineering directors across European tech hubs.'}
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((test) => (
            <div
              key={test.id}
              className="p-8 rounded-2xl glass-card border border-white/10 relative hover:border-blue-500/30 transition-all flex flex-col justify-between"
            >
              <Quote className="w-10 h-10 text-[#2563EB]/20 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-neutral-300 dark:text-neutral-300 light:text-slate-700 italic leading-relaxed">
                  "{t(test.content)}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-4">
                <img
                  src={test.avatar}
                  alt={test.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border border-white/20"
                />
                <div>
                  <h4 className="font-heading font-bold text-sm text-white dark:text-white light:text-slate-900 flex items-center gap-2">
                    <span>{test.name}</span>
                    <span className="text-base">{test.countryFlag}</span>
                  </h4>
                  <p className="text-xs text-neutral-400">
                    {t(test.role)} • <span className="text-[#2563EB]">{test.company}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
