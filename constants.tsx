import React from 'react';
import { Service, Testimonial } from './types';

export const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#cta', label: 'Book Now' },
];

const FacialIcon = (props: React.ComponentProps<'svg'>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9 9.75h.008v.008H9v-.008zm6 0h.008v.008H15v-.008z" />
  </svg>
);

const LaserIcon = (props: React.ComponentProps<'svg'>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 21.75l-.648-1.188a2.25 2.25 0 01-1.47-1.47L12.964 18l1.188-.648a2.25 2.25 0 011.47-1.47L16.25 15l.648 1.188a2.25 2.25 0 011.47 1.47L19.536 18l-1.188.648a2.25 2.25 0 01-1.47 1.47z" />
  </svg>
);

const InjectionIcon = (props: React.ComponentProps<'svg'>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const SERVICES: Service[] = [
  {
    icon: FacialIcon,
    title: 'Signature HydraFacial',
    description: 'A non-invasive treatment that deeply cleanses, exfoliates, extracts, and hydrates the skin.'
  },
  {
    icon: LaserIcon,
    title: 'Laser Genesis',
    description: 'Stimulate collagen regrowth to reduce the appearance of fine lines, wrinkles, and redness.'
  },
  {
    icon: InjectionIcon,
    title: 'Cosmetic Injectables',
    description: 'Expertly administered fillers and neurotoxins to restore volume and smooth lines.'
  },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        quote: "The results from my treatment are phenomenal. I feel like I've turned back the clock ten years. The staff is incredibly professional and caring.",
        author: "Jessica M."
    },
    {
        quote: "I was nervous about getting injectables, but the team at Aura made me feel so comfortable. The results are natural and exactly what I wanted.",
        author: "Sarah L."
    },
    {
        quote: "A truly luxurious and relaxing experience from start to finish. My skin has never looked better. I can't recommend them highly enough.",
        author: "Emily R."
    }
];