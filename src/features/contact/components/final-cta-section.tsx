import { motion } from "motion/react";
import { LocalizedLink } from "#/components/localized-link";
import { useTranslation } from "#/i18n/locale-context";
import { cn } from "#/lib/utils";

const GITHUB_URL = "https://github.com/GuilhermeBuenoReis";

export function FinalCtaSection() {
	const { t } = useTranslation("home");
	const { t: tCommon } = useTranslation("common");

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
						{t("finalCta.headline")}
					</h2>
					<p className="mx-auto max-w-xl text-sm leading-relaxed text-fg-secondary md:text-base">
						{t("finalCta.description")}
					</p>
				</div>

				<div className="flex flex-wrap items-center justify-center gap-4">
					<LocalizedLink
						to="/{-$locale}/contact"
						className={cn(
							"inline-flex items-center rounded-lg",
							"border border-(--primary-border) bg-(--primary-soft)",
							"px-6 py-2.5 text-sm font-medium text-primary-hover",
							"transition-colors duration-150",
							"hover:border-primary hover:bg-[rgba(139,92,246,0.22)]",
						)}
					>
						{tCommon("cta.contact")}
					</LocalizedLink>

					<a
						href={GITHUB_URL}
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
						{tCommon("cta.viewGithub")}
					</a>
				</div>
			</div>
		</motion.section>
	);
}
