import React from 'react';
import { resourceData } from '../../data/resourceData';
import ResourceCard from '../ui/ResourceCard';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Suite of Products</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Explore our comprehensive ecosystem of marketing and advertising tools designed for every need.
            </p>
            <div className="mt-4 w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-16">
          {resourceData.map((category) => (
            <div key={category.name}>
              <h3 className="text-2xl font-bold text-foreground mb-2">{category.name}</h3>
              <div className="w-20 h-0.5 bg-primary/50 mb-8"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <ResourceCard
                    key={item.title}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    bgColor={item.bgColor}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;