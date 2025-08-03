import React from 'react';

interface ToggleSwitchProps {
  billingCycle: 'monthly' | 'yearly';
  setBillingCycle: (cycle: 'monthly' | 'yearly') => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ billingCycle, setBillingCycle }) => {
  const isYearly = billingCycle === 'yearly';

  return (
    <div className="flex items-center bg-card p-1 rounded-full border border-border">
      <button
        onClick={() => setBillingCycle('monthly')}
        className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors duration-300 ${
          !isYearly ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        Monthly
      </button>
      <button
        onClick={() => setBillingCycle('yearly')}
        className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors duration-300 relative ${
          isYearly ? 'bg-hot-pink text-white' : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        Yearly
        <span className="absolute -top-2 -right-2 text-xs bg-yellow-400 text-black font-bold px-1.5 py-0.5 rounded-full transform rotate-12">
            -15%
        </span>
      </button>
    </div>
  );
};

export default ToggleSwitch;
