import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

interface HeaderProps {
    theme: string;
    toggleTheme: () => void;
}

const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);


const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 w-full flex justify-center z-40 transition-all duration-300 ${scrolled ? 'py-2' : 'py-6'}`}>
             <div className={`flex justify-between items-center w-[calc(100%-2rem)] max-w-xl rounded-full transition-all duration-300 ${scrolled ? 'bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-xl shadow-lg border border-black/5 dark:border-white/10' : 'bg-transparent'}`}>
                <a href="#" className="font-sans text-lg font-semibold tracking-wide pl-6">AURA</a>
                
                <nav className="hidden sm:flex items-center gap-6">
                    {NAV_LINKS.map(link => (
                        <a key={link.label} href={link.href} className="text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-dark-text transition-colors">{link.label}</a>
                    ))}
                </nav>

                <div className="pr-2">
                    <button onClick={toggleTheme} aria-label="Toggle theme" className="w-9 h-9 flex items-center justify-center rounded-full text-light-text/80 dark:text-dark-text/80 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                      <div className="relative w-5 h-5">
                        <span className={`absolute transition-all duration-300 ${theme === 'light' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}><SunIcon /></span>
                        <span className={`absolute transition-all duration-300 ${theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`}><MoonIcon /></span>
                      </div>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;