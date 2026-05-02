import { type Lang, defaultLang, languages, ui } from "./ui";

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

export function getAlternateUrl(currentPath: string, currentLang: Lang): string {
	const otherLang: Lang = currentLang === "en" ? "pt" : "en";
	const stripped =
		currentLang !== defaultLang ? currentPath.replace(new RegExp(`^/${currentLang}`), "") : currentPath;
	const cleanPath = stripped || "/";
	return localizeUrl(cleanPath, otherLang);
}

export function getOtherLang(lang: Lang): Lang {
	return lang === "en" ? "pt" : "en";
}
