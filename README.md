# KFC Concept Website

A modern, responsive single-page website concept for KFC (Kentucky Fried Chicken).
Built with plain HTML, CSS, and vanilla JavaScript — no build step required.

## Run it

Open `index.html` directly in a browser, or serve the folder with any static
server, e.g.:

```
npx serve .
# or
python -m http.server 8080
```

## Structure

- `index.html` — all sections: nav, hero, menu, promotions, about, testimonials, contact, footer, cart drawer, item modal
- `css/style.css` — design system built on the KFC palette (`#DC3C0C`, `#691F0C`, `#D3C0B2`, `#7A7A78`, `#E1E1E1`, `#1D1816`)
- `js/main.js` — menu data, category filtering, shopping cart, quick-view modal, toasts, scroll animations

## Features

- Sticky nav with scroll state, active-section highlighting, mobile hamburger menu
- Hero section with stats and marquee ticker
- Filterable menu grid (Chicken / Burgers / Sides / Desserts / Drinks)
- Clickable product cards opening a quick-view modal with quantity selector
- Working shopping cart drawer (add, change qty, remove, totals)
- Promotions, about, testimonials, contact form, newsletter signup
- Fully responsive; respects `prefers-reduced-motion`

> Fan-made concept site for demonstration purposes. Not affiliated with Yum! Brands.
