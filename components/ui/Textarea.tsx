
import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, id, className, ...props }) => {
  return (
    <div>
      {label && <label htmlFor={id} className="block text-sm font-medium text-muted-foreground mb-2">{label}</label>}
      <textarea
        id={id}
        className={`w-full bg-secondary/50 dark:bg-secondary border border-input rounded-md p-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-all ${className}`}
        {...props}
      />
    </div>
  );
};

export default Textarea;