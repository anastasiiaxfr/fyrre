> ⭐️ Love this theme? Star it to support our work!

# Astro Starter Fyrre Magazine & Blog website template

A fast and modern starter template designed to help teams build and launch magazines, blogs, or brand websites efficiently, with a focus on performance and scalability.

> ⚡ Built with Astro 6, Tailwind CSS 4 & Daisy UI, Sanity CMS latest — optimized for performance, SEO, and simplicity.

![Fyrre Template Preview](https://github.com/anastasiiaxfr/fyrre/blob/main/public/theme/og-1200x630.jpg)

## Demo

- ✨ [Live Demo](https://fyrre-seven.vercel.app/)
- 💨 [PageSpeed Insights Report](https://pagespeed.web.dev/analysis/https-fyrre-seven-vercel-app/odkg3zo8qd?form_factor=mobile)
- [Sitemap.xml](https://fyrre-seven.vercel.app/sitemap-index.xml)
- [Robots.txt](https://fyrre-seven.vercel.app/robots.txt)

Features:

- ✅ Localization & translations (i18n) with support for multiple languages, including English (EN) and Ukrainian (UA)
- ✅ Pagination and category
- ✅ Minimal styling (make it your own!)
- ✅ 99+/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and meta tags, Open Graph data, JSON-LD schema and PWA
- ✅ Sitemap, robots.txt support
- ✅ Markdown & MDX support
- ✅ Fully responsive and accessible
- ✅ Easily deploy to Vercel, Netlify, or Cloudflare Pages

Pages:

- home
- blog
- blog detail
- podcast
- podcast detail
- authors
- author detail
- 404 / 500

## PWA support

![pwa](https://github.com/anastasiiaxfr/fyrre/blob/main/public/theme/3.jpg)

## Google pages speed

![mobile](https://github.com/anastasiiaxfr/fyrre/blob/main/public/theme/1.jpg)
![desktop](https://github.com/anastasiiaxfr/fyrre/blob/main/public/theme/2.jpg)

## Open Graph Card

![Facebook](https://github.com/anastasiiaxfr/fyrre/blob/main/public/theme/5.jpg)
![Telegram](https://github.com/anastasiiaxfr/fyrre/blob/main/public/theme/4.jpg)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Sanity CMS start:

```bash
npm install -g sanity
cd cms

# change env values in sanity.config.ts to your current values

npm install
npm run dev
sanity deploy
```

👉 [CMS](https://fyrre-cms.sanity.studio/)

## CMS Structure:

```text
├── Posts
│   ├── EN
│   ├── UA
├── Podcasts
│   ├── EN
│   ├── UA
├── Authors
│   ├── EN
│   ├── UA
└── Post Category
```

![Sanity CMS Preview](https://github.com/anastasiiaxfr/fyrre/blob/main/public/theme/cms1.jpg)

## How it works:

Go to **Posts** and select the desired locale. Then create a new post in that locale.

After that, go to **Translation metadata** and click **Create**. Fill in the fields:

- select Post
- choose the required post from the dropdown
- select the target locale (new language)

Then click **Create**.

This way, translations are added to a single post by linking it to different locales.

![Sanity CMS Add translation Preview](https://github.com/anastasiiaxfr/fyrre/blob/main/public/theme/cms2.jpg)

## 🛠 Credits

Made with ❤️ by [anastasiiaxfr](https://github.com/anastasiiaxfr/fyrre)

Fyrre is inspired by the free [Fyrre Theme](https://www.figma.com/community/file/1136023191939170511)
