import {
	Box,
	Code2,
	Database,
	GitBranch,
	PenTool,
	Send,
	Terminal,
	Wrench,
} from "lucide-react";
import type {
	BackendCardData,
	DailyToolsCardData,
	FrontendCardData,
	InfraCardData,
	MethodologiesCardData,
} from "#/features/stack/types/stack-page";

export const heroContent = {
	eyebrow: "Capacidades técnicas com contexto de produto.",
	description:
		"Tecnologias, práticas e decisões que uso para construir produtos completos. Sem porcentagens arbitrárias: cada capacidade aparece ligada ao trabalho que ajuda a entregar.",
} as const;

export const frontendCard: FrontendCardData = {
	title: "Frontend Engineering",
	subtitle: "Interface & User Experience",
	skills: [
		{ label: "React / Next.js" },
		{ label: "TypeScript / JavaScript" },
		{ label: "Tailwind CSS / shadcn/ui" },
	],
	description:
		"Foco em interfaces declarativas, componentes reutilizáveis, acessibilidade, performance e experiências responsivas com boa experiência de usuário.",
	badges: [
		"React Hook Form",
		"Zod",
		"Zustand",
		"React Query",
		"Motion",
		"Radix UI",
		"Lucide React",
		"Recharts",
		"Axios",
		"Orval",
	],
};

export const backendCard: BackendCardData = {
	title: "Backend",
	items: [
		"Node.js / Fastify",
		"Laravel / Inertia.js",
		"PostgreSQL / Drizzle ORM",
		"Zod / JWT",
		"OpenAPI / Scalar",
		"Cloudinary",
	],
	description:
		"Construção de APIs robustas, modulares e escaláveis, priorizando segurança, validação tipada, organização em camadas e manutenção a longo prazo.",
};

export const methodologiesCard: MethodologiesCardData = {
	title: "Metodologias & Qualidade",
	blocks: [
		{ title: "Architecture", description: "Clean Architecture & DDD" },
		{ title: "Testing", description: "Vitest, Playwright & Cypress" },
		{ title: "Principles", description: "SOLID, DRY & boas práticas" },
		{
			title: "API Design",
			description: "REST APIs, contratos tipados e documentação",
		},
		{ title: "Validation", description: "Zod, schemas e segurança de entrada" },
		{ title: "Automation", description: "Biome, GitHub Actions e CI/CD" },
	],
};

export const infraCard: InfraCardData = {
	title: "Infra & DevOps",
	badges: [
		"Docker",
		"GitHub Actions",
		"Vercel",
		"PostgreSQL",
		"Linux",
		"Cloudinary",
		"AbacatePay",
		"OpenAPI",
		"Scalar",
	],
	description:
		"Ambientes organizados, integração contínua, documentação de APIs e estrutura preparada para evolução, deploy e manutenção sem complexidade prematura.",
};

export const dailyToolsCard: DailyToolsCardData = {
	title: "Ferramentas do Dia a Dia",
	description: "A produtividade nasce de um workflow bem refinado.",
	tools: [
		{ name: "Figma", icon: PenTool },
		{ name: "VS Code", icon: Code2 },
		{ name: "Linux / Zsh", icon: Terminal },
		{ name: "Git / GitHub", icon: GitBranch },
		{ name: "Docker", icon: Box },
		{ name: "Biome", icon: Wrench },
		{ name: "Postman / Insomnia", icon: Send },
		{ name: "Drizzle Studio", icon: Database },
	],
};
