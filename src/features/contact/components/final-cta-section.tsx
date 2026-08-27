import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { cn } from "#/lib/utils";

export function FinalCtaSection() {
	return (
		<motion.section
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			className={cn(
				"border-t border-b border-(--primary-border)",
				"bg-surface-elevated",
				"py-24 md:py-32",
			)}
		>
			<div className="mx-auto flex max-w-280 flex-col items-center gap-8 px-6 text-center">
				<div className="flex flex-col gap-4">
					<h2 className="text-2xl font-bold tracking-tight text-fg md:text-3xl">
						Tem um problema de produto ou operação para resolver?
					</h2>
					<p className="mx-auto max-w-xl text-sm leading-relaxed text-fg-secondary md:text-base">
						Vamos conversar sobre o contexto, as decisões e o software que pode
						transformar essa operação.
					</p>
				</div>

				<div className="flex flex-wrap items-center justify-center gap-4">
					<Link
						to="/contact"
						className={cn(
							"inline-flex items-center rounded-lg",
							"border border-(--primary-border) bg-(--primary-soft)",
							"px-6 py-2.5 text-sm font-medium text-primary-hover",
							"transition-colors duration-150",
							"hover:border-primary hover:bg-[rgba(139,92,246,0.22)]",
						)}
					>
						Entrar em contato
					</Link>

					<a
						href="https://github.com/GuilhermeBuenoReis"
						target="_blank"
						rel="noreferrer"
						className={cn(
							"inline-flex items-center rounded-lg",
							"border border-border-strong bg-surface",
							"px-6 py-2.5 text-sm font-medium text-fg",
							"transition-colors duration-150",
							"hover:border-(--primary-border) hover:text-primary-hover",
						)}
					>
						Ver GitHub
					</a>
				</div>
			</div>
		</motion.section>
	);
}
