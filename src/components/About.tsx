import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/portfolioData';
import { 
  Sparkles, 
  Lightbulb, 
  Rocket, 
  Compass, 
  BrainCircuit, 
  Check, 
  Award, 
  Zap,
  Globe2
} from 'lucide-react';

export const About: React.FC = () => {
  const { lang, t } = useLanguage();

  const expertiseHighlights = [
    { title: "Branding", desc: "Arquitetura e essência visual de marcas" },
    { title: "Marketing Estratégico", desc: "Funis de vendas e posicionamento" },
    { title: "Social Media & Growth", desc: "Engajamento e presença digital" },
    { title: "Gestão de Marca", desc: "Consistência e governança de marca" },
    { title: "UI Design", desc: "Interfaces elegantes e acessíveis" },
    { title: "UX Research", desc: "Testes, fluxos e usabilidade" },
    { title: "Design Gráfico", desc: "Direção de arte e materiais multimídia" },
    { title: "Desenvolvimento Front-end", desc: "React, Next.js, Tailwind, TypeScript" },
    { title: "Desenvolvimento Full Stack", desc: "Node.js, Express, REST APIs, Databases" },
    { title: "IA Aplicada aos Negócios", desc: "Engenharia de Prompts e Automação" }
  ];

  const milestones = [
    {
      year: "2009 — 2014",
      title: { pt: "Fundamentos Criativos & Design Gráfico", en: "Creative Foundations & Graphic Design" },
      desc: { 
        pt: "Início da carreira focado em direção de arte, branding, mídias impressas e primeiras codificações front-end.",
        en: "Started career focusing on art direction, branding, print media, and foundational front-end coding."
      }
    },
    {
      year: "2015 — 2019",
      title: { pt: "Liderança de Marketing & Growth", en: "Marketing Leadership & Growth" },
      desc: {
        pt: "Gestão de campanhas digitais de alto impacto, estruturação de mídias sociais e liderança de squads de design.",
        en: "Managed high-impact digital campaigns, social media strategy, and creative design squads."
      }
    },
    {
      year: "2020 — 2023",
      title: { pt: "Transição para UI/UX & React Engineering", en: "Transition to UI/UX & React Engineering" },
      desc: {
        pt: "Especialização em prototipagem avançada no Figma, Design Systems e desenvolvimento front-end com React & TypeScript.",
        en: "Deep dive into advanced Figma design systems, component architecture, and React/TypeScript web apps."
      }
    },
    {
      year: "2024 — Presente",
      title: { pt: "Full Stack Master & IA Generativa", en: "Full Stack Mastery & Generative AI" },
      desc: {
        pt: "Consolidação como profissional multidisciplinar de nível internacional, conectando marca, backend e agentes de IA.",
        en: "Consolidated as a world-class multidisciplinary specialist, connecting brand strategy, backends, and AI agents."
      }
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-neutral-950/60 dark:bg-neutral-950/60 light:bg-slate-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.3em] text-[#2563EB] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>{lang === 'pt' ? 'SOBRE MIM & TRAJETÓRIA' : 'ABOUT ME & CAREER PATH'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight uppercase">
            {lang === 'pt'
              ? 'Conectando visão de negócio, design e código limpo'
              : 'Bridging Business Vision, Design & Code'}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/60 leading-relaxed font-light">
            {lang === 'pt'
              ? 'Ao longo de mais de 15 anos, evoluí de designer de marca para um especialista multidisciplinar capaz de conceber, projetar e programar sistemas de software completos.'
              : 'Over 15+ years, I evolved from a brand designer into a senior multidisciplinary specialist capable of conceptualizing, designing, and engineering complete web software solutions.'}
          </p>
        </div>

        {/* Top Grid: Bio Story + Workspace Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Bio Story Left */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-4">
              <h3 className="text-xl font-bold font-heading text-white dark:text-white light:text-slate-900 flex items-center gap-2">
                <BrainCircuit className="w-5 h-5 text-[#2563EB]" />
                <span>{lang === 'pt' ? 'Minha Trajetória Profissional' : 'My Professional Journey'}</span>
              </h3>
              
              <p className="text-sm text-neutral-300 dark:text-neutral-300 light:text-slate-700 leading-relaxed">
                {lang === 'pt'
                  ? 'Iniciei minha jornada construindo identidades visuais marcantes e gerando resultados no marketing digital. Com o avanço das tecnologias de produto, estendi minha atuação para o design de interfaces (UI/UX) e desenvolvimento front-end com React/Next.js, chegando à arquitetura Full Stack com Node.js, bancos de dados e automações com Inteligência Artificial.'
                  : 'My journey began by building striking brand identities and driving growth in digital marketing campaigns. As product technology advanced, I expanded into UI/UX product design and front-end engineering with React/Next.js, culminating in Full Stack architecture with Node.js, cloud databases, and AI automations.'}
              </p>

              <p className="text-sm text-neutral-300 dark:text-neutral-300 light:text-slate-700 leading-relaxed">
                {lang === 'pt'
                  ? 'Minha maior fortaleza reside no equilíbrio entre a sensibilidade estética e o rigor técnico da engenharia de software. Consigo comunicar-me perfeitamente com diretores de arte, executivos de marketing e desenvolvedores seniores.'
                  : 'My core strength lies in balancing aesthetic refinement with software engineering rigor. I effortlessly communicate across creative directors, marketing executives, and senior developers.'}
              </p>

              {/* Learning Agility Callout Banner */}
              <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-blue-900/40 via-neutral-900 to-indigo-900/30 border border-blue-500/30 flex items-start gap-3">
                <Zap className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    {lang === 'pt' ? 'Alta Capacidade de Aprendizado Tecnológico' : 'High Learning Agility & Fast Tech Adaptation'}
                  </h4>
                  <p className="text-xs text-neutral-300 dark:text-neutral-300 light:text-slate-700 mt-1 leading-snug">
                    {lang === 'pt'
                      ? 'Possuo facilidade extrema para dominar novas ferramentas, linguagens e frameworks em poucos dias, mantendo me sempre atualizado com as últimas inovações globais.'
                      : 'I master new tools, languages, and frameworks within days, maintaining continuous alignment with cutting-edge global software practices.'}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Workspace Photo Right */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden glass-card p-2 border border-white/10 shadow-2xl">
              <img
                src={personalInfo.workspaceImage}
                alt="Igor Teles Studio Workspace"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover rounded-xl hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-panel rounded-xl border border-white/20">
                <p className="font-heading font-bold text-xs text-white uppercase tracking-wider">Studio & Engineering Hub</p>
                <p className="text-[11px] text-neutral-300 mt-0.5">High Performance Remote Workstation • Dual 4K Setup</p>
              </div>
            </div>
          </div>

        </div>

        {/* Expertise Grid Breakdown */}
        <div className="mb-20">
          <h3 className="text-xl font-bold font-heading text-center text-white dark:text-white light:text-slate-900 mb-8">
            {lang === 'pt' ? 'Áreas de Domínio Técnico e Estratégico' : 'Core Domains of Expertise'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {expertiseHighlights.map((exp, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl glass-card border border-white/10 hover:border-[#2563EB] transition-all hover:-translate-y-1 group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-600/15 text-[#2563EB] flex items-center justify-center font-bold text-xs mb-3 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                  <Check className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white dark:text-white light:text-slate-900 group-hover:text-[#2563EB] transition-colors">
                  {exp.title}
                </h4>
                <p className="text-[11px] text-neutral-400 dark:text-neutral-400 light:text-slate-600 mt-1 leading-snug">
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold font-heading text-center text-white dark:text-white light:text-slate-900 mb-12">
            {lang === 'pt' ? 'Linha do Tempo de Evolução Profissional' : 'Career Progression Timeline'}
          </h3>

          <div className="relative border-l-2 border-blue-600/30 ml-4 sm:ml-32 space-y-12">
            {milestones.map((ms, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-8 group">
                
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-neutral-900 border-2 border-[#2563EB] group-hover:scale-125 group-hover:bg-[#2563EB] transition-all duration-300"></div>

                {/* Left Year Label for Desktop */}
                <span className="hidden sm:block absolute -left-32 top-1 w-24 text-right text-xs font-bold font-heading text-[#2563EB]">
                  {ms.year}
                </span>

                {/* Mobile Year Badge */}
                <span className="sm:hidden inline-block px-2.5 py-0.5 rounded-full bg-blue-600/20 text-[#2563EB] text-[10px] font-bold mb-2">
                  {ms.year}
                </span>

                <div className="p-5 rounded-2xl glass-card border border-white/10 hover:border-blue-500/30 transition-colors">
                  <h4 className="text-base font-bold font-heading text-white dark:text-white light:text-slate-900">
                    {t(ms.title)}
                  </h4>
                  <p className="text-xs text-neutral-400 dark:text-neutral-400 light:text-slate-600 mt-2 leading-relaxed">
                    {t(ms.desc)}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
