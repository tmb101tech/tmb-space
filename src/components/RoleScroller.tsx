import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const roles = [
  'Christian',
  'Full Stack Developer',
  'Brand Designer',
  'Graphics Designer',
  'Videographer',
  'Photographer',
  'Video Editor',
  'Photo Editor',
  'AI Enthusiast',
];

export const RoleScroller = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1 text-lg md:text-xl font-body w-full">
      <span className="text-muted-foreground text-xl md:text-2xl text-center">I am a</span>
      <div className="relative h-9 md:h-10 w-full sm:min-w-[250px] sm:w-auto overflow-hidden flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            className="text-primary font-semibold text-lg md:text-xl text-center"
          >
            {roles[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};
