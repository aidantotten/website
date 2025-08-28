import { useEffect, useState } from 'react';

const useScrollAnimation = () => {
  const [animatedElements, setAnimatedElements] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedElements(prev => new Set([...prev, entry.target]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements that need animation
    const elements = document.querySelectorAll('.section-title, .section-subtitle, .profile-image, .intro-name, .intro-title, .intro-description, .experience-card, .education-card, .project-card, .summary-content, .social-card, .contact-form');
    
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const isAnimated = (elementRef) => {
    return animatedElements.has(elementRef);
  };

  return { isAnimated };
};

export default useScrollAnimation;
