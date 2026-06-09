# CLAUDE.md

Guidance for Claude Code when working in this repo.

## Project

Wedding website for Nirmal & Sumi (6 & 7 September 2026, Subhasree Hall, Ramnagar, Coimbatore). Built with Astro + Tailwind CSS.

## Commands

```bash
npm install
npm run dev      # local dev server
npm run build    # production build
npm run preview  # preview production build
```

## Structure

- `src/pages/` — one `.astro` file per route (index, our-story, schedule, travel, registry, rsvp, guestbook, faq, livestream)
- `src/layouts/Layout.astro` — shared HTML shell, wraps every page with `Nav` and `Footer`
- `src/components/` — shared components (Nav, Footer, AddToCalendar)
- `src/data/` — JSON data (registry items, guestbook wishes)
- `src/styles/global.css` — global styles
- `public/` — static assets (calendar `.ics` files, favicon, invite image)

## Conventions

- Theme colors (cream, maroon, gold, brown, teal) and fonts (Cormorant Garamond serif, Lato sans) are defined in `tailwind.config.mjs` — reuse these tokens rather than introducing new colors/fonts.
- Pages follow a consistent visual language: `card` and `btn-primary` utility classes, `section-divider` with a `divider-motif` icon between sections, ornamental corner motifs on the hero.
- Keep date/time/venue details consistent across pages (event is 6–7 September 2026 at Subhasree Hall, Ramnagar, Coimbatore).
