# Prostate Volume Calculator - Medical Grade BPH Assessment Tool

## Overview

This is a professional-grade prostate volume calculator web application designed for healthcare providers and medical professionals. The application provides accurate prostate volume calculations using validated ellipsoid formulas, specifically targeting BPH (Benign Prostatic Hyperplasia) assessment and treatment planning.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Components**: Radix UI with shadcn/ui component library
- **Styling**: Tailwind CSS with medical-focused design system
- **State Management**: React hooks with TanStack Query for server state
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Hosting**: Neon serverless database
- **Session Management**: Connect-pg-simple for PostgreSQL sessions

### Data Storage
- **Primary Database**: PostgreSQL via Neon serverless
- **ORM**: Drizzle ORM with type-safe queries
- **Schema**: Defined in shared/schema.ts with Zod validation
- **Migrations**: Managed through Drizzle Kit

## Key Components

### Calculator Module
- **Core Calculation**: Ellipsoid formula implementation for prostate volume
- **Input Validation**: Comprehensive validation with error handling
- **Results Assessment**: Clinical interpretation based on volume ranges
- **Multiple Methods**: Support for both ellipsoid and bullet formulas

### Medical Content System
- **Educational Content**: Comprehensive BPH and prostate health information
- **Clinical Guidelines**: Evidence-based treatment recommendations
- **FAQ System**: 12 comprehensive medical questions with professional answers
- **Reference Materials**: Links to medical literature and guidelines

### SEO and Analytics
- **Advanced SEO**: Comprehensive meta tags, schema markup, and structured data
- **Medical Schema**: Specialized schema for medical calculators and content
- **Analytics**: Google Analytics integration with custom event tracking
- **Performance**: Optimized for Core Web Vitals and medical accessibility

## Data Flow

1. **User Input**: Medical professionals enter TRUS measurements (length, width, height)
2. **Validation**: Client-side validation ensures accurate medical ranges
3. **Calculation**: Mathematical computation using validated ellipsoid formula
4. **Assessment**: Clinical interpretation based on established medical ranges
5. **Results**: Comprehensive output with treatment recommendations
6. **Analytics**: User interactions tracked for performance optimization

## External Dependencies

### Medical Standards
- **Ellipsoid Formula**: Validated mathematical formula for prostate volume
- **Clinical Ranges**: Evidence-based normal values by age groups
- **Treatment Guidelines**: AUA/EAU clinical practice guidelines
- **TRUS Protocol**: Standardized ultrasound measurement procedures

### Third-Party Services
- **Google Analytics**: User behavior and performance tracking
- **Neon Database**: Serverless PostgreSQL hosting
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with hot module replacement
- **Database**: Local PostgreSQL or Neon development instance
- **Environment Variables**: Secure configuration management

### Production Deployment
- **Build Process**: Vite production build with code splitting
- **Server**: Node.js Express server with static asset serving
- **Database**: Neon serverless PostgreSQL in production
- **Performance**: Optimized for medical professional workflows

### Environment Configuration
- **Database URL**: Configured via DATABASE_URL environment variable
- **Analytics**: Google Analytics via VITE_GA_MEASUREMENT_ID
- **Security**: HIPAA-compliant data handling practices

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 07, 2025. Initial setup