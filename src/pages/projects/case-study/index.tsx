import { getRouteApi } from "@tanstack/react-router";
import { ProjectCaseStudy } from "#/features/projects/components/project-case-study";
import type { CaseStudyContent } from "#/features/projects/types/case-study";
import { useTranslation } from "#/i18n/locale-context";

const routeApi = getRouteApi("/{-$locale}/projects/$slug");

const liveUrlBySlug: Record<string, string | undefined> = {
	tenira: "https://www.tenira.com.br",
	anvero: undefined,
};

export function CaseStudyPage() {
	const { slug } = routeApi.useLoaderData();
	const { tRaw } = useTranslation("projects");
	const { t: tCommon } = useTranslation("common");

	const content = tRaw<CaseStudyContent>(slug);

	return (
		<ProjectCaseStudy
			title={content.title}
			content={content}
			liveUrl={liveUrlBySlug[slug]}
			viewProductLabel={tCommon("cta.viewProject")}
		/>
	);
}
