import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((ctx, next) => {
  const { pathname } = ctx.url;

  const hasLocale = pathname.match(/^\/(en|uk|de)(\/|$)/);

  if (!hasLocale) {
    return Response.redirect("/en" + pathname, 302);
  }

  return next();
});