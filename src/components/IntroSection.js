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
    window.open('/Aidan_Totten_Resume.pdf', '_blank');
  };

  const handleGetInTouch = () => {
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
        
        <div className="intro-description" ref={descriptionRef}>
          <p>
            I am a driven professional who earned a Bachelor of Science in Information Systems with a minor in Computer Science from Virginia Commonwealth University. My journey in technology was shaped by a desire to solve complex business problems through innovative solutions and data-driven insights.
          </p>
          
          <p>
            My experience spans business systems analysis, full-stack development, and data analytics. I've had the privilege of working with cutting-edge technologies like AWS cloud services, React development, and AI-powered solutions.
          </p>
          
          <p>
            Beyond technical skills, I bring strong leadership experience from serving as President of VCU Men's Club Ultimate Frisbee, where I managed team operations, finances, and communications. I'm passionate about continuous learning, currently developing the Drobe fashion discovery app, and always seeking new challenges that push my technical and analytical capabilities forward.
          </p>
        </div>
        
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
