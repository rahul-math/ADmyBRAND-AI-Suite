
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import BrandPartners from './components/sections/BrandPartners';
import Features from './components/sections/Features';
import Pricing from './components/sections/Pricing';
import Testimonials from './components/sections/Testimonials';
import Faq from './components/sections/Faq';
import Footer from './components/sections/Footer';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import SignupFormPage from './components/pages/SignupFormPage';
import Modal from './components/ui/Modal';
import ContactForm from './components/ContactForm';
import DemoForm from './components/DemoForm';

const App: React.FC = () => {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const storedTheme = window.localStorage.getItem('theme');
            if (storedTheme) return storedTheme;
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'dark';
    });

    const [route, setRoute] = useState(window.location.hash || '#home');
    const [isContactModalOpen, setContactModalOpen] = useState(false);
    const [isDemoModalOpen, setDemoModalOpen] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        window.localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        const handleHashChange = () => {
            setRoute(window.location.hash || '#home');
        };
        window.addEventListener('hashchange', handleHashChange, false);
        
        // Initial check in case user lands on a specific page directly
        handleHashChange();

        return () => {
            window.removeEventListener('hashchange', handleHashChange, false);
        };
    }, []);

    if (route === '#login') {
        return <LoginPage />;
    }
    
    if (route === '#signup') {
        return <SignupPage />;
    }

    if (route === '#signup-form') {
        return <SignupFormPage />;
    }

    return (
        <div className="relative overflow-x-hidden bg-background text-muted-foreground transition-colors duration-300">
            <Header theme={theme} setTheme={setTheme} />
            <main>
                <Hero />
                <BrandPartners />
                <Features />
                <Pricing setContactModalOpen={setContactModalOpen} setDemoModalOpen={setDemoModalOpen} />
                <Testimonials />
                <Faq />
            </main>
            <Footer />
            <Modal 
                isOpen={isContactModalOpen} 
                onClose={() => setContactModalOpen(false)} 
                title="Contact Us">
                <ContactForm />
            </Modal>
            <Modal 
                isOpen={isDemoModalOpen} 
                onClose={() => setDemoModalOpen(false)} 
                title="Book a FREE Demo">
                <DemoForm />
            </Modal>
        </div>
    );
};

export default App;