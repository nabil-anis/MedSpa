import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';

const TestimonialsSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="testimonials" className="py-24 md:py-40">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto relative">
                     <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-9xl font-serif text-light-accent/10 dark:text-dark-accent/10">“</div>
                    <h2 className="font-serif text-5xl md:text-6xl font-medium animate-in tracking-tighter">
                        From Our Clients
                    </h2>
                    <div className="mt-12 h-40 relative">
                        {TESTIMONIALS.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex flex-col justify-center items-center ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <blockquote className="text-xl md:text-2xl italic font-serif max-w-3xl">
                                    {testimonial.quote}
                                </blockquote>
                                <cite className="block mt-6 font-semibold tracking-wider not-italic text-sm text-light-text-secondary dark:text-dark-text-secondary">
                                    {testimonial.author}
                                </cite>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;