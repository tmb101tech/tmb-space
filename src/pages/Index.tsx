import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { RoleScroller } from '@/components/RoleScroller';
import { TypingName } from '@/components/TypingName';
import { ArrowRight, Code, Palette, Video } from 'lucide-react';
import heroPortrait from '@/assets/hero-portrait.jpg';

const Index = () => {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-24">
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-8 relative z-10"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative w-48 h-48 mx-auto"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
            <img
              src={heroPortrait}
              alt="Toluwani Moses Bakare"
              className="w-full h-full rounded-full object-cover border-4 border-primary relative z-10"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg font-body text-primary soft-glow"
          >
            Meet TMB
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <TypingName />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center"
          >
            <RoleScroller />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-lg font-body text-muted-foreground max-w-2xl mx-auto"
          >
            Passionate about building exceptional digital experiences that merge technology, 
            creativity, and purpose. Let's create something amazing together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Link to="/about">
              <Button size="lg" className="glow-ring">
                Learn More About Me <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="glass-effect">
                Get In Touch
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-heading font-bold mb-4">Featured Work</h2>
          <p className="text-muted-foreground font-body">
            A glimpse into my creative and technical projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { icon: Code, title: 'Web Development', category: 'Full Stack' },
            { icon: Palette, title: 'Brand Design', category: 'Graphics' },
            { icon: Video, title: 'Video Production', category: 'Creative' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 glass-effect hover:glow-ring transition-smooth group cursor-pointer">
                <item.icon className="w-12 h-12 text-primary mb-4 group-hover:animate-float" />
                <h3 className="text-xl font-heading font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body mb-4">{item.category}</p>
                <Button variant="ghost" size="sm" className="group-hover:text-primary">
                  View Project <ArrowRight className="ml-2" size={16} />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/projects">
            <Button size="lg" variant="outline" className="glass-effect">
              View More Projects
            </Button>
          </Link>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center glass-effect p-12 rounded-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to bring your vision to life?
          </h2>
          <p className="text-lg font-body text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a session with me today and let us bring your business to life
          </p>
          <Link to="/contact">
            <Button size="lg" className="glow-ring">
              Get Started <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
