import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: 'var(--surface)',
      borderTop: '1px solid var(--border-color)',
      marginTop: '6rem',
      padding: '3rem 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '-50%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '200px',
        background: 'radial-gradient(ellipse, rgba(6, 182, 212, 0.05) 0%, transparent 70%)',
        pointerEvents: 'none'
      }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="text-center">
          <div style={{
            fontSize: '2rem',
            fontWeight: '800',
            background: 'var(--gradient-cool)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '1rem',
            letterSpacing: '-0.03em'
          }}>KS</div>
          
          <p className="mb-3" style={{
            color: 'var(--text-secondary)',
            fontSize: '0.9375rem'
          }}>
            Crafted with <span style={{ 
              color: 'var(--accent-pink)',
              fontSize: '1.125rem'
            }}>❤️</span> by <strong style={{ color: 'var(--text-primary)' }}>Kushagra Singh</strong>
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            marginBottom: '1.5rem',
            flexWrap: 'wrap'
          }}>
            <a href="#about" style={{
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: '600',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--primary-400)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
              About
            </a>
            <a href="#projects" style={{
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: '600',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--primary-400)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
              Projects
            </a>
            <a href="#skills" style={{
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: '600',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--primary-400)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
              Skills
            </a>
            <a href="#contact" style={{
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: '600',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--primary-400)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
              Contact
            </a>
          </div>
          
          <div style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, var(--border-color), transparent)',
            margin: '1.5rem 0'
          }}></div>
          
          <p className="small text-muted mb-0" style={{ fontSize: '0.875rem' }}>
            © {currentYear} — Built with <strong style={{ color: 'var(--primary-400)' }}>React</strong>, <strong style={{ color: 'var(--accent-purple)' }}>Modern CSS</strong>, and <strong style={{ color: 'var(--accent-amber)' }}>Passion</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
