import React from 'react';

export interface Service {
  // Fix: Changed JSX.Element to React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
  icon: (props: React.ComponentProps<'svg'>) => React.ReactElement;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}
