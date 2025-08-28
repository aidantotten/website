import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Update active section based on scroll position
      const sections = ['intro', 'experience', 'education', 'projects', 'summary', 'skills', 'socials', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className="nav-logo" onClick={() => scrollToSection('intro')}>
          AT
        </div>
        <div className="nav-links">
          <button 
            className={`nav-link ${activeSection === 'intro' ? 'active' : ''}`}
            onClick={() => scrollToSection('intro')}
          >
            Home
          </button>
          <button 
            className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
            onClick={() => scrollToSection('experience')}
          >
            Experience
          </button>
          <button 
            className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}
            onClick={() => scrollToSection('education')}
          >
            Education
          </button>
          <button 
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </button>
          <button 
            className={`nav-link ${activeSection === 'summary' ? 'active' : ''}`}
            onClick={() => scrollToSection('summary')}
          >
            About
          </button>
          <button 
            className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => scrollToSection('skills')}
          >
            Skills
          </button>
          <button 
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
