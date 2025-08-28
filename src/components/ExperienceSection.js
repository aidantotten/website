import React, { useRef, useEffect } from 'react';

const ExperienceSection = () => {
  const titleRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

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
    if (card1Ref.current) observer.observe(card1Ref.current);
    if (card2Ref.current) observer.observe(card2Ref.current);
    if (card3Ref.current) observer.observe(card3Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience-section section">
      <div className="section-content">
        <h2 className="section-title" ref={titleRef}>Professional Experience</h2>
        <div className="experience-grid">
          <div className="experience-card" ref={card1Ref}>
            <h3 className="job-title">Business Systems Analyst & Project Manager Intern</h3>
            <h4 className="company-name">CapTech Ventures</h4>
            <p className="job-duration">May 2024 - August 2024</p>
            <p className="job-location">Richmond, VA</p>
            <div className="job-description">
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    color: '#ffd700', 
                    fontSize: '1.2rem' 
                  }}>•</span>
                  Developed back-end infrastructure on AWS, creating a relational database with over 70,000 records to support an airline website's dynamic front-end
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    color: '#ffd700', 
                    fontSize: '1.2rem' 
                  }}>•</span>
                  Managed a cross-functional team of 12 using Agile and Scrum methodologies; led sprint planning, retrospectives, and standups via Jira
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    color: '#ffd700', 
                    fontSize: '1.2rem' 
                  }}>•</span>
                  Built a full-stack airline site using React; integrated AI chatbot (Amazon Bedrock + OpenSearch) and account features using AWS Cognito with 2FA
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    color: '#ffd700', 
                    fontSize: '1.2rem' 
                  }}>•</span>
                  Facilitated stakeholder communication by presenting project updates, roadmaps, and KPIs to mentors and senior staff
                </li>
              </ul>
            </div>
          </div>

          <div className="experience-card" ref={card2Ref}>
            <h3 className="job-title">IT Operations Intern</h3>
            <h4 className="company-name">Blair Dumont Inc.</h4>
            <p className="job-duration">February 2025 - May 2025</p>
            <p className="job-location">Richmond, VA</p>
            <div className="job-description">
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    color: '#ffd700', 
                    fontSize: '1.2rem' 
                  }}>•</span>
                  Restructured and optimized 3 company databases, improving analytical performance and enabling 20% greater data intake
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    color: '#ffd700', 
                    fontSize: '1.2rem' 
                  }}>•</span>
                  Designed and implemented 2 Power BI dashboards for real-time analytics and decision-making support
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    color: '#ffd700', 
                    fontSize: '1.2rem' 
                  }}>•</span>
                  Developed a preventive maintenance system to track over 400 assets, resulting in a 10% reduction in downtime
                </li>
              </ul>
            </div>
          </div>

          <div className="experience-card" ref={card3Ref}>
            <h3 className="job-title">Co-Developer of App "Drobe"</h3>
            <h4 className="company-name">Virtual Closet AI App</h4>
            <p className="job-duration">March 2025 - Present</p>
            <p className="job-location">Richmond, VA</p>
            <div className="job-description">
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    color: '#ffd700', 
                    fontSize: '1.2rem' 
                  }}>•</span>
                  Leading full-stack development of a fashion discovery app that blends social and e-commerce features targeting GenZ and Millennial users
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    color: '#ffd700', 
                    fontSize: '1.2rem' 
                  }}>•</span>
                  Building a cross-platform React Native/Expo frontend with TypeScript, and a FastAPI backend containerized using Docker
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    color: '#ffd700', 
                    fontSize: '1.2rem' 
                  }}>•</span>
                  Engineering AI-powered fashion recognition features that recommend similar items tailored to the user for purchase
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    color: '#ffd700', 
                    fontSize: '1.2rem' 
                  }}>•</span>
                  Integrated Supabase for authentication and PostgreSQL-based data storage with secure email/OTP sign-in flow
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
