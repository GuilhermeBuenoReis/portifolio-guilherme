import { Mail } from "lucide-react";
import { motion } from "motion/react";
import {
	contactEmail,
	contactHref,
} from "#/features/contact/data/contact-links";
import { useTranslation } from "#/i18n/locale-context";
import { cn } from "#/lib/utils";

export function ContactActions() {
	const { t } = useTranslation("contact");

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
				{t("emailLabel")}
			</a>

			<p className="text-xs text-fg-muted">
				{t("copyEmail")}:{" "}
				<span className="font-mono text-fg-secondary">{contactEmail}</span>
			</p>
		</motion.div>
	);
}
