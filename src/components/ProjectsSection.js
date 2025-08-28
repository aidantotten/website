import React, { useRef, useEffect } from 'react';

const ProjectsSection = () => {
  const titleRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

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
    if (project1Ref.current) observer.observe(project1Ref.current);
    if (project2Ref.current) observer.observe(project2Ref.current);
    if (project3Ref.current) observer.observe(project3Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-section section">
      <div className="section-content">
        <h2 className="section-title" ref={titleRef}>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card" ref={project1Ref}>
            <h3 className="project-title">Full-Stack Airline Website</h3>
            <p className="project-description">
              Developed a comprehensive airline booking website using React frontend and AWS backend infrastructure. 
              Features include AI-powered chatbot (Amazon Bedrock + OpenSearch), user authentication with AWS Cognito 2FA, 
              and a relational database with 70,000+ records. Managed cross-functional team of 12 using Agile/Scrum methodologies.
            </p>
            <div className="project-tech">
              <span className="tech-tag">React</span>
              <span className="tech-tag">AWS</span>
              <span className="tech-tag">PostgreSQL</span>
              <span className="tech-tag">AI/ML</span>
            </div>
          </div>

          <div className="project-card" ref={project2Ref}>
            <h3 className="project-title">Power BI Analytics Dashboards</h3>
            <p className="project-description">
              Designed and implemented real-time analytics dashboards for Blair Dumont Inc. using Power BI. 
              Restructured company databases for improved performance and 20% greater data intake. 
              Created preventive maintenance system tracking 400+ assets, reducing downtime by 10%.
            </p>
            <div className="project-tech">
              <span className="tech-tag">Power BI</span>
              <span className="tech-tag">SQL</span>
              <span className="tech-tag">Database Design</span>
              <span className="tech-tag">Data Analytics</span>
            </div>
          </div>

          <div className="project-card" ref={project3Ref}>
            <h3 className="project-title">Drobe - AI Fashion Discovery App</h3>
            <p className="project-description">
              Leading development of a cross-platform fashion discovery app blending social and e-commerce features. 
              Built with React Native/Expo frontend (TypeScript) and FastAPI backend containerized with Docker. 
              Features AI-powered fashion recognition, Supabase authentication, and PostgreSQL data storage.
            </p>
            <div className="project-tech">
              <span className="tech-tag">React Native</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">FastAPI</span>
              <span className="tech-tag">Docker</span>
              <span className="tech-tag">Supabase</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
