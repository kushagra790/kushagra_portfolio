import React, { useEffect } from 'react';
import AOS from 'aos';

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <section id="education">
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
            🎓 Academic Background
          </div>
          
          <h3 className="fw-bold reveal mb-3" style={{
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            background: 'var(--gradient-cool)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Education & Certifications</h3>
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
                top: '-50%',
                right: '-10%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
              }}></div>
              
              <div className="d-flex align-items-start gap-4 mb-4" style={{
                padding: '1.5rem',
                background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)',
                borderRadius: '16px',
                border: '1px solid rgba(6, 182, 212, 0.2)',
                position: 'relative',
                zIndex: 1
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  width: '64px',
                  height: '64px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--gradient-cool)',
                  borderRadius: '16px',
                  flexShrink: 0,
                  boxShadow: '0 8px 16px rgba(6, 182, 212, 0.3)'
                }}>🎓</div>
                <div className="flex-grow-1">
                  <h5 className="fw-bold mb-2" style={{ fontSize: '1.5rem' }}>GLA University, Mathura</h5>
                  <p className="mb-2" style={{
                    fontSize: '1.125rem',
                    background: 'var(--gradient-purple)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: '600'
                  }}>B.Tech (Hons.) — Computer Science</p>
                  <p className="text-muted mb-0" style={{ fontSize: '0.9375rem' }}>
                    <strong style={{ color: 'var(--primary-400)' }}>CGPA:</strong> 7.94/10 | 
                    <strong style={{ color: 'var(--accent-purple)' }}> Duration:</strong> Sept 2022 - June 2026
                  </p>
                </div>
              </div>
              
              <div style={{
                height: '1px',
                background: 'linear-gradient(90deg, transparent, var(--border-color), transparent)',
                margin: '1.5rem 0'
              }}></div>
              
              <div className="d-flex align-items-start gap-4" style={{
                padding: '1.5rem',
                background: 'rgba(245, 158, 11, 0.05)',
                borderRadius: '16px',
                border: '1px solid rgba(245, 158, 11, 0.2)',
                position: 'relative',
                zIndex: 1
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  width: '64px',
                  height: '64px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)',
                  borderRadius: '16px',
                  flexShrink: 0,
                  boxShadow: '0 8px 16px rgba(245, 158, 11, 0.3)'
                }}>📚</div>
                <div className="flex-grow-1">
                  <h5 className="fw-bold mb-3" style={{ fontSize: '1.25rem' }}>Delhi Public School, Kanpur (CBSE)</h5>
                  <div style={{
                    padding: '0.75rem 1rem',
                    background: 'var(--surface)',
                    borderRadius: '10px',
                    marginBottom: '0.75rem',
                    border: '1px solid var(--border-color)'
                  }}>
                    <p className="mb-0"><strong>Intermediate</strong> — April 2021 to March 2022 | 
                    <span style={{
                      background: 'var(--gradient-warm)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: '700',
                      fontSize: '1.125rem'
                    }}> 80%</span></p>
                  </div>
                  <div style={{
                    padding: '0.75rem 1rem',
                    background: 'var(--surface)',
                    borderRadius: '10px',
                    border: '1px solid var(--border-color)'
                  }}>
                    <p className="mb-0"><strong>High School</strong> — April 2019 to March 2020 | 
                    <span style={{
                      background: 'var(--gradient-cool)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: '700',
                      fontSize: '1.125rem'
                    }}> 85%</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card p-4" data-aos="fade-up" data-aos-delay="100" style={{
              background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.05) 0%, rgba(245, 158, 11, 0.05) 100%)',
              border: '1px solid rgba(236, 72, 153, 0.2)',
              borderRadius: '24px',
              height: '100%'
            }}>
              <h6 className="fw-bold mb-4" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontSize: '1.125rem'
              }}>
                <span style={{
                  width: '4px',
                  height: '24px',
                  background: 'linear-gradient(135deg, #ec4899 0%, #f59e0b 100%)',
                  borderRadius: '4px'
                }}></span>
                Certifications
              </h6>
              <div className="space-y-3">
                <div className="mb-3" style={{
                  padding: '1rem',
                  background: 'var(--surface)',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(4px)';
                  e.currentTarget.style.borderColor = 'var(--primary-400)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                }}>
                  <p className="small mb-2" style={{
                    color: 'var(--primary-400)',
                    fontWeight: '700',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>☁️ AWS</p>
                  <p className="small mb-0" style={{ fontWeight: '600' }}>Cloud Computing - Technical Guftgu</p>
                </div>
                
                <div className="mb-3" style={{
                  padding: '1rem',
                  background: 'var(--surface)',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(4px)';
                  e.currentTarget.style.borderColor = 'var(--accent-purple)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                }}>
                  <p className="small mb-2" style={{
                    color: 'var(--accent-purple)',
                    fontWeight: '700',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>📚 Udemy</p>
                  <p className="small mb-0" style={{ fontWeight: '600' }}>AWS Associate Developer</p>
                </div>
                
                <div className="mb-3" style={{
                  padding: '1rem',
                  background: 'var(--surface)',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(4px)';
                  e.currentTarget.style.borderColor = 'var(--accent-amber)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                }}>
                  <p className="small mb-2" style={{
                    color: 'var(--accent-amber)',
                    fontWeight: '700',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>🎓 Coursera</p>
                  <p className="small mb-0" style={{ fontWeight: '600' }}>Innovation Through Design</p>
                </div>
                
                <div style={{
                  padding: '1rem',
                  background: 'var(--surface)',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(4px)';
                  e.currentTarget.style.borderColor = 'var(--accent-pink)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                }}>
                  <p className="small mb-2" style={{
                    color: 'var(--accent-pink)',
                    fontWeight: '700',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>💾 Coursera</p>
                  <p className="small mb-0" style={{ fontWeight: '600' }}>SQL: Practical Introduction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
