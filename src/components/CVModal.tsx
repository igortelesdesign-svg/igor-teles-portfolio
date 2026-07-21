import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo, experienceData, educationData, skillsData } from '../data/portfolioData';
import { X, Download, FileText, Globe, Check, Printer } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const { lang, t } = useLanguage();
  const [cvLang, setCvLang] = useState<'pt' | 'en'>(lang);
  const [downloading, setDownloading] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleSimulateDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      // Trigger a styled text file / HTML blob print download
      const element = document.createElement("a");
      const file = new Blob([
        `CURRICULUM VITAE - ${personalInfo.name}\nTitle: ${personalInfo.title}\nEmail: ${personalInfo.email}\nGitHub: ${personalInfo.github}\nLinkedIn: ${personalInfo.linkedin}\n\nSUMMARY:\n${personalInfo.bioSummary[cvLang]}\n\nEXPERIENCE:\n` +
        experienceData.map(e => `${e.company} - ${e.role[cvLang]} (${e.period})\nSummary: ${e.summary[cvLang]}\nStack: ${e.technologies.join(', ')}\n`).join('\n')
      ], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = `CV_${personalInfo.name.replace(' ', '_')}_${cvLang.toUpperCase()}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel rounded-2xl border border-white/20 p-6 sm:p-8 shadow-2xl">
        
        {/* Top Actions Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2563EB] flex items-center justify-center text-white">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-white">
                {personalInfo.name} — Curriculum Vitae
              </h3>
              <p className="text-xs text-neutral-400">PDF Preview & Download</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Toggle for CV */}
            <div className="flex items-center bg-neutral-900 rounded-full p-1 border border-white/10">
              <button
                onClick={() => setCvLang('pt')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  cvLang === 'pt' ? 'bg-[#2563EB] text-white' : 'text-neutral-400 hover:text-white'
                }`}
              >
                PT
              </button>
              <button
                onClick={() => setCvLang('en')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  cvLang === 'en' ? 'bg-[#2563EB] text-white' : 'text-neutral-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={handlePrint}
              className="p-2 rounded-xl glass-card hover:bg-white/10 text-neutral-300 hover:text-white cursor-pointer"
              title="Print CV"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={handleSimulateDownload}
              disabled={downloading}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#2563EB] hover:bg-blue-600 text-white shadow-lg cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{downloading ? 'Gerando...' : 'Download PDF / TXT'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Paper Document Container */}
        <div id="cv-printable-area" className="bg-white text-slate-900 rounded-2xl p-8 sm:p-10 shadow-xl space-y-6 text-left">
          
          {/* Header */}
          <div className="border-b border-slate-200 pb-6 flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-base font-bold text-blue-600 font-heading mt-1">
                {personalInfo.title}
              </p>
              <p className="text-xs text-slate-600 mt-1">
                {personalInfo.location}
              </p>
            </div>

            <div className="text-xs text-slate-600 space-y-1">
              <p><span className="font-bold">Email:</span> {personalInfo.email}</p>
              <p><span className="font-bold">LinkedIn:</span> linkedin.com/in/igorteles</p>
              <p><span className="font-bold">GitHub:</span> github.com/igorteles</p>
            </div>
          </div>

          {/* Bio Executive Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 border-b border-slate-200 pb-1 mb-2">
              {cvLang === 'pt' ? 'Resumo Profissional' : 'Executive Summary'}
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              {personalInfo.bioSummary[cvLang]}
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 border-b border-slate-200 pb-1 mb-3">
              {cvLang === 'pt' ? 'Experiência Profissional' : 'Professional Experience'}
            </h2>
            <div className="space-y-4">
              {experienceData.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-sm text-slate-900">
                      {exp.company} — <span className="font-semibold text-blue-600">{exp.role[cvLang]}</span>
                    </h3>
                    <span className="text-[11px] font-mono text-slate-500">{exp.period}</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{exp.summary[cvLang]}</p>
                  <div className="mt-2 text-[11px] text-slate-500 font-medium">
                    <span className="font-bold">Tech Stack:</span> {exp.technologies.join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Credentials */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 border-b border-slate-200 pb-1 mb-3">
              {cvLang === 'pt' ? 'Formação & Educação' : 'Education & Credentials'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              {educationData.map((edu) => (
                <div key={edu.id} className="p-2 rounded bg-slate-50 border border-slate-200">
                  <p className="font-bold text-slate-900">{edu.title[cvLang]}</p>
                  <p className="text-[11px] text-slate-500">{edu.institution} ({edu.year})</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
