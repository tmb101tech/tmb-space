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
    <div className="inline-flex items-center gap-2 text-lg md:text-xl font-body">
      <span className="text-muted-foreground">I am a</span>
      <div className="relative h-8 w-64 overflow-hidden">
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
            className="absolute left-0 text-primary font-semibold"
          >
            {roles[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};
