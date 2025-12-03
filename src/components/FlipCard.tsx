import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

interface FlipCardProps {
  frontContent?: React.ReactNode;
  backImage: string;
  alt: string;
}

export const FlipCard = ({ frontContent, backImage, alt }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="w-full aspect-[4/3] cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <div 
          className="absolute inset-0 w-full h-full rounded-xl glass-effect flex flex-col items-center justify-center gap-4 backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {frontContent || (
            <>
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary via-purple-500 to-teal-400 flex items-center justify-center animate-pulse">
                <Code2 className="w-10 h-10 text-white" />
              </div>
              <div className="text-center">
                <p className="font-heading font-bold text-xl gradient-text">TMB</p>
                <p className="text-muted-foreground text-sm font-body">Tap to reveal</p>
              </div>
              <div className="flex gap-2 mt-2">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">Developer</span>
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-medium">Designer</span>
              </div>
            </>
          )}
        </div>

        {/* Back of card (the photo) */}
        <div 
          className="absolute inset-0 w-full h-full rounded-xl overflow-hidden ring-2 ring-primary/30 shadow-lg backface-hidden"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <img 
            src={backImage} 
            alt={alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p className="text-white font-heading font-semibold text-lg">Toluwani Moses Bakare</p>
            <p className="text-white/80 text-sm">Full Stack Developer & Brand Designer</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
