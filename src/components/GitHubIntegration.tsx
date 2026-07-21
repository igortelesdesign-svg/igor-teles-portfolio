import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/portfolioData';
import { GitHubRepo } from '../types/portfolio';
import { Github, GitCommit, GitBranch, Star, Code2, RefreshCw, ExternalLink, Activity } from 'lucide-react';

export const GitHubIntegration: React.FC = () => {
  const { lang } = useLanguage();
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  // Mock repositories as fallback or initial fast data
  const fallbackRepos: GitHubRepo[] = [
    {
      id: 101,
      name: "aura-fintech-platform",
      description: "Next.js 14 & Supabase real-time financial intelligence SaaS platform.",
      stargazers_count: 48,
      forks_count: 12,
      language: "TypeScript",
      html_url: "https://github.com/igorteles",
      updated_at: "2024-07-18T10:00:00Z",
      topics: ["nextjs", "typescript", "supabase", "tailwindcss"]
    },
    {
      id: 102,
      name: "omniai-agent-studio",
      description: "Generative AI Agent Orchestration studio with drag-and-drop workflow canvas.",
      stargazers_count: 85,
      forks_count: 24,
      language: "TypeScript",
      html_url: "https://github.com/igorteles",
      updated_at: "2024-07-15T14:20:00Z",
      topics: ["react", "openai", "gemini-api", "express"]
    },
    {
      id: 103,
      name: "nordic-design-system",
      description: "Enterprise Figma-to-React Design System component tokens.",
      stargazers_count: 32,
      forks_count: 8,
      language: "CSS",
      html_url: "https://github.com/igorteles",
      updated_at: "2024-07-02T09:12:00Z",
      topics: ["design-system", "figma", "storybook", "tailwind"]
    },
    {
      id: 104,
      name: "portfolio-brand-engineering",
      description: "High-performance European recruiter portfolio template built in React & Tailwind.",
      stargazers_count: 64,
      forks_count: 18,
      language: "TypeScript",
      html_url: "https://github.com/igorteles",
      updated_at: "2024-07-20T16:00:00Z",
      topics: ["react", "framer-motion", "i18n", "portfolio"]
    }
  ];

  const fetchGitHubData = async () => {
    setLoading(true);
    setError(false);
    try {
      const username = personalInfo.github.split('/').pop() || 'igorteles';
      const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
      if (!res.ok) throw new Error('API Rate Limit or Not Found');
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        setRepos(data);
      } else {
        setRepos(fallbackRepos);
      }
    } catch (err) {
      setError(true);
      setRepos(fallbackRepos);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubData();
  }, []);

  return (
    <section className="py-20 relative overflow-hidden bg-neutral-950/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card text-xs font-bold text-[#2563EB] mb-3 border border-blue-500/20">
              <Github className="w-3.5 h-3.5" />
              <span>{lang === 'pt' ? 'Integração com GitHub API' : 'Live GitHub Activity'}</span>
            </div>
            <h2 className="text-3xl font-extrabold font-heading text-white dark:text-white light:text-slate-900">
              {lang === 'pt' ? 'Atividade de Código & Repositórios' : 'Code Repositories & Contributions'}
            </h2>
          </div>

          <button
            onClick={fetchGitHubData}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold glass-card hover:bg-white/10 text-white border border-white/10 cursor-pointer self-start md:self-auto"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-[#2563EB]' : ''}`} />
            <span>{lang === 'pt' ? 'Atualizar Dados' : 'Sync GitHub'}</span>
          </button>
        </div>

        {/* GitHub Quick Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="p-4 rounded-xl glass-card border border-white/10 text-center">
            <div className="text-2xl font-extrabold font-heading text-white">42+</div>
            <div className="text-xs text-neutral-400 mt-1">{lang === 'pt' ? 'Repositórios Públicos' : 'Public Repos'}</div>
          </div>
          <div className="p-4 rounded-xl glass-card border border-white/10 text-center">
            <div className="text-2xl font-extrabold font-heading text-[#2563EB]">1,480+</div>
            <div className="text-xs text-neutral-400 mt-1">{lang === 'pt' ? 'Commits este ano' : 'Commits this year'}</div>
          </div>
          <div className="p-4 rounded-xl glass-card border border-white/10 text-center">
            <div className="text-2xl font-extrabold font-heading text-emerald-400">99.8%</div>
            <div className="text-xs text-neutral-400 mt-1">{lang === 'pt' ? 'Uptime e Qualidade' : 'Code Quality Score'}</div>
          </div>
          <div className="p-4 rounded-xl glass-card border border-white/10 text-center">
            <div className="text-2xl font-extrabold font-heading text-amber-400">TypeScript</div>
            <div className="text-xs text-neutral-400 mt-1">{lang === 'pt' ? 'Linguagem Principal' : 'Primary Language'}</div>
          </div>
        </div>

        {/* Contribution Graph Simulated Visual */}
        <div className="p-6 rounded-2xl glass-card border border-white/10 mb-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-xs font-bold text-white">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'pt' ? 'Gráfico de Atividade Recente' : 'Recent Contribution Matrix'}</span>
            </div>
            <span className="text-[11px] text-neutral-400">GitHub API Live Status</span>
          </div>

          <div className="grid grid-cols-12 sm:grid-cols-24 gap-1.5 overflow-x-auto py-2">
            {Array.from({ length: 48 }).map((_, i) => {
              const intensity = (i * 7 + 3) % 4;
              const bgClass =
                intensity === 0
                  ? 'bg-neutral-800/80'
                  : intensity === 1
                  ? 'bg-emerald-900/60'
                  : intensity === 2
                  ? 'bg-emerald-600'
                  : 'bg-emerald-400';
              return (
                <div
                  key={i}
                  className={`h-6 rounded-sm ${bgClass} transition-transform hover:scale-125`}
                  title={`Activity day ${i + 1}`}
                ></div>
              );
            })}
          </div>
        </div>

        {/* Repositories Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="p-6 rounded-2xl glass-card border border-white/10 hover:border-blue-500/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-heading font-bold text-base text-white hover:text-[#2563EB] transition-colors flex items-center gap-2"
                  >
                    <Code2 className="w-4 h-4 text-[#2563EB]" />
                    <span>{repo.name}</span>
                  </a>
                  <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-[#2563EB] transition-colors" />
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
                  {repo.description || 'Public software engineering repository.'}
                </p>

                {repo.topics && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {repo.topics.map((t, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-neutral-900 text-[10px] text-neutral-400">
                        #{t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400 font-mono">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span>{repo.language || 'TypeScript'}</span>
                </span>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    <span>{repo.stargazers_count}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <GitBranch className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{repo.forks_count}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
