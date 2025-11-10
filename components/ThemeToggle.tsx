import React from 'react';
import { SunIcon, MoonIcon } from './icons';

interface ThemeToggleProps {
  theme: string;
  toggleTheme: (event: React.MouseEvent) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => (
  <button onClick={toggleTheme} className="p-2 rounded-xl text-[--foreground-secondary] hover:bg-[--background-tertiary] transition-colors" aria-label="Toggle theme">
    <div className="relative w-5 h-5">
      <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`}>
        <SunIcon />
      </span>
      <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'}`}>
        <MoonIcon />
      </span>
    </div>
  </button>
);

export default ThemeToggle;