# 🌾 Desa Senggreng — Official Village Web Portal & Digital Tourism

[![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deployment-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://desa-senggreng.vercel.app)

> **Live Website:** [https://desa-senggreng.vercel.app](https://desa-senggreng.vercel.app)

An interactive, modern, and SEO-optimized web application developed for **Desa Senggreng** (located in Sumberpucung District, Malang Regency, East Java, Indonesia). This platform serves as a central digital hub to promote local ecotourism destinations, empower micro, small, and medium enterprises (MSMEs / UMKM), archive cultural heritage, and deliver official village profile information to the public.

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
  - [Building for Production](#building-for-production)
- [Available Scripts](#-available-scripts)
- [SEO & Performance Optimizations](#-seo--performance-optimizations)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 📖 Overview

**Desa Senggreng** is a vibrant village blessed with natural freshwater springs, rich cultural traditions, and flourishing creative MSMEs. This digital portal is designed to:

1. **Digitalize Village Information:** Provide accessible information about the history, vision & mission, organizational structure, and demographic profile of Desa Senggreng.
2. **Promote Tourism (Wisata):** Showcase scenic spots such as *Sumber Duren*, *Rowo Klampok*, *Embung Sumberpucung*, and *Rajut Indah* with interactive descriptions and visitor guides.
3. **Empower Local Economy (UMKM):** Catalog local culinary and handicraft businesses (e.g., *Family Chicken Senggreng*, *Warung Biru Mujair*, woven handicrafts, eco-friendly food packaging) to expand their market reach.
4. **Preserve Cultural Memory:** Showcase local events, community festivities, and village achievements through high-resolution media galleries.

---

## ✨ Key Features

- **⚡ Fast & Modern Web Architecture:** Built using Next.js 15 with App Router, Turbopack, and React 19 for optimal rendering and high performance.
- **🎨 Premium UI / UX:** Designed with Tailwind CSS v4 and Google Fonts (`Poppins`), featuring smooth transitions, micro-interactions, and fluid scroll animations powered by Framer Motion.
- **🏞️ Tourism Explorer:** Dedicated tourist destination pages with rich overviews, location details, and activity highlights.
- **🛍️ MSME / UMKM Catalog:** Business directory featuring product listings, descriptions, locations, and direct contact options.
- **📜 Village Profile & Governance:** Comprehensive details on village history, governance, vision & mission statements, and administrative data.
- **📸 Media Gallery:** Curated photographic showcase capturing village life, culture, and natural landmarks.
- **🔍 Advanced SEO & Open Graph:** Comprehensive OpenGraph tags, dynamic metadata, structured Schema.org JSON-LD (LocalBusiness), `robots.ts`, and auto-generated XML `sitemap.ts`.
- **📱 Fully Responsive:** Adaptive layout tailored seamlessly across mobile, tablet, laptop, and ultra-wide screens.

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router, Turbopack) |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & PostCSS |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Typography** | [Poppins](https://fonts.google.com/specimen/Poppins) via `next/font/google` |
| **Code Quality** | ESLint 9 (`eslint-config-next`) |
| **Hosting & CI/CD** | [Vercel](https://vercel.com/) |

---

## 📁 Project Architecture

The project follows a clean, modular, feature-based folder structure:

```text
Desa-Senggreng/
├── public/                     # Static assets (images, icons, favicons)
├── src/
│   ├── app/                    # Next.js App Router (pages and layouts)
│   │   ├── coming-soon/        # Coming soon placeholder page
│   │   ├── detail/             # Dynamic detail view pages
│   │   ├── galeri/             # Gallery page
│   │   ├── home/               # Home route modules
│   │   ├── tentang/            # About page (village history, profile)
│   │   ├── umkm/               # MSME / UMKM directory page
│   │   ├── wisata/             # Tourism destinations page
│   │   ├── layout.tsx          # Root layout with font, JSON-LD Schema & metadata
│   │   ├── page.tsx            # Landing page entry point
│   │   ├── robots.ts           # Search engine robots configuration
│   │   ├── seo-data.ts         # Static metadata, route definitions, and SEO constants
│   │   └── sitemap.ts          # Dynamic XML sitemap generator
│   ├── assets/                 # Local images and graphic assets
│   ├── shared/                 # Modular feature components and shared modules
│   │   ├── components/         # Reusable layout and section UI components
│   │   ├── detail/             # Detail view feature logic and components
│   │   ├── galeri/             # Gallery feature components
│   │   ├── home/               # Homepage hero, highlights, and sections
│   │   ├── tentang/            # About section containers and cards
│   │   ├── umkm/               # UMKM catalog components and filters
│   │   └── wisata/             # Tourism cards, maps, and spotlight components
│   └── styles/
│       └── globals.css         # Global CSS stylesheet & Tailwind setup
├── eslint.config.mjs           # ESLint configuration
├── next.config.ts              # Next.js configuration
├── package.json                # Project dependencies and npm scripts
├── postcss.config.mjs          # PostCSS configuration
├── tsconfig.json               # TypeScript compiler configuration
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Version **18.18.0** or later recommended)
- [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), [pnpm](https://pnpm.io/), or [bun](https://bun.sh/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Weedanta/Desa-Senggreng.git
   cd Desa-Senggreng
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

### Running the Development Server

Start the local development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to explore the application.

### Building for Production

To create an optimized production build:

```bash
# Build production bundle
npm run build

# Start production server
npm run start
```

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
|---|---|
| `npm run dev` | Starts the Next.js development server with Turbopack |
| `npm run build` | Compiles and builds the production bundle |
| `npm run start` | Runs the built application in production mode |
| `npm run lint` | Runs ESLint to check for code quality and style issues |

---

## 🔍 SEO & Performance Optimizations

This website incorporates modern web & SEO best practices:

- **JSON-LD Schema Markup:** Injected into `<head>` providing structured semantic data (`@type: LocalBusiness`) for search engine indexers.
- **Dynamic Open Graph & Twitter Cards:** Generates rich link previews when shared across social networks (WhatsApp, Facebook, Twitter, LinkedIn).
- **Automated Sitemap & Robots:** Fully automated `sitemap.ts` and `robots.ts` to ensure fast search engine discovery and indexation.
- **Fast Image Optimization:** Utilizes `next/image` with WebP/AVIF formats and responsive sizing.
- **Modern Typography:** Optimized font loading with `display: swap` to eliminate layout shift (CLS).

---

## 🌐 Deployment

The application is configured for continuous deployment on [Vercel](https://vercel.com/). Any changes pushed to the `main` branch automatically trigger a new deployment preview and production release.

---

## 👥 Contributing

Contributions are welcome! If you would like to improve this project:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is created and maintained for **Desa Senggreng, Sumberpucung, Malang**.  
All rights reserved © 2026.
