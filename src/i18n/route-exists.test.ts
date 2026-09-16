import { describe, expect, it } from "vitest";
import { routeExistsForPath } from "./route-exists";

describe("routeExistsForPath", () => {
	it("accepts the homepage, prefixed and unprefixed", () => {
		expect(routeExistsForPath("/")).toBe(true);
		expect(routeExistsForPath("/en")).toBe(true);
		expect(routeExistsForPath("/es")).toBe(true);
	});

	it("accepts known static routes, prefixed and unprefixed", () => {
		for (const segment of [
			"about",
			"experience",
			"contact",
			"projects",
			"resume",
			"stack",
		]) {
			expect(routeExistsForPath(`/${segment}`)).toBe(true);
			expect(routeExistsForPath(`/en/${segment}`)).toBe(true);
			expect(routeExistsForPath(`/es/${segment}`)).toBe(true);
		}
	});

	it("accepts known case-study slugs under /projects", () => {
		expect(routeExistsForPath("/projects/tenira")).toBe(true);
		expect(routeExistsForPath("/projects/anvero")).toBe(true);
		expect(routeExistsForPath("/en/projects/tenira")).toBe(true);
		expect(routeExistsForPath("/es/projects/anvero")).toBe(true);
	});

	it("rejects an unknown single segment", () => {
		expect(routeExistsForPath("/fake")).toBe(false);
		expect(routeExistsForPath("/en/fake")).toBe(false);
	});

	it("rejects an unknown locale-like prefix followed by a real route", () => {
		expect(routeExistsForPath("/xx/about")).toBe(false);
	});

	it("rejects an unknown nested path under a real static segment", () => {
		expect(routeExistsForPath("/about/fake")).toBe(false);
	});

	it("rejects an unknown project slug", () => {
		expect(routeExistsForPath("/projects/nonexistent-slug")).toBe(false);
		expect(routeExistsForPath("/en/projects/nonexistent-slug")).toBe(false);
	});

	it("rejects paths deeper than any real route", () => {
		expect(routeExistsForPath("/a/b/c/d")).toBe(false);
	});
});
