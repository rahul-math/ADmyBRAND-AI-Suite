import React from 'react';
import { resourceData } from '../data/resourceData';
import ResourceLink from './ui/ResourceLink';

interface ProductsDropdownProps {
  isOpen: boolean;
}

const ProductsDropdown: React.FC<ProductsDropdownProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-screen max-w-5xl animate-fade-in-down"
    >
      <div className="bg-card/95 backdrop-blur-xl rounded-lg shadow-2xl border border-border overflow-hidden">
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 max-h-[70vh] overflow-y-auto">
          {resourceData.map((category) => (
            <div key={category.name} className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground px-3">
                {category.name}
              </h3>
              <div className="space-y-1">
                {category.items.map((item) => (
                  <ResourceLink
                    key={item.title}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    bgColor={item.bgColor}
                    href={item.href}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
       <style>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-10px) translateX(-50%); }
          to { opacity: 1; transform: translateY(0) translateX(-50%); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ProductsDropdown;