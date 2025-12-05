import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/index.css';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('ks_theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.body.classList.add('dark');
    }
  }, []);

  const handleThemeToggle = () => {
    setIsDark(!isDark);
    
    if (!isDark) {
      document.body.classList.add('dark');
      localStorage.setItem('ks_theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('ks_theme', 'light');
    }
  };

  return (
    <div className="App">
      <div className="bg-blob" aria-hidden="true"></div>
      <div className="bg-blob" aria-hidden="true" style={{}}></div>
      <Navbar onThemeToggle={handleThemeToggle} isDark={isDark} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
