import React, { useRef, useEffect } from 'react';

const SummarySection = () => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);

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
    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="summary" className="summary-section section">
      <div className="section-content">
        <h2 className="section-title" ref={titleRef}>About Me</h2>
        <div className="summary-content" ref={contentRef}>
          <p className="summary-text">
            I am a driven professional who earned a Bachelor of Science in Information Systems with a minor in Computer Science from Virginia Commonwealth University. My journey in technology was shaped by a desire to solve complex business problems through innovative solutions and data-driven insights.
          </p>
          <br />
          <p className="summary-text">
            My experience spans business systems analysis, full-stack development, and data analytics. I've had the privilege of working with cutting-edge technologies like AWS cloud services, React development, and AI-powered solutions. My role as a Business Systems Analyst at CapTech Ventures allowed me to lead cross-functional teams and develop comprehensive solutions that directly impacted business outcomes.
          </p>
          <br />
          <p className="summary-text">
            Beyond technical skills, I bring strong leadership experience from serving as President of VCU Men's Club Ultimate Frisbee, where I managed team operations, finances, and communications. I'm passionate about continuous learning, currently developing the Drobe fashion discovery app, and always seeking new challenges that push my technical and analytical capabilities forward.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SummarySection;
