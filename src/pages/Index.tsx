import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { RoleScroller } from '@/components/RoleScroller';
import { TypingName } from '@/components/TypingName';
import { SkillBar } from '@/components/SkillBar';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import TechMarquee from '@/components/TechMarquee';
import { ArrowRight, Code, Palette, Mail, Download, Eye } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import heroPortrait from '@/assets/hero-portrait.jpeg';
import resumePdf from '@/assets/Updated resume.pdf';

const Index = () => {
  const { toast } = useToast();
  const skills = [
    { name: 'HTML', percentage: 95 },
    { name: 'CSS', percentage: 90 },
    { name: 'Bootstrap', percentage: 85 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'TypeScript', percentage: 85 },
    { name: 'React', percentage: 45 },
    { name: 'Node.js', percentage: 80 },
    { name: 'Next.js', percentage: 85 },
    { name: 'PHP', percentage: 80 },
    { name: 'MySQL', percentage: 75 },
    { name: 'WordPress', percentage: 80 },
  ];

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
              className="w-full h-full rounded-full object-cover border-4 border-primary relative z-10 transition-transform duration-300 ease-out hover:scale-110 focus:scale-110"
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Button asChild size="lg" variant="outline" className="gap-2">
              <a href={resumePdf} target="_blank" rel="noopener noreferrer">
                <Eye size={20} />
                View Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <a href={resumePdf} download>
                <Download size={20} />
                Download Resume
              </a>
            </Button>
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
          <h2 className="text-4xl font-heading font-bold mb-4">Professional Web Solutions</h2>
          <p className="text-muted-foreground font-body">
            Modern web design and development showcasing technical expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto">
          {[
            { icon: Code, title: 'Web Development', category: 'Full Stack', link: '/projects' },
            { icon: Palette, title: 'UI/UX Design', category: 'Modern Interfaces', link: '/services' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Link to={item.link}>
                <Card className="p-8 glass-effect hover:glow-ring transition-smooth group cursor-pointer">
                  <item.icon className="w-14 h-14 text-primary mb-4 group-hover:animate-float" />
                  <h3 className="text-2xl font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-body mb-4">{item.category}</p>
                  <div className="text-sm text-primary font-medium">
                    {item.title === 'Web Development' ? 'View Projects' : 'Explore Services'}
                  </div>
                </Card>
              </Link>
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
              View All Projects
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
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-heading font-bold mb-4">Stack Proficiencies</h2>
          <p className="text-muted-foreground font-body mb-2">
            // Full Stack Developer and Creative Designer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SkillBar name={skill.name} percentage={skill.percentage} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/about">
            <Button size="lg" variant="outline" className="glass-effect">
              Learn More About Me <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Tech Stack Marquee */}
      <TechMarquee />

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

      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center glass-effect p-12 rounded-2xl"
        >
          <Mail className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-heading font-bold mb-4">
            Subscribe to News Channel
          </h2>
          <p className="text-muted-foreground font-body mb-8">
            Stay updated with my latest projects, insights, and creative work
          </p>
          <form
            className="flex flex-col sm:flex-row gap-4"
            onSubmit={async (e) => {
              e.preventDefault();
              const email = (e.currentTarget.elements[0] as HTMLInputElement).value?.trim();
              if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                toast({ title: 'Invalid email', description: 'Please enter a valid email address', variant: 'destructive' });
                return;
              }

              try {
                const { data, error } = await (supabase as any).from('subscribers').insert([{ email }]).select();
                if (error) throw error;
                toast({ title: 'Subscribed', description: 'Thanks — you have been added to the list!' });
                (e.currentTarget.elements[0] as HTMLInputElement).value = '';
              } catch (err: any) {
                console.error(err);
                toast({ title: 'Subscription failed', description: err.message || 'Please try again later', variant: 'destructive' });
              }
            }}
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
              required
              name="newsletterEmail"
            />
            <Button type="submit" size="lg" className="glow-ring">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            Contact: mosesbakare48@gmail.com
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
