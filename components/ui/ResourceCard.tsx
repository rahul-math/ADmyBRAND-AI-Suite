import React from 'react';

interface ResourceCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
  bgColor: string;
}

// Helper to determine if a hex color is light or dark
const isLight = (hexColor: string): boolean => {
    if (hexColor.startsWith('#')) {
        hexColor = hexColor.slice(1);
    }
    if (hexColor.length === 3) {
        hexColor = hexColor.split('').map(char => char + char).join('');
    }
    const r = parseInt(hexColor.substring(0, 2), 16);
    const g = parseInt(hexColor.substring(2, 4), 16);
    const b = parseInt(hexColor.substring(4, 6), 16);
    // Using the HSP value, anything above 127.5 is considered light
    const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
    return hsp > 140; // Increased threshold for better contrast
};


const ResourceCard: React.FC<ResourceCardProps> = ({ icon, title, description, bgColor }) => {
  const iconColorClass = isLight(bgColor) ? 'text-gray-900' : 'text-white';

  return (
    <a href="#" className="group block rounded-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center space-x-4 bg-card p-4 rounded-lg border border-border group-hover:border-primary/30 group-hover:shadow-xl transition-all duration-300 h-full">
          <div
            className="flex-shrink-0 w-16 h-16 rounded-md flex items-center justify-center shadow-inner"
            style={{ backgroundColor: bgColor }}
          >
            {React.cloneElement<any>(icon, { className: `h-9 w-9 ${iconColorClass}` })}
          </div>
          <div>
            <h4 className="font-bold text-md text-foreground">{title}</h4>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
      </div>
    </a>
  );
};

export default ResourceCard;