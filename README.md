# namangoyal.me

Personal site of **Naman Goyal** — [namangoyal.me](https://namangoyal.me).
Built with [Astro 5](https://astro.build) + TypeScript. Static output, no
client-side framework; the only JavaScript on the page is the theme toggle
and the mobile menu.

## Pages

| URL | Source | What it is |
| --- | --- | --- |
| `/` | `src/pages/index.astro` | Intro, news, research snapshot, selected work, background |
| `/research/` | `src/pages/research.astro` | The CISPA study in full + other activities |
| `/projects/` | `src/pages/projects.astro` | All projects, grouped by category |
| `/achievements/` | `src/pages/achievements.astro` | Honors & awards by phase |

## How to update (common tasks)

All content lives in typed data files under `src/data/` — you almost never
need to touch a component to change content.

- **Add a news item** → prepend an entry in `src/data/news.ts`.
- **Add a project** → add an object in `src/data/projects.ts`. Set
  `featured: true` to also surface it in "Selected work" on the home page;
  its `category` decides which group it appears under on `/projects/`.
- **Add an award** → add an item in `src/data/achievements.ts` (it also
  feeds the `Person.award` structured data automatically).
- **Change bio / skills / education** → `src/data/about.ts`.
- **Change name, links, nav, résumé path, SEO defaults** → `src/data/site.ts`.
- **Update research** → `src/data/research.ts`.
- **Add a page** → create `src/pages/<name>.astro` using the `Page` layout
  (pass `title`, `description`, `lead`), then add it to `nav` in
  `src/data/site.ts` so the header and footer pick it up.
- **Replace the résumé** → overwrite `public/Naman_Goyal_Resume.pdf`.

## SEO

- Every page sets its own `<title>`, meta description, canonical URL, and
  Open Graph card via `src/components/Seo.astro` (props flow through
  `Base.astro` / `Page.astro`).
- JSON-LD: `Person` + `WebSite` on every page, `ProfilePage` on the home
  page, `WebPage` + `BreadcrumbList` on subpages. Awards sync from
  `achievements.ts`.
- Sitemap (`@astrojs/sitemap`) and `robots.txt` are generated/served
  automatically; the canonical origin is set once in `astro.config.mjs`.

## Develop & deploy

```sh
npm ci            # install
npm run dev       # local dev server
npm run check     # type-check (astro check)
npm run build     # production build into dist/
```

Deploys automatically to GitHub Pages on every push to `main`
(`.github/workflows/` — "Deploy to GitHub Pages"). The custom domain is set
in `public/CNAME`. After pushing, confirm the Actions run succeeds and spot
check https://namangoyal.me/.
