import React, { useEffect, useState } from 'react';
import './animation.css';

const TypingAnimation = ({ourvision}) => {
  const text = ourvision;

  const [typedText, setTypedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      currentText += text[currentIndex];
      setTypedText(currentText);

      currentIndex += 1;

      if (currentIndex === text.length) {
        clearInterval(typingInterval);
        setCursorVisible(false);
      }
    }, 50);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <div className="typing-animation text_align">
      {typedText}
      {cursorVisible && <span>|</span>}
    </div>
  );
};

export default TypingAnimation;
