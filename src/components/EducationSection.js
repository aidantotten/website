import React, { useRef, useEffect } from 'react';

const EducationSection = () => {
  const titleRef = useRef(null);
  const cardRef = useRef(null);

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
    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="education-section section">
      <div className="section-content">
        <h2 className="section-title" ref={titleRef}>Education</h2>
        <div className="education-card" ref={cardRef}>
          <h3 className="university-name">Virginia Commonwealth University (VCU)</h3>
          <p className="degree-info">Bachelor of Science: Information Systems</p>
          <p className="degree-info">Minor: Computer Science</p>
          <p className="graduation-year">Graduated: May 2025</p>
          <p className="location">Richmond, VA</p>
          <div className="coursework">
            <h4>Relevant Coursework:</h4>
            <p>AI for Business Intelligence, AI Services for Business, Infrastructure Services, Advanced Networking, Database Systems, Systems Analysis & Design, Object Oriented Programming, Data Analysis, Computational Methods, Discrete Structures, Database Organization & Design</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
