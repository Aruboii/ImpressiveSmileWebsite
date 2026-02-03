# Impressive Smile Dental Clinic Website

## Overview

This is a modern, single-page marketing website for "Impressive Smile" dental clinic, featuring Dr. Madhulika Singh's practice in HSR Layout, Bengaluru. The application is a full-stack TypeScript project with a React frontend and Express backend, using PostgreSQL for data persistence. The site showcases dental services, patient reviews, FAQs, and contact information with smooth animations and a dark theme design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for page transitions and scroll effects
- **Build Tool**: Vite with hot module replacement

The frontend follows a component-based architecture with:
- Page components in `client/src/pages/`
- Reusable UI components in `client/src/components/ui/`
- Feature components in `client/src/components/`
- Custom hooks in `client/src/hooks/`

### Backend Architecture
- **Framework**: Express 5 with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL
- **API Design**: RESTful endpoints defined in `shared/routes.ts`
- **Data Validation**: Zod schemas with drizzle-zod integration

The backend uses a storage abstraction pattern (`server/storage.ts`) to separate database operations from route handlers.

### Data Flow
1. Frontend fetches static JSON files from `client/public/` for content (reviews, FAQs, services)
2. Backend seeds the database on startup with initial data
3. API endpoints available at `/api/reviews`, `/api/faqs`, `/api/services`

### Database Schema
Three main tables defined in `shared/schema.ts`:
- `reviews`: Patient testimonials (name, rating, comment, date)
- `faqs`: Frequently asked questions (question, answer)
- `services`: Dental services offered (title, description, icon)

### Build System
- Development: `tsx` for TypeScript execution with Vite dev server
- Production: Custom build script using esbuild for server and Vite for client
- Database migrations: Drizzle Kit with `db:push` command

## External Dependencies

### Database
- **PostgreSQL**: Primary database accessed via `DATABASE_URL` environment variable
- **Drizzle ORM**: Type-safe database queries and migrations
- **pg**: Node.js PostgreSQL client

### UI/UX Libraries
- **Radix UI**: Accessible component primitives (accordion, dialog, dropdown, etc.)
- **Embla Carousel**: Review testimonials carousel
- **Framer Motion**: Animations and scroll effects
- **Lucide React**: Icon library

### Development Tools
- **Vite**: Frontend build tool with React plugin
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type checking across the full stack

### Replit-Specific
- `@replit/vite-plugin-runtime-error-modal`: Error overlay in development
- `@replit/vite-plugin-cartographer`: Development tooling
- `@replit/vite-plugin-dev-banner`: Development environment indicator