import { createFileRoute } from "@tanstack/react-router";
import { createPageHead } from "#/lib/seo";
import { StackPage } from "#/pages/stack";

export const Route = createFileRoute("/stack")({
	head: () =>
		createPageHead({
			title: "Capacidades técnicas | Guilherme Reis",
			description:
				"Capacidades em frontend, backend, dados, arquitetura, qualidade e infraestrutura aplicadas à construção de produtos digitais.",
			path: "/stack",
		}),
	component: StackPage,
});
