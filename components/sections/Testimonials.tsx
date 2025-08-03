import React from 'react';
import TestimonialCarousel from '../TestimonialCarousel';
import { testimonialData } from '../../data/testimonialData';

const SectionHeader: React.FC<{title: string; subtitle: string}> = ({ title, subtitle }) => (
    <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">{subtitle}</p>
        <div className="mt-4 w-24 h-1 bg-primary mx-auto rounded-full"></div>
    </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <SectionHeader 
            title="Trusted by Marketing Leaders"
            subtitle="Don't just take our word for it. Here's what our customers are saying about ADmyBRAND AI Suite."
        />
        <TestimonialCarousel testimonials={testimonialData} />
      </div>
    </section>
  );
};

export default Testimonials;