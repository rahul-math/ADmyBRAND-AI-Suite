import React, { useState, useEffect } from 'react';
import { Testimonial } from '../types';
import Card from './ui/Card';
import Avatar from './ui/Avatar';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const ChevronLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

const ChevronRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);


const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timer = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex, testimonials.length]);

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="overflow-hidden relative h-80">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <Card className="h-full flex flex-col justify-center items-center text-center">
              <Avatar src={testimonial.avatarUrl} alt={testimonial.author} className="mb-4" />
              <blockquote className="text-lg text-muted-foreground italic">
                "{testimonial.quote}"
              </blockquote>
              <footer className="mt-4">
                <p className="font-bold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-primary">{testimonial.role}</p>
              </footer>
            </Card>
          </div>
        ))}
      </div>
      
      <button onClick={prevSlide} className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 bg-card p-2 rounded-full border border-border hover:bg-accent transition-colors">
        <ChevronLeftIcon className="w-6 h-6 text-foreground"/>
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 bg-card p-2 rounded-full border border-border hover:bg-accent transition-colors">
        <ChevronRightIcon className="w-6 h-6 text-foreground"/>
      </button>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-primary' : 'bg-muted hover:bg-muted-foreground/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;