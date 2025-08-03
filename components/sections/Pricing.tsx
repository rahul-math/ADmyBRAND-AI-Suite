
import React, { useState } from 'react';
import { pricingPageData } from '../../data/newPricingData';
import { PricingCategory } from '../../types';
import ToggleSwitch from '../ui/ToggleSwitch';
import PricingPlanCard from '../ui/PricingPlanCard';
import AddonCard from '../ui/AddonCard';
import { CheckCircleIcon, EmptyCircleIcon } from '../ui/pricingIcons';
import Button from '../ui/Button';

const PrimeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z" fill="url(#prime-gradient)" stroke="#E70077" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
            <linearGradient id="prime-gradient" x1="4" y1="2" x2="20" y2="20" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F472B6"/>
                <stop offset="1" stopColor="#E70077"/>
            </linearGradient>
        </defs>
    </svg>
);

interface PricingProps {
  setContactModalOpen: (isOpen: boolean) => void;
  setDemoModalOpen: (isOpen: boolean) => void;
}

const Pricing: React.FC<PricingProps> = ({ setContactModalOpen, setDemoModalOpen }) => {
  const [activeCategory, setActiveCategory] = useState<PricingCategory['id']>('advertisers');
  const [billingCycle, setBillingCycle] = useState<'yearly' | 'monthly'>('yearly');
  const [currency, setCurrency] = useState('INR');

  const INR_TO_USD_RATE = 1 / 83;
  const currencyConfig = {
      INR: {
        symbol: '₹',
        format: (amount: number) => new Intl.NumberFormat('en-IN').format(Math.round(amount))
      },
      USD: {
        symbol: '$',
        format: (amount: number) => new Intl.NumberFormat('en-US').format(Math.round(amount * INR_TO_USD_RATE))
      }
  };
  const selectedCurrencyConfig = currencyConfig[currency as keyof typeof currencyConfig];

  const currentPlans = pricingPageData.plans[activeCategory];

  return (
    <section id="pricing" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Simple, straightforward pricing.</h2>
        </div>
        
        {/* Category Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {pricingPageData.categories.map((category, index) => {
                const isActive = activeCategory === category.id;
                return (
                    <div 
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 animate-fade-in-up ${isActive ? 'border-hot-pink bg-secondary/30' : 'border-border hover:border-primary/50'}`}
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className="flex justify-between items-start">
                           <div className="flex items-start gap-4">
                             {category.icon}
                             <div>
                                <h3 className="font-bold text-foreground">{category.name}</h3>
                                <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
                             </div>
                           </div>
                           {isActive ? <CheckCircleIcon className="h-6 w-6 text-hot-pink flex-shrink-0" /> : <EmptyCircleIcon className="h-6 w-6 text-muted-foreground flex-shrink-0" />}
                        </div>
                    </div>
                );
            })}
        </div>

        {/* Toggle and Controls */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center gap-2 text-hot-pink font-bold">
                 <PrimeIcon />
                 <span className="text-lg">PRIME</span>
            </div>
            <ToggleSwitch
                billingCycle={billingCycle}
                setBillingCycle={setBillingCycle}
            />
            <div className="relative">
                <select 
                    value={currency} 
                    onChange={(e) => setCurrency(e.target.value)}
                    className="appearance-none bg-card border border-border rounded-md py-2 pl-3 pr-8 text-foreground text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring"
                >
                    <option value="INR">IN Rupee</option>
                    <option value="USD">US Dollar</option>
                </select>
                <svg className="w-4 h-4 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentPlans.map((plan, index) => {
                const priceInr = billingCycle === 'yearly' ? plan.prices.yearly : plan.prices.monthly;
                return (
                    <PricingPlanCard 
                        key={plan.name} 
                        plan={plan} 
                        billingCycle={billingCycle} 
                        animationDelay={`${400 + index * 100}ms`}
                        displayPrice={selectedCurrencyConfig.format(priceInr)}
                        currencySymbol={selectedCurrencyConfig.symbol}
                    />
                )
            })}
        </div>

        {/* Add-ons */}
        <div className="mt-28">
            <h3 className="text-center text-2xl md:text-3xl font-bold text-foreground mb-12 animate-fade-in-up">ADD ONS</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                 {pricingPageData.addOns.map((addon, index) => (
                    <AddonCard 
                        key={addon.name} 
                        addon={addon} 
                        animationDelay={`${index * 100}ms`}
                        displayPrice={selectedCurrencyConfig.format(addon.price)}
                        currencySymbol={selectedCurrencyConfig.symbol}
                    />
                 ))}
            </div>
        </div>
        
        {/* Need Help */}
        <div className="mt-28 text-center">
             <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-12 animate-fade-in-up">Need Help in decision making?</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {pricingPageData.helpOptions.map((option, index) => {
                    const isContactButton = option.buttonText === "Contact Now";
                    return (
                        <div 
                            key={option.title} 
                            className="bg-card border border-border rounded-lg p-8 animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <h4 className="text-xl font-bold text-foreground">{option.title}</h4>
                            <p className="mt-2 text-muted-foreground">{option.description}</p>
                            {isContactButton ? (
                                <Button 
                                    variant="primary" 
                                    className="mt-6 bg-hot-pink hover:bg-hot-pink/90"
                                    onClick={() => setContactModalOpen(true)}
                                >
                                    {option.buttonText}
                                </Button>
                            ) : (
                                <Button 
                                    variant="primary" 
                                    className="mt-6 bg-hot-pink hover:bg-hot-pink/90"
                                    onClick={() => setDemoModalOpen(true)}
                                >
                                    {option.buttonText}
                                </Button>
                            )}
                        </div>
                    );
                })}
             </div>
        </div>

      </div>
       <style>{`
            @keyframes fade-in-up {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in-up {
                animation: fade-in-up 0.6s ease-out forwards;
                opacity: 0;
            }
        `}</style>
    </section>
  );
};

export default Pricing;