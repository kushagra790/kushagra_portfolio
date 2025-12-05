import React from 'react';
import AOS from 'aos';
import { useEffect } from 'react';

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const technicalSkills = [
    { name: 'DevOps', icon: '⚙️', color: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)' },
    { name: 'AWS', icon: '☁️', color: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)' },
    { name: 'Python', icon: '🐍', color: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)' },
    { name: 'Kubernetes', icon: '🐳', color: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)' },
    { name: 'React', icon: '⚛️', color: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)' },
    { name: 'Node.js', icon: '🟩', color: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)' },
    { name: 'Docker', icon: '🐋', color: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)' },
    { name: 'MongoDB', icon: '🍃', color: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)' },
    { name: 'MySQL', icon: '🗄️', color: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)' },
    { name: 'JavaScript', icon: '📜', color: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)' },
    { name: 'Java', icon: '☕', color: 'linear-gradient(135deg, #ef4444 0%, #f59e0b 100%)' },
    { name: 'Machine Learning', icon: '🤖', color: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)' }
  ];

  const professionalSkills = [
    { name: 'Management', icon: '📊' },
    { name: 'Problem Solving', icon: '🧩' },
    { name: 'Leadership', icon: '👥' },
    { name: 'Cloud-Native', icon: '☁️' },
    { name: 'Automation', icon: '🔄' }
  ];

  return (
    <section id="skills">
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
            🚀 Expertise
          </div>
          
          <h3 className="fw-bold reveal mb-3" style={{
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            background: 'var(--gradient-cool)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Skills & Technologies</h3>
        </div>
        
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="card p-5" data-aos="fade-up" style={{
              background: 'var(--surface)',
              border: '1px solid var(--border-color)',
              borderRadius: '24px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-30%',
                right: '-10%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
              }}></div>
              
              <h5 className="fw-bold mb-4" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontSize: '1.25rem'
              }}>
                <span style={{
                  width: '4px',
                  height: '28px',
                  background: 'var(--gradient-cool)',
                  borderRadius: '4px'
                }}></span>
                Technical Skills
              </h5>
              
              <div className="d-flex flex-wrap gap-3" style={{ position: 'relative', zIndex: 1 }}>
                {technicalSkills.map((skill, index) => (
                  <div 
                    key={index}
                    className="badge-skill" 
                    data-aos="flip-left"
                    data-aos-delay={index * 30}
                    style={{
                      padding: '0.875rem 1.25rem',
                      background: 'var(--surface-elevated)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '16px',
                      fontSize: '0.9375rem',
                      fontWeight: '600',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.625rem',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = skill.color;
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.borderColor = 'transparent';
                      e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(6, 182, 212, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--surface-elevated)';
                      e.currentTarget.style.color = 'var(--text-primary)';
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <span style={{ fontSize: '1.25rem' }}>{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="card p-4" data-aos="fade-up" data-aos-delay="100" style={{
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%)',
              border: '1px solid rgba(168, 85, 247, 0.2)',
              borderRadius: '24px',
              height: '100%'
            }}>
              <h5 className="fw-bold mb-4" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontSize: '1.25rem'
              }}>
                <span style={{
                  width: '4px',
                  height: '28px',
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
                  borderRadius: '4px'
                }}></span>
                Professional
              </h5>
              
              <ul className="list-unstyled">
                {professionalSkills.map((skill, index) => (
                  <li key={index} className="mb-3" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem',
                    background: 'var(--surface)',
                    borderRadius: '12px',
                    border: '1px solid var(--border-color)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(8px)';
                    e.currentTarget.style.borderColor = 'var(--accent-purple)';
                    e.currentTarget.style.background = 'rgba(168, 85, 247, 0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.background = 'var(--surface)';
                  }}>
                    <span style={{
                      fontSize: '1.5rem',
                      flexShrink: 0,
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
                      borderRadius: '10px'
                    }}>{skill.icon}</span>
                    <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
