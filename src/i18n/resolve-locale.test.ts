import { afterEach, describe, expect, it } from "vitest";
import { resolveLocale } from "./resolve-locale";

describe("resolveLocale", () => {
	afterEach(() => {
		document.cookie = "locale=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
	});

	it("resolves pt-BR for the unprefixed root path with an explicit pt hint", () => {
		expect(resolveLocale("/", { acceptLanguage: "pt-BR,pt;q=0.9" })).toBe(
			"pt-BR",
		);
	});

	it("resolves en-US when the URL has an explicit /en prefix", () => {
		expect(resolveLocale("/en/about")).toBe("en-US");
	});

	it("resolves es-ES when the URL has an explicit /es prefix", () => {
		expect(resolveLocale("/es/projects/tenira")).toBe("es-ES");
	});

	it("URL segment wins even when a cookie says otherwise", () => {
		expect(resolveLocale("/en/about", { cookieLocale: "es-ES" })).toBe("en-US");
	});

	it("falls back to the cookie locale when the URL has no prefix", () => {
		expect(resolveLocale("/about", { cookieLocale: "en-US" })).toBe("en-US");
	});

	it("falls back to Accept-Language when there is no URL prefix or cookie", () => {
		expect(resolveLocale("/about", { acceptLanguage: "es-AR,es;q=0.9" })).toBe(
			"es-ES",
		);
	});

	it("maps an unsupported Accept-Language to the pt-BR default", () => {
		expect(resolveLocale("/about", { acceptLanguage: "fr-FR,fr;q=0.9" })).toBe(
			"pt-BR",
		);
	});

	it("falls back to pt-BR when the Accept-Language hint is unsupported", () => {
		expect(resolveLocale("/about", { acceptLanguage: "de-DE,de;q=0.9" })).toBe(
			"pt-BR",
		);
	});

	it("reads the persisted locale straight from document.cookie on the client", () => {
		document.cookie = "locale=es-ES; path=/";
		expect(resolveLocale("/about")).toBe("es-ES");
	});
});
