import React, { useRef, useEffect, useState } from 'react';

const SkillsSection = () => {
  const titleRef = useRef(null);
  const skillsRef = useRef(null);
  const [animatedSkills, setAnimatedSkills] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // If it's a skill item, animate the progress bar
            if (entry.target.classList.contains('skill-item')) {
              const skillName = entry.target.querySelector('.skill-name').textContent;
              setAnimatedSkills(prev => new Set([...prev, skillName]));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);

    // Observe all skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const skills = [
    // Technical Skills
    { name: 'PostgreSQL', level: 85, category: 'Databases' },
    { name: 'MySQL', level: 80, category: 'Databases' },
    { name: 'Microsoft SQL Server', level: 75, category: 'Databases' },
    { name: 'Oracle DB', level: 70, category: 'Databases' },
    { name: 'Python', level: 85, category: 'Programming' },
    { name: 'Pandas', level: 80, category: 'Programming' },
    { name: 'NumPy', level: 75, category: 'Programming' },
    { name: 'Java', level: 80, category: 'Programming' },
    { name: 'C', level: 70, category: 'Programming' },
    { name: 'HTML/CSS', level: 85, category: 'Web Development' },
    { name: 'JavaScript', level: 80, category: 'Web Development' },
    { name: 'React', level: 85, category: 'Web Development' },
    { name: 'TypeScript', level: 75, category: 'Web Development' },
    { name: 'Power BI', level: 85, category: 'Data Visualization' },
    { name: 'Tableau', level: 80, category: 'Data Visualization' },
    
    // Cloud & AWS
    { name: 'AWS Bedrock', level: 75, category: 'Cloud Services' },
    { name: 'AWS Cognito', level: 80, category: 'Cloud Services' },
    { name: 'AWS EC2', level: 75, category: 'Cloud Services' },
    { name: 'AWS S3', level: 80, category: 'Cloud Services' },
    { name: 'AWS Lambda', level: 70, category: 'Cloud Services' },
    { name: 'REST APIs', level: 80, category: 'Cloud Services' },
    
    // Tools & Platforms
    { name: 'Jira', level: 85, category: 'Project Management' },
    { name: 'Lucidchart', level: 80, category: 'Project Management' },
    { name: 'Figma', level: 75, category: 'Project Management' },
    { name: 'Supabase', level: 80, category: 'Development Tools' },
    { name: 'Docker', level: 75, category: 'Development Tools' },
    { name: 'GitHub', level: 85, category: 'Development Tools' },
    
    // Methodologies
    { name: 'Agile (Scrum)', level: 90, category: 'Methodologies' },
    { name: 'Business Process Modeling', level: 80, category: 'Methodologies' },
    { name: 'Data Modeling', level: 80, category: 'Methodologies' },
    { name: 'Requirements Gathering', level: 85, category: 'Methodologies' },
    { name: 'Stakeholder Communication', level: 90, category: 'Methodologies' },
    { name: 'Project Management', level: 85, category: 'Methodologies' }
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section id="skills" className="skills-section section">
      <div className="section-content">
        <h2 className="section-title" ref={titleRef}>Technical Skills</h2>
        <div className="skills-content" ref={skillsRef}>
          {categories.map((category, categoryIndex) => (
            <div key={category} className="skills-category">
              <h3 className="category-title">{category}</h3>
              <div className="skills-grid">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, skillIndex) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className={`skill-progress ${animatedSkills.has(skill.name) ? 'animated' : ''}`}
                          style={{ 
                            width: animatedSkills.has(skill.name) ? `${skill.level}%` : '0%',
                            transitionDelay: `${skillIndex * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="certifications-section">
          <h3 className="certifications-title">Certifications</h3>
          <div className="certifications-grid">
            <div className="certification-item">Certified Scrum Master</div>
            <div className="certification-item">Agile Project Management</div>
            <div className="certification-item">Business Analysis Foundations</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
