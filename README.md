# Icarus Homepage

This repository contains a small static website for the fictional company **Icarus**. It relies on [HTMX](https://htmx.org/) to load page fragments on demand and [Tailwind CSS](https://tailwindcss.com/) from a CDN. There is no build step or tooling required.

## Structure
- `index.html` – main page that pulls in fragments with HTMX.
- `partials/layout/` – header and footer used across the site.
- `partials/sections/` – individual hero, about, product, news and contact section files.
- `partials/modals/` – modal dialogs used on the page.

## Running locally
Open `index.html` in any modern browser and the partials will load automatically.

## Deployment
To publish with GitHub Pages, enable Pages in the repository settings and choose the root of the `main` branch as the source.
