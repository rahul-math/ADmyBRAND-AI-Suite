

import React, { useState } from 'react';

const ArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>
);

const SignupPage: React.FC = () => {
    const [selectedRole, setSelectedRole] = useState<'buyer' | 'seller' | null>(null);

    const handleBack = () => {
        window.location.hash = '#login';
    };

    const handleRoleNavigate = (e: React.MouseEvent, role: 'buyer' | 'seller') => {
        e.preventDefault();
        setSelectedRole(role);
        window.location.hash = '#signup-form';
    };

    return (
        <div className="bg-background min-h-screen flex flex-col items-center justify-center p-4 font-sans">
            <div className="w-full max-w-2xl">
                <div className="relative bg-card text-card-foreground rounded-2xl shadow-xl border border-border p-8 md:p-12">
                    <button onClick={handleBack} className="absolute top-4 left-4 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-secondary" aria-label="Back to login">
                        <ArrowLeftIcon className="h-6 w-6" />
                    </button>
                    
                    <div className="text-center">
                        <a href="#home" onClick={(e) => { e.preventDefault(); window.location.hash = '#home'; }}>
                           <img 
                            src="https://accounts.admybrand.com/assets/img/logo.png" 
                            alt="ADmyBRAND Logo" 
                            className="h-10 mx-auto mb-6" 
                           />
                        </a>
                        <h1 className="text-2xl font-bold text-foreground">Get Started As</h1>
                    </div>

                    <div className="mt-8 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <a href="#signup-form" onClick={(e) => handleRoleNavigate(e, 'buyer')}
                                className={`block py-10 border rounded-lg text-center cursor-pointer transition-all duration-300 flex items-center justify-center ${selectedRole === 'buyer' ? 'border-hot-pink shadow-lg' : 'border-border hover:border-gray-300 dark:hover:border-gray-600'}`}
                            >
                                <span className={`font-bold text-2xl ${selectedRole === 'buyer' ? 'text-hot-pink' : 'text-gray-400 dark:text-gray-500'}`}>BUYER</span>
                            </a>
                            <a href="#signup-form" onClick={(e) => handleRoleNavigate(e, 'seller')}
                                className={`block py-10 border rounded-lg text-center cursor-pointer transition-all duration-300 flex items-center justify-center ${selectedRole === 'seller' ? 'border-hot-pink shadow-lg' : 'border-border hover:border-gray-300 dark:hover:border-gray-600'}`}
                            >
                                <span className={`font-bold text-2xl ${selectedRole === 'seller' ? 'text-hot-pink' : 'text-gray-400 dark:text-gray-500'}`}>SELLER</span>
                            </a>
                        </div>

                        <p className="text-center text-xs text-muted-foreground !mt-8">
                            By signing up you agree to our <a href="#" className="text-hot-pink hover:underline">Terms of Use</a> and <a href="#" className="text-hot-pink hover:underline">Privacy Policy</a>.
                        </p>
                         <p className="text-center text-sm !mt-4">
                            <a href="#login" onClick={(e) => { e.preventDefault(); window.location.hash = '#login'; }} className="text-primary font-semibold hover:underline">Already have an Account? Login</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;