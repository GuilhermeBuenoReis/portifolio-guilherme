import { Link } from "@tanstack/react-router";
import { ArrowUpRight, User } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "#/lib/utils";

export function AboutSection() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{ duration: 0.5 }}
			className="py-20 md:py-28"
		>
			<div className="mx-auto max-w-280 px-6">
				<div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
						className={cn(
							"flex flex-col gap-6 rounded-xl p-8",
							"border border-border bg-surface",
							"transition-colors duration-200",
							"hover:border-(--primary-border)",
							"[box-shadow:var(--shadow-card)]",
						)}
					>
						<span className="font-serif text-5xl leading-none text-primary-hover select-none">
							"
						</span>

						<p className="text-lg leading-relaxed text-fg md:text-xl">
							"Sou Guilherme Reis, engenheiro de produto, desenvolvedor full
							stack e Co-Founder e CTO da Anvero. Transformo problemas pouco
							estruturados em produtos claros, úteis e tecnicamente
							sustentáveis."
						</p>

						<div className="h-px bg-border" />

						<div className="flex items-center gap-4">
							<div
								className={cn(
									"flex h-11 w-11 shrink-0 items-center justify-center rounded-lg",
									"bg-primary/15 text-primary",
								)}
							>
								<User size={18} />
							</div>
							<div className="flex flex-col gap-0.5">
								<span className="text-sm font-semibold text-fg">
									Guilherme Reis
								</span>
								<span className="text-xs text-fg-muted">
									Product Engineer · Co-Founder & CTO
								</span>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
						className="flex flex-col justify-center gap-6"
					>
						<h2 className="text-3xl font-bold tracking-tight text-fg md:text-4xl">
							Minha Visão
						</h2>

						<div className="flex flex-col gap-5">
							<p className="text-sm leading-relaxed text-fg-secondary">
								Meu foco está em conectar problema, produto, interface e
								engenharia. Código é uma ferramenta importante, mas a qualidade
								da decisão vem antes da implementação.
							</p>
							<p className="text-sm leading-relaxed text-fg-secondary">
								Na Anvero, respondo por produto e tecnologia: arquitetura,
								integrações, experiência de uso, segurança técnica e entrega.
							</p>
						</div>

						<Link
							to="/about"
							className="inline-flex items-center gap-2 self-start text-sm font-semibold text-primary-hover transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--primary-border)"
						>
							Conhecer minha trajetória
							<ArrowUpRight size={16} aria-hidden="true" />
						</Link>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
}
