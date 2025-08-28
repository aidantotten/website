import React, { useRef, useEffect } from 'react';

const SocialsSection = () => {
  const titleRef = useRef(null);
  const social1Ref = useRef(null);
  const social2Ref = useRef(null);
  const social3Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (social1Ref.current) observer.observe(social1Ref.current);
    if (social2Ref.current) observer.observe(social2Ref.current);
    if (social3Ref.current) observer.observe(social3Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="socials" className="socials-section section">
      <div className="section-content">
        <h2 className="section-title" ref={titleRef}>Connect With Me</h2>
        <div className="socials-grid">
          <div className="social-card" ref={social1Ref}>
            <div className="social-icon">LinkedIn</div>
            <h3 className="social-name">LinkedIn</h3>
            <a href="https://linkedin.com/in/aidan-totten" target="_blank" rel="noopener noreferrer" className="social-link">linkedin.com/in/aidan-totten</a>
          </div>

          <div className="social-card" ref={social2Ref}>
            <div className="social-icon">Email</div>
            <h3 className="social-name">Email</h3>
            <a href="mailto:aidanvt64@gmail.com" className="social-link">aidanvt64@gmail.com</a>
          </div>

          <div className="social-card" ref={social3Ref}>
            <div className="social-icon">Phone</div>
            <h3 className="social-name">Phone</h3>
            <a href="tel:703-472-8139" className="social-link">703-472-8139</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialsSection;
