import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="relative h-screen min-h-[700px] flex items-center justify-center text-center overflow-hidden">
            <div className="absolute inset-0 bg-light-bg dark:bg-dark-bg -z-10"></div>
            
            <div className="z-10 px-4 animate-in is-visible" style={{ animationDelay: '200ms' }}>
                <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter">
                    Redefining Radiance.
                </h1>
                <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-light-text-secondary dark:text-dark-text-secondary">
                    Where advanced science and aesthetic artistry converge. Discover treatments designed for your unique brilliance.
                </p>
                <div className="mt-12">
                    <a href="#services" className="px-8 py-4 text-base font-semibold tracking-wide bg-light-accent text-white dark:bg-dark-accent dark:text-dark-bg rounded-full shadow-lg hover:brightness-110 transform hover:scale-105 transition-all duration-300">
                        Explore Treatments
                    </a>
                </div>
            </div>
            
            <a href="#about" aria-label="Scroll down" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce text-light-text-secondary/50 dark:text-dark-text-secondary/50">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
            </a>
        </section>
    );
};

export default HeroSection;