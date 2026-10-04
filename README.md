# StampCam Website

Marketing website for **StampCam**, a GPS timestamp camera for iOS.

Tagline: **Pay once. Own forever. No subscriptions.**

Static site, no build step, deployed with GitHub Pages.

## Overview

StampCam is a professional timestamp camera for iOS that burns date, time, GPS
coordinates, altitude, heading and custom notes onto every photo, then exports
them as branded PDF reports for legal, insurance and client documentation.

This repository holds the public marketing site only. It is plain HTML, CSS and
JavaScript, so it renders exactly as served.

## Structure

```
.
├── index.html          # Main landing page
├── privacy.html        # Privacy policy (App Store required)
├── support.html        # Support page (App Store required)
├── marketing.html      # Marketing overview (App Store marketing URL)
├── terms.html          # Terms of use and copyright
├── assets/
│   ├── styles.css      # Theme, layout, animations
│   ├── app.js          # Scroll reveal, nav, camera mode tabs
│   └── favicon.svg     # Site icon
├── .nojekyll           # Tell GitHub Pages to skip Jekyll
└── README.md
```

## Run locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Design

- Premium dark theme with warm accent gradient (orange, amber, red) matching the app icon.
- Inter typeface, glassmorphism panels, subtle micro-animations and scroll reveals.
- Fully responsive, with a reduced-motion fallback for accessibility.

## Deploy (GitHub Pages)

1. Push this repository to GitHub.
2. Settings, then Pages.
3. Source: Deploy from a branch, Branch: `main`, Folder: `/ (root)`.
4. Save. The site publishes at `https://<user>.github.io/<repo>/`.

The `.nojekyll` file keeps GitHub Pages from running the folder through Jekyll.

## Notes

Colour and copy are easy to adjust in `assets/styles.css` (the `:root` block)
and `index.html`.
