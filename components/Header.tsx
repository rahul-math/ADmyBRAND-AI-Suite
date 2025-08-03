
import React, { useState, useEffect, useRef } from 'react';
import Button from './ui/Button';
import ThemeToggle from './ui/ThemeToggle';
import ProductsDropdown from './ProductsDropdown';

interface HeaderProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement> & {isOpen: boolean}> = ({ isOpen, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
        className={`w-4 h-4 ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
);

const Header: React.FC<HeaderProps> = ({ theme, setTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setProductsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const productsNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        if (productsNavRef.current && !productsNavRef.current.contains(event.target as Node)) {
            setProductsOpen(false);
        }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  const navLinks = ['Home', 'Features', 'Pricing', 'Testimonials', 'FAQ'];

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    setProductsOpen(false); // Close dropdown on other nav clicks

    // If it's a link to the same page, scroll smoothly
    if (targetId !== 'home' && document.getElementById(targetId)) {
      const element = document.getElementById(targetId);
      if (element) {
        const headerHeight = headerRef.current?.offsetHeight || 80; // Fallback height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    } else { // if it's home, navigate via hash and scroll to top
        window.location.hash = targetId;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-card/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="cursor-pointer">
          <img src="https://in.admybrand.com/assets/svg/web_logo_two.svg" alt="ADmyBRAND logo" className="h-8" />
        </a>
        <nav className="hidden md:flex items-center space-x-8">
            <div ref={productsNavRef} className="relative">
                 <button 
                    onClick={() => setProductsOpen(prev => !prev)}
                    className="flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
                >
                    All Resources
                    <ChevronDownIcon isOpen={isProductsOpen} />
                 </button>
                 <ProductsDropdown isOpen={isProductsOpen} />
            </div>
          {navLinks.map(link => {
            const targetId = link.toLowerCase();
            return (
              <a 
                key={link} 
                href={`#${targetId}`} 
                onClick={(e) => handleNavClick(e, targetId)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
              >
                {link}
              </a>
            )
          })}
        </nav>
        <div className="flex items-center space-x-4">
            <ThemeToggle theme={theme} setTheme={setTheme} />
            <Button variant="outline" size="sm" onClick={() => window.location.hash = 'login'}>Log In</Button>
            <Button variant="primary" size="sm" className="hidden sm:block" onClick={() => window.location.hash = 'signup'}>Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;