import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Course } from '../types/portfolio';
import { X, Plus, GraduationCap, CheckCircle2 } from 'lucide-react';

interface AddCourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCourse: (course: Course) => void;
}

export const AddCourseModal: React.FC<AddCourseModalProps> = ({
  isOpen,
  onClose,
  onAddCourse
}) => {
  const { lang } = useLanguage();
  const [titlePt, setTitlePt] = useState('');
  const [titleEn, setTitleEn] = useState('');
  const [institution, setInstitution] = useState('');
  const [year, setYear] = useState('2024');
  const [hours, setHours] = useState('80h');
  const [status, setStatus] = useState<'completed' | 'in_progress'>('completed');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!titlePt || !institution) return;

    const newCourse: Course = {
      id: `course-${Date.now()}`,
      title: {
        pt: titlePt,
        en: titleEn || titlePt
      },
      institution,
      year,
      hours,
      status,
      certificateUrl: '#'
    };

    onAddCourse(newCourse);
    onClose();
    // Reset
    setTitlePt('');
    setTitleEn('');
    setInstitution('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md glass-panel rounded-2xl p-6 border border-white/20 shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
          <div className="flex items-center gap-2 text-white">
            <GraduationCap className="w-5 h-5 text-[#2563EB]" />
            <h3 className="font-heading font-bold text-lg">
              {lang === 'pt' ? 'Adicionar Novo Curso / Certificação' : 'Add New Course / Certification'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-neutral-300 mb-1">
              {lang === 'pt' ? 'Nome do Curso (Português)' : 'Course Title (Portuguese)'} *
            </label>
            <input
              type="text"
              required
              value={titlePt}
              onChange={(e) => setTitlePt(e.target.value)}
              placeholder="ex: Especialização em System Architecture"
              className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs focus:border-[#2563EB] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-300 mb-1">
              {lang === 'pt' ? 'Nome do Curso (Inglês)' : 'Course Title (English)'}
            </label>
            <input
              type="text"
              value={titleEn}
              onChange={(e) => setTitleEn(e.target.value)}
              placeholder="e.g.: Software Architecture Specialization"
              className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs focus:border-[#2563EB] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-300 mb-1">
              {lang === 'pt' ? 'Instituição' : 'Institution'} *
            </label>
            <input
              type="text"
              required
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
              placeholder="ex: Stanford / Meta / Alura / Rocketseat"
              className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs focus:border-[#2563EB] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1">
                {lang === 'pt' ? 'Ano' : 'Year'}
              </label>
              <input
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="2024"
                className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs focus:border-[#2563EB] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1">
                {lang === 'pt' ? 'Carga Horária' : 'Hours'}
              </label>
              <input
                type="text"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                placeholder="120h"
                className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs focus:border-[#2563EB] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-300 mb-1">
              Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as any)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs focus:border-[#2563EB] focus:outline-none"
            >
              <option value="completed">{lang === 'pt' ? 'Concluído' : 'Completed'}</option>
              <option value="in_progress">{lang === 'pt' ? 'Em Andamento' : 'In Progress'}</option>
            </select>
          </div>

          <div className="pt-3 flex items-center justify-end gap-3 border-t border-white/10">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-neutral-400 hover:text-white cursor-pointer"
            >
              {lang === 'pt' ? 'Cancelar' : 'Cancel'}
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#2563EB] hover:bg-blue-600 text-white shadow-lg cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>{lang === 'pt' ? 'Salvar Curso' : 'Save Course'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
