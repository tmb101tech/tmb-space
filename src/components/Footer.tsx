import { Github, Linkedin, Mail, Twitter, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4 mb-2">
            <a
              href="https://github.com/tmb101tech"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:glow-ring transition-smooth"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/toluwani-bakare-49910324a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:glow-ring transition-smooth"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://x.com/official_tmb01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:glow-ring transition-smooth"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://instagram.com/official.tmb01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:glow-ring transition-smooth"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/share/1aBZC5KPBt/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:glow-ring transition-smooth"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=2348026322742"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:glow-ring transition-smooth flex items-center justify-center"
            >
              {/* Use Simple Icons CDN for WhatsApp logo (black) */}
              <img src="https://cdn.simpleicons.org/whatsapp/000000" alt="WhatsApp" className="w-5 h-5 dark:invert" />
            </a>
            <a
              href="mailto:mosesbakare48@gmail.com"
              className="p-3 rounded-full border border-border hover:border-primary hover:glow-ring transition-smooth"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-sm font-body mb-2">
              <span className="text-primary">✳</span> TMB | Tech + Faith + Growth
            </p>
            <p className="text-xs text-muted-foreground font-body">
              © {new Date().getFullYear()} Toluwani Moses Bakare. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
