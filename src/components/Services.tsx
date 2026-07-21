import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/portfolioData';
import { 
  Palette, 
  TrendingUp, 
  Layout, 
  Code2, 
  Zap, 
  Bot, 
  Globe, 
  PieChart, 
  Check, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const Services: React.FC = () => {
  const { lang, t } = useLanguage();

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette': return <Palette className="w-6 h-6 text-amber-400" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-emerald-400" />;
      case 'Layout': return <Layout className="w-6 h-6 text-indigo-400" />;
      case 'Code2': return <Code2 className="w-6 h-6 text-blue-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-yellow-400" />;
      case 'Bot': return <Bot className="w-6 h-6 text-teal-400" />;
      case 'Globe': return <Globe className="w-6 h-6 text-cyan-400" />;
      case 'PieChart': return <PieChart className="w-6 h-6 text-purple-400" />;
      default: return <Sparkles className="w-6 h-6 text-[#2563EB]" />;
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-neutral-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.3em] text-[#2563EB] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'pt' ? 'SERVIÇOS DE ALTO PADRÃO' : 'HIGH-IMPACT SERVICES'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight uppercase">
            {lang === 'pt' ? 'SOLUÇÕES INTEGRADAS DE MARCA E TECNOLOGIA' : 'END-TO-END BRAND & TECH SOLUTIONS'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/60 font-light">
            {lang === 'pt'
              ? 'Ofereço um conjunto completo de serviços para acelerar a presença digital e a escala técnica da sua empresa.'
              : 'Empowering European startups and enterprises with complete design, marketing, and software engineering capabilities.'}
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-2xl glass-card border border-white/10 hover:border-[#2563EB] transition-all hover:-translate-y-1.5 duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {getServiceIcon(service.icon)}
                </div>

                <h3 className="font-heading font-bold text-lg text-white dark:text-white light:text-slate-900 group-hover:text-[#2563EB] transition-colors leading-snug">
                  {t(service.title)}
                </h3>

                <p className="mt-3 text-xs text-neutral-400 dark:text-neutral-400 light:text-slate-600 leading-relaxed">
                  {t(service.description)}
                </p>

                {/* Highlights List */}
                <div className="mt-5 space-y-2 pt-4 border-t border-white/10">
                  {service.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{t(h)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={scrollToContact}
                className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#2563EB] hover:text-blue-400 transition-colors w-full cursor-pointer"
              >
                <span>{lang === 'pt' ? 'Solicitar Proposta' : 'Request Proposal'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
