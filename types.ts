import React from 'react';

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Resource {
  icon: React.ReactElement;
  title: string;
  description: string;
  bgColor: string;
  href?: string;
}

export interface ResourceCategory {
  name: string;
  items: Resource[];
}


// New Types for Redesigned Pricing Section
export interface PricingPlanV2 {
  name: string;
  prices: {
    monthly: number;
    yearly: number;
  };
  features: { text: string; info?: string }[];
  infoText: string;
  buttonText: string;
  colorName: 'startup' | 'professional' | 'enterprise' | 'ultra';
  href: string;
}

export interface Addon {
  name: string;
  price: number;
  description: string;
  href: string;
}

export interface PricingCategory {
  id: 'advertisers' | 'publishers' | 'digital';
  name: string;
  icon: React.ReactNode;
  description: string;
}

export interface HelpOption {
    title: string;
    description:string;
    buttonText: string;
    href: string;
}

export interface PricingPageData {
  categories: PricingCategory[];
  plans: Record<'advertisers' | 'publishers' | 'digital', PricingPlanV2[]>;
  addOns: Addon[];
  helpOptions: HelpOption[];
}