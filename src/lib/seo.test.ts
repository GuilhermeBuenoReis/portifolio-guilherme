import { describe, expect, it } from "vitest";
import { createPageHead, siteUrl, socialImageUrl } from "./seo";

describe("createPageHead", () => {
	it("creates canonical and social metadata for the production domain", () => {
		const head = createPageHead({
			title: "Produtos | Guilherme Reis",
			description: "Produtos construídos por Guilherme Reis.",
			path: "/projects",
		});

		expect(siteUrl).toBe("https://www.devguilhermebuenoreis.com.br");
		expect(socialImageUrl).toBe(`${siteUrl}/og-image.jpg`);
		expect(head.links).toContainEqual({
			rel: "canonical",
			href: `${siteUrl}/projects`,
		});
		expect(head.meta).toContainEqual({
			property: "og:url",
			content: `${siteUrl}/projects`,
		});
	});
});
