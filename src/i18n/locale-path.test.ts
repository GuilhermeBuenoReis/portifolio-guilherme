import { describe, expect, it } from "vitest";
import { buildPathForLocale, stripLocalePrefix } from "./locale-path";

describe("stripLocalePrefix", () => {
	it("returns the path unchanged when there is no locale prefix", () => {
		expect(stripLocalePrefix("/projects/tenira")).toBe("/projects/tenira");
	});

	it("strips the /en prefix", () => {
		expect(stripLocalePrefix("/en/projects/tenira")).toBe("/projects/tenira");
	});

	it("strips the /es prefix", () => {
		expect(stripLocalePrefix("/es/about")).toBe("/about");
	});

	it("returns / when stripping the prefix leaves nothing", () => {
		expect(stripLocalePrefix("/en")).toBe("/");
	});
});

describe("buildPathForLocale", () => {
	it("PT -> EN preserves the current route", () => {
		expect(buildPathForLocale("/projects/tenira", "en-US")).toBe(
			"/en/projects/tenira",
		);
	});

	it("EN -> ES preserves the current route", () => {
		expect(buildPathForLocale("/en/projects/tenira", "es-ES")).toBe(
			"/es/projects/tenira",
		);
	});

	it("ES -> PT removes the prefix instead of going to the homepage", () => {
		expect(buildPathForLocale("/es/about", "pt-BR")).toBe("/about");
	});

	it("switching locale on the homepage stays on the homepage", () => {
		expect(buildPathForLocale("/", "en-US")).toBe("/en");
		expect(buildPathForLocale("/en", "pt-BR")).toBe("/");
	});
});
