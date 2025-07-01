# Icarus Homepage

This repository hosts a small static website for the fictional company **Icarus**. All site files live in the repository root so GitHub Pages can serve them directly.

## Structure
- `index.html` – single page built with [HTMX](https://htmx.org/ ) and styled with [Tailwind CSS](https://tailwindcss.com/ ) from a CDN. Common sections reside in `sections.html`, and modal fragments are consolidated in `modals.html` for dynamic loading via HTMX.

## Running locally
Open `index.html` in your browser.

To publish on GitHub Pages, enable Pages in the repository settings and choose the root of the `main` branch as the source.
