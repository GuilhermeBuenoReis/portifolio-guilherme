import { createFileRoute, notFound } from "@tanstack/react-router";
import { metaByNamespace } from "#/i18n/meta-by-locale";
import { pageHead } from "#/i18n/page-head";
import { isLocaleParam } from "#/i18n/types";
import { CaseStudyPage } from "#/pages/projects/case-study";

const validSlugs = ["tenira", "anvero"] as const;
type CaseStudySlug = (typeof validSlugs)[number];

function isCaseStudySlug(value: string): value is CaseStudySlug {
	return validSlugs.includes(value as CaseStudySlug);
}

export const Route = createFileRoute("/{-$locale}/projects/$slug")({
	beforeLoad: ({ params }) => {
		if (params.locale && !isLocaleParam(params.locale)) {
			throw notFound();
		}
	},
	loader: ({ params }) => {
		if (!isCaseStudySlug(params.slug)) {
			throw notFound();
		}
		return { slug: params.slug };
	},
	head: ({ match, loaderData }) => {
		const slug = loaderData?.slug ?? "tenira";
		return pageHead({
			locale: match.context.locale,
			unprefixedPath: `/projects/${slug}`,
			...metaByNamespace[slug][match.context.locale],
		});
	},
	component: CaseStudyPage,
});
