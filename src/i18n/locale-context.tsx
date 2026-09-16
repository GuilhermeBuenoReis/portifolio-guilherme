import { useRouteContext } from "@tanstack/react-router";
import { useMemo } from "react";
import aboutEn from "./locales/en-US/about.json";
import commonEn from "./locales/en-US/common.json";
import contactEn from "./locales/en-US/contact.json";
import experienceEn from "./locales/en-US/experience.json";
import homeEn from "./locales/en-US/home.json";
import projectsEn from "./locales/en-US/projects.json";
import resumeEn from "./locales/en-US/resume.json";
import aboutEs from "./locales/es-ES/about.json";
import commonEs from "./locales/es-ES/common.json";
import contactEs from "./locales/es-ES/contact.json";
import experienceEs from "./locales/es-ES/experience.json";
import homeEs from "./locales/es-ES/home.json";
import projectsEs from "./locales/es-ES/projects.json";
import resumeEs from "./locales/es-ES/resume.json";
import aboutPt from "./locales/pt-BR/about.json";
import commonPt from "./locales/pt-BR/common.json";
import contactPt from "./locales/pt-BR/contact.json";
import experiencePt from "./locales/pt-BR/experience.json";
import homePt from "./locales/pt-BR/home.json";
import projectsPt from "./locales/pt-BR/projects.json";
import resumePt from "./locales/pt-BR/resume.json";
import type { Locale } from "./types";

const dictionaries = {
	"pt-BR": {
		common: commonPt,
		home: homePt,
		about: aboutPt,
		experience: experiencePt,
		projects: projectsPt,
		contact: contactPt,
		resume: resumePt,
	},
	"en-US": {
		common: commonEn,
		home: homeEn,
		about: aboutEn,
		experience: experienceEn,
		projects: projectsEn,
		contact: contactEn,
		resume: resumeEn,
	},
	"es-ES": {
		common: commonEs,
		home: homeEs,
		about: aboutEs,
		experience: experienceEs,
		projects: projectsEs,
		contact: contactEs,
		resume: resumeEs,
	},
} as const;

type Namespace = keyof (typeof dictionaries)["pt-BR"];

export function useLocale(): Locale {
	return useRouteContext({
		from: "__root__",
		select: (ctx) => ctx.locale as Locale,
	});
}

function getValueByPath(source: unknown, path: string): unknown {
	return path
		.split(".")
		.reduce<unknown>(
			(acc, segment) =>
				acc && typeof acc === "object"
					? (acc as Record<string, unknown>)[segment]
					: undefined,
			source,
		);
}

export function useTranslation<N extends Namespace>(namespace: N) {
	const locale = useLocale();

	return useMemo(() => {
		const dict = dictionaries[locale][namespace];

		function t(key: string): string {
			const value = getValueByPath(dict, key);
			return typeof value === "string" ? value : key;
		}

		function tRaw<T = unknown>(key: string): T {
			return getValueByPath(dict, key) as T;
		}

		return { t, tRaw, locale, dict };
	}, [locale, namespace]);
}
