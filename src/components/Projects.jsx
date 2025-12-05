import React from 'react';

const ProjectCard = ({ title, tech, description, codeLink, demoLink, demoText, tags, gradient }) => {
  return (
    <div className="col-md-6 col-lg-4" data-aos="zoom-in">
      <div className="card p-4 project-card h-100 d-flex flex-column" style={{
        background: 'var(--surface)',
        border: '1px solid var(--border-color)',
        borderRadius: '20px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
        {/* Gradient overlay on hover */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: gradient || 'var(--gradient-cool)',
          opacity: 0,
          transition: 'opacity 0.3s ease'
        }} className="project-gradient-bar"></div>
        
        {/* Background gradient glow */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '200px',
          height: '200px',
          background: gradient || 'var(--gradient-cool)',
          opacity: '0.05',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }}></div>
        
        <div className="mb-3" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            width: '56px',
            height: '56px',
            background: gradient || 'var(--gradient-cool)',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem',
            fontSize: '1.75rem',
            boxShadow: '0 8px 16px rgba(6, 182, 212, 0.2)'
          }}>
            {tags[0] === 'Python' ? '🤖' : tags[0] === 'Kubernetes' ? '☁️' : '💊'}
          </div>
          
          <h5 className="fw-bold mb-3" style={{
            fontSize: '1.25rem',
            color: 'var(--text-primary)',
            lineHeight: '1.3'
          }}>{title}</h5>
          
          <div className="d-flex flex-wrap gap-2 mb-3">
            {tags && tags.map((tag, i) => (
              <span key={i} className="badge badge-skill" style={{
                fontSize: '0.75rem',
                padding: '0.375rem 0.75rem',
                background: 'rgba(6, 182, 212, 0.1)',
                color: 'var(--primary-400)',
                border: '1px solid rgba(6, 182, 212, 0.2)',
                borderRadius: '8px',
                fontWeight: '600'
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <p className="small flex-grow-1" style={{
          color: 'var(--text-secondary)',
          lineHeight: '1.7',
          marginBottom: '1.5rem',
          position: 'relative',
          zIndex: 1
        }}>{description}</p>
        
        <div className="mt-auto d-flex gap-2" style={{ position: 'relative', zIndex: 1 }}>
          <a href={codeLink} className="btn btn-sm btn-outline-primary flex-grow-1" style={{
            padding: '0.625rem 1rem',
            borderRadius: '10px',
            fontSize: '0.875rem',
            fontWeight: '600',
            border: '2px solid var(--border-color)',
            color: 'var(--text-primary)',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Code
          </a>
          <a href={demoLink} className="btn btn-sm btn-primary flex-grow-1" style={{
            padding: '0.625rem 1rem',
            borderRadius: '10px',
            fontSize: '0.875rem',
            fontWeight: '600',
            background: gradient || 'var(--gradient-cool)',
            border: 'none',
            color: 'white',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            boxShadow: '0 4px 12px rgba(6, 182, 212, 0.3)'
          }}>
            {demoText}
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Sign Language Detection System',
      tech: 'Python • Machine Learning • Accessibility',
      description: 'Built a predictive ML model to recognize sign language gestures for improved accessibility. Enabled inclusive hiring insights by analyzing gesture data and recommending performance improvements.',
      codeLink: 'https://github.com/kushagra790/sign_language_detection_system',
      demoLink: '#',
      demoText: 'Demo',
      tags: ['Python', 'ML', 'Accessibility', 'Data Analysis'],
      gradient: 'var(--gradient-cool)'
    },
    {
      title: 'Kubernetes Cloud Infrastructure',
      tech: 'Kubernetes • AWS • Cloud Computing',
      description: 'Deployed a cloud-native system using Kubernetes for automated scaling and container management. Ensured efficient orchestration of sub-services and optimized resource utilization on AWS.',
      codeLink: 'https://github.com/kushagra790',
      demoLink: '#',
      demoText: 'Docs',
      tags: ['Kubernetes', 'AWS', 'DevOps', 'Cloud'],
      gradient: 'var(--gradient-purple)'
    },
    {
      title: 'WellTrack — Health Management Platform',
      tech: 'Generative AI • CI/CD • Full-Stack',
      description: 'Developed a generative AI platform for tracking sleep, diet, and exercise patterns. Integrated digital health cards and CI/CD pipeline for seamless record sharing and continuous delivery.',
      codeLink: 'https://github.com/kushagra790',
      demoLink: '#',
      demoText: 'Live',
      tags: ['Generative AI', 'React', 'Node.js', 'CI/CD'],
      gradient: 'var(--gradient-warm)'
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <div className="mb-5">
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1rem',
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            borderRadius: '50px',
            fontSize: '0.875rem',
            fontWeight: '600',
            color: 'var(--primary-400)',
            marginBottom: '1rem'
          }}>
            💼 Portfolio
          </div>
          
          <h3 className="fw-bold reveal mb-3" style={{
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            background: 'var(--gradient-cool)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Selected Projects</h3>
          
          <p className="lead text-muted" style={{
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            maxWidth: '700px'
          }}>
            Academic and professional projects showcasing expertise in cloud computing, ML, and full-stack development.
          </p>
        </div>
        
        <div className="row g-4">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
