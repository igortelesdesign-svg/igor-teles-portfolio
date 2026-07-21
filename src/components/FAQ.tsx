import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { faqData } from '../data/portfolioData';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export const FAQ: React.FC = () => {
  const { lang, t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-neutral-950/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card text-xs font-bold text-[#2563EB] mb-3 border border-blue-500/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{lang === 'pt' ? 'Perguntas Frequentes' : 'Recruiter FAQ'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white dark:text-white light:text-slate-900 tracking-tight">
            {lang === 'pt' ? 'Dúvidas Recorrentes de Recrutadores' : 'Frequently Asked Questions'}
          </h2>
          <p className="mt-3 text-sm text-neutral-400 dark:text-neutral-400 light:text-slate-600">
            {lang === 'pt'
              ? 'Informações essenciais sobre modelo de trabalho, fuso horário europeu e contratação.'
              : 'Key details regarding timezone sync, contract flexibility, and technical workflow.'}
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl glass-card border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-base text-white hover:text-[#2563EB] cursor-pointer"
                >
                  <span>{t(item.question)}</span>
                  <ChevronDown className={`w-5 h-5 text-[#2563EB] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-neutral-300 dark:text-neutral-300 light:text-slate-700 leading-relaxed border-t border-white/10 pt-4 animate-in fade-in duration-200">
                    {t(item.answer)}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
