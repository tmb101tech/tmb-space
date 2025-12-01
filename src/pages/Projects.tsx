import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

type Project = {
  title: string;
  category: string;
  subcategory?: string;
  description: string;
  stack: string[];
  type: 'web' | 'graphics' | 'video' | string;
  year: string;
  live?: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: 'edu.ai App',
    category: 'Web Application',
    subcategory: 'Startup (In Progress)',
    description: 'Personalized AI tutoring for preparations of exams like: WAEC, JAMB, NECO, and university courses. Study smarter with AI-powered explanations, practice questions, and analytics.',
    stack: ['TypeScript', 'CSS', 'PLpgSQL', 'Supabase',],
    type: 'web',
    year: '2025',
    github: 'https://github.com/tmb101tech/edu-ai-app',
    live: 'https://eduai-app.netlify.app/',
  },
  {
    title: 'My first Landing Page',
    category: 'Web Development',
    subcategory: 'Personal',
    description: 'The first landing page I built when I started learning web development.',
    stack: ['HTML', 'CSS'],
    type: 'web',
    year: '2020',
    github: 'https://github.com/tmb101tech/first-web-project',
    live: 'https://firstweb-project.netlify.app/',
  },
  {
    title: 'Krea-AI Landing Page Clone',
    category: 'Web Development',
    subcategory: 'Personal',
    description: "A clone of Krea AI's home page.",
    stack: ['TypeScript', 'JavaScript', 'CSS', 'Next.js'],
    type: 'web',
    year: '2025',
    github: 'https://github.com/tmb101tech/KreaAI-clone',
    live: 'https://krea-aiclone.netlify.app/',
  },
  {
    title: 'Weather App',
    category: 'Web Development',
    subcategory: 'Personal',
    description: 'A responsive weather app with search functionality, unit conversion and location tracker.',
    stack: ['HTML', 'JavaScript', 'CSS', 'Open-Meteo API'],
    type: 'web',
    year: '2025',
    github: 'https://github.com/tmb101tech/Weather-app',
    live: 'https://universal-weather-forcast.netlify.app/',
  },
  {
    title: 'Wips Certificate Generator',
    category: 'Web Development',
    subcategory: 'Client',
    description: 'Content management system with markdown support',
    stack: ['Next.js', 'TailwindCSS'],
    type: 'web',
    year: '2024',
    github: 'https://github.com/tmb101tech/WIPS-Certificate-Generator',
    live: 'https://wips-certificate-generator.vercel.app/',
  },
  {
    title: 'Restaurant Website',
    category: 'Web Development',
    subcategory: 'Client',
    description: 'Responsive restaurant site with online menu and reservations',
    stack: ['React', 'Node.js', 'MySQL'],
    type: 'web',
    year: '2024',
  },
  {
    title: 'IBMSSP Business Website',
    category: 'Web Development',
    subcategory: 'Client',
    description: 'Showcase services and resources for IBMSSP and basically about the company as well.',
    stack: ['Wordpress', 'Elementor'],
    type: 'web',
    year: '2025',
    live: 'https://ibmssp.org.ng/',
  },
  {
    title: 'Windows 7 Calculator Clone',
    category: 'Web Development',
    subcategory: 'Personal',
    description: 'My Web version of Windows 7 Calculator. One of my earliest projects.',
    stack: ['HTMl', 'CSS', 'JavaScript'],
    type: 'web',
    year: '2021',
    github: 'https://github.com/tmb101tech/Win-7-calculator-clone',
    live: 'https://win-7-calc-clone.netlify.app/',
  },
  {
    title: 'Church Brand Identity',
    category: 'Brand Design',
    description: 'Complete branding package including logo, materials, and social media assets',
    stack: ['Photoshop', 'Illustrator', 'Figma'],
    type: 'graphics',
    year: '2024',
  },
  {
    title: 'Product Launch Video',
    category: 'Video Production',
    description: 'High quality promotional video with motion graphics and professional editing',
    stack: ['Premiere Pro', 'After Effects', 'DaVinci Resolve'],
    type: 'video',
    year: '2024',
  },
];

const Projects = () => {
  const webProjects = projects.filter(p => p.type === 'web');
  const graphicsProjects = projects.filter(p => p.type === 'graphics');
  const videoProjects = projects.filter(p => p.type === 'video');

  const renderProjectCard = (project: typeof projects[0], index: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="glass-effect p-6 h-full flex flex-col hover:glow-ring transition-bounce group cursor-pointer">
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap mb-2">
            <span className="text-xs font-body text-primary font-semibold uppercase">
              {project.category}
            </span>
            {project.subcategory && (
              <span className="text-xs font-body px-2 py-1 rounded-full bg-secondary/20 text-secondary-foreground">
                {project.subcategory}
              </span>
            )}
            <span className="text-xs font-body px-2 py-1 rounded-full bg-muted text-muted-foreground">
              {project.year}
            </span>
          </div>
          <h3 className="text-2xl font-heading font-semibold mt-2 mb-3">
            {project.title}
          </h3>
          <p className="font-body text-muted-foreground mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-body px-3 py-1 bg-primary/10 text-primary rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <Button asChild size="sm" variant="outline" className="flex-1">
            <a
              href={project.live || '#'}
              target={project.live ? '_blank' : undefined}
              rel={project.live ? 'noopener noreferrer' : undefined}
              aria-label={`View ${project.title} live`}
            >
              <ExternalLink className="mr-2" size={14} />
              View Live
            </a>
          </Button>
          {project.type === 'web' && project.github && (
            <Button asChild size="sm" variant="outline">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source on GitHub`}
              >
                <Github size={14} />
              </a>
            </Button>
          )}
        </div>
      </Card>
    </motion.div>
  );

  return (
    <div className="min-h-screen py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 100 + 40,
              height: Math.random() * 100 + 40,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 
                ? 'hsl(220, 100%, 62%)' 
                : i % 3 === 1 
                  ? 'hsl(280, 100%, 65%)' 
                  : 'hsl(160, 100%, 45%)',
              filter: 'blur(60px)',
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, 50, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-heading font-bold mb-6 gradient-text animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}>Web Projects</h1>
          <p className="text-xl font-body text-muted-foreground">
            A collection of web applications and websites showcasing modern design and functionality
          </p>
        </motion.div>

        {/* Web Development Projects */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjects.map((project, index) => renderProjectCard(project, index))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center glass-effect p-12 rounded-2xl"
        >
          <h2 className="text-3xl font-heading font-bold mb-4">
            Have a project in mind?
          </h2>
          <p className="font-body text-muted-foreground mb-6">
            Let us build it together
          </p>
          <Link to="/contact">
            <Button size="lg" className="glow-ring">
              Start a Project
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
