import React from 'react';
import Card from '../ui/Card';
import { featuresData } from '../../data/featureData';

const SectionHeader: React.FC<{title: string; subtitle: string}> = ({ title, subtitle }) => (
    <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">{subtitle}</p>
        <div className="mt-4 w-24 h-1 bg-primary mx-auto rounded-full"></div>
    </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <SectionHeader 
            title="Everything You Need to Scale"
            subtitle="Our AI-powered suite is designed to tackle your biggest marketing challenges, turning data into revenue."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card className="h-full">
                    {feature.icon}
                    <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                </Card>
            </div>
          ))}
        </div>
      </div>
       <style>{`
            @keyframes fade-in-up {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in-up {
                animation: fade-in-up 0.5s ease-out forwards;
                opacity: 0;
            }
        `}</style>
    </section>
  );
};

export default Features;