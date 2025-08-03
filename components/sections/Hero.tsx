
import React from 'react';
import Button from '../ui/Button';

const PlayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
    </svg>
);

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative text-center py-40 md:py-56 px-6 overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-[0.02]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
            
            <div className="relative z-10 container mx-auto">
                <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight">
                        Unleash AI-Powered Growth with <br /> 
                        <span className="text-primary">ADmyBRAND AI Suite</span>
                    </h1>
                </div>
                <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
                        The future of marketing, built with intelligence. Automate, optimize, and dominate your market.
                    </p>
                </div>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                     <a href="https://youtu.be/p0zReKlmjFo?si=cf4bRFDJUnNSO_Ae" target="_blank" rel="noopener noreferrer">
                        <Button variant="primary" size="lg" className="flex items-center">
                            <PlayIcon className="w-6 h-6 mr-2" />
                            Watch Introduction
                        </Button>
                    </a>
                </div>
            </div>
            
             <div className="absolute -bottom-1/3 left-1/2 -translate-x-1/2 w-[150%] h-[50%] bg-primary/10 dark:bg-primary/10 rounded-full blur-3xl opacity-50"></div>
            <style>{`
                .bg-grid-pattern {
                    background-image:
                        linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                        linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px);
                    background-size: 40px 40px;
                }
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.5s ease-out forwards;
                    opacity: 0;
                }
            `}</style>
        </section>
    );
};

export default Hero;
