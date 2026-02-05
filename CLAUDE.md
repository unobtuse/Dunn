# Dunn Marketing Website

Marketing agency website for Dunn Marketing (CT-based, empathy-driven brand building).

## Tech Stack

- **Framework**: Next.js 16.1.6 (App Router, static export)
- **React**: 19.2.3
- **Styling**: Tailwind CSS v4 with `tw-animate-css`
- **UI**: Radix UI primitives + custom glass morphism components
- **Animation**: Framer Motion
- **Theming**: next-themes (light mode default)
- **Font**: Merriweather (Google Fonts)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (Header, Footer, ThemeProvider)
│   ├── page.tsx            # Home page
│   ├── about/              # About page
│   ├── blog/               # Blog pages
│   ├── contact/            # Contact page
│   ├── process/            # Process page
│   ├── services/           # Services pages
│   └── work/               # Work/portfolio page
├── components/
│   ├── layout/             # Header, Footer
│   ├── home/               # Home page sections (HeroSection, ServicesGrid, etc.)
│   ├── ui/                 # Reusable glass-* UI components
│   ├── about/              # About page components
│   └── blog/               # Blog components
├── data/
│   └── content.ts          # ALL site content (services, team, testimonials, etc.)
└── lib/
    └── utils.ts            # cn() utility (clsx + tailwind-merge)
```

## Key Patterns

### Glass Morphism Components
All UI components use glass morphism design (`src/components/ui/glass-*.tsx`):
- `GlassButton` - with variants: default, primary, outline, ghost, destructive
- `GlassCard`, `GlassInput`, `GlassAvatar`, `GlassBadge`, `GlassTabs`, etc.
- Pattern: `bg-white/20 backdrop-blur-xl border border-white/30`

### Content Management
All site content lives in `src/data/content.ts`:
- `siteConfig` - company info, contact, social links
- `services` - 8 service offerings
- `processSteps` - 6-step process (Listen, Learn, Create, Communicate, Engage, Evaluate)
- `testimonials` - client testimonials
- `caseStudies` - portfolio work
- `team` - 12 team members with bios
- `values` - 9 company values
- `navigation` - main and footer nav

### Component Conventions
- Use `"use client"` for interactive components
- Use `class-variance-authority` (cva) for component variants
- Import cn from `@/lib/utils` for className merging
- Icons from `lucide-react`

## Build & Deploy

Static site export configured in `next.config.ts`:
```ts
output: "export"
trailingSlash: true
images: { unoptimized: true }
```

**Commands:**
```bash
npm run dev      # Development server (localhost:3000)
npm run build    # Build static export to /out
npm run lint     # ESLint
```

Output directory: `/out` (static HTML/CSS/JS)

## Brand Colors

Custom CSS variables (see `globals.css`):
- `--dunn-purple` - primary brand purple
- `--dunn-purple-dark` - darker variant
- `--dunn-purple-light` - lighter variant
- `--glow-primary` - glow effect color

## Accessibility

- Skip navigation link in layout
- AccessiBeWidget for WCAG 2.1 AA compliance
- Semantic HTML throughout

## Maintaining This File

**Keep CLAUDE.md updated** when making changes:

- **New pages**: Add to Project Structure and update navigation info
- **New components**: Document in appropriate section (ui/, home/, etc.)
- **New data types**: Add to Content Management section
- **New dependencies**: Update Tech Stack
- **New patterns**: Document in Key Patterns
- **Config changes**: Update Build & Deploy section

This file is the primary context for AI sessions - outdated info wastes tokens and causes confusion.

## Repository

GitHub: https://github.com/unobtuse/Dunn
