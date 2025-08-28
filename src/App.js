import React from 'react';
import './App.css';
import LoadingSpinner from './components/LoadingSpinner';
import ParticleBackground from './components/ParticleBackground';
import Navigation from './components/Navigation';
import IntroSection from './components/IntroSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
import SummarySection from './components/SummarySection';
import SkillsSection from './components/SkillsSection';
import SocialsSection from './components/SocialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <LoadingSpinner />
      <ParticleBackground />
      <Navigation />
      <IntroSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <SummarySection />
      <SkillsSection />
      <SocialsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;