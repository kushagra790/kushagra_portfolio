import React, { useEffect } from 'react';
import AOS from 'aos';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <section id="about">
      <div className="container">
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
                top: '-50%',
                right: '-10%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
              }}></div>
              
              <div className="badge-hero mb-4">
                👋 Introduction
              </div>
              
              <h3 className="fw-bold mb-4" style={{
                background: 'var(--gradient-cool)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)'
              }}>About Me</h3>
              
              <p className="mb-3 lead" style={{
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                lineHeight: '1.8',
                color: 'var(--text-secondary)'
              }}>
                I'm an <strong style={{ color: 'var(--primary-400)' }}>Aspiring DevOps and Cloud Engineer</strong> currently pursuing B.Tech (Hons.) in Computer Science at <strong style={{ color: 'var(--accent-purple)' }}>GLA University, Mathura</strong>. I'm passionate about building scalable cloud-native systems and have hands-on experience with AWS and Kubernetes through academic projects. I combine strong problem-solving skills with leadership qualities and a passion for cloud automation.
              </p>
              
              <h6 className="fw-bold mt-4 mb-3" style={{
                fontSize: '1.125rem',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{
                  width: '4px',
                  height: '24px',
                  background: 'var(--gradient-cool)',
                  borderRadius: '4px'
                }}></span>
                Key Highlights
              </h6>
              
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-start highlight-item highlight-item-cyan">
                  <span style={{
                    marginRight: '1rem',
                    fontSize: '1.5rem',
                    flexShrink: 0,
                    background: 'var(--gradient-cool)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>🤖</span>
                  <span style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Sign Language Detection</strong> — ML model for gesture recognition improving accessibility and inclusive hiring insights.
                  </span>
                </li>
                
                <li className="mb-3 d-flex align-items-start highlight-item highlight-item-purple">
                  <span style={{
                    marginRight: '1rem',
                    fontSize: '1.5rem',
                    flexShrink: 0,
                    background: 'var(--gradient-purple)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>💊</span>
                  <span style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>WellTrack</strong> — Generative AI platform for health tracking (sleep, diet, exercise) with digital health cards and CI/CD pipeline.
                  </span>
                </li>
                
                <li className="mb-2 d-flex align-items-start highlight-item highlight-item-amber">
                  <span style={{
                    marginRight: '1rem',
                    fontSize: '1.5rem',
                    flexShrink: 0,
                    background: 'var(--gradient-warm)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>☁️</span>
                  <span style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Cloud Infrastructure</strong> — Kubernetes deployment for container orchestration, automated scaling, and AWS resource optimization.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="card p-4" data-aos="fade-up" data-aos-delay="100" style={{
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)',
              border: '1px solid rgba(6, 182, 212, 0.2)',
              borderRadius: '24px'
            }}>
              <h6 className="fw-bold small mb-4" style={{
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--primary-400)',
                fontSize: '0.75rem'
              }}>
                📊 Quick Facts
              </h6>
              
              <div className="mb-4" style={{
                padding: '1rem',
                background: 'var(--surface)',
                borderRadius: '12px',
                border: '1px solid var(--border-color)'
              }}>
                <p className="small text-muted mb-2" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Degree</p>
                <p className="fw-bold mb-0" style={{ color: 'var(--text-primary)' }}>B.Tech (Hons.) — CS</p>
              </div>
              
              <div className="mb-4" style={{
                padding: '1rem',
                background: 'var(--surface)',
                borderRadius: '12px',
                border: '1px solid var(--border-color)'
              }}>
                <p className="small text-muted mb-2" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>University</p>
                <p className="fw-bold mb-0" style={{ color: 'var(--text-primary)' }}>GLA University</p>
              </div>
              
              <div className="mb-4" style={{
                padding: '1rem',
                background: 'var(--surface)',
                borderRadius: '12px',
                border: '1px solid var(--border-color)'
              }}>
                <p className="small text-muted mb-2" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>CGPA</p>
                <p className="fw-bold mb-0" style={{ 
                  color: 'var(--text-primary)',
                  fontSize: '1.25rem',
                  background: 'var(--gradient-cool)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>7.94 / 10.0</p>
              </div>
              
              <div style={{
                padding: '1rem',
                background: 'var(--surface)',
                borderRadius: '12px',
                border: '1px solid var(--border-color)'
              }}>
                <p className="small text-muted mb-2" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Graduation</p>
                <p className="fw-bold mb-0" style={{ color: 'var(--text-primary)' }}>June 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
