# Emi Drinks

A Vite + React site for Emi Drinks.

## Structure

```
src/
  components/   Header, MobileMenu, Footer, CapCard, Pillars, Eyebrow, Bubbles
  pages/        Home.jsx, Drink.jsx, About.jsx, Contact.jsx
  data/         content.js — flavors, nav items, brand colors
  styles/       global.css
  App.jsx       routes + layout
  main.jsx      entry point
```

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Outputs a static `dist/` folder you can deploy to Vercel, Netlify, or anywhere that serves static files.
