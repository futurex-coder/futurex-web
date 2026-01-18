# Future X - Portfolio Website

A modern, cinematic React portfolio website featuring scroll-driven animations, WebGL effects, and a config-driven architecture.

## Features

- **Cinematic Scrolling**: Smooth momentum scrolling powered by Lenis with scroll-driven animations
- **WebGL Background**: Subtle 3D particle effects using React Three Fiber
- **Config-Driven Architecture**: All pages rendered from configuration objects for easy maintenance
- **Component Library**: Unified UI component system in `src/ui/` folder
- **Responsive Design**: Mobile-first approach with breakpoint-specific optimizations
- **Accessibility**: Reduced motion support and keyboard navigation
- **Performance**: Lazy loading, code splitting, and optimized animations

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS with custom design tokens
- **Routing**: React Router v6
- **Animations**: GSAP with ScrollTrigger
- **Smooth Scroll**: Lenis
- **3D Graphics**: Three.js via React Three Fiber + Drei

## Project Structure

```
src/
├── ui/                      # Component Library (Single Folder)
│   ├── components/          # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── DataTable.tsx
│   │   ├── KineticHeading.tsx
│   │   ├── ParallaxMedia.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── StatsGrid.tsx
│   │   └── WebGLBackdrop.tsx
│   ├── hooks/               # Custom React hooks
│   │   ├── useReducedMotion.ts
│   │   ├── useScrollProgress.ts
│   │   └── useViewport.ts
│   ├── layout/              # Layout components
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── primitives/          # Core building blocks
│   │   ├── PageRenderer.tsx
│   │   └── Section.tsx
│   ├── providers/           # Context providers
│   │   └── LenisProvider.tsx
│   └── sections/            # Page sections
│       ├── ContactCTA.tsx
│       ├── Hero.tsx
│       ├── Manifesto.tsx
│       ├── NextUp.tsx
│       └── ProjectsShowcase.tsx
├── config/                  # Configuration files
│   ├── homeConfig.tsx       # Home page config
│   ├── projects.ts          # Project data
│   ├── services.ts          # Services data
│   └── team.ts              # Team data
├── pages/                   # Route pages (thin wrappers)
│   ├── Calendar.tsx
│   ├── Home.tsx
│   ├── OffTrack.tsx
│   ├── OnTrack.tsx
│   ├── Partnerships.tsx
│   └── ProjectDetail.tsx
├── App.tsx                  # App root with routing
├── main.tsx                 # Entry point
└── index.css                # Global styles
```

## Architecture Principles

### 1. Single Component Library Folder

All UI components live in `src/ui/` creating a unified component library that can be easily maintained and reused across the application.

### 2. Config-Driven Pages

Pages are rendered from configuration objects rather than hardcoded JSX:

```typescript
// Example: src/config/homeConfig.tsx
export const homeConfig: PageConfig = {
  sections: [
    {
      id: 'hero',
      component: <Hero />,
      enabled: true,
      animate: false,
    },
    {
      id: 'projects',
      component: <ProjectsShowcase />,
      enabled: true,
      animate: true,
      pin: false,
    },
  ],
}
```

Benefits:
- Easy to reorder sections
- Toggle features on/off without code changes
- Consistent section behavior
- Theme and animation settings per section

### 3. Separation of Concerns

- **Pages**: Thin wrappers that import configs and render via `PageRenderer`
- **Sections**: Reusable content blocks
- **Components**: Pure UI elements
- **Config**: All content, settings, and structure

## Routes

- `/` - Home page with hero, manifesto, and projects showcase
- `/on-track` - Capabilities and delivery process
- `/off-track` - R&D experiments and innovation lab
- `/calendar` - Roadmap and upcoming milestones
- `/partnerships` - Partner benefits and team
- `/projects/:slug` - Individual project detail pages

## Content

The site showcases four featured projects:

1. **Rezly** - Appointment booking platform with AI coaching
2. **DriveMe** - Taxi ecosystem with driver/passenger apps
3. **CardX** - NFC business cards with web customizer
4. **Brute App** - Social entertainment app with gamification

## Design System

### Colors

- **Neon Cyan**: `#00fff9` - Primary accent
- **Neon Blue**: `#00d4ff` - Secondary accent
- **Neon Green**: `#39ff14` - Tertiary accent
- **Neon Pink**: `#ff006e` - Quaternary accent

### Typography

- **Display**: Space Grotesk (headings)
- **Body**: Inter (body text)

### Animations

All animations respect `prefers-reduced-motion` settings and use GSAP with ScrollTrigger for optimal performance.

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

### Adding a New Section

1. Create section component in `src/ui/sections/`
2. Add to page config in `src/config/`
3. Section automatically gets scroll animations and theming

### Modifying Content

All content lives in `src/config/`:
- Projects: `projects.ts`
- Services: `services.ts`
- Team: `team.ts`
- Page structure: `*Config.tsx`

### Adjusting Animations

Modify animation settings in section configs:
- `animate`: Enable/disable scroll animations
- `pin`: Pin section during scroll
- `theme`: 'dark' or 'light'

## Performance Optimizations

- WebGL disabled on mobile devices
- Reduced motion mode respected
- Route-based code splitting
- Image lazy loading
- GSAP animations with hardware acceleration

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ features
- CSS Grid and Flexbox
