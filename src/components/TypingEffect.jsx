import React, { useState, useEffect } from 'react';

const TypingEffect = () => {
  const [text, setText] = useState('');
  const phrases = [
    "Aspiring DevOps and Cloud Engineer",
    "Hands-on experience with AWS and Kubernetes",
    "Passionate about cloud-native technologies"
  ];

  useEffect(() => {
    let pIdx = 0;
    let ch = 0;
    let forward = true;

    const typeTick = () => {
      const phrase = phrases[pIdx];
      
      if (forward) {
        ch++;
        setText(phrase.slice(0, ch));
        
        if (ch === phrase.length) {
          forward = false;
          setTimeout(typeTick, 1200);
          return;
        }
      } else {
        ch--;
        setText(phrase.slice(0, ch));
        
        if (ch === 0) {
          forward = true;
          pIdx = (pIdx + 1) % phrases.length;
        }
      }
      
      setTimeout(typeTick, forward ? 50 : 30);
    };

    typeTick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span id="typed-text" className="typed">{text}</span>;
};

export default TypingEffect;
