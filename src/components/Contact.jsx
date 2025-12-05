import React, { useState, useEffect } from 'react';
import AOS from 'aos';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="mb-5">
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1rem',
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            borderRadius: '50px',
            fontSize: '0.875rem',
            fontWeight: '600',
            color: 'var(--primary-400)',
            marginBottom: '1rem'
          }}>
            📨 Get In Touch
          </div>
          
          <h3 className="fw-bold reveal mb-3" style={{
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            background: 'var(--gradient-cool)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Let's Work Together</h3>
        </div>
        
        <div className="row g-4">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="card p-5 h-100" style={{
              background: 'var(--surface)',
              border: '1px solid var(--border-color)',
              borderRadius: '24px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-20%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
              }}></div>
              
              <h5 className="fw-bold mb-3" style={{ position: 'relative', zIndex: 1, fontSize: '1.5rem' }}>Send me a message</h5>
              <p className="text-muted mb-4" style={{ position: 'relative', zIndex: 1 }}>I typically respond within 24 hours. Feel free to reach out for collaboration, internship opportunities, or just to say hi!</p>
              
              <form onSubmit={handleSubmit} style={{ position: 'relative', zIndex: 1 }}>
                <div className="mb-3">
                  <label className="form-label" style={{
                    fontWeight: '600',
                    fontSize: '0.9375rem',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem'
                  }}>Your Name</label>
                  <input 
                    className="form-control" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    style={{
                      padding: '0.875rem 1rem',
                      borderRadius: '12px',
                      border: '2px solid var(--border-color)',
                      background: 'var(--bg-secondary)',
                      fontSize: '0.9375rem',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" style={{
                    fontWeight: '600',
                    fontSize: '0.9375rem',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem'
                  }}>Email Address</label>
                  <input 
                    className="form-control" 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    style={{
                      padding: '0.875rem 1rem',
                      borderRadius: '12px',
                      border: '2px solid var(--border-color)',
                      background: 'var(--bg-secondary)',
                      fontSize: '0.9375rem',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label" style={{
                    fontWeight: '600',
                    fontSize: '0.9375rem',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem'
                  }}>Message</label>
                  <textarea 
                    className="form-control" 
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    style={{
                      padding: '0.875rem 1rem',
                      borderRadius: '12px',
                      border: '2px solid var(--border-color)',
                      background: 'var(--bg-secondary)',
                      fontSize: '0.9375rem',
                      transition: 'all 0.3s ease',
                      resize: 'vertical'
                    }}
                  ></textarea>
                </div>
                <button 
                  className="btn btn-primary w-100 fw-bold" 
                  type="submit" 
                  disabled={submitted}
                  style={{
                    padding: '1rem 2rem',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontWeight: '700',
                    background: submitted ? 'var(--success)' : 'var(--gradient-cool)',
                    border: 'none',
                    color: 'white',
                    boxShadow: submitted ? '0 4px 12px rgba(16, 185, 129, 0.4)' : '0 4px 12px rgba(6, 182, 212, 0.4)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  {submitted ? (
                    <>
                      <span>✓</span>
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span>→</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="card p-5 h-100" style={{
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)',
              border: '1px solid rgba(6, 182, 212, 0.2)',
              borderRadius: '24px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                bottom: '-50%',
                left: '-20%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
              }}></div>
              
              <h5 className="fw-bold mb-4" style={{ 
                color: 'var(--text-primary)',
                position: 'relative',
                zIndex: 1,
                fontSize: '1.5rem'
              }}>Contact Information</h5>
              
              <div className="mb-4" style={{
                padding: '1.5rem',
                background: 'var(--surface)',
                borderRadius: '16px',
                border: '1px solid var(--border-color)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                zIndex: 1
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(6, 182, 212, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '0.75rem'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: 'var(--gradient-cool)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem'
                  }}>📧</div>
                  <div>
                    <p className="small text-muted mb-1" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</p>
                    <a href="mailto:kushagrasingh905@gmail.com" className="fw-bold text-decoration-none" style={{ 
                      color: 'var(--text-primary)',
                      fontSize: '0.9375rem',
                      wordBreak: 'break-all'
                    }}>
                      kushagrasingh905@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mb-4" style={{
                padding: '1.5rem',
                background: 'var(--surface)',
                borderRadius: '16px',
                border: '1px solid var(--border-color)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                zIndex: 1
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(168, 85, 247, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '0.75rem'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: 'var(--gradient-purple)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem'
                  }}>📱</div>
                  <div>
                    <p className="small text-muted mb-1" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone</p>
                    <a href="tel:+917905366063" className="fw-bold text-decoration-none" style={{ 
                      color: 'var(--text-primary)',
                      fontSize: '0.9375rem'
                    }}>
                      +91 7905366063
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mb-4" style={{
                padding: '1.5rem',
                background: 'var(--surface)',
                borderRadius: '16px',
                border: '1px solid var(--border-color)',
                transition: 'all 0.3s ease',
                position: 'relative',
                zIndex: 1
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(245, 158, 11, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '0.75rem'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: 'var(--gradient-warm)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem'
                  }}>📍</div>
                  <div>
                    <p className="small text-muted mb-1" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Location</p>
                    <p className="fw-bold mb-0" style={{ 
                      color: 'var(--text-primary)',
                      fontSize: '0.9375rem'
                    }}>Kanpur, Uttar Pradesh, India</p>
                  </div>
                </div>
              </div>
              
              <div style={{
                padding: '1.5rem',
                background: 'var(--surface)',
                borderRadius: '16px',
                border: '1px solid var(--border-color)',
                position: 'relative',
                zIndex: 1
              }}>
                <p className="small text-muted mb-3" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Connect with me</p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a 
                    href="https://www.linkedin.com/in/kushagra-singh-344b72250" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      padding: '0.75rem 1.25rem',
                      background: 'var(--gradient-cool)',
                      color: 'white',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '0.9375rem',
                      transition: 'all 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      boxShadow: '0 4px 12px rgba(6, 182, 212, 0.3)'
                    }}
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://github.com/kushagra790" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      padding: '0.75rem 1.25rem',
                      background: 'var(--gradient-purple)',
                      color: 'white',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '0.9375rem',
                      transition: 'all 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      boxShadow: '0 4px 12px rgba(168, 85, 247, 0.3)'
                    }}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
