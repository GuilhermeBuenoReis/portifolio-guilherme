import { motion } from "motion/react";
import { useTranslation } from "#/i18n/locale-context";
import { cn } from "#/lib/utils";

type FocusItem = {
	tag: string;
	title: string;
	description: string;
};

export function AboutFocusCards() {
	const { t, tRaw } = useTranslation("about");
	const items = tRaw<FocusItem[]>("focus.items");

	return (
		<section className="pb-16 md:pb-20">
			<div className="mx-auto max-w-280 px-6">
				<span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary-hover">
					{t("focus.label")}
				</span>
				<div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{items.map((item, index) => (
						<motion.article
							key={item.tag}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-60px" }}
							transition={{
								duration: 0.45,
								ease: "easeOut",
								delay: index * 0.08,
							}}
							className={cn(
								"flex flex-col gap-3 rounded-xl border border-border bg-surface p-7",
								"transition-colors duration-200 hover:border-(--primary-border)",
								"[box-shadow:var(--shadow-card)]",
							)}
						>
							<span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary-hover">
								{item.tag}
							</span>
							<h3 className="text-lg font-bold tracking-tight text-fg">
								{item.title}
							</h3>
							<p className="text-sm leading-relaxed text-fg-secondary">
								{item.description}
							</p>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
}
