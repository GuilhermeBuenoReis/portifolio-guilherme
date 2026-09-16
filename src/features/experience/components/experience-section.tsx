import { motion } from "motion/react";
import type { Experience } from "#/features/experience/types/experience";
import { useTranslation } from "#/i18n/locale-context";
import { cn } from "#/lib/utils";
import { TimelineItem } from "./timeline-item";

export function ExperienceSection() {
	const { t, tRaw } = useTranslation("experience");
	const items = tRaw<Experience[]>("items").map((item) => ({
		...item,
		id: item.company,
	}));

	return (
		<motion.section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{ duration: 0.5 }}
			className="py-20 md:py-28"
		>
			<div className="mx-auto max-w-280 px-6">
				<div className="mb-14 flex flex-col items-center gap-3 text-center">
					<span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-hover">
						{t("hero.eyebrow")}
					</span>
					<h2 className="text-3xl font-bold tracking-tight text-fg md:text-4xl">
						{t("hero.headline")}
					</h2>
				</div>

				<div className="relative">
					<div
						className={cn(
							"absolute left-1/2 top-0 bottom-0 hidden md:block",
							"w-px -translate-x-1/2",
							"bg-linear-to-b from-transparent via-primary to-transparent",
						)}
					/>

					<div className="flex flex-col gap-12 md:gap-16">
						{items.map((experience, index) => (
							<TimelineItem
								key={experience.id}
								experience={experience}
								index={index}
								isLast={index === items.length - 1}
							/>
						))}
					</div>
				</div>
			</div>
		</motion.section>
	);
}
