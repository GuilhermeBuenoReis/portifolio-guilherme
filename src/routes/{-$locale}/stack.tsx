import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { isLocaleParam } from "#/i18n/types";

export const Route = createFileRoute("/{-$locale}/stack")({
	beforeLoad: ({ params }) => {
		if (params.locale && !isLocaleParam(params.locale)) {
			throw notFound();
		}
		throw redirect({
			to: "/{-$locale}/about",
			params,
			statusCode: 301,
		});
	},
});
