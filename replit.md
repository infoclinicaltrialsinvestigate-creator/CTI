# Clinical Trials Investigate (CTI) Website

## Overview
Professional multi-page website for Clinical Trials Investigate, a full-service Contract Research Organization (CRO) specializing in medical device and diagnostics development.

## Tech Stack
- **Frontend**: React + Vite + TypeScript + Tailwind CSS + shadcn/ui
- **Backend**: Express.js + TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Routing**: wouter
- **State Management**: TanStack React Query

## Pages
- **Home** (`/`) - Landing page with hero, stats, services, therapeutic areas, CTA
- **Sectors** (`/sectors`) - Medical device & diagnostics sector focus
- **Clinical Operations** (`/clinical-operations`) - PMBOK framework, development phases
- **Solutions** (`/solutions`) - 12 comprehensive service categories
- **Delivery Models** (`/delivery-models`) - Full-service and FSP models
- **Expertise** (`/expertise`) - Therapeutic areas and specialties
- **Education** (`/education`) - Educational resources with external links
- **About Us** (`/about`) - Vision, mission, values, trial experience, services, technology
- **Careers** (`/careers`) - Career opportunities and contact info
- **Contact** (`/contact`) - Contact form with validation and database persistence

## Key Components
- `Navbar` - Responsive navigation with mobile drawer
- `Footer` - Site-wide footer with links and contact info
- `HeroSection` - Reusable hero with image overlay, CTA buttons

## Design
- **Theme**: Bright teal/blue medical professional theme
- **Font**: Plus Jakarta Sans
- **Colors**: Teal primary (190 85% 38%), clean whites and soft backgrounds
- **Dark mode**: Supported via class-based toggle

## API Endpoints
- `POST /api/contact` - Submit contact form message
- `GET /api/contact` - Retrieve contact messages

## Database Schema
- `contact_messages` - Stores contact form submissions

## Development
- Run: `npm run dev`
- DB Push: `npm run db:push`
- Port: 5000
