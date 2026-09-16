import {
	defaultLocale,
	isLocaleParam,
	type Locale,
	paramToLocale,
} from "./types";

const LOCALE_COOKIE_NAME = "locale";

function mapAcceptLanguageTag(tag: string): Locale | undefined {
	const primary = tag.trim().slice(0, 2).toLowerCase();
	if (primary === "pt") return "pt-BR";
	if (primary === "en") return "en-US";
	if (primary === "es") return "es-ES";
	return undefined;
}

function localeFromAcceptLanguage(
	header: string | undefined,
): Locale | undefined {
	if (!header) return undefined;

	const tags = header
		.split(",")
		.map((part) => part.split(";")[0]?.trim())
		.filter((tag): tag is string => Boolean(tag));

	for (const tag of tags) {
		const mapped = mapAcceptLanguageTag(tag);
		if (mapped) return mapped;
	}

	return undefined;
}

function readCookieFromDocument(name: string): string | undefined {
	if (typeof document === "undefined") return undefined;

	const match = document.cookie
		.split("; ")
		.find((row) => row.startsWith(`${name}=`));

	return match?.split("=")[1];
}

function localeFromCookieValue(value: string | undefined): Locale | undefined {
	if (value === "pt-BR" || value === "en-US" || value === "es-ES") return value;
	return undefined;
}

type LocaleHints = {
	cookieLocale?: string;
	acceptLanguage?: string;
};

export function resolveLocale(
	pathname: string,
	hints: LocaleHints = {},
): Locale {
	const [, firstSegment] = pathname.split("/");

	if (firstSegment && isLocaleParam(firstSegment)) {
		return paramToLocale[firstSegment];
	}

	const cookieValue =
		hints.cookieLocale ?? readCookieFromDocument(LOCALE_COOKIE_NAME);

	const fromCookie = localeFromCookieValue(cookieValue);
	if (fromCookie) return fromCookie;

	const isBrowser = typeof window !== "undefined";

	const acceptLanguage =
		hints.acceptLanguage ?? (isBrowser ? navigator.language : undefined);

	const fromHeader = localeFromAcceptLanguage(acceptLanguage);
	if (fromHeader) return fromHeader;

	return defaultLocale;
}

const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;

export function persistLocaleCookie(locale: Locale) {
	if (typeof document === "undefined") return;

	const expires = new Date(Date.now() + ONE_YEAR_SECONDS * 1000).toUTCString();
	document.cookie = `${LOCALE_COOKIE_NAME}=${locale}; path=/; expires=${expires}; samesite=lax`;
}
