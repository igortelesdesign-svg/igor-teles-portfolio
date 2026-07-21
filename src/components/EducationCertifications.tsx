import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { educationData, certificationsData } from '../data/portfolioData';
import { Course, Certification } from '../types/portfolio';
import { AddCourseModal } from './AddCourseModal';
import { 
  GraduationCap, 
  Award, 
  Plus, 
  CheckCircle2, 
  Clock, 
  ExternalLink,
  BookOpen
} from 'lucide-react';

export const EducationCertifications: React.FC = () => {
  const { lang, t } = useLanguage();
  const [courses, setCourses] = useState<Course[]>(educationData);
  const [certifications, setCertifications] = useState<Certification[]>(certificationsData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCourse = (newCourse: Course) => {
    setCourses([newCourse, ...courses]);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-neutral-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card text-xs font-bold text-[#2563EB] mb-3 border border-blue-500/20">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{lang === 'pt' ? 'Formação & Certificados' : 'Education & Certifications'}</span>
            </div>
            <h2 className="text-3xl font-extrabold font-heading text-white dark:text-white light:text-slate-900">
              {lang === 'pt' ? 'Aprendizado Contínuo & Qualificações' : 'Continuous Learning & Credentials'}
            </h2>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#2563EB] hover:bg-blue-600 text-white shadow-lg shadow-blue-600/20 transition-all hover:scale-105 cursor-pointer self-start md:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>{lang === 'pt' ? 'Adicionar Novo Curso' : 'Add New Course'}</span>
          </button>
        </div>

        {/* Top Grid: Formação (Education Cards) */}
        <div className="mb-16">
          <h3 className="text-xl font-bold font-heading text-white dark:text-white light:text-slate-900 mb-6 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#2563EB]" />
            <span>{lang === 'pt' ? 'Formação Acadêmica e Cursos' : 'Academic & Professional Courses'}</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="p-6 rounded-2xl glass-card border border-white/10 hover:border-blue-500/30 transition-all group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold text-[#2563EB] block mb-1">
                      {course.institution} • {course.year}
                    </span>
                    <h4 className="text-base font-bold font-heading text-white dark:text-white light:text-slate-900 group-hover:text-[#2563EB] transition-colors">
                      {t(course.title)}
                    </h4>
                  </div>

                  {/* Status Badge */}
                  {course.status === 'in_progress' ? (
                    <span className="shrink-0 px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 text-[10px] font-bold flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{lang === 'pt' ? 'Em andamento' : 'In Progress'}</span>
                    </span>
                  ) : (
                    <span className="shrink-0 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{lang === 'pt' ? 'Concluído' : 'Completed'}</span>
                    </span>
                  )}
                </div>

                {course.hours && (
                  <p className="mt-4 text-xs text-neutral-400 font-mono">
                    {lang === 'pt' ? `Carga horária: ${course.hours}` : `Duration: ${course.hours}`}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Certificações */}
        <div>
          <h3 className="text-xl font-bold font-heading text-white dark:text-white light:text-slate-900 mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span>{lang === 'pt' ? 'Certificações Internacionais' : 'Certifications & Accreditations'}</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="rounded-2xl glass-card border border-white/10 overflow-hidden hover:border-amber-500/30 transition-all group flex flex-col justify-between"
              >
                <div>
                  {cert.imageUrl && (
                    <div className="h-40 overflow-hidden relative">
                      <img
                        src={cert.imageUrl}
                        alt={t(cert.title)}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
                    </div>
                  )}

                  <div className="p-5">
                    <p className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-1">
                      {cert.institution} • {cert.year} ({cert.hours})
                    </p>
                    <h4 className="font-heading font-bold text-sm text-white dark:text-white light:text-slate-900 leading-snug">
                      {t(cert.title)}
                    </h4>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <a
                    href={cert.credentialUrl || '#'}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:text-blue-400 transition-colors"
                  >
                    <span>{lang === 'pt' ? 'Ver Certificado' : 'View Credential'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Add Course Modal */}
      <AddCourseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddCourse={handleAddCourse}
      />
    </section>
  );
};
