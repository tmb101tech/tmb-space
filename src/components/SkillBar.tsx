import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
}

export const SkillBar = ({ name, percentage, delay = 0 }: SkillBarProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`skill-${name}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [name]);

  return (
    <div id={`skill-${name}`} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-body text-sm font-medium">{name}</span>
        <span className="font-body text-sm text-primary font-semibold">{percentage}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${percentage}%` } : { width: 0 }}
          transition={{
            duration: 1,
            delay,
            ease: "easeOut"
          }}
          className="h-full bg-gradient-to-r from-primary to-accent glow-ring rounded-full"
        />
      </div>
    </div>
  );
};
