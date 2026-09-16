import { motion } from "motion/react";
import { useTranslation } from "#/i18n/locale-context";
import { cn } from "#/lib/utils";

export function AboutStackSection() {
	const { t } = useTranslation("about");

	const groups = [
		{
			label: t("stack.core.label"),
			items: t("stack.core.items"),
		},
		{
			label: t("stack.frontend.label"),
			items: t("stack.frontend.items"),
		},
		{
			label: t("stack.engineering.label"),
			items: t("stack.engineering.items"),
		},
	];

	return (
		<section className="pb-24 md:pb-28">
			<div className="mx-auto max-w-280 px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-60px" }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className={cn(
						"flex flex-col gap-8 rounded-xl border border-border bg-surface",
						"px-6 py-12 md:px-12 md:py-14",
						"[box-shadow:var(--shadow-card)]",
					)}
				>
					<h2 className="text-2xl font-bold tracking-tight text-fg md:text-3xl">
						{t("stack.title")}
					</h2>
					<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
						{groups.map((group) => (
							<div key={group.label} className="flex flex-col gap-2">
								<span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary-hover">
									{group.label}
								</span>
								<p className="text-sm leading-relaxed text-fg-secondary">
									{group.items}
								</p>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
