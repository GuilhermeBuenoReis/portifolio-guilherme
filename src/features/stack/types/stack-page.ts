import type { LucideIcon } from "lucide-react";

export type SkillBar = {
	label: string;
};

export type MethodologyBlock = {
	title: string;
	description: string;
};

export type DailyTool = {
	name: string;
	icon: LucideIcon;
};

export type FrontendCardData = {
	title: string;
	subtitle: string;
	skills: SkillBar[];
	description: string;
	badges: string[];
};

export type BackendCardData = {
	title: string;
	items: string[];
	description: string;
};

export type MethodologiesCardData = {
	title: string;
	blocks: MethodologyBlock[];
};

export type InfraCardData = {
	title: string;
	badges: string[];
	description: string;
};

export type DailyToolsCardData = {
	title: string;
	description: string;
	tools: DailyTool[];
};
