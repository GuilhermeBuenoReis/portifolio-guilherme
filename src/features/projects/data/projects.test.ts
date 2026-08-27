import { describe, expect, it } from "vitest";
import { projects } from "./projects";

describe("projects", () => {
	it("keeps identifiers and external links unique and valid", () => {
		const ids = projects.map((project) => project.id);
		const urls = projects.flatMap((project) =>
			project.repos.map((repo) => repo.url),
		);

		expect(new Set(ids).size).toBe(ids.length);
		expect(projects.every((project) => project.repos.length > 0)).toBe(true);
		expect(urls.every((url) => url.startsWith("https://"))).toBe(true);
	});

	it("positions Anvero first without fabricated outcome metrics", () => {
		const [anvero] = projects;

		expect(anvero?.id).toBe("anvero");
		expect(anvero?.featured).toBe(true);
		expect(anvero?.role).toContain("Co-Founder e CTO");
		expect(anvero?.status).toBe("Em construção e validação");
	});

	it("keeps academic work outside the featured selection", () => {
		const featuredAcademicProjects = projects.filter(
			(project) => project.category === "Acadêmico" && project.featured,
		);

		expect(featuredAcademicProjects).toHaveLength(0);
	});
});
