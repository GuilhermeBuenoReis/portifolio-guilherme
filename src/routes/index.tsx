import { createFileRoute } from "@tanstack/react-router";
import { createPageHead } from "#/lib/seo";
import { HomePage } from "#/pages/home";

export const Route = createFileRoute("/")({
	head: () =>
		createPageHead({
			title: "Guilherme Reis | Product Engineer e CTO da Anvero",
			description:
				"Co-Founder e CTO da Anvero. Produto, engenharia e software para transformar problemas de negócio em produtos digitais.",
			path: "",
		}),
	component: HomePage,
});
