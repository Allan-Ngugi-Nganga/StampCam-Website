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
- Support: maverick.develops@gmail.com

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
llms.txt              Machine index for AI agents and assistants
llms-full.txt         Full text of the site and guide library for scraping
feed.xml              Atom feed of the guide library
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

1. **App Store URL.** In `assets/app.js`, `STORE_URL` is set to
   `https://apps.apple.com/app/id6818682653`. Every element marked `data-store`
   updates automatically. The link resolves once Apple approves the app.
2. **App Store ID.** `index.html` sets
   `<meta name="apple-itunes-app" content="app-id=6818682653">`.
3. **Canonical domain.** Currently the GitHub Pages URL. If a custom domain is
   added, replace it in every HTML file, `sitemap.xml`, `llms.txt` and
   `robots.txt`.
4. **Analytics.** Cookieless, via Cloudflare Web Analytics. Paste your beacon
   token into `ANALYTICS_ATTRS` in `assets/app.js`. Until the token is replaced
   the beacon is not injected, so nothing broken ships.

## Contact

maverick.develops@gmail.com
