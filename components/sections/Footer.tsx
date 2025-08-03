
import React from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';

const Footer: React.FC = () => {
  const footerLinks = {
    'Product': ['Features', 'Pricing', 'Integrations', 'Updates'],
    'Company': ['About Us', 'Careers', 'Press', 'Contact'],
    'Resources': ['Blog', 'Help Center', 'API Docs', 'Community'],
    'Legal': ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
  };

  const socialMedia = [
    { name: 'Facebook', icon: 'https://in.admybrand.com/assets/svg/facebooknew.svg', href: 'https://www.facebook.com/admybrand/' },
    { name: 'Twitter', icon: 'https://in.admybrand.com/assets/svg/twitter_new.svg', href: 'https://twitter.com/admybrand' },
    { name: 'Instagram', icon: 'https://in.admybrand.com/assets/svg/instagram_new.svg', href: 'https://www.instagram.com/admybrand/' },
    { name: 'YouTube', icon: 'https://in.admybrand.com/assets/svg/youtube.svg', href: 'https://www.youtube.com/channel/UCEKgVQ1MeZx3lpyDqGtW30g' },
    { name: 'LinkedIn', icon: 'https://in.admybrand.com/assets/svg/linkedin.svg', href: 'https://www.linkedin.com/company/admybrand' },
    { name: 'Medium', icon: 'https://in.admybrand.com/assets/svg/medium.svg', href: 'https://medium.com/@admybrand' }
  ];

  return (
    <footer className="bg-secondary/30 border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About & Newsletter */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <img src="https://in.admybrand.com/assets/svg/web_logo_two.svg" alt="ADmyBRAND logo" className="h-8" />
            <p className="mt-4 text-muted-foreground">The future of marketing, built with intelligence.</p>
            <form className="mt-6">
              <label className="text-sm font-medium text-foreground">Stay up to date</label>
              <div className="flex gap-2 mt-2">
                  <Input type="email" placeholder="Enter your email" className="flex-grow"/>
                  <Button type="submit" variant="primary" size="sm" className="px-3 aspect-square !rounded-md">
                    →
                  </Button>
              </div>
            </form>
          </div>

          {/* Links */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-semibold text-foreground">{title}</h3>
                <ul className="mt-4 space-y-2">
                  {links.map(link => (
                    <li key={link}>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center text-muted-foreground gap-y-4">
          <p>&copy; {new Date().getFullYear()} ADmyBRAND Inc. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            {socialMedia.map((social) => (
                <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-secondary rounded-full transition-all duration-300 hover:bg-primary/10 hover:scale-110"
                    aria-label={social.name}
                >
                    <img src={social.icon} alt={`${social.name} logo`} className="h-5 w-5" />
                </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
