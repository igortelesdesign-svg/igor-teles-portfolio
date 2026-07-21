import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo, floatingTags } from '../data/portfolioData';
import { 
  FileText, 
  FolderGit2, 
  Send, 
  Github, 
  Linkedin, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Code2,
  Palette,
  Bot
} from 'lucide-react';

interface HeroProps {
  onOpenCVModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCVModal }) => {
  const { lang, t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[#0F0F0F]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            
            <div className="space-y-4">
              {/* Eyebrow badge */}
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0"></span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 font-bold">
                  {lang === 'pt' ? 'PORTFÓLIO PROFISSIONAL REMOTO' : 'REMOTE PROFESSIONAL PORTFOLIO'}
                </span>
              </div>

              {/* Massive Editorial Headline */}
              <h1 className="text-5xl sm:text-7xl lg:text-[80px] leading-[0.88] font-black tracking-tighter uppercase italic text-white font-heading">
                BRAND &<br />
                <span className="text-[#2563EB] not-italic">FULLSTACK</span><br />
                EXPERT
              </h1>
            </div>

            {/* Subheadline & Bio */}
            <p className="text-base sm:text-lg text-white/70 max-w-lg font-light leading-relaxed">
              {t(personalInfo.bioSummary)}
            </p>

            {/* Recruiter Pitch Box in Editorial Style */}
            <div className="p-4 bg-white/5 border border-white/10 border-l-2 border-l-[#2563EB] text-xs text-white/80 leading-relaxed max-w-xl">
              <span className="font-bold text-white block mb-1 uppercase tracking-wider text-[10px]">
                🇪🇺 {lang === 'pt' ? 'Aos Recrutadores Europeus:' : 'To European Recruiters:'}
              </span>
              {t(personalInfo.europePitch)}
            </div>

            {/* Action Buttons in Editorial Aesthetic */}
            <div className="flex flex-wrap gap-4 items-center pt-2">
              <button
                onClick={onOpenCVModal}
                className="bg-white text-black text-xs font-bold uppercase tracking-widest px-8 py-4 hover:bg-[#2563EB] hover:text-white transition-colors flex items-center gap-3 cursor-pointer"
              >
                <span>{lang === 'pt' ? 'DOWNLOAD CV' : 'DOWNLOAD CV'}</span>
                <FileText className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('projects')}
                className="text-xs font-bold uppercase tracking-widest px-8 py-4 border border-white/20 hover:border-white transition-colors text-white cursor-pointer flex items-center gap-2"
              >
                <span>{lang === 'pt' ? 'VER PROJETOS' : 'VIEW PROJECTS'}</span>
                <FolderGit2 className="w-4 h-4 text-[#2563EB]" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="text-xs font-bold uppercase tracking-widest px-6 py-4 border border-white/10 hover:border-[#2563EB] hover:text-[#2563EB] transition-colors text-white/80 cursor-pointer flex items-center gap-2"
              >
                <span>{lang === 'pt' ? 'CONTATO' : 'CONTACT'}</span>
                <Send className="w-3.5 h-3.5 text-emerald-400" />
              </button>
            </div>

            {/* Bottom 3-column taglines */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 opacity-50 text-[9px] uppercase tracking-[0.2em] text-white">
              <div>Strategy first.</div>
              <div>Design centered.</div>
              <div>Code optimized.</div>
            </div>

          </div>

          {/* Right Column: Editorial Photo Frame & Metrics */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
            <div className="w-full max-w-md">
              <div className="relative group">
                {/* Glow behind frame */}
                <div className="absolute -inset-1 bg-[#2563EB] opacity-25 blur-xl group-hover:opacity-40 transition-opacity"></div>
                
                {/* Photo aspect ratio container */}
                <div className="w-full aspect-[4/5] bg-[#1C1C1C] border border-white/10 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img
                    src={personalInfo.heroPortrait}
                    alt={personalInfo.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                  
                  {/* Floating status badges */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    <span className="bg-black/80 text-[8px] uppercase tracking-tighter px-2.5 py-1 border border-white/20 text-white font-mono">
                      Available for Remote
                    </span>
                    <span className="bg-[#2563EB] text-[8px] uppercase tracking-tighter px-2.5 py-1 text-white font-bold font-mono">
                      EU Verified
                    </span>
                  </div>
                </div>
              </div>

              {/* Stack skills pills below portrait */}
              <div className="flex flex-wrap gap-2 pt-6">
                {floatingTags.slice(0, 6).map((tag, idx) => (
                  <span key={idx} className="text-[9px] uppercase tracking-wider px-2.5 py-1 border border-white/10 bg-white/5 text-neutral-300 font-mono">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stats grid below portrait */}
              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 mt-6">
                <div className="flex flex-col">
                  <span className="text-[#2563EB] font-bold text-3xl font-heading">+15</span>
                  <span className="text-[9px] uppercase tracking-widest opacity-50 font-bold">Years Exp.</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#2563EB] font-bold text-3xl font-heading">120+</span>
                  <span className="text-[9px] uppercase tracking-widest opacity-50 font-bold">Projects Delivered</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
