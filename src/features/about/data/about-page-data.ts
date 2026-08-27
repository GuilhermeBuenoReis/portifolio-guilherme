import { Blocks, Compass, Sparkles, Target } from "lucide-react";
import type {
	FocusCard,
	HeroTitleSegment,
	VisionItem,
} from "#/features/about/types/about-page";

export const heroContent = {
	eyebrow: "Engenheiro de produto · Co-Founder & CTO",
	subtitle:
		"Sou Guilherme Reis, desenvolvedor full stack e Co-Founder e CTO da Anvero. Minha especialidade é transformar problemas ainda pouco estruturados em produtos digitais claros, úteis e tecnicamente sustentáveis.",
	titleSegments: [
		{ text: "Construo produtos na interseção entre " },
		{ text: "negócio", highlight: true },
		{ text: ", " },
		{ text: "experiência", highlight: true },
		{ text: " e " },
		{ text: "engenharia", highlight: true },
		{ text: "." },
	] satisfies HeroTitleSegment[],
} as const;

export const storyContent = {
	title: "Da implementação à responsabilidade pelo produto",
	paragraphs: [
		"Comecei no desenvolvimento buscando construir sistemas que funcionassem bem. Ao trabalhar com produtos reais, percebi que qualidade técnica isolada não resolve um problema mal compreendido.",
		"Passei a olhar também para fluxo, experiência, operação e impacto. Hoje, antes de discutir framework, procuro entender quem usa, qual decisão precisa ser facilitada e o que sustenta a evolução do produto.",
		"Na Anvero, essa responsabilidade ficou completa: participo da definição do produto e lidero arquitetura, integrações, experiência de uso, segurança técnica e entrega. A tecnologia continua central, mas sempre ligada ao problema de negócio que precisa resolver.",
	],
} as const;

export const visionContent = {
	title: "Como penso produto",
	intro:
		"Tecnologia é uma alavanca. Meu trabalho é combinar clareza de problema, experiência e engenharia para entregar algo útil e sustentável.",
	items: [
		{
			icon: Target,
			title: "Problema antes da funcionalidade",
			description:
				"Entender o contexto e a decisão do usuário antes de transformar uma ideia em backlog.",
		},
		{
			icon: Compass,
			title: "Produto com direção",
			description:
				"Tomar decisões coerentes com o estágio do produto, sem complexidade prematura.",
		},
		{
			icon: Sparkles,
			title: "Experiência como parte da solução",
			description:
				"Reduzir fricção e deixar claro o próximo passo para quem usa o sistema.",
		},
		{
			icon: Blocks,
			title: "Engenharia sustentável",
			description:
				"Construir uma base tipada, testável e preparada para evoluir conforme surgem evidências.",
		},
	] satisfies VisionItem[],
} as const;

export const focusCards: FocusCard[] = [
	{
		tag: "01 / Produto",
		title: "Da hipótese à entrega",
		description:
			"Transformo problemas pouco estruturados em fluxos, prioridades e decisões implementáveis.",
	},
	{
		tag: "02 / Engenharia",
		title: "Arquitetura com contexto",
		description:
			"Escolho padrões e ferramentas de acordo com o domínio, o estágio e o custo real de manutenção.",
	},
	{
		tag: "03 / Interface",
		title: "Clareza na experiência",
		description:
			"Crio interfaces que orientam ações, reduzem fricção e tornam operações complexas mais compreensíveis.",
	},
];

export const philosophyContent = {
	title: "Software com intenção",
	quote:
		"O melhor software não tenta provar o quanto é sofisticado. Ele torna uma decisão importante mais simples, confiável e clara.",
	badges: ["Clareza", "Contexto", "Produto", "Engenharia", "Manutenção"],
	note: "Essa é a base do meu trabalho: compreender antes de abstrair, entregar antes de sofisticar e evoluir com evidência, sem abandonar a qualidade técnica.",
} as const;
