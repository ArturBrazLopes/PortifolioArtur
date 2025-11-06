# Modern Portfolio Application

## Overview

This is a modern, dark-themed portfolio website built with a full-stack architecture. The application showcases services, statistics, process steps, and includes a newsletter subscription feature. It features a premium design with yellow accent colors, glassmorphism effects, and a mobile-responsive interface inspired by award-winning creative agency websites.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for component-based UI development
- **Vite** as the build tool and development server
- **Wouter** for lightweight client-side routing
- **TanStack Query (React Query)** for server state management, data fetching, and caching

**UI Component Library**
- **shadcn/ui** component system with Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- **Class Variance Authority (CVA)** for component variant management
- Dark mode as the primary theme with yellow (#FFD700) accent colors

**Design System**
- Custom color palette defined in CSS variables supporting both light and dark modes
- Typography using Inter and Montserrat fonts from Google Fonts
- Glassmorphism effects with backdrop blur and transparent backgrounds
- Responsive spacing system based on Tailwind's spacing scale

### Backend Architecture

**Server Framework**
- **Express.js** as the HTTP server framework
- Custom middleware for request logging and JSON body parsing
- RESTful API design pattern for data endpoints

**Data Layer**
- **In-memory storage** (MemStorage class) as the current data persistence layer
- **Drizzle ORM** configured for future PostgreSQL integration
- Schema definitions using Drizzle with Zod validation
- Seed data provided for services, stats, process steps, and projects

**API Endpoints**
- `GET /api/services` - Retrieve all service offerings
- `GET /api/stats` - Retrieve portfolio statistics
- `GET /api/process` - Retrieve process steps
- `POST /api/subscribe` - Create newsletter subscription with email validation

**Data Models**
- **Projects**: Portfolio work items with title, description, category, and icon
- **Services**: Service offerings with descriptions and icons
- **Stats**: Key statistics with values, labels, and descriptions
- **ProcessSteps**: Workflow steps with step numbers, titles, and descriptions
- **Subscribers**: Newsletter subscribers with unique email addresses

### Development Environment

**Type Safety**
- Full TypeScript configuration across client and server
- Shared types between frontend and backend via `@shared` path alias
- Zod schemas for runtime validation of API inputs

**Path Aliases**
- `@/` → client source directory
- `@shared/` → shared schema and types
- `@assets/` → static assets directory

**Development Tools**
- Hot Module Replacement (HMR) via Vite
- Replit-specific plugins for development banners and error overlays
- Source map support for debugging

## External Dependencies

### Core Dependencies

**Frontend Libraries**
- `react` and `react-dom` - UI framework
- `@tanstack/react-query` - Server state management
- `wouter` - Client-side routing
- `react-hook-form` with `@hookform/resolvers` - Form management
- Radix UI component primitives (accordion, dialog, dropdown, etc.)

**Styling**
- `tailwindcss` - Utility-first CSS framework
- `class-variance-authority` - Component variant utilities
- `clsx` and `tailwind-merge` - Class name utilities

**Backend Framework**
- `express` - Web server framework

**Database & ORM**
- `drizzle-orm` - Type-safe ORM
- `drizzle-zod` - Zod schema integration
- `@neondatabase/serverless` - Serverless PostgreSQL driver (configured but not actively used)
- `connect-pg-simple` - PostgreSQL session store

**Validation**
- `zod` - Schema validation library

**Build Tools**
- `vite` - Frontend build tool and dev server
- `@vitejs/plugin-react` - React plugin for Vite
- `esbuild` - Fast JavaScript bundler for server code
- `tsx` - TypeScript execution for development

**Utilities**
- `date-fns` - Date manipulation
- `nanoid` - Unique ID generation
- `lucide-react` - Icon library
- `cmdk` - Command menu component
- `embla-carousel-react` - Carousel component

### Future Database Integration

The application is configured to use PostgreSQL via Drizzle ORM but currently uses in-memory storage. The schema is defined and ready for migration:
- Connection configured via `DATABASE_URL` environment variable
- Migrations directory: `./migrations`
- Schema location: `./shared/schema.ts`
- Database dialect: PostgreSQL

To activate database persistence, provision a PostgreSQL database and run `npm run db:push` to apply the schema.