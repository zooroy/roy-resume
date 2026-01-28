# AI Agent Instructions for Roy Resume Codebase

## Project Overview
This is a **Vaporwave/Outrun-themed digital resume** built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. It features a bilingual i18n system (zh-TW/en), custom neon-glowing UI components, and CRT scanner line effects.

**Key Tech Stack:**
- Next.js 16.1.1 (App Router)
- React 19 with TypeScript
- Tailwind CSS v4 + PostCSS
- No external UI library (custom components via Tailwind + CSS)

## Architecture & Data Flow

### Core Structure
```
src/
├── types/resume.ts           # TypeScript interfaces (Locale, ResumeData)
├── data/resume.ts            # resumeData object (single source of truth)
├── components/
│   ├── VaporComponents.tsx    # Design system: NeonCard, NeonTag, NeonGradientText, etc.
│   ├── ResumeSections.tsx     # Domain components: EducationSection, WorkSection, SkillsSection, PortfolioSection
│   └── LanguageSwitcher.tsx   # i18n locale switcher
└── lib/utils.ts              # Utility functions

app/
├── page.tsx                  # Main resume page (client component with locale state)
├── layout.tsx                # Root layout with metadata
├── globals.css               # Design system: colors, keyframes, neon effects
└── api/resume/route.ts       # (Optional) API endpoint for resume data
```

### Bilingual Pattern
**All content** uses `Record<Locale, string>` pattern:
```typescript
type Locale = 'zh-TW' | 'en';
intro: { 'zh-TW': '中文自介', en: 'English intro' }
```
- Single source of truth in `src/data/resume.ts`
- No i18n library needed—manual locale switching via React state
- Add new sections: always provide both language versions

### Color & Design System
**CSS variables** in `app/globals.css`:
- `--neon-cyan: #00ffff` (primary accent)
- `--neon-pink: #ff00ff` (secondary)
- `--neon-orange: #ff9900` (tertiary)
- `--background: #0a0e27` (dark purple-black base)

Vaporwave effects:
- **NeonCard**: Glowing borders + shadow layers (12px + 24px blur) + hover scale transform
- **ScanlineOverlay**: Repeating linear gradient overlay (0.03 opacity for subtlety)
- **InfiniteGrid**: Background animation from VaporComponents
- **Keyframes**: `grid-animation`, `float`, `glow-pulse`, `neon-flicker` all in globals.css

## Development Workflows

### Getting Started
```bash
pnpm install
pnpm dev    # localhost:3000 with hot reload
```

### Build & Deploy
```bash
pnpm build  # Next.js static/hybrid export
pnpm start  # Production server
pnpm lint   # ESLint check
```

### Modify Content
**Edit `src/data/resume.ts`**—all resume sections (intro, education, work, skills, portfolio) pull from this single object. Changes hot-reload immediately.

### Add New Section
1. Add data type to `src/types/resume.ts`
2. Add data to `resumeData` object in `src/data/resume.ts` (bilingual)
3. Create section component in `src/components/ResumeSections.tsx`
4. Import and render in `app/page.tsx`

## Project-Specific Conventions

### Component Patterns
- **VaporComponents**: Presentational design system (no data logic, accept `className` props for composition)
- **ResumeSections**: Domain-specific, data-aware components (map over resumeData arrays)
- **Client components**: Use `'use client'` only in `app/page.tsx` for state management

### Styling Approach
- **No shadcn/ui or external CSS libraries**—pure Tailwind + custom CSS (keyframes, gradients)
- **Utility-first**: Combine Tailwind classes with custom CSS variables
- **Inline shadows for neon glow**: `shadow-[0_0_12px_2px_rgba(0,255,255,0.8),...]` in Tailwind
- **Animations**: Define in `@keyframes` in globals.css, reference via Tailwind `animate-*` classes

### Naming Conventions
- **React components**: PascalCase (e.g., `NeonCard`, `EducationSection`)
- **CSS classes**: kebab-case (e.g., `neon-tag`, `glow-pulse`)
- **TypeScript types**: PascalCase, prefix complex types with domain (e.g., `ResumeData`)

## Integration Points & Dependencies

### External Libraries (Minimal)
- `class-variance-authority` (v0.7.1)—used for UI component variants
- `clsx` (v2.1.1)—className merging
- `tailwind-merge` (v3.4.0)—safe Tailwind class merging
- `lucide-react` (v0.562.0)—icon library (ensure icons are used sparingly in design)

### No Custom Configuration
- `next.config.ts` is empty—uses Next.js defaults
- `tsconfig.json` uses path alias `@/*` for `src/` imports
- ESLint configuration uses Next.js preset (no custom rules)

### API Routes
- `app/api/resume/route.ts` exists for potential resume export/download feature (currently minimal)
- When extending: follow Next.js 16 App Router conventions

## Common Tasks & Patterns

### Adding a Skill
Edit `src/data/resume.ts`:
```typescript
skills: ['React', 'Next.js', 'TypeScript', '新技能']
```
Rendered in `SkillsSection` via `.map()` → `NeonTag` component.

### Creating a New Vaporwave Component
1. Use Tailwind utilities + custom CSS for glow effects
2. Accept optional `className` and `glow` (color variant) props
3. Export from `VaporComponents.tsx`
4. Example: `NeonCard` accepts `glow='cyan' | 'pink' | 'orange'` to switch shadow color

### Handling Locale State
- Locale stored in `useState<Locale>` in `app/page.tsx`
- Pass to child components → all use `locale` to pick correct text from `resumeData[fieldName][locale]`
- LanguageSwitcher calls `setLocale()` to trigger re-render

## Debugging & Performance Tips

### Hot Reload Issues
- Ensure `'use client'` is only in `page.tsx`; remove from component files
- Locale state in main page component only (avoid duplicating state)

### Styling Bugs
- Neon glow not visible? Check `opacity` (default 0.8 for shadow, 0.5 for blur) and color values
- CRT lines too obvious? Adjust `opacity: 0.03` in `body::before` pseudo-element

### Responsive Design
- Mobile first: wrap navigation in `flex flex-col md:flex-row`
- Test on iPhone + desktop (Tailwind breakpoints: `sm`, `md`, `lg`, `xl`)

---

**Last Updated**: 2025 | **Stack**: Next.js 16, React 19, Tailwind CSS v4
