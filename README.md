# Naman Goyal — Portfolio

Personal portfolio, built with **Astro 5 + TypeScript**. Content lives in plain
typed data files, so updating the site means editing a list — no framework
knowledge required. The build outputs static HTML/CSS/JS that loads in
milliseconds and is excellent for SEO.

**Live:** https://namangoyal-work.github.io/

## Run it locally

```bash
npm install      # once
npm run dev      # start dev server at http://localhost:4321
npm run build    # production build → ./dist
npm run preview  # preview the production build
```

## Where everything lives

```
src/
  data/          ← EDIT THESE to update content
    site.ts          name, links, SEO, the hero headline
    about.ts         bio paragraphs, education, skills
    projects.ts      project list (add an object to add a project)
    research.ts      CISPA research + activities
    achievements.ts  olympiads, scholarships, honors
  components/     ← UI building blocks (one file per section)
  layouts/Base.astro   the HTML shell (fonts, <head>, theme)
  scripts/main.ts      all interactions (theme, nav, reveal, form…)
  styles/global.css    design tokens + shared styles
public/          ← served as-is (résumé PDF, favicon, og-image, robots.txt)
```

### Common edits

- **Add a project** → append one object to the array in `src/data/projects.ts`.
  `category` is one of `systems | quantum | ml | hardware`; `featured: true`
  makes the card span two columns; omit `links` and no buttons render.
- **Add an achievement** → add an item under the right group in
  `src/data/achievements.ts`.
- **Change a link / your headline / SEO text** → `src/data/site.ts`.
- **Swap the résumé** → replace `public/Naman_Goyal_Resume.pdf`.
- **Collect contact-form submissions** → set `FORM_ENDPOINT` in
  `src/scripts/main.ts` to a [Formspree](https://formspree.io) URL. Until then,
  the form simply opens the visitor's email app.

## Deploy (GitHub Pages, automatic)

1. Push to the `main` branch of `namangoyal-work/namangoyal-work.github.io`.
2. In the repo: **Settings → Pages → Build and deployment → Source = GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push.

## Custom domain

1. Get a free domain via the **GitHub Student Developer Pack** (e.g. Namecheap
   gives a free `.me` for a year, or try `.dev` / `.tech`).
2. Add a file `public/CNAME` containing just the bare domain, e.g. `namangoyal.me`.
3. Change `SITE` in `astro.config.mjs` and the host in `public/robots.txt` to match.
4. Point the domain's DNS at GitHub Pages and enable HTTPS in repo settings.

## Ranking #1 for your name (off-page checklist)

On-page SEO is already done (semantic HTML, `Person` structured data, sitemap,
canonical, OG). Rankings also need signals Google trusts:

- Add the site URL to your **GitHub profile**, **LinkedIn → Contact info**, and
  any other profiles. These backlinks matter a lot for a personal name query.
- Submit the site to **Google Search Console**, add the sitemap
  (`/sitemap-index.xml`), and click "Request indexing".
- A **custom domain** with your name (e.g. `namangoyal.me`) ranks and brands far
  better than a `github.io` subdomain.
- Keep your name spelled consistently everywhere.

## Regenerate the social image

Edit `public/og-image.svg`, then render it to PNG:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --window-size=1200,630 \
  --default-background-color=00000000 \
  --screenshot="$PWD/public/og-image.png" "file://$PWD/public/og-image.svg"
```

---

Older versions of the site are preserved under `backup/` (`v1-static` =
plain HTML/CSS/JS; the folder root = the original site).
