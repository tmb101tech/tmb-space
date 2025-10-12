import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Full stack online store with payment integration and admin dashboard',
    stack: ['React', 'Node.js', 'MySQL', 'Stripe'],
    type: 'web',
  },
  {
    title: 'Church Brand Identity',
    category: 'Brand Design',
    description: 'Complete branding package including logo, materials, and social media assets',
    stack: ['Photoshop', 'Illustrator', 'Figma'],
    type: 'graphics',
  },
  {
    title: 'Product Launch Video',
    category: 'Video Production',
    description: 'High quality promotional video with motion graphics and professional editing',
    stack: ['Premiere Pro', 'After Effects', 'DaVinci Resolve'],
    type: 'video',
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-heading font-bold mb-6">My Projects</h1>
          <p className="text-xl font-body text-muted-foreground">
            A showcase of my work across web development, design, and video production
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect p-6 h-full flex flex-col hover:glow-ring transition-smooth group">
                <div className="flex-1">
                  <span className="text-xs font-body text-primary font-semibold uppercase">
                    {project.category}
                  </span>
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
                  <Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink className="mr-2" size={14} />
                    View Live
                  </Button>
                  {project.type === 'web' && (
                    <Button size="sm" variant="outline">
                      <Github size={14} />
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
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
