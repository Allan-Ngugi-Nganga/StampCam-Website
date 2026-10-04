# StampCam Website

Marketing site for **StampCam**, a GPS timestamp camera for iOS.

Tagline: **Pay once. Own forever. No subscriptions.**

Static site, no build step, deployed with GitHub Pages.

## Overview

StampCam burns verified date, time, GPS coordinates, altitude and heading onto
every photo, then exports branded PDF reports for legal, insurance and client
documentation. This repository holds the public marketing site only: plain
HTML, CSS and JavaScript that renders exactly as served.

## Structure

```
index.html            Landing page (hero, features, modes, reports, privacy, pricing, FAQ)
privacy.html          Privacy policy (App Store required)
support.html          Support and troubleshooting (App Store required)
marketing.html        Press and partner overview (App Store marketing URL)
terms.html            Terms of use and copyright
404.html              Not found page
robots.txt            Crawler rules (search + AI crawlers allowed)
sitemap.xml           XML sitemap
llms.txt              Machine summary for AI agents and assistants
site.webmanifest      Web app manifest
.nojekyll             Tell GitHub Pages to skip Jekyll
assets/
  styles.css          Theme, layout, motion
  app.js              Nav, scroll reveal, camera mode tabs, App Store links
  icon-1024.png       App icon (full size)
  icon-512.png        App icon
  icon-192.png        App icon
  apple-touch-icon.png
  favicon.ico, favicon-32.png, favicon-48.png
  og-image.png/.jpg   Social preview (1200x630)
```

## Brand

Near-black surfaces, silver typography and a single red accent, matched to the
app icon. Typeface: Inter. Colour and spacing tokens live in the `:root` block
of `assets/styles.css`.

## Run locally

Open `index.html` directly, or serve the folder:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Before launch: replace these placeholders

Search and replace across the repo:

1. **App Store URL.** In `assets/app.js`, set `STORE_URL` to the live listing,
   for example `https://apps.apple.com/app/id1234567890`. Every element marked
   `data-store` updates automatically.
2. **App Store ID.** In `index.html`, update
   `<meta name="apple-itunes-app" content="app-id=0000000000">`.
3. **Canonical domain.** If a custom domain is added, replace
   `https://allan-ngugi-nganga.github.io/StampCam-Website/` in every HTML file,
   in `sitemap.xml`, in `llms.txt` and in `robots.txt`.
4. **Support email.** Confirm `support@stampcam.app` is the address you want
   used in the footer, the legal pages and the JSON-LD.

## Deploy (GitHub Pages)

1. Push this repository to GitHub.
2. Settings, then Pages.
3. Source: Deploy from a branch, Branch: `main`, Folder: `/ (root)`.
4. Save. The site publishes at `https://<user>.github.io/<repo>/`.

`.nojekyll` keeps GitHub Pages from running the folder through Jekyll.

## SEO notes

The site ships with per-page titles and descriptions, canonical URLs, Open
Graph and Twitter cards, and JSON-LD structured data (`Organization`,
`WebSite`, `MobileApplication`, `BreadcrumbList` and `FAQPage`). It also ships
`robots.txt`, `sitemap.xml` and `llms.txt` for search engines and AI agents.
See the deploy and SEO checklist for the manual steps (Search Console, Bing).
