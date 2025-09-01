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
            I'm Aidan, and I enjoy building solutions that make systems work more efficiently, whether that means developing a full-stack application, designing a clean database, or creating smoother processes for people to use. I graduated from Virginia Commonwealth University with a B.S. in Information Systems and a minor in Computer Science, where I learned to balance technical expertise with creative problem solving.
          </p>
          <br />
          <p className="summary-text">
            I've gotten to work on a range of projects that pushed me out of my comfort zone, from developing an airline site powered by AWS and an AI chatbot at CapTech Ventures, to restructuring company databases and building dashboards that guided real business decisions at Blair Dumont. Most recently, I've been co-developing Drobe, a fashion discovery app that blends social and e-commerce features with AI-driven recommendations.
          </p>
          <br />
          <p className="summary-text">
            Outside of the tech side, I spent two years as President of VCU's Men's Club Ultimate Frisbee team, where I managed budgets, ran operations, and most importantly, kept a group of 30+ college students aligned on and off the field.
          </p>
          <br />
          <p className="summary-text">
            Right now, I'm focused on sharpening my skills in cloud, data, and full-stack development while staying open to new challenges that combine creativity, technology, and problem solving.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SummarySection;
