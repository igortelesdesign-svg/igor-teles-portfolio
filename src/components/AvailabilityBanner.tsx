import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Check, Globe2, ShieldCheck, Zap } from 'lucide-react';

export const AvailabilityBanner: React.FC = () => {
  const { lang } = useLanguage();

  const availabilities = [
    { pt: 'Trabalho Remoto 100%', en: '100% Remote Work' },
    { pt: 'Freelancer / Projetos', en: 'Freelance & Contract' },
    { pt: 'Contrato B2B Internacional', en: 'International B2B Contract' },
    { pt: 'Empresas Europeias (CET/BST)', en: 'European Companies (CET/BST)' },
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-950/80 via-neutral-900 to-indigo-950/80 border border-blue-500/30 shadow-2xl relative overflow-hidden">
          
          {/* Ambient Lighting */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            {/* Left Title & Status */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-4">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>Available for Remote Work</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                {lang === 'pt' ? 'Pronto para colaborar com sua equipe' : 'Ready to Join Your Engineering & Design Squad'}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-neutral-300 max-w-xl">
                {lang === 'pt'
                  ? 'Flexibilidade total de alocação para projetos imediatos ou contratos de longo prazo.'
                  : 'Flexible engagement models for immediate project bursts or long-term core engineering roles.'}
              </p>
            </div>

            {/* Right Checks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 shrink-0">
              {availabilities.map((item, idx) => (
                <div
                  key={idx}
                  className="px-4 py-3 rounded-xl glass-panel border border-white/10 flex items-center gap-3 text-xs font-bold text-white shadow-sm"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{item[lang]}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
