import React, { useRef, useEffect } from 'react';

const IntroSection = () => {
  const profileImageRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);

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

    if (profileImageRef.current) observer.observe(profileImageRef.current);
    if (nameRef.current) observer.observe(nameRef.current);
    if (titleRef.current) observer.observe(titleRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    if (buttonsRef.current) observer.observe(buttonsRef.current);

    return () => observer.disconnect();
  }, []);

  const handleViewResume = () => {
    // Open resume in a new tab
    window.open('/Aidan_Totten_Resume.pdf', '_blank');
  };

  const handleGetInTouch = () => {
    // Scroll to contact section
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="intro" className="intro-section section">
      <div className="intro-content">
        <div className="profile-image" ref={profileImageRef}>
          <img 
            src="/headshot.jpg" 
            alt="Aidan V. Totten - Business Systems Analyst & Software Developer" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', 
              borderRadius: '50%',
              border: '3px solid #ffd700'
            }}
          />
        </div>
        <h1 className="intro-name" ref={nameRef}>Aidan V. Totten</h1>
        <h2 className="intro-title" ref={titleRef}>Business Systems Analyst & Software Developer</h2>
        <p className="intro-description" ref={descriptionRef}>
          I turn complex problems into streamlined solutions across business systems, full-stack development, and data analytics. I recently earned a B.S. in Information Systems (CS minor) from Virginia Commonwealth University and work with AWS, React, Agile, and AI-driven automation to improve efficiency and decision-making.
        </p>
        <div className="intro-buttons" ref={buttonsRef}>
          <button className="intro-btn get-in-touch-btn" onClick={handleGetInTouch}>
            Get in Touch
          </button>
          <button className="intro-btn view-resume-btn" onClick={handleViewResume}>
            View Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
