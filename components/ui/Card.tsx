import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  const cardClasses = `
    bg-card text-card-foreground
    border border-border
    rounded-lg p-6 md:p-8
    transition-all duration-300
    hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5
    ${className || ''}
  `;

  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
};

export default Card;