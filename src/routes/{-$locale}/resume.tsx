import { createFileRoute, notFound } from "@tanstack/react-router";
import { metaByNamespace } from "#/i18n/meta-by-locale";
import { pageHead } from "#/i18n/page-head";
import { isLocaleParam } from "#/i18n/types";
import { ResumePage } from "#/pages/resume";

export const Route = createFileRoute("/{-$locale}/resume")({
	beforeLoad: ({ params }) => {
		if (params.locale && !isLocaleParam(params.locale)) {
			throw notFound();
		}
	},
	head: ({ match }) =>
		pageHead({
			locale: match.context.locale,
			unprefixedPath: "/resume",
			...metaByNamespace.resume[match.context.locale],
		}),
	component: ResumePage,
});
