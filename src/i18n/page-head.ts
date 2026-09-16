import { type Locale, localeToOgLocale, localeToPathPrefix } from "./types";

const SITE_URL = "https://www.devguilhermebuenoreis.com.br";

type PageHeadInput = {
	locale: Locale;
	unprefixedPath: string;
	title: string;
	description: string;
};

export function pageHead({
	locale,
	unprefixedPath,
	title,
	description,
}: PageHeadInput) {
	const canonicalPath = `${localeToPathPrefix[locale]}${unprefixedPath}`;
	const canonicalUrl =
		`${SITE_URL}${canonicalPath}`.replace(/\/$/, "") || SITE_URL;

	return {
		meta: [
			{ title },
			{ name: "description", content: description },
			{ property: "og:title", content: title },
			{ property: "og:description", content: description },
			{ property: "og:url", content: canonicalUrl },
			{ property: "og:locale", content: localeToOgLocale[locale] },
		],
		links: [
			{ rel: "canonical", href: canonicalUrl },
			{
				rel: "alternate",
				hrefLang: "pt-BR",
				href: `${SITE_URL}${unprefixedPath}`,
			},
			{
				rel: "alternate",
				hrefLang: "en",
				href: `${SITE_URL}/en${unprefixedPath}`,
			},
			{
				rel: "alternate",
				hrefLang: "es",
				href: `${SITE_URL}/es${unprefixedPath}`,
			},
			{
				rel: "alternate",
				hrefLang: "x-default",
				href: `${SITE_URL}${unprefixedPath}`,
			},
		],
	};
}
