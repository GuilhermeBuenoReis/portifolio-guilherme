import { motion } from "motion/react";
import { useTranslation } from "#/i18n/locale-context";

type ExperienceItem = {
	company: string;
	role: string;
	period: string;
	description: string;
};

export function ProfessionalTrajectorySection() {
	const { t, tRaw } = useTranslation("experience");
	const items = tRaw<ExperienceItem[]>("items");

	return (
		<section className="py-20 md:py-28">
			<div className="mx-auto max-w-280 px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="flex flex-col gap-5"
				>
					<span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary-hover">
						{t("hero.eyebrow")}
					</span>
					<h1 className="text-4xl font-bold tracking-tight text-fg md:text-5xl">
						{t("hero.headline")}
					</h1>
				</motion.div>

				<div className="mt-16 flex flex-col">
					{items.map((item, index) => (
						<motion.article
							key={item.company}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-60px" }}
							transition={{
								duration: 0.4,
								ease: "easeOut",
								delay: index * 0.06,
							}}
							className="flex flex-col gap-3 border-l-2 border-border py-7 pl-6 transition-colors duration-200 hover:border-(--primary-border) md:pl-8"
						>
							<div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
								<h2 className="text-lg font-semibold tracking-tight text-fg">
									{item.role}{" "}
									<span className="text-fg-secondary">— {item.company}</span>
								</h2>
								<span className="font-mono text-xs uppercase tracking-wider text-fg-muted">
									{item.period}
								</span>
							</div>
							<p className="max-w-3xl text-sm leading-relaxed text-fg-secondary">
								{item.description}
							</p>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
}
