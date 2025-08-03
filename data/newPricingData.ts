
import React from 'react';
import { PricingPageData } from '../types';
import { AdvertiserIcon, PublisherIcon, DigitalSignageIcon } from '../components/ui/pricingIcons';

export const pricingPageData: PricingPageData = {
  categories: [
    {
      id: 'advertisers',
      name: 'For Advertisers & Agencies (ad buyers)',
      description: 'Campaign management for your brand, manage all types of ad campaigns traditional or digital from one single dashboard...',
      icon: React.createElement(AdvertiserIcon),
    },
    {
      id: 'publishers',
      name: 'For Publishers & Media owners (ad sellers)',
      description: 'Manage your inventory with our inventory management. Sell your ads online, get free seller profile & storefront...',
      icon: React.createElement(PublisherIcon),
    },
    {
      id: 'digital',
      name: 'Digital Signage Solutions',
      description: 'Looking to start or manage digital OOH business, all you need to do is buy LCD or LED screen and leave the rest...',
      icon: React.createElement(DigitalSignageIcon),
    },
  ],
  plans: {
    advertisers: [
      {
        name: 'Startup',
        prices: { yearly: 1999, monthly: 2999 },
        infoText: 'FREE for first 12 months',
        features: [
          { text: '5 mymail Credits' },
          { text: '250 Deaigns Credits' },
          { text: 'Campaign Management' },
          { text: 'Add Team members (upto 5)' },
          { text: 'Access to Adinsurance' },
          { text: 'Access to Loane & Ad Credit' },
          { text: 'Expense Management' },
          { text: 'Feed & Shots' },
        ],
        buttonText: 'Start Now',
        colorName: 'startup',
        href: '#',
      },
      {
        name: 'Professional',
        prices: { yearly: 5999, monthly: 7499 },
        infoText: 'Everything in STARTUP+',
        features: [
          { text: 'Recommendations' },
          { text: 'Unlock Contact Details' },
          { text: 'Campaign Reports' },
          { text: 'Dedicated SPOCK' },
          { text: 'Access to Deaigns+' },
          { text: 'Mogul Vouchers' },
          { text: 'Team Management' },
          { text: '2 online consultations' },
        ],
        buttonText: 'Start Now',
        colorName: 'professional',
        href: '#',
      },
      {
        name: 'Enterprise',
        prices: { yearly: 19999, monthly: 29000 },
        infoText: 'Everything in PROFESSIONAL+',
        features: [
          { text: 'Campaign Insights' },
          { text: 'Access to MO Offers' },
          { text: 'Ad free Experience' },
          { text: 'Analytics reports' },
          { text: 'Franchisee & Credit+ options' },
          { text: 'Agency tool for pricing' },
          { text: 'Payment collection & reports' },
          { text: 'Rescheduling' },
        ],
        buttonText: 'Start Now',
        colorName: 'enterprise',
        href: '#',
      },
      {
        name: 'Ultra',
        prices: { yearly: 149999, monthly: 184999 },
        infoText: 'Everything in ENTERPRISE+',
        features: [
          { text: 'Agency Administrative tools' },
          { text: 'Access to premium Plugins' },
          { text: 'Contract Management' },
          { text: '24X7 Dedicated Support' },
          { text: 'Verified tickmark on feeds' },
          { text: 'Marketing communication' },
          { text: 'Digital marketing tools' },
          { text: 'ROAS based campaigns' },
        ],
        buttonText: 'Start Now',
        colorName: 'ultra',
        href: '#',
      },
    ],
    publishers: [
        {
            name: 'Seller Basic',
            prices: { yearly: 1499, monthly: 199 },
            infoText: 'For individual media owners',
            features: [
                { text: 'List up to 10 properties' }, 
                { text: 'Basic Profile' }, 
                { text: 'Standard Analytics' }, 
                { text: 'Email Support' }
            ],
            buttonText: 'Start Selling',
            colorName: 'startup',
            href: '#',
        },
        {
            name: 'Seller Pro',
            prices: { yearly: 4999, monthly: 499 },
            infoText: 'For small agencies',
            features: [
                { text: 'List up to 50 properties' }, 
                { text: 'Enhanced Profile' }, 
                { text: 'Lead Generation Tools' }, 
                { text: 'Priority Support' }
            ],
            buttonText: 'Start Selling',
            colorName: 'professional',
            href: '#',
        },
        {
            name: 'Seller Plus',
            prices: { yearly: 15999, monthly: 1599 },
            infoText: 'For growing businesses',
            features: [
                { text: 'Unlimited Properties' }, 
                { text: 'Premium Storefront' }, 
                { text: 'Inventory Management' }, 
                { text: 'Dedicated Manager' }
            ],
            buttonText: 'Start Selling',
            colorName: 'enterprise',
            href: '#',
        },
        {
            name: 'Seller Network',
            prices: { yearly: 129999, monthly: 12999 },
            infoText: 'For large media networks',
            features: [
                { text: 'API Access' }, 
                { text: 'White-label Solutions' }, 
                { text: 'Advanced Reporting' }, 
                { text: '24/7 Support' }
            ],
            buttonText: 'Start Selling',
            colorName: 'ultra',
            href: '#',
        },
    ],
    digital: [
        {
            name: 'DOOH Starter',
            prices: { yearly: 2999, monthly: 299 },
            infoText: 'For single screen owners',
            features: [
                { text: '1 Screen License' }, 
                { text: 'Basic CMS' }, 
                { text: 'Content Scheduling' }, 
                { text: 'Community Support' }
            ],
            buttonText: 'Go Digital',
            colorName: 'startup',
            href: '#',
        },
        {
            name: 'DOOH Growth',
            prices: { yearly: 9999, monthly: 999 },
            infoText: 'For multi-screen setups',
            features: [
                { text: 'Up to 10 Screens' }, 
                { text: 'Advanced CMS' }, 
                { text: 'Playlist Management' }, 
                { text: 'Email Support' }
            ],
            buttonText: 'Go Digital',
            colorName: 'professional',
            href: '#',
        },
        {
            name: 'DOOH Pro',
            prices: { yearly: 29999, monthly: 2999 },
            infoText: 'For professional networks',
            features: [
                { text: 'Up to 50 Screens' }, 
                { text: 'Programmatic Ad Support' }, 
                { text: 'Audience Analytics' }, 
                { text: 'Priority Support' }
            ],
            buttonText: 'Go Digital',
            colorName: 'enterprise',
            href: '#',
        },
        {
            name: 'DOOH Enterprise',
            prices: { yearly: 199999, monthly: 19999 },
            infoText: 'Large scale deployments',
            features: [
                { text: 'Unlimited Screens' }, 
                { text: 'API & SDK Access' }, 
                { text: 'Custom Development' }, 
                { text: 'Dedicated Support Team' }
            ],
            buttonText: 'Go Digital',
            colorName: 'ultra',
            href: '#',
        },
    ]
  },
  addOns: [
    { name: 'White label', price: 165917, description: 'Your clients will see your branding at all places on portal, apps, invoices, reports and everything.', href: '#' },
    { name: 'Custom App', price: 82917, description: 'Our Apps shall be customized based on your requirements that helps you to manage your team and all campaigns.', href: '#' },
    { name: 'Lead Generation', price: 82917, description: 'Built-in advertising and lead generation plugins integrated to get sure visibility in your target Audience.', href: '#' },
    { name: 'Campaign Calendar', price: 124417, description: 'Its a campaign management dashboard to manage campaigns of existing clients & onboarded campaigns calendar.', href: '#' },
    { name: 'Premium Analytics', price: 41417, description: 'Manage campaigns, agents, reminders, and get premium analytics and filters for your existing clients\' campaigns.', href: '#' },
    { name: 'Task Integration', price: 82917, description: 'Start QnA/discussions for revenues, get document management, communications & email kit.', href: '#' },
    { name: 'SEO & Security', price: 124417, description: 'Dedicated SEO solutions, backlinks generation, email marketing templates, social marketing automation.', href: '#' },
    { name: 'Sales Integrations', price: 165917, description: 'SSO, Manage sales, order, provide pre-sales proposals, and product support with file sharing, programmable maps.', href: '#' },
  ],
  helpOptions: [
      {
          title: "Support & Enquiry",
          description: "Lets have conversation and help us resolve your queries",
          buttonText: "Contact Now",
          href: "#"
      },
      {
          title: "Request a Demo",
          description: "Want a personalized Free Demo to experience subscription",
          buttonText: "Book Now",
          href: "#"
      }
  ]
};