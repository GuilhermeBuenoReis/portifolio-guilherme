import { createFileRoute } from "@tanstack/react-router";
import { createPageHead } from "#/lib/seo";
import { ProjectsPage } from "#/pages/projects";

export const Route = createFileRoute("/projects")({
	head: () =>
		createPageHead({
			title: "Produtos e projetos | Guilherme Reis",
			description:
				"Anvero, Gitto, ONEC e outros produtos construídos por Guilherme Reis, com contexto sobre problema, responsabilidade e engenharia.",
			path: "/projects",
		}),
	component: ProjectsPage,
});
