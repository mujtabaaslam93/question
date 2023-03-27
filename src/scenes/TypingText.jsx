import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';

const TypingText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 40; // adjust typing speed here

  useEffect(() => {
    const handleTyping = () => {
      const nextChar = text[currentIndex];
      const displayLength = displayText.length;

      if (!isDeleting) {
        setDisplayText(text.substring(0, displayLength + 1));
      } else {
        setDisplayText(text.substring(0, displayLength - 1));
      }

    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [displayText, currentIndex, isDeleting, text, typingSpeed]);

  return <Typography  color="#fc6e08" variant="h2">{displayText}</Typography>;
};

export default TypingText;
