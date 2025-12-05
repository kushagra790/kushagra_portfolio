import React, { useEffect } from 'react';
import AOS from 'aos';

const Achievements = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const achievements = [
    {
      title: '2nd Position in C Programming Quiz',
      description: 'Organized by GLA University',
      icon: '🏆',
      gradient: 'var(--gradient-warm)'
    },
    {
      title: 'NPTEL Discipline Star Awardee',
      description: 'Honored for top performance across multiple IIT-led NPTEL courses, reflecting consistent academic excellence and dedication to upskilling.',
      icon: '⭐',
      gradient: 'var(--gradient-purple)'
    }
  ];

  const training = [
    {
      title: 'Job Oriented Value Added Course (JOVAC)',
      organization: 'GLA University (Remote)',
      duration: 'June 2024 – July 2024',
      role: 'Trainee',
      description: 'Completed cloud computing training with hands-on experience in AWS, Linux commands, and domain setup. Deployed a Kubernetes project focused on container orchestration, automated scaling, and cloud infrastructure management.'
    }
  ];

  const activities = [
    'Coordinated 2-year Induction program for B.Tech (Hons.)',
    'Active member in E-CELL (Entrepreneurship Cell)',
    'Participated in Technex (Techno-Management Fest, IIT-BHU, March 2024)',
    'Participated in Cognizance (Technical Fest, IIT ROORKEE, March 2025)'
  ];

  return (
    <section id="achievements">
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
            🏅 Milestones
          </div>
          
          <h3 className="fw-bold reveal mb-3" style={{
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            background: 'var(--gradient-cool)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Achievements & Experience</h3>
        </div>
        
        <div className="row g-4 mb-5">
          {achievements.map((achievement, index) => (
            <div key={index} className="col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="card p-4 h-100" style={{
                background: 'var(--surface)',
                border: '1px solid var(--border-color)',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-30%',
                  right: '-10%',
                  width: '200px',
                  height: '200px',
                  background: achievement.gradient,
                  opacity: '0.08',
                  borderRadius: '50%',
                  filter: 'blur(60px)',
                  pointerEvents: 'none'
                }}></div>
                
                <div className="d-flex align-items-start gap-3" style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    fontSize: '3rem',
                    width: '72px',
                    height: '72px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: achievement.gradient,
                    borderRadius: '18px',
                    flexShrink: 0,
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)'
                  }}>{achievement.icon}</div>
                  <div className="flex-grow-1">
                    <h5 className="fw-bold mb-2" style={{ fontSize: '1.25rem' }}>{achievement.title}</h5>
                    <p className="text-muted mb-0" style={{ lineHeight: '1.6' }}>{achievement.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-4 mb-5">
          <div className="col-lg-12">
            <h5 className="fw-bold mb-4" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontSize: '1.5rem'
            }}>
              <span style={{
                width: '5px',
                height: '32px',
                background: 'var(--gradient-cool)',
                borderRadius: '4px'
              }}></span>
              Training & Experience
            </h5>
          </div>
          {training.map((item, index) => (
            <div key={index} className="col-lg-12" data-aos="fade-up">
              <div className="card p-5" style={{
                background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)',
                border: '1px solid rgba(6, 182, 212, 0.2)',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  bottom: '-50%',
                  left: '-10%',
                  width: '400px',
                  height: '400px',
                  background: 'radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 70%)',
                  borderRadius: '50%',
                  pointerEvents: 'none'
                }}></div>
                
                <div className="d-flex justify-content-between align-items-start mb-3 flex-wrap gap-3" style={{ position: 'relative', zIndex: 1 }}>
                  <div>
                    <h5 className="fw-bold mb-2" style={{ fontSize: '1.5rem' }}>{item.title}</h5>
                    <p className="text-muted mb-0" style={{ fontSize: '1rem' }}>
                      {item.organization} — <span style={{ 
                        color: 'var(--primary-400)', 
                        fontWeight: '600' 
                      }}>{item.role}</span>
                    </p>
                  </div>
                  <span style={{
                    padding: '0.625rem 1.25rem',
                    background: 'var(--gradient-cool)',
                    color: 'white',
                    borderRadius: '12px',
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    boxShadow: '0 4px 12px rgba(6, 182, 212, 0.3)',
                    whiteSpace: 'nowrap'
                  }}>{item.duration}</span>
                </div>
                <p className="mt-3 mb-0" style={{ 
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  position: 'relative',
                  zIndex: 1
                }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-4">
          <div className="col-lg-12">
            <h5 className="fw-bold mb-4" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontSize: '1.5rem'
            }}>
              <span style={{
                width: '5px',
                height: '32px',
                background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
                borderRadius: '4px'
              }}></span>
              Co-Curricular Activities
            </h5>
          </div>
          <div className="col-lg-12">
            <div className="card p-5" style={{
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%)',
              border: '1px solid rgba(168, 85, 247, 0.2)',
              borderRadius: '20px'
            }}>
              <ul className="list-unstyled" style={{ display: 'grid', gap: '1rem' }}>
                {activities.map((activity, index) => (
                  <li key={index} className="d-flex align-items-start" style={{
                    padding: '1rem',
                    background: 'var(--surface)',
                    borderRadius: '12px',
                    border: '1px solid var(--border-color)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(8px)';
                    e.currentTarget.style.borderColor = 'var(--accent-purple)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                  }}>
                    <span style={{
                      marginRight: '1rem',
                      fontSize: '1.5rem',
                      flexShrink: 0,
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
                      borderRadius: '10px'
                    }}>✓</span>
                    <span style={{ 
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      lineHeight: '1.6'
                    }}>{activity}</span>
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

export default Achievements;
