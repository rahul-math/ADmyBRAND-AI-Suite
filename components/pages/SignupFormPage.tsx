
import React, { useState } from 'react';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';
import PasswordInput from '../ui/PasswordInput';

const ArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>
);

const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);

const GoogleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48" {...props}>
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.657-3.356-11.303-7.918l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C39.986,35.666,44,30.138,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
    </svg>
);


const SignupFormPage: React.FC = () => {

    const handleBack = () => {
        window.location.hash = '#signup';
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle signup form submission logic
        alert('Account creation functionality is for demonstration.');
    };

    return (
        <div className="bg-background min-h-screen flex flex-col items-center justify-center p-4 font-sans">
            <div className="w-full max-w-xl">
                <div className="relative bg-card text-card-foreground rounded-2xl shadow-xl border border-border p-8 md:p-12">
                    <button onClick={handleBack} className="absolute top-4 left-4 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-secondary" aria-label="Back to role selection">
                        <ArrowLeftIcon className="h-6 w-6" />
                    </button>
                    
                    <div className="text-center">
                         <a href="#home" onClick={(e) => { e.preventDefault(); window.location.hash = '#home'; }}>
                           <img 
                            src="https://accounts.admybrand.com/assets/img/logo.png" 
                            alt="ADmyBRAND Logo" 
                            className="h-10 mx-auto mb-2" 
                           />
                        </a>
                        <h1 className="text-xl font-bold text-foreground">Create your ADmyBRAND Account</h1>
                    </div>

                    <div className="mt-8">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Select id="title" name="title" className="sm:w-24">
                                    <option>Mr</option>
                                    <option>Ms</option>
                                    <option>Mrs</option>
                                </Select>
                                <Input id="firstName" name="firstName" placeholder="First Name" required className="flex-1" />
                                <Input id="lastName" name="lastName" placeholder="Last Name" required className="flex-1" />
                            </div>
                            <Input id="email" type="email" placeholder="Email" required />
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Select id="countryCode" name="countryCode" className="sm:w-28">
                                    <option>+91</option>
                                    <option>+1</option>
                                </Select>
                                <Input id="mobile" type="tel" placeholder="Mobile Number" required className="flex-1" />
                            </div>
                            <Input id="brandName" name="brandName" placeholder="Brand Name" />
                            <div className="flex flex-col sm:flex-row gap-4">
                                <PasswordInput id="password" placeholder="Password" required className="flex-1" />
                                <PasswordInput id="confirmPassword" placeholder="Confirm Password" required className="flex-1" />
                            </div>
                            
                            <div className="flex items-center justify-between !mt-8">
                                <a href="#" className="flex items-center text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
                                    <GoogleIcon />
                                    Continue with Google
                                </a>
                                 <Button type="submit" variant="primary" className="!rounded-full !p-0 w-14 h-14 flex items-center justify-center bg-hot-pink hover:bg-hot-pink/90">
                                    <ArrowRightIcon className="h-6 w-6" />
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupFormPage;