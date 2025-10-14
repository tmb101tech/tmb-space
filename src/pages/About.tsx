import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SkillBar } from '@/components/SkillBar';
import { Download, Eye } from 'lucide-react';
import resumePdf from '@/assets/Updated resume.pdf';

const skills = [
  { name: 'HTML', percentage: 95 },
  { name: 'CSS', percentage: 90 },
  { name: 'Bootstrap', percentage: 85 },
  { name: 'JavaScript', percentage: 80 },
  { name: 'TypeScript', percentage: 85 },
  { name: 'React', percentage: 45 },
  { name: 'Node.js', percentage: 80 },
  { name: 'PHP', percentage: 70 },
  { name: 'MySQL', percentage: 75 },
  { name: 'WordPress', percentage: 80 },
];

const About = () => {
  return (
    <div className="min-h-screen py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
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
              y: [0, -50, 0],
              x: [0, 30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-heading font-bold mb-6 gradient-text animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}>About Me</h1>
          <p className="text-xl font-body text-muted-foreground">
            Discover my journey, skills, and passion for creating impactful digital experiences
          </p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="glass-effect p-6 md:p-8 rounded-2xl">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">My Story</h2>
            <div className="space-y-5 md:space-y-4 font-body text-foreground leading-relaxed text-sm md:text-base">
              <p>
                Hello! I'm Toluwani Moses Bakare, a passionate Full Stack Developer and Creative Designer 
                who believes in the power of technology to transform lives and businesses. My journey in 
                the digital world began with a curiosity for how things work and a desire to create 
                solutions that make a difference.
              </p>
              <p>
                As a Christian, my faith guides my work ethic and inspires me to approach every project 
                with integrity, excellence, and a servant's heart. I believe that technology, when used 
                purposefully, can be a powerful tool for positive impact.
              </p>
              <p>
                Beyond code and design, I'm deeply passionate about visual storytelling through photography 
                and videography. This creative perspective enhances my technical work, allowing me to build 
                not just functional solutions, but beautiful, engaging experiences that resonate with users.
              </p>
            </div>
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="glass-effect p-8 rounded-2xl text-center">
            <h2 className="text-3xl font-heading font-semibold mb-4">Let's Work Together</h2>
            <p className="font-body text-muted-foreground mb-6">
              I'm always excited to collaborate on meaningful projects that challenge me creatively 
              and technically. Whether you need a full stack web application, brand design, or video 
              production, I'm here to help bring your vision to life.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" variant="outline" className="gap-2">
                <a href={resumePdf} target="_blank" rel="noopener noreferrer">
                  <Eye size={20} />
                  View Resume
                </a>
              </Button>
              <Button asChild size="lg" className="gap-2 glow-ring">
                <a href={resumePdf} download>
                  <Download size={20} />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="glass-effect p-8 rounded-2xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-primary font-mono text-sm">// Full Stack Developer and Creative Designer</span>
            </div>
            <h2 className="text-3xl font-heading font-semibold mb-8">Skills & Technologies</h2>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
