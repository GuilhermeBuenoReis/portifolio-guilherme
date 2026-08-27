import type { Project } from "#/features/projects/types/project";

export const projects: Project[] = [
	{
		id: "anvero",
		name: "Anvero",
		category: "Produto",
		description:
			"SaaS que ajuda pequenos negócios a identificar conversas que precisam de retorno e organizar as próximas ações no WhatsApp.",
		problem:
			"Oportunidades comerciais descem na caixa de entrada, perdem contexto e ficam sem responsável ou próximo passo.",
		role: "Co-Founder e CTO, responsável por produto, arquitetura, integrações, segurança técnica e entrega.",
		status: "Em construção e validação",
		tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "WhatsApp"],
		repos: [
			{
				label: "Conhecer a Anvero",
				url: "https://www.anvero.com.br",
				kind: "website",
			},
			{
				label: "Repositório da API",
				url: "https://github.com/GuilhermeBuenoReis/anvero-api",
				kind: "repository",
			},
		],
		bannerGradient:
			"bg-gradient-to-br from-violet-950 via-[#17102d] to-slate-950",
		featured: true,
	},
	{
		id: "gitto",
		name: "Gitto",
		category: "Produto",
		description:
			"Cliente Git desktop local-first para organizar repositórios, branches e worktrees em uma experiência mais direta.",
		problem:
			"Fluxos importantes do Git ficam espalhados entre terminal, explorador de arquivos e clientes com pouca clareza operacional.",
		role: "Idealização, produto, design da experiência e desenvolvimento desktop full stack.",
		status: "Open source em desenvolvimento",
		tags: ["Tauri", "Rust", "React", "TypeScript", "Git"],
		repos: [
			{
				label: "Repositório",
				url: "https://github.com/GuilhermeBuenoReis/gitto",
				kind: "repository",
			},
		],
		bannerGradient:
			"bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950",
		featured: true,
	},
	{
		id: "onec-platform",
		name: "ONEC",
		category: "Trabalho",
		description:
			"Plataforma para gestão de negociações, contratos e parceiros, com frontend tipado e backend modular.",
		problem:
			"Centralizar fluxos comerciais e operacionais que dependiam de processos fragmentados e baixa visibilidade.",
		role: "Desenvolvimento do frontend e backend, contratos de API, autenticação, modelagem e qualidade.",
		status: "Projeto entregue",
		tags: ["React", "Fastify", "Drizzle ORM", "PostgreSQL"],
		repos: [
			{
				label: "Frontend",
				url: "https://github.com/GuilhermeBuenoReis/Onec-frellancer",
				kind: "repository",
			},
			{
				label: "Backend",
				url: "https://github.com/GuilhermeBuenoReis/onec-backend",
				kind: "repository",
			},
		],
		bannerGradient:
			"bg-gradient-to-br from-indigo-950 via-purple-950 to-violet-900",
		featured: true,
	},
	{
		id: "buenos-cakes",
		name: "Buenos Cakes",
		category: "Trabalho",
		description:
			"Plataforma de pedidos personalizados com catálogo, endereços, checkout, pagamentos e gestão operacional.",
		problem:
			"Organizar pedidos sob encomenda com variações, dados do cliente e acompanhamento em um fluxo único.",
		role: "Produto e desenvolvimento full stack, da modelagem da API à experiência de compra.",
		status: "Projeto entregue",
		tags: ["Next.js", "Fastify", "PostgreSQL", "AbacatePay"],
		repos: [
			{
				label: "Frontend",
				url: "https://github.com/GuilhermeBuenoReis/buenos_cakes_web",
				kind: "repository",
			},
			{
				label: "Backend",
				url: "https://github.com/GuilhermeBuenoReis/buenos_cakes_api",
				kind: "repository",
			},
		],
		bannerGradient:
			"bg-gradient-to-br from-pink-950 via-purple-950 to-fuchsia-900",
		featured: true,
	},
	{
		id: "velan",
		name: "Velan",
		category: "Trabalho",
		description:
			"Solução web e mobile para organização de atendimentos de saúde, formulários e acompanhamento do paciente.",
		problem:
			"Simplificar a organização de rotinas clínicas em uma interface clara e preparada para evolução.",
		role: "Desenvolvimento de interface, navegação, formulários e base de produto web e mobile.",
		status: "Projeto concluído",
		tags: ["Laravel", "React", "Inertia", "Flutter"],
		repos: [
			{
				label: "Frontend",
				url: "https://github.com/GuilhermeBuenoReis/velan-web",
				kind: "repository",
			},
			{
				label: "Aplicativo mobile",
				url: "https://github.com/GuilhermeBuenoReis/velan-mobile",
				kind: "repository",
			},
		],
		bannerGradient:
			"bg-gradient-to-br from-cyan-950 via-slate-900 to-purple-950",
	},
	{
		id: "therapy",
		name: "Therapy",
		category: "Experimento",
		description:
			"Plataforma para gestão de atendimentos terapêuticos, agendamentos, autenticação e pagamentos.",
		problem:
			"Explorar uma experiência integrada para profissionais autônomos gerenciarem seus atendimentos.",
		role: "Pesquisa de produto e desenvolvimento full stack.",
		status: "Projeto pessoal",
		tags: ["React", "Fastify", "Drizzle ORM", "Stripe"],
		repos: [
			{
				label: "Frontend",
				url: "https://github.com/GuilhermeBuenoReis/therapy-web",
				kind: "repository",
			},
			{
				label: "Backend",
				url: "https://github.com/GuilhermeBuenoReis/therapy-api",
				kind: "repository",
			},
		],
		bannerGradient:
			"bg-gradient-to-br from-emerald-950 via-purple-950 to-violet-900",
	},
	{
		id: "chronicle",
		name: "Chronicle",
		category: "Experimento",
		description:
			"Aplicação para registrar e organizar anotações com mídia, autenticação e uma interface personalizável.",
		problem:
			"Experimentar uma organização de conhecimento mais visual e pessoal.",
		role: "Concepção e desenvolvimento full stack.",
		status: "Projeto pessoal",
		tags: ["React", "Fastify", "PostgreSQL", "Cloudinary"],
		repos: [
			{
				label: "Frontend",
				url: "https://github.com/GuilhermeBuenoReis/Chronicle-front-end",
				kind: "repository",
			},
			{
				label: "Backend",
				url: "https://github.com/GuilhermeBuenoReis/Chronicle-back-end",
				kind: "repository",
			},
		],
		bannerGradient:
			"bg-gradient-to-br from-slate-900 via-purple-950 to-indigo-900",
	},
	{
		id: "forum-api",
		name: "Forum API",
		category: "Experimento",
		description:
			"API de fórum para estudar domínio, casos de uso, testes automatizados e separação de responsabilidades.",
		problem:
			"Aprofundar decisões de arquitetura em um domínio com perguntas, respostas e comentários.",
		role: "Modelagem de domínio, API e testes.",
		status: "Estudo técnico",
		tags: ["NestJS", "TypeScript", "Prisma", "Vitest"],
		repos: [
			{
				label: "Repositório",
				url: "https://github.com/GuilhermeBuenoReis/forum-api",
				kind: "repository",
			},
		],
		bannerGradient:
			"bg-gradient-to-br from-violet-950 via-purple-950 to-fuchsia-900",
	},
	{
		id: "guairaca-cicd",
		name: "Guairacá CI/CD",
		category: "Acadêmico",
		description:
			"Estudo de integração e entrega contínua com pipelines automatizados.",
		problem: "Praticar automação de build e deploy.",
		role: "Implementação acadêmica.",
		status: "Projeto acadêmico",
		tags: ["CI/CD", "GitHub Actions"],
		repos: [
			{
				label: "Repositório",
				url: "https://github.com/GuilhermeBuenoReis/guairaca-cicd",
				kind: "repository",
			},
		],
		bannerGradient:
			"bg-gradient-to-br from-sky-950 via-slate-900 to-purple-950",
	},
	{
		id: "paradigmas-prog",
		name: "Paradigmas de Programação",
		category: "Acadêmico",
		description:
			"Projeto da disciplina de Paradigmas de Linguagem de Programação.",
		problem: "Explorar paradigmas e suas aplicações.",
		role: "Implementação acadêmica.",
		status: "Projeto acadêmico",
		tags: ["Laravel", "PHP", "Blade"],
		repos: [
			{
				label: "Repositório",
				url: "https://github.com/GuilhermeBuenoReis/paradigmas-prog-20252-Guilherme-bueno-dos-reis",
				kind: "repository",
			},
		],
		bannerGradient:
			"bg-gradient-to-br from-rose-950 via-slate-900 to-purple-950",
	},
	{
		id: "financing-app-flutter",
		name: "Financing App",
		category: "Acadêmico",
		description:
			"Aplicativo mobile acadêmico para organização de despesas e receitas.",
		problem: "Praticar desenvolvimento mobile e persistência de dados.",
		role: "Implementação acadêmica.",
		status: "Projeto acadêmico",
		tags: ["Flutter", "Dart"],
		repos: [
			{
				label: "Repositório",
				url: "https://github.com/GuilhermeBuenoReis/financing_app_flutter",
				kind: "repository",
			},
		],
		bannerGradient:
			"bg-gradient-to-br from-cyan-950 via-slate-900 to-indigo-900",
	},
];
