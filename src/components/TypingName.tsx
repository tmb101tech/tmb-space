import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const words = ['Toluwani', 'Moses', 'Bakare'];

export const TypingName = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showColored, setShowColored] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    if (!isTyping) return;

    const fullText = words.join(' ');
    const typingSpeed = 80;
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        setTimeout(() => setShowColored(true), 300);
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  if (!showColored) {
    return (
      <h1 className="text-5xl md:text-7xl font-heading font-bold">
        <motion.span
          className={theme === 'dark' ? 'text-white' : 'text-black'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {displayText}
          {isTyping && (
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-0.5 h-12 md:h-16 bg-current ml-1"
            />
          )}
        </motion.span>
      </h1>
    );
  }

  return (
    <h1 className="text-5xl md:text-7xl font-heading font-bold">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="inline-block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent 
                   animate-shimmer relative"
        style={{
          backgroundSize: '200% 100%',
        }}
      >
        <span className="relative inline-block" style={{ color: 'hsl(220, 100%, 62%)' }}>
          Toluwani
        </span>
        {' '}
        <span className="relative inline-block" style={{ color: 'hsl(280, 100%, 65%)' }}>
          Moses
        </span>
        {' '}
        <span className="relative inline-block" style={{ color: 'hsl(35, 100%, 62%)' }}>
          Bakare
        </span>
      </motion.span>
    </h1>
  );
};
