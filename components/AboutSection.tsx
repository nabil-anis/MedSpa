import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-24 md:py-40">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="animate-in overflow-hidden rounded-3xl aspect-[4/5]">
                        <img 
                            src={`https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1920&auto=format&fit=crop`}
                            alt="Serene spa interior"
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                    <div className="animate-in" style={{ transitionDelay: '200ms' }}>
                        <h2 className="font-serif text-5xl md:text-6xl font-medium leading-tight tracking-tighter">
                            Beauty, Intelligently.
                        </h2>
                        <p className="mt-8 text-lg text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                            Aura is founded on a simple, powerful idea: true radiance comes from within. We blend pioneering technology with an intuitive, human-centric approach to care. Each treatment is a collaboration, thoughtfully tailored to enhance your natural form and inspire a profound sense of confidence.
                        </p>
                         <p className="mt-6 text-lg text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                            This is the future of aesthetic wellness. This is Aura.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;