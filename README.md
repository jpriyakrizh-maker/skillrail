# SkillRail landing page

Plain React (JSX), CSS and HTML. No Tailwind, no TypeScript.

## Run
```
npm install
npm run dev
```

## Where to edit
- `src/data.js`: all text, prices and image URLs in one place
- `src/components/`: one component per section
- `src/styles.css`: all styling (colours are CSS variables at the top)

## Images
Every image is a direct URL (Unsplash). Replace any link in `src/data.js`.
If a link fails, `Img.jsx` automatically loads a picsum.photos placeholder instead.

## Colours
Plum palette from uiux.build: `#17151C`, `#292531`, `#45404F`, `#716879`, `#AAA2B3`, `#E2DDE7`.
Accents: lime `#C8F169`, coral `#FF7F93`, mint `#6FE3C1`, lavender `#C4A8FF`.
All colours are CSS variables at the top of `src/styles.css`.
