import aboutEn from "./locales/en-US/about.json";
import contactEn from "./locales/en-US/contact.json";
import experienceEn from "./locales/en-US/experience.json";
import homeEn from "./locales/en-US/home.json";
import projectsEn from "./locales/en-US/projects.json";
import resumeEn from "./locales/en-US/resume.json";
import aboutEs from "./locales/es-ES/about.json";
import contactEs from "./locales/es-ES/contact.json";
import experienceEs from "./locales/es-ES/experience.json";
import homeEs from "./locales/es-ES/home.json";
import projectsEs from "./locales/es-ES/projects.json";
import resumeEs from "./locales/es-ES/resume.json";
import aboutPt from "./locales/pt-BR/about.json";
import contactPt from "./locales/pt-BR/contact.json";
import experiencePt from "./locales/pt-BR/experience.json";
import homePt from "./locales/pt-BR/home.json";
import projectsPt from "./locales/pt-BR/projects.json";
import resumePt from "./locales/pt-BR/resume.json";

export const metaByNamespace = {
	home: { "pt-BR": homePt.meta, "en-US": homeEn.meta, "es-ES": homeEs.meta },
	about: {
		"pt-BR": aboutPt.meta,
		"en-US": aboutEn.meta,
		"es-ES": aboutEs.meta,
	},
	experience: {
		"pt-BR": experiencePt.meta,
		"en-US": experienceEn.meta,
		"es-ES": experienceEs.meta,
	},
	projects: {
		"pt-BR": projectsPt.meta,
		"en-US": projectsEn.meta,
		"es-ES": projectsEs.meta,
	},
	contact: {
		"pt-BR": contactPt.meta,
		"en-US": contactEn.meta,
		"es-ES": contactEs.meta,
	},
	resume: {
		"pt-BR": resumePt.meta,
		"en-US": resumeEn.meta,
		"es-ES": resumeEs.meta,
	},
	tenira: {
		"pt-BR": projectsPt.tenira.meta,
		"en-US": projectsEn.tenira.meta,
		"es-ES": projectsEs.tenira.meta,
	},
	anvero: {
		"pt-BR": projectsPt.anvero.meta,
		"en-US": projectsEn.anvero.meta,
		"es-ES": projectsEs.anvero.meta,
	},
} as const;
