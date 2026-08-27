import type {
	Certification,
	Education,
	TrajectoryItem,
} from "#/features/experience/types/trajectory";

export const trajectoryItems: TrajectoryItem[] = [
	{
		id: "anvero",
		period: "Jul 2026 - Presente",
		role: "Co-Founder & CTO",
		company: "Anvero",
		highlights: [
			"Liderança de produto e tecnologia em um SaaS para priorização de oportunidades comerciais no WhatsApp.",
			"Responsabilidade por arquitetura, integrações, segurança técnica, experiência de uso e entrega.",
			"Tradução de hipóteses de negócio em decisões de produto e engenharia durante a construção e validação do MVP.",
		],
	},
	{
		id: "buenos-cakes",
		period: "Fev 2026 - Mai 2026",
		role: "Desenvolvedor Full Stack",
		company: "Buenos Cakes",
		highlights: [
			"Construção de uma plataforma para pedidos personalizados, catálogo, endereços e pagamentos.",
			"Desenvolvimento de frontend, API modular, autenticação e modelagem de dados.",
			"Organização do fluxo de compra e da base técnica para manutenção do produto.",
		],
	},
	{
		id: "velan",
		period: "Jul 2025 - Nov 2025",
		role: "Desenvolvedor Full Stack",
		company: "Velan",
		highlights: [
			"Construção de uma solução web e mobile para organização de atendimentos de saúde.",
			"Implementação de navegação, formulários validados e interfaces responsivas.",
			"Estruturação de uma base consistente para evolução do produto.",
		],
	},
	{
		id: "onec",
		period: "Fev 2025 - Out 2025",
		role: "Desenvolvedor Full Stack Freelancer",
		company: "ONEC",
		highlights: [
			"Desenvolvimento de frontend e backend para gestão de negociações, contratos e parceiros.",
			"Criação de APIs tipadas, autenticação, validação, upload de arquivos e testes automatizados.",
			"Construção de dashboards, formulários e componentes reutilizáveis para fluxos operacionais.",
		],
	},
];

export const education: Education = {
	degree: "Bacharelado em Engenharia de Software",
	institution: "Centro Universitário UniGuairacá • Fev 2024 - Dez 2028",
	details: [
		{ label: "Status", value: "Em andamento" },
		{ label: "Previsão", value: "Dezembro de 2028" },
	],
};

export const certifications: Certification[] = [
	{
		id: "nodejs-rocketseat",
		name: "Node.js",
		issuer: "Rocketseat • Dez 2025",
	},
	{
		id: "http-performance",
		name: "HTTP e Performance",
	},
	{
		id: "aprofundando-hooks",
		name: "Aprofundando em Hooks",
	},
	{
		id: "interfaces-navegacao-armazenamento-local",
		name: "Interfaces, Navegação e Armazenamento local",
	},
	{
		id: "fundamentos-java",
		name: "Fundamentos de Java",
	},
];
