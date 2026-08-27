import { createFileRoute } from "@tanstack/react-router";
import { createPageHead } from "#/lib/seo";
import { AboutPage } from "#/pages/about";

export const Route = createFileRoute("/about")({
	head: () =>
		createPageHead({
			title: "Sobre Guilherme Reis | Produto e tecnologia",
			description:
				"Conheça a trajetória e a visão de Guilherme Reis sobre produto, experiência, arquitetura e engenharia de software.",
			path: "/about",
		}),
	component: AboutPage,
});
