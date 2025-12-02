import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Palette, Lightbulb, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Code,
    title: 'Custom Web Development',
    description: 'Full-stack web applications built with cutting-edge technologies and best practices',
    deliverables: ['Responsive Design', 'Database Architecture', 'API Development', 'Performance Optimization'],
    timeline: '3-8 weeks',
  },
  {
    icon: Palette,
    title: 'Branding & Identity',
    description: 'Complete brand identity design including logos, color schemes, and brand guidelines',
    deliverables: ['Logo Design', 'Color Palette', 'Brand Guidelines', 'Typography System'],
    timeline: '2-4 weeks',
  },
  {
    icon: Instagram,
    title: 'Social Media Management',
    description: 'Strategic social media management to grow your online presence and engagement',
    deliverables: ['Content Strategy', 'Post Scheduling', 'Analytics Reporting', 'Community Management'],
    timeline: 'Ongoing',
  },
  {
    icon: Lightbulb,
    title: 'Web Strategy & Consulting',
    description: 'Strategic guidance to optimize your digital presence and technical architecture',
    deliverables: ['Technical Audits', 'Performance Analysis', 'SEO Strategy', 'Architecture Planning'],
    timeline: '1-2 weeks',
  },
  {
    icon: Code,
    title: 'E-Commerce Solutions',
    description: 'Complete online store setup with payment integration and inventory management',
    deliverables: ['Store Setup', 'Payment Gateway', 'Product Management', 'Analytics Dashboard'],
    timeline: '4-8 weeks',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 120 + 60,
              height: Math.random() * 120 + 60,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 
                ? 'hsl(220, 100%, 62%)' 
                : i % 3 === 1 
                  ? 'hsl(280, 100%, 65%)' 
                  : 'hsl(160, 100%, 45%)',
              filter: 'blur(70px)',
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 40, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
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
          <h1 className="text-5xl font-heading font-bold mb-6 gradient-text animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}>Web Design Services</h1>
          <p className="text-xl font-body text-muted-foreground max-w-2xl mx-auto">
            Professional web design and development services that bring your digital vision to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect p-8 h-full hover:glow-ring transition-bounce group cursor-pointer">
                <service.icon className="w-12 h-12 text-primary mb-4 group-hover:animate-float transition-bounce" />
                <h3 className="text-2xl font-heading font-semibold mb-3">{service.title}</h3>
                <p className="font-body text-muted-foreground mb-6">{service.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm font-body font-semibold text-primary mb-2">
                      Deliverables:
                    </p>
                    <ul className="space-y-1">
                      {service.deliverables.map((item) => (
                        <li key={item} className="text-sm font-body text-muted-foreground flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-body">
                      <span className="font-semibold text-primary">Timeline:</span>{' '}
                      {service.timeline}
                    </p>
                  </div>
                </div>

                <Link to={`/contact?service=${encodeURIComponent(service.title)}`}>
                  <Button className="w-full glow-ring transition-bounce">Request a Quote</Button>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
