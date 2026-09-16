import { isLocaleParam, type Locale } from "./types";

export function stripLocalePrefix(pathname: string): string {
	const [, firstSegment, ...rest] = pathname.split("/");
	if (firstSegment && isLocaleParam(firstSegment)) {
		return `/${rest.join("/")}`.replace(/\/+$/, "") || "/";
	}
	return pathname;
}

export function buildPathForLocale(pathname: string, locale: Locale): string {
	const unprefixed = stripLocalePrefix(pathname);
	const rest = unprefixed === "/" ? "" : unprefixed;

	if (locale === "pt-BR") {
		return rest || "/";
	}

	const param = locale === "en-US" ? "en" : "es";
	return `/${param}${rest}`;
}
