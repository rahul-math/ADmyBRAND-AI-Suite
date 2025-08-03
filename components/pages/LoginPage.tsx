
import React, { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import PasswordInput from '../ui/PasswordInput';

const ArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>
);

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would handle the login logic
        console.log('Login attempt with:', { email, password });
        alert('Login functionality is for demonstration.');
    };

    const handleBackToHome = () => {
        window.location.hash = '#home';
    };

    return (
        <div className="bg-background min-h-screen flex flex-col items-center justify-center p-4 font-sans">
            <div className="w-full max-w-md">
                <div className="relative bg-card text-card-foreground rounded-2xl shadow-xl border border-border p-8 md:p-12">
                     <button onClick={handleBackToHome} className="absolute top-4 left-4 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-secondary" aria-label="Back to home">
                        <ArrowLeftIcon className="h-6 w-6" />
                    </button>

                    <div className="text-center">
                        <a href="#home">
                           <img 
                            src="https://accounts.admybrand.com/assets/img/logo.png" 
                            alt="ADmyBRAND Logo" 
                            className="h-10 mx-auto mb-4" 
                           />
                        </a>
                        <h1 className="text-2xl font-bold text-foreground">Sign In</h1>
                        <p className="text-muted-foreground mt-2">Use your ADmyBRAND Account</p>
                    </div>

                    <form onSubmit={handleLogin} className="mt-8 space-y-6">
                        <Input
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <div>
                            <PasswordInput
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <div className="text-right mt-2">
                                <a href="#" className="text-sm text-primary hover:underline">
                                    Forgot Password?
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-6">
                            <a href="#signup" onClick={(e) => { e.preventDefault(); window.location.hash = 'signup'; }} className="text-primary font-semibold hover:underline">
                                Create your Account
                            </a>
                            <Button 
                                type="submit" 
                                variant="primary" 
                                className="bg-hot-pink hover:bg-hot-pink/90 rounded-full px-8"
                            >
                                Login
                            </Button>
                        </div>
                    </form>
                </div>

                <footer className="text-center text-xs text-muted-foreground mt-8 px-4 flex justify-between w-full">
                    <span>India . English</span>
                    <div className="space-x-4">
                        <a href="#" className="hover:underline">Help</a>
                        <a href="#" className="hover:underline">Privacy</a>
                        <a href="#" className="hover:underline">Terms</a>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default LoginPage;