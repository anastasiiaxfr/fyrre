# Sanity Blogging Content Studio

Congratulations, you have now installed the Sanity Content Studio, an open-source real-time content editing environment connected to the Sanity backend.

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

## CMS Structure::

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
