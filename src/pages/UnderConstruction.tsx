import { motion } from 'framer-motion';
import { Construction, Github, Linkedin, Mail, Twitter, Instagram, Facebook } from 'lucide-react';

const UnderConstruction = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        {[...Array(15)].map((_, i) => (
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
        className="max-w-3xl mx-auto text-center space-y-8 relative z-10"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Construction className="w-24 h-24 mx-auto text-primary mb-8 animate-pulse-glow" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-heading font-bold mb-6"
        >
          Under Construction
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl font-body text-muted-foreground mb-4"
        >
          This site will be available soon at
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-3xl md:text-4xl font-heading font-bold text-primary soft-glow"
        >
          tmb.it.com
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="pt-8"
        >
          <p className="text-lg font-body text-muted-foreground mb-6">
            Contact TMB on social media:
          </p>

          <div className="flex flex-wrap gap-4 justify-center max-w-lg mx-auto">
            <a
              href="https://github.com/tmb101tech"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:glow-ring transition-smooth"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/toluwani-bakare-49910324a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:glow-ring transition-smooth"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://x.com/official_tmb01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:glow-ring transition-smooth"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://instagram.com/official.tmb01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:glow-ring transition-smooth"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/share/1aBZC5KPBt/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:glow-ring transition-smooth"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=2348026322742"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:glow-ring transition-smooth flex items-center justify-center"
              aria-label="WhatsApp"
            >
              <img 
                src="https://cdn.simpleicons.org/whatsapp/000000" 
                alt="WhatsApp" 
                className="w-6 h-6 dark:invert" 
              />
            </a>
            <a
              href="mailto:mosesbakare48@gmail.com"
              className="p-3 rounded-full border border-border hover:border-primary hover:glow-ring transition-smooth"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-sm text-muted-foreground font-body pt-8"
        >
          © {new Date().getFullYear()} Toluwani Moses Bakare. All rights reserved.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default UnderConstruction;
