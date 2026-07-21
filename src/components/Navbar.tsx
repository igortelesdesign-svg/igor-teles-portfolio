import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';
import { Globe, Sun, Moon, FileText, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenCVModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCVModal }) => {
  const { lang, toggleLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check section position
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'services', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: { pt: 'Sobre', en: 'About' } },
    { id: 'skills', label: { pt: 'Habilidades', en: 'Skills' } },
    { id: 'experience', label: { pt: 'Experiência', en: 'Experience' } },
    { id: 'projects', label: { pt: 'Projetos', en: 'Projects' } },
    { id: 'services', label: { pt: 'Serviços', en: 'Services' } },
    { id: 'contact', label: { pt: 'Contato', en: 'Contact' } },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#0F0F0F]/90 backdrop-blur-md border-b border-white/10 shadow-2xl'
          : 'py-5 bg-[#0F0F0F]/60 backdrop-blur-sm border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo / Name */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-4 group text-left cursor-pointer"
        >
          <div className="w-10 h-10 bg-[#2563EB] flex items-center justify-center font-bold text-xl text-white font-heading shrink-0 group-hover:scale-105 transition-transform duration-200">
            IT
          </div>
          <div className="flex flex-col">
            <span className="text-xs tracking-[0.3em] font-semibold uppercase text-white opacity-90 group-hover:text-[#2563EB] transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-white/50">
              Portfolio 2024 / MS
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-[10px] uppercase tracking-widest font-semibold text-white/70">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`transition-all cursor-pointer hover:text-[#2563EB] hover:opacity-100 ${
                  isActive
                    ? 'text-[#2563EB] opacity-100 font-bold border-b border-[#2563EB] pb-0.5'
                    : 'opacity-70'
                }`}
              >
                {t(link.label)}
              </button>
            );
          })}
        </nav>

        {/* Action Controls (Lang, Theme, CV Button) */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex gap-1 text-[10px] uppercase font-bold border border-white/20 p-1">
            <button
              onClick={toggleLang}
              className={`px-2 py-0.5 transition-colors cursor-pointer ${
                lang === 'pt' ? 'bg-white text-black font-extrabold' : 'text-white opacity-50 hover:opacity-100'
              }`}
            >
              PT
            </button>
            <button
              onClick={toggleLang}
              className={`px-2 py-0.5 transition-colors cursor-pointer ${
                lang === 'en' ? 'bg-white text-black font-extrabold' : 'text-white opacity-50 hover:opacity-100'
              }`}
            >
              EN
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 border border-white/20 text-white/80 hover:text-[#2563EB] hover:border-white transition-colors cursor-pointer"
            title={theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}
          >
            {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-indigo-400" />}
          </button>

          {/* CV Button */}
          <button
            onClick={onOpenCVModal}
            className="bg-white text-black text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 hover:bg-[#2563EB] hover:text-white transition-colors flex items-center gap-2 cursor-pointer border border-white"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV / Resume</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleLang}
            className="px-2.5 py-1 rounded-full text-xs font-bold bg-neutral-800 text-[#2563EB] border border-white/10"
          >
            {lang.toUpperCase()}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-[#2563EB] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-white/10 mt-3 px-6 py-6 animate-in fade-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left py-2 text-sm font-medium text-neutral-200 hover:text-[#2563EB] transition-colors"
              >
                {t(link.label)}
              </button>
            ))}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 text-xs text-neutral-300"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
                <span>{theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCVModal();
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-[#2563EB] text-white"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Currículo PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
