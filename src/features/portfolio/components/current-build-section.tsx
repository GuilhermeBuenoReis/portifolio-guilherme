import {
	ArrowUpRight,
	Blocks,
	MessageCircleMore,
	ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";

const responsibilities = [
	{ icon: Blocks, label: "Produto e arquitetura" },
	{ icon: MessageCircleMore, label: "Integração com WhatsApp" },
	{ icon: ShieldCheck, label: "Segurança e entrega" },
] as const;

export function CurrentBuildSection() {
	return (
		<motion.section
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			className="py-20 md:py-28"
		>
			<div className="mx-auto max-w-280 px-6">
				<div className="relative overflow-hidden rounded-2xl border border-(--primary-border) bg-surface p-7 shadow-2xl shadow-primary/5 md:p-10 lg:p-12">
					<div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
					<div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
						<div className="flex flex-col items-start gap-5">
							<span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-hover">
								Construindo agora
							</span>
							<h2 className="m-0 max-w-3xl text-3xl font-bold tracking-[-0.03em] text-fg md:text-5xl">
								Transformando conversas esquecidas em próximas ações.
							</h2>
							<p className="m-0 max-w-2xl text-base leading-relaxed text-fg-secondary">
								A Anvero ajuda pequenos negócios a identificar oportunidades que
								precisam de retorno no WhatsApp. Como Co-Founder e CTO, sou
								responsável por produto e tecnologia, da arquitetura e
								integração à experiência de uso e entrega.
							</p>
							<a
								href="https://www.anvero.com.br"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 text-sm font-semibold text-primary-hover transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--primary-border)"
							>
								Conhecer o produto
								<ArrowUpRight size={16} aria-hidden="true" />
							</a>
						</div>

						<ul className="grid gap-3">
							{responsibilities.map((item) => (
								<li
									key={item.label}
									className="flex items-center gap-3 rounded-xl border border-border bg-background-soft p-4"
								>
									<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-(--primary-soft) text-primary-hover">
										<item.icon size={18} aria-hidden="true" />
									</span>
									<span className="text-sm font-medium text-fg">
										{item.label}
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</motion.section>
	);
}
