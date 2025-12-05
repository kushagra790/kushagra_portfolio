import React, { useState } from 'react';

const Navbar = ({ onThemeToggle, isDark }) => {
  const [expanded, setExpanded] = useState(false);

  const handleContactClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setExpanded(false);
  };

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setExpanded(false);
  };

  return (
    <nav className="navbar navbar-expand-lg py-3 navbar-custom" style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backdropFilter: 'blur(20px) saturate(180%)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      borderBottom: '1px solid var(--border-color)',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
    }}>
      <div className="container">
        <a className="navbar-brand" href="#home" style={{
          fontSize: '1.75rem',
          fontWeight: '800',
          background: 'var(--gradient-primary)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textDecoration: 'none',
          letterSpacing: '-0.03em',
          position: 'relative',
          padding: '0.5rem 0'
        }}>
          KS
        </a>
        <button 
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={expanded}
          onClick={() => setExpanded(!expanded)}
          style={{
            background: 'transparent',
            border: '2px solid var(--border-color)',
            padding: '0.5rem 0.75rem',
            borderRadius: '12px',
            cursor: 'pointer'
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="navbarNav">
          <div className="navbar-nav ms-auto gap-lg-3 gap-2" style={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <a 
              className="nav-link" 
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('about');
              }}
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '0.9375rem',
                padding: '0.5rem 1rem',
                borderRadius: '12px',
                transition: 'all 0.2s ease',
                position: 'relative'
              }}
            >
              About
            </a>
            <a 
              className="nav-link" 
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('projects');
              }}
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '0.9375rem',
                padding: '0.5rem 1rem',
                borderRadius: '12px',
                transition: 'all 0.2s ease',
                position: 'relative'
              }}
            >
              Projects
            </a>
            <a 
              className="nav-link" 
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('skills');
              }}
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '0.9375rem',
                padding: '0.5rem 1rem',
                borderRadius: '12px',
                transition: 'all 0.2s ease',
                position: 'relative'
              }}
            >
              Skills
            </a>
            <a 
              className="nav-link" 
              href="#education"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('education');
              }}
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '0.9375rem',
                padding: '0.5rem 1rem',
                borderRadius: '12px',
                transition: 'all 0.2s ease',
                position: 'relative'
              }}
            >
              Education
            </a>
            <div className="d-flex gap-2 align-items-center ms-lg-3 mt-3 mt-lg-0 flex-wrap">
              <button 
                id="themeToggle" 
                className="btn btn-sm btn-theme-toggle"
                onClick={onThemeToggle}
                title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '12px',
                  fontSize: '1.25rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {isDark ? '☀️' : '🌙'}
              </button>
              <button 
                className="btn btn-primary btn-sm"
                onClick={handleContactClick}
                style={{
                  background: 'var(--gradient-cool)',
                  border: 'none',
                  padding: '0.625rem 1.25rem',
                  borderRadius: '12px',
                  fontSize: '0.9375rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  color: 'white',
                  boxShadow: '0 4px 12px rgba(6, 182, 212, 0.3)'
                }}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
