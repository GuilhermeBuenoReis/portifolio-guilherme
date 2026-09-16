import { Download, Mail } from "lucide-react";
import { motion } from "motion/react";
import { LocalizedLink } from "#/components/localized-link";
import { contactHref } from "#/features/contact/data/contact-links";
import { useTranslation } from "#/i18n/locale-context";
import { cn } from "#/lib/utils";

export function ProfileCtaSection() {
	const { t } = useTranslation("experience");

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
							{t("cta.headline")}
						</h2>
						<p className="max-w-md text-sm leading-relaxed text-fg-secondary">
							{t("cta.description")}
						</p>
					</div>

					<div className="flex flex-col items-center gap-3 sm:flex-row">
						<LocalizedLink
							to="/{-$locale}/resume"
							className={cn(
								"inline-flex items-center gap-2 rounded-lg px-5 py-2.5",
								"bg-primary text-sm font-semibold text-white shadow-sm shadow-primary/25",
								"transition-colors duration-150 hover:bg-primary-hover",
							)}
						>
							<Download size={16} />
							{t("cta.downloadResume")}
						</LocalizedLink>
						<a
							href={contactHref}
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
							{t("cta.sendEmail")}
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
