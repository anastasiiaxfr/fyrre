// src/utils/i18n.js

import { DEFAULT_LOCALE_SETTING, LOCALES_SETTING } from "./locales";
import { getRelativeLocaleUrl } from "astro:i18n";

/**
 * User-defined locales list
 */
export const LOCALES = LOCALES_SETTING;

/**
 * Default locale code
 */
export const DEFAULT_LOCALE = DEFAULT_LOCALE_SETTING;

/**
 * Helper to get translation text
 *
 * Example:
 * const t = useTranslations("en");
 * t({ en: "Hello", fr: "Bonjour" });
 */
export function useTranslations(lang) {
    return function t(multilingual) {
        // simple string
        if (typeof multilingual === "string") {
            return multilingual;
        }

        // multilingual object
        return (
            multilingual?.[lang] ||
            multilingual?.[DEFAULT_LOCALE] ||
            ""
        );
    };
}

/**
 * Get locale paths for current page
 *
 * Example:
 * [
 *   { lang: "en", path: "/en/blog" },
 *   { lang: "fr", path: "/fr/blog" }
 * ]
 */
export function getLocalePaths(url) {
    return Object.keys(LOCALES).map((lang) => {
        return {
            lang,
            path: getRelativeLocaleUrl(
                lang,
                url.pathname.replace(/^\/[a-zA-Z-]+/, "")
            ),
        };
    });
}

/**
 * Locale params for Astro getStaticPaths
 *
 * Example:
 * export async function getStaticPaths() {
 *   return localeParams;
 * }
 */
export const localeParams = Object.keys(LOCALES).map((lang) => ({
    params: { lang },
}));