import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground font-body">
              ✳️ TMB | Tech + Faith + Growth
            </p>
            <p className="text-xs text-muted-foreground mt-2 font-body">
              © {new Date().getFullYear()} Toluwani Moses Bakare. All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass-effect hover:glow-ring transition-smooth"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass-effect hover:glow-ring transition-smooth"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass-effect hover:glow-ring transition-smooth"
            >
              <Twitter size={20} />
            </a>
            <Link
              to="/contact"
              className="p-2 rounded-full glass-effect hover:glow-ring transition-smooth"
            >
              <Mail size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
