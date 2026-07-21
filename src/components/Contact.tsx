import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/portfolioData';
import { 
  Send, 
  Mail, 
  MessageSquare, 
  Linkedin, 
  Github, 
  MapPin, 
  CheckCircle2, 
  Clock,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { lang } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset form fields
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.3em] text-[#2563EB] mb-3">
            <Send className="w-3.5 h-3.5" />
            <span>{lang === 'pt' ? 'VAMOS CONVERSAR' : 'GET IN TOUCH'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight uppercase">
            {lang === 'pt' ? 'INICIE UM PROJETO OU AGENDE UMA CONVERSA' : 'START A CONVERSATION OR HIRE ME'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/60 font-light">
            {lang === 'pt'
              ? 'Estou disponível para contratação em tempo integral, consultorias e projetos por contrato.'
              : 'Available for full-time remote contracts, architectural consulting, and high-impact digital design.'}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info Cards & Quick Links */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-6 rounded-2xl glass-card border border-white/10 hover:border-[#2563EB] transition-all flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-[#2563EB] flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div className="overflow-hidden">
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">Email Direct</span>
                <p className="font-heading font-bold text-base text-white group-hover:text-[#2563EB] transition-colors truncate">
                  {personalInfo.email}
                </p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-neutral-500 ml-auto group-hover:text-[#2563EB] transition-colors" />
            </a>

            {/* WhatsApp Card */}
            <a
              href="https://wa.me/5511999998888"
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-2xl glass-card border border-white/10 hover:border-emerald-500 transition-all flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">WhatsApp Business</span>
                <p className="font-heading font-bold text-base text-white group-hover:text-emerald-400 transition-colors">
                  {personalInfo.whatsapp}
                </p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-neutral-500 ml-auto group-hover:text-emerald-400 transition-colors" />
            </a>

            {/* Location & Timezone Card */}
            <div className="p-6 rounded-2xl glass-card border border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">
                  {lang === 'pt' ? 'Localização & Fuso' : 'Location & Timezone'}
                </span>
                <p className="font-heading font-bold text-sm text-white">
                  {personalInfo.location}
                </p>
                <p className="text-xs text-emerald-400 mt-0.5 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{lang === 'pt' ? 'Sincronizado com Europa (CET/BST)' : 'EU Timezone Sync Ready'}</span>
                </p>
              </div>
            </div>

            {/* Social Quick Links */}
            <div className="p-6 rounded-2xl glass-card border border-white/10 flex items-center justify-between">
              <span className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                {lang === 'pt' ? 'Redes Profissionais:' : 'Social Channels:'}
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-neutral-900 border border-white/10 text-neutral-300 hover:text-[#2563EB] hover:border-[#2563EB] transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white hover:border-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Modern Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl glass-card border border-white/10 relative shadow-2xl">
              
              <h3 className="font-heading font-bold text-xl text-white dark:text-white light:text-slate-900 mb-6">
                {lang === 'pt' ? 'Envie uma mensagem direta' : 'Send a Direct Message'}
              </h3>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-white">
                    {lang === 'pt' ? 'Mensagem enviada com sucesso!' : 'Message Sent Successfully!'}
                  </h4>
                  <p className="text-xs text-neutral-300 max-w-md mx-auto leading-relaxed">
                    {lang === 'pt'
                      ? 'Obrigado pelo contato. Responderei no seu e-mail em menos de 24 horas.'
                      : 'Thank you for reaching out. I will respond to your email within 24 hours.'}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold bg-neutral-800 text-white hover:bg-neutral-700 cursor-pointer"
                  >
                    {lang === 'pt' ? 'Enviar outra mensagem' : 'Send another message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">
                        {lang === 'pt' ? 'Seu Nome Completo' : 'Full Name'} *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="ex: Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs focus:border-[#2563EB] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">
                        {lang === 'pt' ? 'Seu E-mail Corporativo' : 'Corporate Email'} *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="sarah@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs focus:border-[#2563EB] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      {lang === 'pt' ? 'Assunto / Oportunidade' : 'Subject / Role Title'}
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder={lang === 'pt' ? 'ex: Proposta de Contratação Remote EU' : 'e.g. Senior Product Designer & Developer Role'}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs focus:border-[#2563EB] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      {lang === 'pt' ? 'Sua Mensagem' : 'Message details'} *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={lang === 'pt' ? 'Conte um pouco sobre a empresa, projeto ou oportunidade...' : 'Describe the role, project goals, or contract terms...'}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs focus:border-[#2563EB] focus:outline-none resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-xs font-bold bg-[#2563EB] hover:bg-blue-600 text-white shadow-xl shadow-blue-600/25 transition-all hover:scale-[1.01] active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className={`w-4 h-4 ${isSubmitting ? 'animate-bounce' : ''}`} />
                    <span>
                      {isSubmitting
                        ? (lang === 'pt' ? 'Enviando...' : 'Sending Message...')
                        : (lang === 'pt' ? 'Enviar Mensagem' : 'Send Message')}
                    </span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
