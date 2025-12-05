import React, { useEffect } from 'react';
import TypingEffect from './TypingEffect';

const Hero = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el, i) => {
      el.style.animationDelay = (i * 120) + 'ms';
    });
  }, []);

  const handleProjectsClick = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="hero">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="mb-3 reveal">
              <span className="badge-hero">
                ✨ DevOps & Cloud Engineer
              </span>
            </div>
            
            <h1 className="reveal" style={{ marginBottom: '1.5rem' }}>
              Hi, I'm <span className="gradient-text">Kushagra Singh</span>
            </h1>
            
            <p className="lead reveal" style={{ 
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
              marginBottom: '2rem',
              lineHeight: '1.7'
            }}>
              <TypingEffect />
            </p>
            
            <div className="cta-buttons reveal" style={{ gap: '1rem' }}>
              <button 
                className="btn btn-primary btn-lg"
                onClick={handleProjectsClick}
                style={{
                  padding: '1rem 2rem',
                  fontSize: '1rem',
                  fontWeight: '700',
                  borderRadius: '12px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <span>View My Work</span>
                <span style={{ fontSize: '1.2rem' }}>→</span>
              </button>
              <a 
                className="btn btn-outline-primary btn-lg" 
                href="/kushagraSingh_CSE_GLAU.pdf" 
                download
                style={{
                  padding: '1rem 2rem',
                  fontSize: '1rem',
                  fontWeight: '700',
                  borderRadius: '12px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <span>📄</span>
                <span>Download Resume</span>
              </a>
            </div>

            <div className="hero-meta reveal" style={{
              marginTop: '3rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1rem'
            }}>
              <div className="meta-item" style={{
                background: 'var(--surface)',
                padding: '1rem',
                borderRadius: '16px',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                transition: 'all 0.3s ease'
              }}>
                <div className="meta-icon" style={{
                  fontSize: '1.75rem',
                  background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>📍</div>
                <div className="meta-content">
                  <h6 style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--text-tertiary)',
                    marginBottom: '0.25rem',
                    fontWeight: '600'
                  }}>Location</h6>
                  <p style={{
                    fontSize: '0.9375rem',
                    color: 'var(--text-primary)',
                    margin: 0,
                    fontWeight: '600'
                  }}>Kanpur, UP</p>
                </div>
              </div>
              
              <div className="meta-item" style={{
                background: 'var(--surface)',
                padding: '1rem',
                borderRadius: '16px',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                transition: 'all 0.3s ease'
              }}>
                <div className="meta-icon" style={{
                  fontSize: '1.75rem',
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>✉️</div>
                <div className="meta-content">
                  <h6 style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--text-tertiary)',
                    marginBottom: '0.25rem',
                    fontWeight: '600'
                  }}>Email</h6>
                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-primary)',
                    margin: 0,
                    fontWeight: '600',
                    wordBreak: 'break-all'
                  }}>kushagrasingh905@gmail.com</p>
                </div>
              </div>
              
              <div className="meta-item" style={{
                background: 'var(--surface)',
                padding: '1rem',
                borderRadius: '16px',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                transition: 'all 0.3s ease'
              }}>
                <div className="meta-icon" style={{
                  fontSize: '1.75rem',
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>📱</div>
                <div className="meta-content">
                  <h6 style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--text-tertiary)',
                    marginBottom: '0.25rem',
                    fontWeight: '600'
                  }}>Phone</h6>
                  <p style={{
                    fontSize: '0.9375rem',
                    color: 'var(--text-primary)',
                    margin: 0,
                    fontWeight: '600'
                  }}>+91 7905366063</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 d-flex justify-content-center reveal">
            <div style={{ position: 'relative', width: '100%', maxWidth: '420px' }}>
              <div style={{
                position: 'absolute',
                inset: '-20px',
                background: 'var(--gradient-cool)',
                borderRadius: '32px',
                opacity: '0.15',
                filter: 'blur(40px)',
                zIndex: '-1'
              }}></div>
              
              <img 
                src="/white_photo.jpg" 
                alt="Kushagra Singh" 
                className="profile-picture"
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  height: 'auto',
                  borderRadius: '32px',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  border: '4px solid var(--surface)',
                  transition: 'all 0.5s ease'
                }}
              />
              
              <div style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                marginTop: '2rem',
                flexWrap: 'wrap'
              }}>
                <a 
                  href="https://www.linkedin.com/in/kushagra-singh-344b72250" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="badge-skill"
                  style={{
                    padding: '0.75rem 1.5rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    background: 'var(--surface)',
                    border: '2px solid var(--border-color)',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/kushagra790" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="badge-skill"
                  style={{
                    padding: '0.75rem 1.5rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    background: 'var(--surface)',
                    border: '2px solid var(--border-color)',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
