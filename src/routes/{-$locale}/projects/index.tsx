import { createFileRoute, notFound } from "@tanstack/react-router";
import { metaByNamespace } from "#/i18n/meta-by-locale";
import { pageHead } from "#/i18n/page-head";
import { isLocaleParam } from "#/i18n/types";
import { ProjectsPage } from "#/pages/projects";

export const Route = createFileRoute("/{-$locale}/projects/")({
	beforeLoad: ({ params }) => {
		if (params.locale && !isLocaleParam(params.locale)) {
			throw notFound();
		}
	},
	head: ({ match }) =>
		pageHead({
			locale: match.context.locale,
			unprefixedPath: "/projects",
			...metaByNamespace.projects[match.context.locale],
		}),
	component: ProjectsPage,
});
