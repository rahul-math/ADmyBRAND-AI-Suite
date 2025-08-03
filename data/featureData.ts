import React from 'react';
import { Feature } from '../types';

// Simple SVG Icon Components
const CampaignIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a16.957 16.957 0 01-1.21-.922c-.655-.5-1.233-1.05-1.789-1.625a4.5 4.5 0 00-6.364-6.364l-1.02.995m11.35 11.35l-1.02-.995m-2.56-5.84a6 6 0 01-8.246-8.246l.001-.001m8.245 8.245L9.75 9.75M14.37 15.6a6 6 0 01-5.84-7.38m5.84 7.38a6 6 0 017.38-5.84m-7.38 5.84l2.56-2.56" })
    )
);
const TestTubeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c.102.013.207.024.316.035a2.25 2.25 0 011.87 2.008v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104a2.25 2.25 0 00-1.87-2.008A2.25 2.25 0 005.13 3.104m4.62 11.396L5 14.5m4.62 0a2.25 2.25 0 013.75 0l3.375 3.375a2.25 2.25 0 010 3.182L15.53 22.5a2.25 2.25 0 01-3.182 0l-3.375-3.375a2.25 2.25 0 010-3.182z" })
    )
);
const ChartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.182-3.182m3.182 3.182v3.182H19.5M3 3h18M3 12h18m-9 9h9" })
    )
);
const WalletIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" })
    )
);
const ShieldIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" })
    )
);
const UserGroupIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962c.57-1.023-.095-2.21-1.047-2.735-1.18-.62-2.618-1.01-4.04-1.01m9.04 8.038c1.32.373 2.74.563 4.21.563m-8.42 0c-1.47 0-2.89-.19-4.21-.563m5.241-8.527a3.75 3.75 0 016.32 0m-6.32 0a3.75 3.75 0 00-6.32 0m12.64 0a3.75 3.75 0 01-6.32 0m6.32 0a3.75 3.75 0 00-6.32 0M6.331 7.468a3.75 3.75 0 016.32 0" })
    )
);


const iconClass = "h-8 w-8 text-primary mb-4";

export const featuresData: Feature[] = [
  {
    icon: React.createElement(CampaignIcon, { className: iconClass }),
    title: 'AI Campaign Builder',
    description: 'Effortlessly create high-performing campaigns with AI-driven suggestions for copy, creative, and targeting.',
  },
  {
    icon: React.createElement(TestTubeIcon, { className: iconClass }),
    title: 'Auto A/B Testing',
    description: 'Our AI continuously tests and optimizes every element of your campaigns to maximize ROI without manual effort.',
  },
  {
    icon: React.createElement(ChartIcon, { className: iconClass }),
    title: 'Predictive Analytics',
    description: 'Forecast trends, predict customer behavior, and make data-backed decisions with our powerful analytics engine.',
  },
  {
    icon: React.createElement(WalletIcon, { className: iconClass }),
    title: 'Smart Budgeting',
    description: 'Allocate your marketing spend with precision. Our AI ensures your budget goes where it will have the most impact.',
  },
   {
    icon: React.createElement(UserGroupIcon, { className: iconClass }),
    title: 'Audience Segmentation',
    description: 'Automatically discover and target niche audience segments with hyper-personalized messaging.',
  },
  {
    icon: React.createElement(ShieldIcon, { className: iconClass }),
    title: 'Fraud Detection',
    description: 'Protect your ad spend with real-time AI-powered click fraud detection and prevention.',
  },
];