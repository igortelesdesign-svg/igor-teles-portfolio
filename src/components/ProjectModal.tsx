import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Project } from '../types/portfolio';
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, Lightbulb, Trophy, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { lang, t } = useLanguage();

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel rounded-2xl border border-white/20 shadow-2xl p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full glass-card hover:bg-white/10 text-neutral-400 hover:text-white cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-12 mb-6">
          <div className="flex items-center gap-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-1">
            <span>{project.client || 'Featured Case Study'}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white dark:text-white light:text-slate-900">
            {project.title}
          </h2>
        </div>

        {/* Project Large Image */}
        <div className="rounded-2xl overflow-hidden border border-white/10 mb-8 max-h-96">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Deep Dive Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          
          {/* Left Column: Problem, Solution, Results */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Overview */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#2563EB]" />
                <span>{lang === 'pt' ? 'Visão Geral do Projeto' : 'Project Overview'}</span>
              </h3>
              <p className="text-sm text-neutral-300 dark:text-neutral-300 light:text-slate-700 leading-relaxed">
                {t(project.fullDescription)}
              </p>
            </div>

            {/* Problem */}
            <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20">
              <h4 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-1 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                <span>{lang === 'pt' ? 'O Desafio / Problema' : 'The Challenge'}</span>
              </h4>
              <p className="text-xs text-neutral-300 dark:text-neutral-300 light:text-slate-700 leading-relaxed">
                {t(project.problem)}
              </p>
            </div>

            {/* Solution */}
            <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/20">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1 flex items-center gap-2">
                <Lightbulb className="w-4 h-4" />
                <span>{lang === 'pt' ? 'A Solução Implementada' : 'The Solution'}</span>
              </h4>
              <p className="text-xs text-neutral-300 dark:text-neutral-300 light:text-slate-700 leading-relaxed">
                {t(project.solution)}
              </p>
            </div>

            {/* Results */}
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1 flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                <span>{lang === 'pt' ? 'Resultados & Métricas de Negócio' : 'Results & Impact'}</span>
              </h4>
              <p className="text-xs text-neutral-300 dark:text-neutral-300 light:text-slate-700 leading-relaxed">
                {t(project.results)}
              </p>
            </div>

          </div>

          {/* Right Column: Tech & Links */}
          <div className="space-y-6">
            <div className="p-5 rounded-2xl glass-card border border-white/10 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                {lang === 'pt' ? 'Tecnologias Utilizadas' : 'Technologies Used'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-white/10 text-white text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-xs font-bold bg-[#2563EB] hover:bg-blue-600 text-white shadow-lg cursor-pointer"
                  >
                    <span>{lang === 'pt' ? 'Ver Projeto Online' : 'View Live Demo'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-xs font-bold glass-card hover:bg-white/10 text-white border border-white/15 cursor-pointer"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Repository</span>
                  </a>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
