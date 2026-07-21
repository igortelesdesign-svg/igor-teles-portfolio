import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin, Mail, FileText, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenCVModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCVModal }) => {
  const { lang, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-white/10 pt-16 pb-12 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#2563EB] flex items-center justify-center text-white font-bold text-sm font-heading">
                IT
              </div>
              <span className="font-heading font-bold text-lg text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-neutral-400 max-w-sm leading-relaxed">
              {personalInfo.title} • {t(personalInfo.shortRole)}
            </p>
            <div className="inline-flex items-center gap-1.5 text-emerald-400 font-medium bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Remote Roles in Europe / Global</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-xs">
              {lang === 'pt' ? 'Navegação Rápida' : 'Quick Navigation'}
            </h4>
            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-[#2563EB] transition-colors cursor-pointer">
                {lang === 'pt' ? 'Sobre Mim' : 'About Me'}
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-left hover:text-[#2563EB] transition-colors cursor-pointer">
                {lang === 'pt' ? 'Competências' : 'Skills Matrix'}
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-left hover:text-[#2563EB] transition-colors cursor-pointer">
                {lang === 'pt' ? 'Experiência' : 'Experience'}
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-left hover:text-[#2563EB] transition-colors cursor-pointer">
                {lang === 'pt' ? 'Projetos' : 'Case Studies'}
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left hover:text-[#2563EB] transition-colors cursor-pointer">
                {lang === 'pt' ? 'Serviços' : 'Services'}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-[#2563EB] transition-colors cursor-pointer">
                {lang === 'pt' ? 'Contato' : 'Contact'}
              </button>
            </div>
          </div>

          {/* Social & Download */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-xs">
              {lang === 'pt' ? 'Documentos e Redes' : 'Resources & Social'}
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white hover:border-white transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-neutral-900 border border-white/10 text-neutral-300 hover:text-[#2563EB] hover:border-[#2563EB] transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-neutral-900 border border-white/10 text-neutral-300 hover:text-[#2563EB] hover:border-[#2563EB] transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={onOpenCVModal}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2563EB] text-white font-bold hover:bg-blue-600 transition-colors cursor-pointer text-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download CV (PT/EN)</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-center sm:text-left">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved. Built with React 19, TypeScript & Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
