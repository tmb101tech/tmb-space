import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isAutoTheme: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

const getTimeBasedTheme = (): Theme => {
  const hour = new Date().getHours();
  return hour >= 6 && hour < 18 ? 'light' : 'dark';
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('theme-override');
    if (stored) return stored as Theme;
    return getTimeBasedTheme();
  });
  const [isAutoTheme, setIsAutoTheme] = useState(() => !localStorage.getItem('theme-override'));

  useEffect(() => {
    if (isAutoTheme) {
      const interval = setInterval(() => {
        setTheme(getTimeBasedTheme());
      }, 60000);
      return () => clearInterval(interval);
    }
  }, [isAutoTheme]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    root.style.transition = 'background-color 0.5s ease, color 0.5s ease';
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setIsAutoTheme(false);
    localStorage.setItem('theme-override', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isAutoTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
