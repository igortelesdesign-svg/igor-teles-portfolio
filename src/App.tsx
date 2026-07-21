import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Competencies } from './components/Competencies';
import { EducationCertifications } from './components/EducationCertifications';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { GitHubIntegration } from './components/GitHubIntegration';
import { Services } from './components/Services';
import { WorkProcess } from './components/WorkProcess';
import { TechStackGrid } from './components/TechStackGrid';
import { Statistics } from './components/Statistics';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { FAQ } from './components/FAQ';
import { AvailabilityBanner } from './components/AvailabilityBanner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { CVModal } from './components/CVModal';

export default function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-[#0F0F0F] text-white dark:bg-[#0F0F0F] dark:text-white light:bg-[#F8FAFC] light:text-[#0F172A] selection:bg-[#2563EB] selection:text-white relative">
          
          {/* Custom Interactive Follower Cursor */}
          <CustomCursor />

          {/* Fixed Glassmorphic Navigation Bar */}
          <Navbar onOpenCVModal={() => setIsCVModalOpen(true)} />

          {/* Main Sections Tree */}
          <main>
            <Hero onOpenCVModal={() => setIsCVModalOpen(true)} />
            <Statistics />
            <About />
            <Competencies />
            <Experience />
            <EducationCertifications />
            <Projects />
            <GitHubIntegration />
            <Services />
            <WorkProcess />
            <TechStackGrid />
            <Testimonials />
            <Blog />
            <FAQ />
            <AvailabilityBanner />
            <Contact />
          </main>

          {/* Footer */}
          <Footer onOpenCVModal={() => setIsCVModalOpen(true)} />

          {/* Curriculum Vitae Modal */}
          <CVModal
            isOpen={isCVModalOpen}
            onClose={() => setIsCVModalOpen(false)}
          />

        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
