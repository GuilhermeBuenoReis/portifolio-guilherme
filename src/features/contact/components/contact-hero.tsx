import { motion } from "motion/react";
import { useTranslation } from "#/i18n/locale-context";

export function ContactHero() {
	const { t } = useTranslation("contact");

	return (
		<section className="border-b border-border py-20 md:py-28">
			<div className="mx-auto max-w-280 px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="flex flex-col gap-6"
				>
					<span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary-hover">
						{t("hero.eyebrow")}
					</span>
					<h1 className="max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-fg">
						{t("hero.headline")}
					</h1>
					<p className="max-w-xl text-[1.0625rem] leading-relaxed text-fg-secondary">
						{t("hero.subheadline")}
					</p>
				</motion.div>
			</div>
		</section>
	);
}
