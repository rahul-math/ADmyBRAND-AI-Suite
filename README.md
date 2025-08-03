# ADmyBRAND AI Suite - SaaS Landing Page

This repository contains the source code for a complete, responsive, and modern SaaS landing page for the **ADmyBRAND AI Suite** — an AI-powered marketing automation platform. It's designed to convert visitors into leads with a premium, trustworthy, and highly engaging user experience.

---

## 🚀 Features Overview

This is a single-page, build-less React application with powerful SaaS UI/UX capabilities:

### 🎨 Core UI & UX
- **Responsive Design** — Optimized for desktop, tablet, and mobile
- **Dark/Light Mode** — Toggle with theme persistence in `localStorage`
- **Smooth Animations** — Scroll-based and interactive transitions
- **Sticky Header** — Blurred, sticky nav on scroll

---

### 🧩 Main Landing Page (#home)

- **🧭 Products Dropdown** — Multi-column dropdown showcasing the full ADmyBRAND suite
- **🤝 Brand Partners Carousel** — Auto-scrolling marquee of partner logos for social proof
- **💰 Dynamic Pricing Section**
  - Switch between: _Advertisers_, _Publishers_, _Digital Signage_
  - Toggle between: _Monthly_ / _Yearly_ billing (with discounts)
  - Currency options: _INR_ / _USD_
- **🗣️ Testimonials Carousel** — Auto-playing user feedback section

---

### 💬 Interactive Modals

- **📬 Contact Us Form**
- **📅 Book a Demo Form**

---

## 🔐 Authentication Flow

A complete, multi-step auth flow using hash-based routing:

- `#/login` — Email/password login (with visibility toggle)
- `#/signup` — Select account type (Buyer or Seller)
- `#/signup-form` — Full registration form (dark theme)

---

## 🧑‍💻 Tech Stack

- **React 19** — Build UI with modern JSX
- **TypeScript** — Type safety and DX
- **Tailwind CSS (CDN)** — Utility-first design system
- **Build-less Setup** — No Webpack, no Vite, no npm. Just ES modules + `importmap`.

---

## 🛠 Getting Started (Local Development)

> No build step. Just serve static files.

### 📦 Prerequisite
- **Node.js** installed (includes `npx`)

### 📂 Clone the Repository
```bash
git clone <your-repository-url>
cd <your-project-folder>
```

### 🔍 Serve Locally
```bash
npx serve
```
Then open `http://localhost:3000` in your browser.

---

## 🌐 Deployment

### ✅ Recommended: Vercel

You can deploy the static site easily for free with [Vercel](https://vercel.com):

#### Steps:

1. **Push your code** to a GitHub repository.
2. **Log in** to Vercel with GitHub.
3. Click **"Add New..." > "Project"**
4. Select your repo and click **"Import"**

#### ⚙️ Configure Build Settings:
| Setting            | Value         |
|--------------------|---------------|
| Framework Preset   | `Other`       |
| Build Command      | *(leave empty)* |
| Install Command    | *(leave empty)* |
| Output Directory   | `.`           |

5. Click **"Deploy"** and your project will be live within seconds.

---

## 📄 License

MIT License. Feel free to fork, improve, and build on top of this project.

---

## 👨‍💻 Built With ❤️

This project is part of the **ADmyBRAND AI Suite** ecosystem — powering marketing through intelligent automation.
