import React from 'react';

interface ResourceLinkProps {
  icon: React.ReactElement;
  title: string;
  description: string;
  bgColor: string;
  href?: string;
}

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
    const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
    return hsp > 140; // Increased threshold for better contrast
};

const ResourceLink: React.FC<ResourceLinkProps> = ({ icon, title, description, bgColor, href = '#' }) => {
  const iconColorClass = isLight(bgColor) ? 'text-gray-900' : 'text-white';
  const isExternal = href.startsWith('http');

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="group flex items-start gap-4 p-3 rounded-md transition-colors duration-200 hover:bg-accent"
    >
      <div
        className="flex-shrink-0 w-10 h-10 rounded-md flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
        style={{ backgroundColor: bgColor }}
      >
        {React.cloneElement<any>(icon, { className: `h-6 w-6 ${iconColorClass}` })}
      </div>
      <div>
        <h4 className="font-semibold text-foreground">{title}</h4>
        <p className="text-sm text-muted-foreground leading-tight">{description}</p>
      </div>
    </a>
  );
};

export default ResourceLink;