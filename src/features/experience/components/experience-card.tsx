import { motion } from "motion/react";
import type { Experience } from "#/features/experience/types/experience";
import { cn } from "#/lib/utils";

type Props = {
	experience: Experience;
	index: number;
	side: "left" | "right";
};

export function ExperienceCard({ experience, index, side }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.07 }}
			className={cn(
				"group relative w-full md:w-[calc(50%-2rem)]",
				side === "left" ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8",
			)}
		>
			<div
				className={cn(
					"rounded-xl border border-border bg-surface p-6",
					"transition-all duration-200",
					"hover:border-(--primary-border)",
					"[box-shadow:var(--shadow-card)]",
				)}
			>
				<div className="mb-1 text-xs font-medium uppercase tracking-widest text-primary-hover">
					{experience.period}
				</div>
				<h3 className="mb-0.5 text-[1.0625rem] font-semibold text-fg">
					{experience.company}
				</h3>
				<p className="mb-3 text-sm font-medium text-fg-secondary">
					{experience.role}
				</p>
				<p className="mb-4 text-sm leading-relaxed text-fg-secondary">
					{experience.description}
				</p>
				{experience.stack && experience.stack.length > 0 && (
					<div className="flex flex-wrap gap-1.5">
						{experience.stack.map((tech) => (
							<span
								key={tech}
								className={cn(
									"rounded border border-border-strong",
									"bg-surface-elevated px-2 py-0.5",
									"text-xs font-medium text-fg-muted",
								)}
							>
								{tech}
							</span>
						))}
					</div>
				)}
			</div>
		</motion.div>
	);
}
