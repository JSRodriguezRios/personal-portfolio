# Sebastián Rodríguez Ríos — portfolio

A bilingual, static portfolio for university admissions. The English page is at `/`; the Spanish page is at `/es/`.

## Requirements

- Node.js 22.12 or newer
- npm

## Local development

```sh
npm install
npm run dev
```

For a production build and local preview:

```sh
npm run build
npm run preview
```

## Deploy to Render

Create a **Static Site** connected to this repository's `main` branch. Use:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 22 (the repository includes `.node-version` and a matching `engines` requirement)

After Render assigns the production URL, set the `PUBLIC_SITE_URL` environment variable to its absolute origin, for example `https://your-site.onrender.com`, and redeploy. This enables absolute canonical and alternate-language URLs. The site builds without the variable for local preview.

## Where to edit the site

- All English and Spanish copy, project metadata, contact details, and outbound URLs: [`src/content/portfolio.ts`](./src/content/portfolio.ts)
- Page layout, navigation, section structure, and metadata: [`src/components/PortfolioPage.astro`](./src/components/PortfolioPage.astro)
- Project diagrams: [`src/components/ProjectVisual.astro`](./src/components/ProjectVisual.astro)
- Hero illustration: [`src/components/HeroGraphic.astro`](./src/components/HeroGraphic.astro)
- Colors, typography, spacing, motion, and responsive rules: [`src/styles/global.css`](./src/styles/global.css)
- Favicon: [`public/favicon.svg`](./public/favicon.svg)

Both languages use the same page component. Update both language entries whenever a project changes. The URL data is shared, so links cannot diverge between language versions. The default language is English; choosing Spanish or English is remembered in browser session storage. Language switching preserves the current section.

## Content and assets

The supplied bilingual content brief is the factual source for project descriptions, roles, periods, states, and limitations. The supplied design specification guides presentation. The diagrams and favicon in this repository are original conceptual visuals drawn with HTML/CSS and SVG; they do not depict measured research results, private company documents, transactions, or screenshots. No third-party visual assets are used. The typefaces are bundled locally through Fontsource packages.

The supplied ZIP's photo folders were empty. Authentic paper figures and an Althlon screenshot can be added later if cleared for publication; the current diagrams already provide complete explanatory visuals. Do not add DECNO internal documents or any payment credentials to this repository.

Review captures: [desktop](./docs/review/desktop.png) and [mobile Spanish](./docs/review/mobile.png).

## Review checklist

- Check English and Spanish copy together after every content edit.
- Verify the project, DOI, demo, and contact URLs before a public launch if they change.
- Check keyboard navigation, focus visibility, diagram text, and reduced-motion behavior.
- Review layouts at 360, 390, 768, 1024, and 1440 px.
- Run `npm run build` before deployment.
