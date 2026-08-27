import { createFileRoute } from "@tanstack/react-router";
import { createPageHead } from "#/lib/seo";
import { ExperiencePage } from "#/pages/experience";

export const Route = createFileRoute("/experience")({
	head: () =>
		createPageHead({
			title: "Experiência | Guilherme Reis",
			description:
				"Trajetória de Guilherme Reis em produto, tecnologia, desenvolvimento full stack e liderança técnica na Anvero.",
			path: "/experience",
		}),
	component: ExperiencePage,
});
