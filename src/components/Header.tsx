import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: '< Home >' },
    { path: '/about', label: '< About >' },
    { path: '/projects', label: '< Projects >' },
    { path: '/services', label: '< Services >' },
    { path: '/reviews', label: '< Reviews >' },
    { path: '/contact', label: '< Contact >' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 glass-effect"
      >
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-heading font-bold">
            <motion.span
              className="relative inline-block"
              animate={{
                backgroundImage: [
                  'linear-gradient(45deg, hsl(220, 100%, 62%), hsl(280, 100%, 65%))',
                  'linear-gradient(45deg, hsl(280, 100%, 65%), hsl(35, 100%, 82%))',
                  'linear-gradient(45deg, hsl(35, 100%, 82%), hsl(160, 100%, 45%))',
                  'linear-gradient(45deg, hsl(160, 100%, 45%), hsl(220, 100%, 62%))',
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                textShadow: '0 0 30px rgba(58, 134, 255, 0.5)',
              }}
            >
             {"{ TMB }"}
            </motion.span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body transition-smooth ${
                  isActive(link.path)
                    ? 'text-primary font-semibold'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="glow-ring"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-30 md:hidden glass-effect border-t border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-body text-lg transition-smooth py-2 ${
                    isActive(link.path)
                      ? 'text-primary font-semibold'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
