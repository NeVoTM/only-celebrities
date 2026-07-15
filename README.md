# Only Celebrities

A modern, responsive landing page for **Only Celebrities** — a fictional premium creator platform where verified stars connect with fans. The layout mirrors the section structure of a typical creator-platform landing page (hero, feature showcase, value props, animated stats, testimonials, get-started steps, streaming service, FAQ, press strip, and footer) with a distinct gold-on-black "celebrity" aesthetic.

## Files

- `index.html` — page markup and content
- `styles.css` — theme, layout, responsive rules, animations
- `script.js` — sticky nav, mobile menu, scroll reveals, animated stat counters, testimonial carousel

## Run it

It's a static site with no build step. Just open the file:

```bash
# From this folder
start index.html      # Windows
```

Or serve it locally (nice for clean routing):

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy on Render

This repo includes a `render.yaml` blueprint, so it deploys as a **static site** with no build step.

**Option A — Blueprint (recommended):**
1. Go to the [Render Dashboard](https://dashboard.render.com/) → **New** → **Blueprint**.
2. Connect this GitHub repo. Render reads `render.yaml` and provisions the static site automatically.
3. Click **Apply**. Your site goes live at `https://only-celebrities.onrender.com` (or similar).

**Option B — Manual static site:**
1. Render Dashboard → **New** → **Static Site** → connect this repo.
2. Build Command: *(leave empty)* · Publish Directory: `.`
3. **Create Static Site**.

Every push to the default branch triggers an automatic redeploy.

## Notes

- All copy, names, testimonials, and stats are original/fictional placeholders.
- This is a demo and is **not affiliated with or endorsed by any real platform**.
- Fonts load from Google Fonts (Playfair Display + Inter); an internet connection is needed for the exact typography, otherwise system fonts are used as a fallback.
