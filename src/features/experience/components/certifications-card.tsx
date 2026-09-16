import { Award } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "#/i18n/locale-context";
import { cn } from "#/lib/utils";

export function CertificationsCard() {
	const { t, tRaw } = useTranslation("experience");
	const items = tRaw<string[]>("certifications.items");

	return (
		<motion.div
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-60px" }}
			transition={{ duration: 0.4, ease: "easeOut", delay: 0.08 }}
			className={cn(
				"flex flex-col gap-6 rounded-xl p-7",
				"border border-border bg-surface",
				"[box-shadow:var(--shadow-card)]",
			)}
		>
			<div className="flex items-center gap-2.5">
				<Award size={20} className="text-primary" />
				<div className="flex flex-col">
					<h2 className="text-xl font-semibold tracking-tight text-fg">
						{t("certifications.title")}
					</h2>
					<span className="text-sm text-fg-secondary">
						{t("certifications.subtitle")}
					</span>
				</div>
			</div>

			<ul className="flex flex-wrap gap-2">
				{items.map((item) => (
					<li
						key={item}
						className={cn(
							"rounded-full border border-border-strong bg-surface-elevated",
							"px-3 py-1.5 text-xs font-medium text-fg",
						)}
					>
						{item}
					</li>
				))}
			</ul>
		</motion.div>
	);
}
