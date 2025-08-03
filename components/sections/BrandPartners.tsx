
import React from 'react';

const partners = [
    { name: 'Emirates', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg' },
    { name: 'Nivea', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Nivea_logo.svg/1200px-Nivea_logo.svg.png' },
    { name: 'Philips', logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJONtOn28ythjTMSYpYDFUSeZFDMndtfVI0g&s' },
    { name: 'BMW', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg' },
    { name: 'Netflix', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
    { name: 'Audi', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg' },
    { name: 'Disney+', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg' },
    { name: 'Red Bull', logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8BsZGXKrfLacL48QEE1mmY-dL8EV3EJxGsw&s' },
    { name: 'Facebook', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' },
    { name: 'Samsung', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
    { name: 'TikTok', logoUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg' },
    { name: 'Instagram', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png' },
];

const BrandPartners: React.FC = () => {
    const duplicatedPartners = [...partners, ...partners];

    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16 leading-tight">
                    Preferred Marketing partner of <br /> leading brands across the world
                </h2>
                <div className="group relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
                    <div className="flex w-max animate-scroll group-hover:pause">
                        {duplicatedPartners.map((partner, index) => (
                            <div 
                                key={index}
                                className="flex-shrink-0 w-36 h-36 mx-8 flex items-center justify-center p-6 bg-white rounded-full border border-border shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                <img 
                                    src={partner.logoUrl} 
                                    alt={`${partner.name} logo`}
                                    className="max-h-16 w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 80s linear infinite;
                }
                .group-hover\\:pause:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default BrandPartners;