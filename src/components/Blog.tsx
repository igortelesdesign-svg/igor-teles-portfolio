import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { articlesData } from '../data/portfolioData';
import { Article } from '../types/portfolio';
import { BookOpen, Search, Clock, ArrowRight, X, Sparkles } from 'lucide-react';

export const Blog: React.FC = () => {
  const { lang, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const filteredArticles = articlesData.filter(art => {
    const titleText = t(art.title).toLowerCase();
    const summaryText = t(art.summary).toLowerCase();
    const query = searchTerm.toLowerCase();
    return titleText.includes(query) || summaryText.includes(query);
  });

  return (
    <section className="py-24 relative overflow-hidden bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card text-xs font-bold text-[#2563EB] mb-3 border border-blue-500/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{lang === 'pt' ? 'Artigos & Insights' : 'Articles & Technical Insights'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white dark:text-white light:text-slate-900 tracking-tight">
            {lang === 'pt' ? 'Publicações e Artigos Técnicos' : 'Thought Leadership & Articles'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 dark:text-neutral-400 light:text-slate-600">
            {lang === 'pt'
              ? 'Reflexões sobre design de produtos, engenharia front-end e inteligência artificial aplicada.'
              : 'Deep dives on design systems, React software architecture, and AI-driven growth.'}
          </p>

          {/* Search Input */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={lang === 'pt' ? 'Buscar artigos por palavra-chave...' : 'Search articles by keyword...'}
              className="w-full pl-11 pr-4 py-2.5 rounded-full glass-card border border-white/10 text-xs text-white placeholder-neutral-500 focus:border-[#2563EB] focus:outline-none"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="rounded-2xl glass-card border border-white/10 overflow-hidden hover:border-[#2563EB]/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={t(article.title)}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-neutral-900/90 text-[10px] font-bold text-[#2563EB] border border-white/10">
                    {article.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-neutral-400 mb-2">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#2563EB]" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white dark:text-white light:text-slate-900 group-hover:text-[#2563EB] transition-colors leading-snug">
                    {t(article.title)}
                  </h3>

                  <p className="mt-2 text-xs text-neutral-400 dark:text-neutral-400 light:text-slate-600 leading-relaxed line-clamp-2">
                    {t(article.summary)}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <span>{lang === 'pt' ? 'Ler Artigo Completo' : 'Read Full Article'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto glass-panel rounded-2xl border border-white/20 p-6 sm:p-8">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full glass-card text-neutral-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="pr-10 mb-6">
              <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block mb-1">
                {selectedArticle.category} • {selectedArticle.date}
              </span>
              <h2 className="text-2xl font-extrabold font-heading text-white">
                {t(selectedArticle.title)}
              </h2>
            </div>

            <div className="rounded-xl overflow-hidden mb-6 max-h-72">
              <img
                src={selectedArticle.image}
                alt={t(selectedArticle.title)}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-sm text-neutral-300 space-y-4 leading-relaxed">
              <p>{t(selectedArticle.content)}</p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
              {selectedArticle.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-neutral-900 border border-white/10 text-xs text-neutral-300">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
