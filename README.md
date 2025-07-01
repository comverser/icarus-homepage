# Icarus Homepage

This repository contains a small static website for the fictional company **Icarus**. It relies on [HTMX](https://htmx.org/) to load page fragments on demand and [Tailwind CSS](https://tailwindcss.com/) from a CDN. There is no build step or tooling required.

## Structure
- `index.html` – main page that pulls in fragments with HTMX.
- `partials/header.html` and `partials/footer.html` – common layout elements.
- `partials/sections.html` – hero, product, news and contact sections.
- `partials/modals.html` – modal dialogs triggered from the page.

## Running locally
Open `index.html` in any modern browser and the partials will load automatically.

## Deployment
To publish with GitHub Pages, enable Pages in the repository settings and choose the root of the `main` branch as the source.
