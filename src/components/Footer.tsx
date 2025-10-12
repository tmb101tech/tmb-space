import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4 mb-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:glow-ring transition-smooth"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:glow-ring transition-smooth"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:glow-ring transition-smooth"
            >
              <Twitter size={20} />
            </a>
            <Link
              to="/contact"
              className="p-3 rounded-full border border-border hover:border-primary hover:glow-ring transition-smooth"
            >
              <Mail size={20} />
            </Link>
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
