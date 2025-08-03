ADmyBRAND AI Suite - SaaS Landing Page
This repository contains the source code for a complete, responsive, and modern SaaS landing page for the ADmyBRAND AI Suite. It's an AI-powered marketing automation platform designed to convert visitors into leads with a premium, trustworthy, and highly engaging design.
The entire application is built using a modern, build-less approach, leveraging React and TypeScript with ES modules directly in the browser.
Features Overview
This project is a feature-rich, single-page application that showcases a modern SaaS product.
Core UI & UX
Responsive Design: Fully optimized for a seamless experience on desktops, tablets, and mobile devices.
Dark/Light Mode: A theme toggle allows users to switch between dark and light modes, with their preference saved to local storage.
Smooth Animations: Subtle animations on page load, scrolling, and interactive elements provide a polished user experience.
Sticky Header: The navigation bar becomes sticky and blurred on scroll for easy navigation.
Main Landing Page (#home)
Products Dropdown: A rich, multi-column dropdown menu in the header showcases the entire suite of ADmyBRAND products, categorized for easy exploration.
Brand Partners Carousel: An auto-scrolling, infinite marquee of partner logos to build social proof and credibility.
Dynamic Pricing Section:
Categorized Plans: Users can switch between plans for "Advertisers", "Publishers", and "Digital Signage".
Billing Toggle: A monthly/yearly toggle switch with a discount highlight.
Currency Conversion: Dynamically converts and displays prices in Indian Rupees (INR) or US Dollars (USD).
Testimonials Carousel: An auto-playing carousel to display customer feedback.
Interactive Modals:
Contact Us Form: A modal-based form for general inquiries.
Book a Demo Form: A modal-based form for users to request a product demonstration.
Authentication Flow
A complete, multi-step user authentication UI flow is implemented with client-side routing.
Login Page (#login): A clean, professional login page with email and password fields (including a password visibility toggle).
Sign-up Role Selection (#signup): The first step of registration, where users choose between a "Buyer" or "Seller" account.
Detailed Sign-up Form (#signup-form): A comprehensive and well-designed registration form with a dark theme, collecting user details like name, email, mobile number, and password.
Technical Stack
React 19: For building the user interface.
TypeScript: For static typing and improved developer experience.
Tailwind CSS: For utility-first styling, loaded via CDN.
No-Build Setup: Uses modern browser features (importmap and ES modules) to run React directly without needing a bundler like Webpack or Vite.
Getting Started
Because this project uses a build-less setup, you don't need to install any npm packages. All you need is a simple local web server.
Prerequisites
You should have Node.js installed, which includes npx.
Instructions
Clone the repository:
Generated bash
git clone <your-repository-url>
cd <repository-folder>
Use code with caution.
Bash
Start the local server:
From the root directory of the project, run the following command in your terminal:
Generated bash
npx serve
Use code with caution.
Bash
This command uses npx to temporarily download and run the serve package, which is a simple static server.
View the application:
The server will start and provide you with a local URL, usually http://localhost:3000. Open this address in your web browser to see the application running.
Deployment
You can easily deploy this static site for free using a service like Vercel or Netlify.
Deploying to Vercel
Push your code to a GitHub repository.
Sign up or log in to Vercel, preferably with your GitHub account.
Import your project:
From your Vercel dashboard, click "Add New..." -> "Project".
Select your GitHub repository and click "Import".
Configure Build Settings (Important!):
On the "Configure Project" screen, expand the "Build and Output Settings" section.
Ensure the "Framework Preset" is set to "Other".
Override the Build Command and leave the input field completely empty.
Override the Install Command and leave the input field completely empty.
Click "Deploy".
Vercel will deploy your site. Since there's no build step, it will be very fast. Your site will be live on a .vercel.app URL.
