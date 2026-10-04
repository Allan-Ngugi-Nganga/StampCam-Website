# StampCam Website

The marketing site for **StampCam**, a GPS timestamp camera for iPhone.

Pay once, own forever. No subscriptions.

## Overview

StampCam burns verified date, time, GPS coordinates, altitude and heading onto
every photo, then exports branded PDF reports for legal, insurance and client
documentation. This repository holds the public site only: static HTML, CSS and
JavaScript that renders exactly as served.

## Links

- Live site: https://allan-ngugi-nganga.github.io/StampCam-Website/
- Support: support@stampcam.app

## Contents

```
index.html            Landing page (hero, features, modes, reports, privacy, pricing, FAQ)
privacy.html          Privacy policy (App Store required)
support.html          Support and troubleshooting (App Store required)
marketing.html        Press and partner overview (App Store marketing URL)
terms.html            Terms of use and copyright
404.html              Not found page
guides/               Guides hub plus how-to articles
for/                  Industry pages: contractors, insurance, real estate, property managers
assets/               Stylesheet, script, app icon set, favicons, social preview
robots.txt            Crawler rules (search and AI crawlers allowed)
sitemap.xml           XML sitemap
llms.txt              Machine summary for AI agents and assistants
site.webmanifest      Web app manifest
```

## Design

Light, editorial, Apple product-page direction. Hierarchy comes from type,
spacing and hairlines: no gradients, no glass, no decorative shapes, one
restrained accent. Type is the system font stack, so iPhones render in SF Pro.
Colour and spacing tokens live in the `:root` block of `assets/styles.css`.

## Deploying

The site publishes with GitHub Pages from `main`, folder `/ (root)`. The
`.nojekyll` file keeps Pages from running the folder through Jekyll.

1. Push to `main`.
2. Settings, then Pages. Source: Deploy from a branch, `main`, `/ (root)`.
3. Save.

## Configuration

Values to set for production:

1. **App Store URL.** In `assets/app.js`, set `STORE_URL` to the live listing,
   for example `https://apps.apple.com/app/id1234567890`. Every element marked
   `data-store` updates automatically.
2. **App Store ID.** In `index.html`, set
   `<meta name="apple-itunes-app" content="app-id=...">`.
3. **Canonical domain.** If a custom domain is added, replace
   `https://allan-ngugi-nganga.github.io/StampCam-Website/` in every HTML file,
   `sitemap.xml`, `llms.txt` and `robots.txt`.
4. **Analytics (optional).** In `assets/app.js`, set `ANALYTICS_SRC` and
   `ANALYTICS_ATTRS`. Cloudflare Web Analytics (cookieless) or Plausible are
   both suitable. Leave empty to ship no analytics.

## Contact

support@stampcam.app
