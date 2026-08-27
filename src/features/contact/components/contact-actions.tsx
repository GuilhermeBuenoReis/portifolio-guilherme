import { ExternalLink, Mail } from "lucide-react";
import { motion } from "motion/react";
import { WhatsappIcon } from "#/components/ui/whatsapp-icon";
import {
	contactEmail,
	contactHref,
	gmailHref,
	whatsappHref,
} from "#/features/contact/data/contact-links";
import { cn } from "#/lib/utils";

export function ContactActions() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-60px" }}
			transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
			className={cn(
				"flex flex-col gap-6 rounded-xl border border-border bg-surface p-8",
				"[box-shadow:var(--shadow-card)]",
			)}
		>
			<div className="flex flex-col gap-3">
				<span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary-hover">
					Iniciar uma conversa
				</span>
				<h2 className="text-xl font-bold tracking-tight text-fg">
					Conte o contexto, não apenas a tecnologia
				</h2>
				<p className="text-sm leading-relaxed text-fg-secondary">
					Explique o problema, o estágio atual e o que você precisa decidir.
					Isso torna a primeira conversa muito mais objetiva.
				</p>
			</div>

			<div className="flex flex-col gap-3">
				<a
					href={contactHref}
					className={cn(
						"inline-flex items-center justify-center gap-2 rounded-lg",
						"bg-primary px-6 py-3.5 text-sm font-semibold text-white",
						"shadow-sm shadow-primary/25",
						"transition-colors duration-150 hover:bg-primary-hover",
					)}
				>
					<Mail size={16} />
					Enviar e-mail
				</a>

				<div className="grid gap-3 sm:grid-cols-2">
					<a
						href={gmailHref}
						target="_blank"
						rel="noreferrer"
						className={cn(
							"inline-flex items-center justify-center gap-2 rounded-lg",
							"border border-border-strong bg-surface shadow-sm dark:bg-surface-elevated",
							"px-6 py-3.5 text-sm font-medium text-fg",
							"transition-colors duration-150",
							"hover:border-(--primary-border) hover:bg-(--primary-soft) hover:text-primary-hover",
						)}
					>
						<ExternalLink size={16} />
						Abrir no Gmail
					</a>

					<a
						href={whatsappHref}
						target="_blank"
						rel="noreferrer"
						aria-label="Chamar no WhatsApp"
						className={cn(
							"inline-flex items-center justify-center gap-2 rounded-lg",
							"border border-(--primary-border) bg-(--primary-soft) px-6 py-3.5",
							"text-sm font-medium text-primary-hover shadow-sm",
							"transition-colors duration-150 hover:border-primary-hover",
						)}
					>
						<WhatsappIcon size={16} />
						Chamar no WhatsApp
					</a>
				</div>
			</div>

			<p className="text-xs text-fg-muted">
				Prefere copiar?{" "}
				<span className="font-mono text-fg-secondary">{contactEmail}</span>
			</p>
		</motion.div>
	);
}
