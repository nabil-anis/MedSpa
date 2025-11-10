import React from 'react';
import { SERVICES } from '../constants';
import { Service } from '../types';

const ServiceCard: React.FC<{ service: Service, index: number }> = ({ service, index }) => {
    return (
        <div
            className="animate-in group relative p-8 bg-light-card dark:bg-dark-card rounded-3xl shadow-light dark:shadow-dark border border-black/5 dark:border-white/5 overflow-hidden transition-all duration-400 hover:shadow-xl hover:-translate-y-2"
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="transition-transform duration-400 group-hover:scale-105">
                <div className="flex-shrink-0 w-10 h-10 text-light-accent dark:text-dark-accent">
                  <service.icon />
                </div>
                <h3 className="mt-6 font-serif text-2xl font-medium">
                    {service.title}
                </h3>
                <p className="mt-3 text-light-text-secondary dark:text-dark-text-secondary">
                    {service.description}
                </p>
            </div>
        </div>
    );
};

const ServicesSection: React.FC = () => {
    return (
        <section id="services" className="py-24 md:py-40 bg-white dark:bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="font-serif text-5xl md:text-6xl font-medium animate-in tracking-tighter">
                        Signature Treatments
                    </h2>
                    <p className="mt-6 text-lg max-w-2xl mx-auto text-light-text-secondary dark:text-dark-text-secondary animate-in" style={{ transitionDelay: '100ms' }}>
                        A curated selection of treatments, designed to rejuvenate your skin and enhance your unique beauty.
                    </p>
                </div>
                <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => (
                        <ServiceCard key={service.title} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;