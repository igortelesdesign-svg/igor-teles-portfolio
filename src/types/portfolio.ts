export type Language = 'pt' | 'en';

export interface TranslationText {
  pt: string;
  en: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  category: 'marketing' | 'design' | 'development';
  iconName?: string;
  description?: TranslationText;
}

export interface Course {
  id: string;
  title: TranslationText;
  institution: string;
  year: string;
  status: 'completed' | 'in_progress';
  hours?: string;
  certificateUrl?: string;
}

export interface Certification {
  id: string;
  title: TranslationText;
  institution: string;
  year: string;
  hours: string;
  imageUrl?: string;
  credentialUrl?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: TranslationText;
  period: string;
  location: string;
  summary: TranslationText;
  keyResults: TranslationText[];
  technologies: string[];
}

export type ProjectCategory = 
  | 'all'
  | 'branding'
  | 'marketing'
  | 'design'
  | 'websites'
  | 'ui'
  | 'applications'
  | 'fullstack';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory[];
  featured: boolean;
  image: string;
  shortDescription: TranslationText;
  fullDescription: TranslationText;
  problem: TranslationText;
  solution: TranslationText;
  results: TranslationText;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  client?: string;
  year: string;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: TranslationText;
  description: TranslationText;
  highlights: TranslationText[];
}

export interface WorkProcessStep {
  step: number;
  title: TranslationText;
  description: TranslationText;
  icon: string;
}

export interface TechIcon {
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'ai' | 'devops';
  icon: string;
  level?: string;
  isFuture?: boolean;
}

export interface Article {
  id: string;
  title: TranslationText;
  summary: TranslationText;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: TranslationText;
  tags: string[];
}

export interface FAQItem {
  id: string;
  question: TranslationText;
  answer: TranslationText;
  category: 'remote' | 'technical' | 'workflow' | 'contract';
}

export interface Testimonial {
  id: string;
  name: string;
  role: TranslationText;
  company: string;
  avatar: string;
  content: TranslationText;
  countryFlag?: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  html_url: string;
  updated_at: string;
  topics?: string[];
}
