import React from 'react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="bg-light-card dark:bg-dark-card border-t border-black/5 dark:border-white/5">
            <div className="container mx-auto px-6 py-16">
                <div className="grid md:grid-cols-3 gap-12">
                    <div>
                        <a href="#" className="font-sans text-2xl font-semibold tracking-wide">AURA</a>
                        <p className="mt-4 text-sm text-light-text-secondary dark:text-dark-text-secondary">
                            Beauty, Intelligently.
                        </p>
                    </div>
                    <div className="md:justify-self-center">
                        <h4 className="font-semibold tracking-wider uppercase text-sm">Menu</h4>
                        <ul className="mt-4 space-y-3">
                            {NAV_LINKS.map(link => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors">{link.label}</a>
                                </li>
                            ))}
                             <li>
                                <a href="#about" className="text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors">About</a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:justify-self-end">
                        <h4 className="font-semibold tracking-wider uppercase text-sm">Follow</h4>
                        <div className="mt-4 flex space-x-4">
                            {/* Replace with actual social links */}
                            <a href="#" aria-label="Instagram" className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664 4.771 4.919 4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.28-.059-1.688-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-light-text/10 dark:border-dark-text/10 text-center text-xs text-light-text-secondary/80 dark:text-dark-text-secondary/80">
                    <p>&copy; {new Date().getFullYear()} Aura Aesthetics Clinic. All Rights Reserved. <span className="font-serif italic ml-2">by nbl.</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;