import { Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import { gmailHref } from "#/features/contact/data/contact-links";
import { cn } from "#/lib/utils";

export function ProfileCtaSection() {
	return (
		<section className="pb-24 md:pb-32">
			<div className="mx-auto max-w-280 px-6">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-60px" }}
					transition={{ duration: 0.45, ease: "easeOut" }}
					className={cn(
						"flex flex-col items-center gap-6 rounded-2xl px-6 py-16 text-center",
						"border border-border bg-surface",
						"[box-shadow:var(--shadow-card)]",
					)}
				>
					<div className="flex flex-col items-center gap-3">
						<h2 className="text-3xl font-bold tracking-tight text-fg md:text-4xl">
							Vamos conversar sobre produto ou tecnologia?
						</h2>
						<p className="max-w-md text-sm leading-relaxed text-fg-secondary">
							Estou aberto a conversas sobre produtos digitais, parcerias,
							consultoria e desafios técnicos com contexto real de negócio.
						</p>
					</div>

					<div className="flex flex-col items-center gap-3 sm:flex-row">
						<a
							href="https://www.linkedin.com/in/guilherme-bueno-reis/"
							target="_blank"
							rel="noopener noreferrer"
							className={cn(
								"inline-flex items-center gap-2 rounded-lg px-5 py-2.5",
								"bg-primary text-sm font-semibold text-white shadow-sm shadow-primary/25",
								"transition-colors duration-150 hover:bg-primary-hover",
							)}
						>
							<Linkedin size={16} aria-hidden="true" />
							Ver LinkedIn
						</a>
						<a
							href={gmailHref}
							target="_blank"
							rel="noopener noreferrer"
							className={cn(
								"inline-flex items-center gap-2 rounded-lg px-5 py-2.5",
								"border border-border-strong bg-surface shadow-sm dark:bg-surface-elevated",
								"text-sm font-medium text-fg",
								"transition-colors duration-150",
								"hover:border-(--primary-border) hover:bg-(--primary-soft) hover:text-primary-hover",
							)}
						>
							<Mail size={16} />
							Enviar e-mail
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
