import React from 'react';

const CTASection: React.FC = () => {
    return (
        <section
            id="cta"
            className="py-24 md:py-40 bg-cover bg-center"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1558986835-35c0e1a189a5?q=80&w=1920&auto=format&fit=crop)` }}
        >
            <div className="absolute inset-0 bg-dark-bg/70"></div>
            <div className="container mx-auto px-6 text-center relative z-10">
                <div className="max-w-2xl mx-auto">
                    <h2 className="font-serif text-5xl md:text-6xl font-medium text-white animate-in tracking-tighter">
                        Begin Your Transformation
                    </h2>
                    <p className="mt-6 text-lg text-dark-text/80 animate-in" style={{ transitionDelay: '100ms' }}>
                        Ready to reveal your inner radiance? Schedule a private consultation with one of our aesthetic experts today.
                    </p>
                    <div className="mt-12 animate-in" style={{ transitionDelay: '200ms' }}>
                        <a href="#" className="px-8 py-4 text-base font-semibold tracking-wide bg-dark-accent text-dark-bg rounded-full shadow-lg hover:brightness-110 transform hover:scale-105 transition-all duration-300">
                            Book Your Consultation
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;