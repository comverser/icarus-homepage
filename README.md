# Icarus Homepage

This repository hosts a small static website for the fictional company **Icarus**. HTML fragments now live in a `partials/` folder for clarity while the site continues to be fully static for GitHub Pages.

## Structure
- `index.html` – single page built with [HTMX](https://htmx.org/) and styled with [Tailwind CSS](https://tailwindcss.com/) from a CDN. Common sections reside in `partials/sections.html`, and modal fragments are consolidated in `partials/modals.html` for dynamic loading via HTMX.

## Running locally
Open `index.html` in your browser.

To publish on GitHub Pages, enable Pages in the repository settings and choose the root of the `main` branch as the source.
