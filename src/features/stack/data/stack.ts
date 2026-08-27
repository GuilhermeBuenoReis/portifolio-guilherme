import type { StackCategory } from "#/features/stack/types/stack";

export const stackCategories: StackCategory[] = [
	{
		id: "frontend",
		label: "Frontend",
		technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
	},
	{
		id: "backend",
		label: "Backend",
		technologies: ["Node.js", "Fastify", "Laravel", "APIs REST"],
	},
	{
		id: "infra",
		label: "Banco e Infra",
		technologies: ["PostgreSQL", "Drizzle ORM", "Docker", "Vercel"],
	},
	{
		id: "architecture",
		label: "Arquitetura",
		technologies: ["Arquitetura modular", "DDD", "SOLID", "Vitest"],
	},
];
