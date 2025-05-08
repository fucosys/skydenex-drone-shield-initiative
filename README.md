
# Skydenex - Drone Defense Shield Initiative

## About Skydenex

Skydenex is a defense startup that's revolutionizing how military vehicles protect themselves against FPV kamikaze drones. Our solution is a modular, non-lethal defense system that uses micro-missile technology to neutralize drone threats effectively and safely.

## Project Description

This repository contains the code for the Skydenex landing page, a single-page React application built with:
- React
- TypeScript
- Tailwind CSS
- shadcn/ui component library
- Modern animations and transitions

The landing page showcases the problem Skydenex is solving, our innovative solution, information about our founders, and a contact form for inquiries.

## Features

- Responsive design that works on all device sizes
- Dark-themed, high-tech aesthetic
- Smooth animations and transitions
- Interactive navigation
- Sections for Problem Statement, Solution Overview, About Us, and Contact
- Animated component reveals on scroll

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/skydenex-landing.git
cd skydenex-landing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to http://localhost:5173 to see the application running.

## Project Structure

```
├── public/                  # Public assets
│   └── lovable-uploads/     # Uploaded images
├── src/
│   ├── components/          # React components
│   │   ├── AboutUs.tsx      # About Us section
│   │   ├── Contact.tsx      # Contact section
│   │   ├── Footer.tsx       # Page footer
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Problem.tsx      # Problem section
│   │   ├── Solution.tsx     # Solution section
│   │   └── ui/              # UI components (shadcn/ui)
│   ├── pages/               # Page components
│   │   └── Index.tsx        # Main landing page
│   ├── App.tsx              # Main App component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── README.md                # This file
└── package.json             # Project dependencies and scripts
```

## Customization

### Changing Colors

To change the color scheme, modify the appropriate Tailwind CSS classes in the components. The primary colors used are:

- Blue: Problem section accent color
- Red: Problem section accent color
- Green: Contact section accent color
- Purple: About Us section accent color

### Adding Content

To add or modify content, edit the corresponding component files in the `src/components` directory.

### Deploying

Build the production version of the site with:

```bash
npm run build
# or
yarn build
```

The compiled files will be in the `dist` directory, which can be deployed to any static site hosting service like Netlify, Vercel, or GitHub Pages.

## Founders

- Jiri Minarik - Co-founder
- Joshua Soutelo - Co-founder

## License

All rights reserved. This code is the property of Skydenex and may not be reproduced or distributed without permission.
