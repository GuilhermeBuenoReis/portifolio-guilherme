export type ProjectCategory =
	| "Produto"
	| "Trabalho"
	| "Experimento"
	| "Acadêmico";

export type ProjectRepo = {
	label: string;
	url: string;
	kind: "website" | "repository";
};

export type Project = {
	id: string;
	name: string;
	category: ProjectCategory;
	description: string;
	problem: string;
	role: string;
	status: string;
	tags: string[];
	repos: ProjectRepo[];
	bannerGradient: string;
	featured?: boolean;
};
