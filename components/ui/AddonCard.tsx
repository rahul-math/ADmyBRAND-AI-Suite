import React from 'react';
import { Addon } from '../../types';
import Button from './Button';

interface AddonCardProps {
    addon: Addon;
    animationDelay: string;
    displayPrice: string;
    currencySymbol: string;
}

const AddonCard: React.FC<AddonCardProps> = ({ addon, animationDelay, displayPrice, currencySymbol }) => {
    return (
        <div 
            className="bg-card border-2 border-border rounded-lg p-6 flex flex-col animate-fade-in-up"
            style={{ animationDelay }}
        >
            <div className="flex-grow">
                <h4 className="text-lg font-bold text-foreground">{addon.name}</h4>
                <p className="text-sm text-muted-foreground mt-2 mb-4">{addon.description}</p>
            </div>
            <div className="mt-auto">
                 <p className="font-bold text-foreground mb-4">{currencySymbol} {displayPrice} <span className="text-sm font-normal text-muted-foreground">/billed monthly</span></p>
                 <a href={addon.href} target="_blank" rel="noopener noreferrer" className="block">
                     <Button 
                        variant="outline" 
                        className="w-full !border-hot-pink !text-hot-pink hover:!bg-hot-pink hover:!text-white"
                     >
                         Contact Sales
                     </Button>
                 </a>
            </div>
        </div>
    );
};

export default AddonCard;