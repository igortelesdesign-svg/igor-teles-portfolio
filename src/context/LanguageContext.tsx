import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, TranslationText } from '../types/portfolio';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (text: TranslationText | string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default to Portuguese, auto-detect browser or saved preference
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_lang') as Language;
    if (saved === 'pt' || saved === 'en') return saved;
    return 'pt';
  });

  useEffect(() => {
    localStorage.setItem('portfolio_lang', lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en-US';
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  const t = (text: TranslationText | string): string => {
    if (typeof text === 'string') return text;
    if (!text) return '';
    return text[lang] || text.pt || text.en || '';
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
