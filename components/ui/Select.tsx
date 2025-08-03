
import React from 'react';

const ChevronDown: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);


interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

const Select: React.FC<SelectProps> = ({ label, id, className, children, ...props }) => {
  return (
    <div>
      {label && <label htmlFor={id} className="block text-sm font-medium text-muted-foreground mb-2">{label}</label>}
      <div className="relative">
        <select
          id={id}
          className={`appearance-none w-full bg-secondary/50 dark:bg-secondary border border-input rounded-md py-3 px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-all cursor-pointer ${className}`}
          {...props}
        >
          {children}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground">
          <ChevronDown />
        </div>
      </div>
    </div>
  );
};

export default Select;