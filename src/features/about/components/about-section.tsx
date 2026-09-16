import { motion } from "motion/react";
import { LocalizedLink } from "#/components/localized-link";
import { useTranslation } from "#/i18n/locale-context";
import { cn } from "#/lib/utils";

export function AboutSection() {
	const { t } = useTranslation("home");

	return (
		<motion.section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{ duration: 0.5 }}
			className="py-20 md:py-28"
		>
			<div className="mx-auto max-w-280 px-6">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4, ease: "easeOut" }}
					className="mx-auto flex max-w-2xl flex-col gap-6 text-center"
				>
					<span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary-hover">
						{t("aboutPreview.label")}
					</span>
					<h2 className="text-3xl font-bold tracking-tight text-fg md:text-4xl">
						{t("aboutPreview.headline")}
					</h2>
					<p className="text-sm leading-relaxed text-fg-secondary md:text-base">
						{t("aboutPreview.excerpt")}
					</p>
					<LocalizedLink
						to="/{-$locale}/about"
						className={cn(
							"mx-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary-hover",
							"transition-colors duration-150 hover:text-primary",
						)}
					>
						{t("aboutPreview.readMore")}
						<span aria-hidden="true">→</span>
					</LocalizedLink>
				</motion.div>
			</div>
		</motion.section>
	);
}
