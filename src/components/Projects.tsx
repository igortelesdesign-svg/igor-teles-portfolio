import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Eye, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const Projects: React.FC = () => {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs: { id: ProjectCategory; label: { pt: string; en: string } }[] = [
    { id: 'all', label: { pt: 'Todos os Projetos', en: 'All Projects' } },
    { id: 'branding', label: { pt: 'Branding', en: 'Branding' } },
    { id: 'marketing', label: { pt: 'Marketing', en: 'Marketing' } },
    { id: 'design', label: { pt: 'Design', en: 'Design' } },
    { id: 'websites', label: { pt: 'Websites', en: 'Websites' } },
    { id: 'ui', label: { pt: 'UI Design', en: 'UI Design' } },
    { id: 'applications', label: { pt: 'Aplicações', en: 'Apps' } },
    { id: 'fullstack', label: { pt: 'Full Stack', en: 'Full Stack' } },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.category.includes(activeCategory));

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.3em] text-[#2563EB] mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{lang === 'pt' ? 'PORTFÓLIO DE PROJETOS' : 'FEATURED CASE STUDIES'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight uppercase">
            {lang === 'pt' ? 'PROJETOS EM DESTAQUE & ESTUDOS DE CASO' : 'CASE STUDIES & PRODUCTION WORK'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/60 font-light">
            {lang === 'pt'
              ? 'Trabalhos que unem estratégia de marca, design de produto e arquitetura de software para clientes de alto padrão.'
              : 'End-to-end applications bridging brand identity, UI/UX systems, and production software engineering.'}
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-[#2563EB] text-white border-[#2563EB]'
                      : 'bg-white/5 border-white/10 text-neutral-300 hover:border-white'
                  }`}
                >
                  {t(tab.label)}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl glass-card border border-white/10 overflow-hidden hover:border-[#2563EB]/50 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                {/* Large Preview Image */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#2563EB] text-white text-[10px] font-bold uppercase tracking-wider shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Destaque</span>
                    </div>
                  )}

                  {/* Quick Eye Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="absolute top-4 right-4 p-2.5 rounded-full glass-panel border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#2563EB] cursor-pointer"
                    title="Ver detalhes"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[11px] font-bold text-[#2563EB] mb-1">
                    <span>{project.client}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-white dark:text-white light:text-slate-900 group-hover:text-[#2563EB] transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs text-neutral-300 dark:text-neutral-300 light:text-slate-700 leading-relaxed line-clamp-3">
                    {t(project.shortDescription)}
                  </p>

                  {/* Technologies tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-neutral-900 border border-white/10 text-[11px] font-medium text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Buttons */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-white/10 mt-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-2 text-xs font-bold text-white hover:text-[#2563EB] transition-colors cursor-pointer"
                >
                  <span>{lang === 'pt' ? 'Ver Estudo de Caso' : 'View Case Study'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg glass-card hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
                      title="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-[#2563EB] hover:bg-blue-600 text-white shadow-md transition-colors"
                      title="Ver Projeto Online"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
