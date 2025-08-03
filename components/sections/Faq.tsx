import React from 'react';
import Accordion from '../ui/Accordion';
import { faqData } from '../../data/faqData';

const SectionHeader: React.FC<{title: string; subtitle: string}> = ({ title, subtitle }) => (
    <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">{subtitle}</p>
        <div className="mt-4 w-24 h-1 bg-primary mx-auto rounded-full"></div>
    </div>
);

const Faq: React.FC = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeader 
            title="Frequently Asked Questions"
            subtitle="Have questions? We have answers. If you can't find what you're looking for, feel free to contact us."
        />
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <Accordion key={index} question={item.question}>
              <p>{item.answer}</p>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;