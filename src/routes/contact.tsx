import { createFileRoute } from "@tanstack/react-router";
import { createPageHead } from "#/lib/seo";
import { ContactPage } from "#/pages/contact";

export const Route = createFileRoute("/contact")({
	head: () =>
		createPageHead({
			title: "Contato | Guilherme Reis",
			description:
				"Converse com Guilherme Reis sobre produtos digitais, SaaS, parcerias, desenvolvimento e desafios técnicos.",
			path: "/contact",
		}),
	component: ContactPage,
});
