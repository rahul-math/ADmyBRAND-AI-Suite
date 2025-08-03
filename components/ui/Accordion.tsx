import React, { useState } from 'react';

interface ChevronDownIconProps extends React.SVGProps<SVGSVGElement> {
    isOpen: boolean;
}

const ChevronDownIcon: React.FC<ChevronDownIconProps> = ({ isOpen, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
        className={`w-6 h-6 transition-transform duration-300 text-muted-foreground ${isOpen ? 'rotate-180' : ''}`} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
);

interface AccordionProps {
  question: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-6"
      >
        <span className="text-lg font-medium text-foreground">{question}</span>
        <ChevronDownIcon isOpen={isOpen} />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="row-[1_/_span_2] overflow-hidden">
            <div className="pb-6 text-muted-foreground">
              {children}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;