const technologies = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  // Figma removed per request
  // Use Simple Icons CDN for some marketing/design tools (more consistent SVGs)
  { name: "Canva", icon: "https://cdn.simpleicons.org/canva/000000" },
  { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" },
  { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
  { name: "Premiere Pro", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg" },
  { name: "After Effects", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg" },
  { name: "CapCut", icon: "https://cdn.simpleicons.org/capcut/000000" },
  { name: "CorelDRAW", icon: "https://cdn.simpleicons.org/coreldraw" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
];

const TechMarquee = () => {
  // Duplicate the array for seamless loop (CSS animation will translate -50%)
  const duplicatedTechnologies = [...technologies, ...technologies];

  // Default duration (seconds) for the marquee animation. Make it easy to tweak.
  const defaultDurationSec = 20;

  return (
    <section className="py-16 overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center">
          Technologies & Tools
        </h2>
        <p className="text-center text-muted-foreground mt-2">
          Powered by cutting-edge tools and platforms
        </p>
      </div>
      
      <div className="relative">
        {/*
          Use a CSS keyframe animation for a truly seamless marquee.
          We duplicate the items and translate the whole row by -50%.
        */}
        <div className="overflow-hidden">
          <div
            className="flex gap-8 md:gap-12 marquee-items"
            // Expose the duration via a CSS variable so it's easy to tune or override.
            style={{ animation: `marquee var(--marquee-duration, ${defaultDurationSec}s) linear infinite`, ['--marquee-duration' as any]: `${defaultDurationSec}s` }}
          >
            {duplicatedTechnologies.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex flex-col items-center justify-center min-w-[100px] md:min-w-[120px] group flex-shrink-0"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-background rounded-lg p-3 shadow-sm group-hover:shadow-md transition-all group-hover:scale-110">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    onError={(e) => {
                      const el = e.currentTarget as HTMLImageElement;
                      el.onerror = null;
                      el.src = '/placeholder.svg';
                    }}
                  />
                </div>
                <span className="text-xs md:text-sm text-muted-foreground mt-2 font-medium">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Inline keyframes to avoid touching global Tailwind config */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-items { white-space: nowrap; }

          /* Pause on hover/focus for accessibility and control */
          .marquee-items:hover,
          .marquee-items:focus-within {
            animation-play-state: paused !important;
          }

          /* Respect user preference for reduced motion */
          @media (prefers-reduced-motion: reduce) {
            .marquee-items { animation: none !important; }
          }
        `}</style>
        
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-muted/30 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-muted/30 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default TechMarquee;
