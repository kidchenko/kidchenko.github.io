import { defaultLang, type Lang, languages, ui } from "./ui";

export function getLangFromUrl(url: URL): Lang {
	const [, segment] = url.pathname.split("/");
	if (segment && segment in languages) return segment as Lang;
	return defaultLang;
}

export function useTranslations(lang: Lang) {
	return ui[lang];
}

export function localizeUrl(path: string, lang: Lang): string {
	const normalized = path.startsWith("/") ? path : `/${path}`;
	if (lang === defaultLang) return normalized;
	return `/${lang}${normalized}`;
}

// Routes under src/pages/[...lang]/, the only ones that exist in every language. Tags,
// single posts and the 404 are English-only, so they have no translated counterpart.
const LOCALIZED_ROUTES = [/^\/$/, /^\/(about|portfolio|cv|contact)\/$/, /^\/posts\/(\d+\/)?$/];

function stripLang(path: string, lang: Lang): string {
	const stripped = lang !== defaultLang ? path.replace(new RegExp(`^/${lang}(?=/|$)`), "") : path;
	return stripped || "/";
}

/** The path without its language prefix, when the page exists in every language. */
export function getLocalizedRoute(currentPath: string, currentLang: Lang): string | null {
	const path = stripLang(currentPath, currentLang);
	const withSlash = path.endsWith("/") ? path : `${path}/`;
	return LOCALIZED_ROUTES.some((re) => re.test(withSlash)) ? withSlash : null;
}

/** The same page in the other language, or that language's home page when there is none. */
export function getAlternateUrl(currentPath: string, currentLang: Lang): string {
	const otherLang = getOtherLang(currentLang);
	return localizeUrl(getLocalizedRoute(currentPath, currentLang) ?? "/", otherLang);
}

export function getOtherLang(lang: Lang): Lang {
	return lang === "en" ? "pt" : "en";
}
