import React, { useEffect, useState } from 'react';
import './animation.css';

const AnimationTwo = ({mission, onAnimationComplete}) => {
  const text = mission;

  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
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
        setIsAnimationComplete(true);
      }
    }, 50);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  useEffect(() => {
    if (isAnimationComplete) {
      onAnimationComplete();
    }
  }, [isAnimationComplete, onAnimationComplete]);

  return (
    <div className="typing-animation text_align">
      {typedText}
      {cursorVisible && <span>|</span>}
    </div>
  );
};

export default AnimationTwo;
