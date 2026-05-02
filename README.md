<div align="center">

# @nvminh162 — Nguyen Van Minh Portfolio

**A high-performance, interactive personal portfolio built with Next.js 16, React 19, and TypeScript.**
Featuring 3-D animations, scroll-driven experiences, and a fully responsive design system.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-nvminh162.id.vn-6142ff?style=for-the-badge&logo=vercel&logoColor=white)](https://nvminh162.id.vn)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-007acc?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Author](#author)
- [Tech Stack](#tech-stack)
- [Key Features](#key-features)
- [Project Showcase](#project-showcase)
- [Professional Experience](#professional-experience)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Contact](#contact)

---

## Overview

This repository contains the full source code for Nguyen Van Minh's personal portfolio — a creative, production-grade web application designed to showcase technical proficiency, professional history, and selected projects. The application prioritises smooth user experience through GPU-accelerated animations, server-side rendering, and a cohesive design language across light and dark themes.

---

## Author

| Field | Value |
|---|---|
| **Full Name** | Nguyen Van Minh |
| **Handle** | @nvminh162 |
| **Website** | [nvminh162.id.vn](https://nvminh162.id.vn) |
| **Email** | [nvminh162@gmail.com](mailto:nvminh162@gmail.com) |
| **Phone** | [(VN) +84 0353.999.798](tel:+840353999798) |
| **GitHub** | [github.com/nvminh162](https://github.com/nvminh162) |
| **LinkedIn** | [linkedin.com/in/nvminh162](https://www.linkedin.com/in/nvminh162) |
| **LeetCode** | [leetcode.com/nvminh162](https://leetcode.com/nvminh162) |
| **Facebook** | [facebook.com/nvminh162](https://www.facebook.com/nvminh162) |
| **Instagram** | [instagram.com/nvminh162](https://www.instagram.com/nvminh162) |
| **X / Twitter** | [x.com/nvminh162](https://x.com/nvminh162) |
| **Telegram** | [t.me/nvminh162](https://t.me/nvminh162) |
| **Zalo** | [zalo.me/0353999798](https://zalo.me/0353999798) |
| **WhatsApp** | [wa.me/840353999798](https://wa.me/840353999798) |
| **TikTok** | [tiktok.com/@nvminh162](https://www.tiktok.com/@nvminh162) |

---

## Tech Stack

### Core Framework

| Technology | Version | Role |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.2.2 | App Router, SSR, routing, API routes |
| [React](https://react.dev) | 19 | UI component model |
| [TypeScript](https://www.typescriptlang.org) | 5 | Static typing across the entire codebase |

### Styling

| Technology | Role |
|---|---|
| [Tailwind CSS](https://tailwindcss.com) v4 | Utility-first styling system |
| [Sass](https://sass-lang.com) | Scoped component-level styles (`.module.scss`) |
| [Styled Components](https://styled-components.com) | CSS-in-JS for dynamic theming |
| [Chakra UI](https://chakra-ui.com) | Accessible component primitives |
| [Radix UI](https://www.radix-ui.com) | Unstyled, accessible UI primitives |
| [shadcn/ui](https://ui.shadcn.com) | Composable component library |
| [next-themes](https://github.com/pacocoursey/next-themes) | Dark / light theme management |

### Animation & Motion

| Technology | Role |
|---|---|
| [Framer Motion](https://www.framer.com/motion) | Declarative page and component animations |
| [GSAP](https://gsap.com) + ScrollTrigger | Scroll-driven timelines and entrance effects |
| [Lenis](https://lenis.darkroom.engineering) | Native-feel smooth scrolling |
| [Three.js](https://threejs.org) + [Spline](https://spline.design) | Interactive 3-D keyboard scene |

### State Management & Data Fetching

| Technology | Role |
|---|---|
| [Redux](https://redux.js.org) | Predictable global state management |
| [TanStack Query](https://tanstack.com/query) | Async server-state with caching |

### Backend & Integrations

| Technology | Role |
|---|---|
| [Nodemailer](https://nodemailer.com) | Transactional email via contact form API route |
| [Zod](https://zod.dev) | Runtime schema validation for API payloads |
| [Socket.IO Client](https://socket.io) | Real-time communication layer |
| [Vercel Analytics](https://vercel.com/analytics) | Traffic analytics |
| [Vercel Speed Insights](https://vercel.com/docs/speed-insights) | Core Web Vitals monitoring |

---

## Key Features

- **3-D Interactive Scene** — A Spline-powered keyboard rendered in real-time WebGL that reacts to scroll position and section transitions.
- **Scroll-Driven Hash Sync** — GSAP ScrollTrigger automatically updates the browser's URL hash (`#skills`, `#experience`, etc.) as the user scrolls, enabling direct deep-linking to any section.
- **Animated Avatar Portrait** — A floating circular portrait with aura glow that transitions into different positions per section on both desktop and mobile.
- **Elastic Custom Cursor** — A physics-based cursor that elastically follows pointer movement with spring inertia.
- **Radial Context Menu** — A right-click radial menu with quick-action items and a shockwave effect.
- **Sound Effects** — Keycap press/release audio and contextual sound events for interactive elements.
- **Dark / Light Theme** — System-aware theme toggle with smooth colour transitions across the entire UI.
- **Smooth Scroll** — Lenis-powered momentum scrolling with Framer Motion compatible scroll progress hooks.
- **Preloader** — Animated intro sequence on initial page load.
- **Contact Form** — A server-side form backed by a Next.js API route, Nodemailer, and honeypot bot protection.
- **Resume PDF Viewer** — In-browser PDF rendering with a download shortcut.
- **Particles Background** — A WebGL canvas particle system that responds to pointer proximity.
- **Scroll-to-Top Button** — A fixed bottom-right button that fades in when the user scrolls away from the top and smoothly returns to the top on click.
- **Easter Eggs** — Hidden interactive surprises for curious visitors.
- **SEO Optimised** — Full `Metadata` API coverage, Open Graph tags, Twitter cards, JSON-LD structured data, and `robots.txt`.

---

## Project Showcase

| Project | Category | Description | Stack |
|---|---|---|---|
| [Nguyen Van Minh Portfolio](https://nvminh162.id.vn) | Web | Personal portfolio with 3-D animations and interactive sections | Next.js · TypeScript · Tailwind · Framer Motion · GSAP |
| [Aurora Hotel Management System](https://github.com/nvminh162/aurora-hotel-management-system) | Full-Stack Web | Hotel management platform for Aurora Hotel | React · Tailwind · Redux · TanStack |
| [Chatly Social Media](https://github.com/giasinguyen/chatly-messaging-platform) | Full-Stack (Web + Mobile) | Social media platform with real-time messaging | Next.js · TypeScript · Tailwind · Redux |
| [Nexatech E-Commerce](https://gitlab.com/software-architecture264301) | Full-Stack (Microservices) | Microservices-based e-commerce platform for Nexatech | Next.js · TypeScript · Tailwind · Redux |
| [Zolara Chat Platform](https://github.com/nvminh162/zolara-chat-platform) | Mobile | Cross-platform real-time chat application | React Native · TypeScript · Expo · Redux |
| [Shopeefood – Mobile UI](https://github.com/nvminh162/shopeefood-app) | Mobile | React Native UI clone of the Shopeefood application | React Native · JavaScript · Framer Motion |
| [Huong Bien 1](https://github.com/NguyenNguyen0/HuongBien) | Desktop | JavaFX restaurant management — single-server architecture | JavaFX · React · Tailwind |
| [Huong Bien 2](https://github.com/NguyenNguyen0/HuongBien2) | Desktop | JavaFX restaurant management — distributed client-server | JavaFX · React · Tailwind |

---

## Professional Experience

### Sr. MERN Stack Developer — Code Encoders
**Jun 2023 – Present · Remote · Full-time**

- Progressed from Associate to Senior Engineer while delivering 45+ full-stack applications at production quality.
- Migrated legacy Node.js monoliths to a structured service-layer architecture with comprehensive Swagger documentation.
- Optimised client-facing bundle sizes, tuned API response times, implemented Jest test coverage, and integrated GitHub Actions CI/CD pipelines for zero-downtime deployments.

**Stack:** React · Next.js · MongoDB · Tailwind CSS · Redux

---

### Sr. Web Developer — Pixle Digital
**May 2024 – Dec 2024 · Remote · Contract**

- Led distributed engineering teams and enforced consistent coding standards to maintain long-term codebase quality.
- Developed reusable component libraries and project boilerplates that demonstrably reduced delivery timelines across multiple client engagements.
- Mentored junior developers and refined sprint planning workflows, increasing team velocity without proportional headcount growth.

**Stack:** React · TypeScript · Tailwind CSS · Framer Motion · Git

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 20
- **npm** / **pnpm** / **yarn**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/nvminh162/nguyenvanminh-portfolio-web.git
cd nguyenvanminh-portfolio-web

# 2. Install dependencies
npm install

# 3. Copy and configure environment variables
cp .env.example .env.local
```

### Environment Variables

Create a `.env.local` file in the project root and populate the following keys:

```env
# Nodemailer — transactional email for the contact form
MAIL_HOST=smtp.gmail.com
MAIL_PORT=465
MAIL_USER=your-email@gmail.com
MAIL_PASS=your-app-password
MAIL_TO=nvminh162@gmail.com

# Umami Analytics (optional)
UMAMI_DOMAIN=https://your-umami-instance/script.js
UMAMI_SITE_ID=your-site-id
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

### Preview Build Locally

```bash
npm run preview
```

---

## Project Structure

```
nguyenvanminh-portfolio-web/
├── public/
│   ├── assets/
│   │   ├── contact/          # Social & contact SVG icons
│   │   ├── keycap-sounds/    # Audio files for key interactions
│   │   ├── nav-link-previews/# Navigation thumbnail images
│   │   ├── projects/         # Project cover images
│   │   ├── sounds/           # Miscellaneous sound effects
│   │   └── tech/             # Technology / skill SVG icons
│   ├── logo/                 # Brand logo assets
│   └── favicon.*
│
├── src/
│   ├── app/
│   │   ├── api/contact/      # Next.js API route — Nodemailer integration
│   │   ├── globals.css
│   │   ├── layout.tsx        # Root layout with metadata, Header, Footer
│   │   └── page.tsx          # Home page — section composition
│   │
│   ├── components/
│   │   ├── header/           # Header + navigation menu
│   │   ├── footer/           # Footer
│   │   ├── sections/         # Hero, Skills, Experience, Projects, Resume,
│   │   │                     #   Collaborate (contact form), Contact (socials)
│   │   ├── radial-menu/      # Right-click radial context menu
│   │   ├── ui/               # Reusable UI primitives (Button, Card, …)
│   │   ├── animated-background.tsx  # GSAP scroll section tracker + hash sync
│   │   ├── avatar-portrait.tsx      # Floating animated avatar
│   │   ├── app-overlays.tsx         # Global overlays — cursor, particles, menus
│   │   ├── scroll-to-top.tsx        # Fixed scroll-to-top button
│   │   ├── smooth-scroll.tsx        # Lenis smooth scroll wrapper
│   │   └── preloader/               # Entry animation / loader
│   │
│   ├── contexts/             # React context providers (AvatarContext, …)
│   ├── data/                 # Centralised data layer
│   │   ├── config.ts         # Site metadata and identity
│   │   ├── contact.tsx       # Contact values and UI link groups
│   │   ├── experience.ts     # Work history
│   │   ├── projects.ts       # Project catalogue
│   │   ├── skills.ts         # Skill catalogue + stack cards
│   │   ├── assets.ts         # Logo / portrait asset paths
│   │   └── theme.ts          # Theme configuration
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions (cn, lenis, …)
│   └── types/                # Shared TypeScript types
```

---

## Configuration

All site-level identity and metadata is centralised in `src/data/config.ts`. Update this file to adapt the portfolio to a different author without touching any component:

```ts
// src/data/config.ts
const config = {
  title: "@nvminh162 | Nguyen Van Minh",
  description: { long: "...", short: "..." },
  author: "Van Minh",
  username: "@nvminh162",
  githubUsername: "nvminh162",
  site: "https://nvminh162.id.vn",
};
```

Contact details, social URLs, and phone numbers are managed in `src/data/contact.tsx`. Skills, experience entries, and project listings are structured data files in the same directory — no component modifications required to add or update content.

---

## Contact

Have a project in mind or want to collaborate?

- **Email:** [nvminh162@gmail.com](mailto:nvminh162@gmail.com)
- **LinkedIn:** [linkedin.com/in/nvminh162](https://www.linkedin.com/in/nvminh162)
- **Website:** [nvminh162.id.vn](https://nvminh162.id.vn)

---

<div align="center">

© 2026 Van Minh. All rights reserved.

</div>
