import React from 'react';
import { PricingPlanV2 } from '../../types';
import Button from './Button';
import { InfoIcon } from './pricingIcons';

interface PricingPlanCardProps {
  plan: PricingPlanV2;
  billingCycle: 'monthly' | 'yearly';
  animationDelay: string;
  displayPrice: string;
  currencySymbol: string;
}

const CheckMark: React.FC = () => (
    <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);

const PricingPlanCard: React.FC<PricingPlanCardProps> = ({ plan, billingCycle, animationDelay, displayPrice, currencySymbol }) => {
  const colorClass = `bg-plan-${plan.colorName}`;

  return (
    <div 
        className={`flex flex-col rounded-lg overflow-hidden text-white animate-fade-in-up ${colorClass}`}
        style={{ animationDelay }}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold uppercase">{plan.name}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-4xl font-extrabold">{currencySymbol}{displayPrice}</span>
          <span className="ml-1 text-sm opacity-80">/billed {billingCycle}</span>
        </div>
        <a 
            href={plan.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full mt-6"
        >
            <Button
                variant="outline"
                className="w-full !border-white !text-white hover:!bg-white hover:!text-black"
            >
                {plan.buttonText}
            </Button>
        </a>
      </div>
      <div className="p-6 bg-card text-muted-foreground border-t border-border flex-grow">
        <p className="text-sm font-semibold text-foreground">{plan.infoText}</p>
        <ul className="mt-4 space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckMark />
              <span className="flex-1 text-sm">{feature.text}</span>
              {feature.info && (
                <div className="group relative ml-2">
                    <InfoIcon className="h-4 w-4 text-muted-foreground cursor-pointer" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-secondary text-secondary-foreground text-xs rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        {feature.info}
                    </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingPlanCard;