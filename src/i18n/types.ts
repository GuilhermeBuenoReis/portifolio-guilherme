export const locales = ["pt-BR", "en-US", "es-ES"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt-BR";

export const localeToParam: Record<Locale, string | undefined> = {
	"pt-BR": undefined,
	"en-US": "en",
	"es-ES": "es",
};

export const paramToLocale: Record<string, Locale> = {
	en: "en-US",
	es: "es-ES",
};

export const localeToHtmlLang: Record<Locale, string> = {
	"pt-BR": "pt-BR",
	"en-US": "en",
	"es-ES": "es",
};

export const localeToOgLocale: Record<Locale, string> = {
	"pt-BR": "pt_BR",
	"en-US": "en_US",
	"es-ES": "es_ES",
};

export const localeToPathPrefix: Record<Locale, string> = {
	"pt-BR": "",
	"en-US": "/en",
	"es-ES": "/es",
};

export function isLocaleParam(
	value: string,
): value is keyof typeof paramToLocale {
	return value === "en" || value === "es";
}
