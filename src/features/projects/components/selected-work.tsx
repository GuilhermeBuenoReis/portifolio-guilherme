import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "#/features/projects/data/projects";
import { useTranslation } from "#/i18n/locale-context";
import { cn } from "#/lib/utils";

type SelectedEntry = {
	key: "buenosCakes" | "onec" | "velan";
	projectId: string;
};

const SELECTED_ENTRIES: SelectedEntry[] = [
	{ key: "buenosCakes", projectId: "buenos-cakes" },
	{ key: "onec", projectId: "onec-platform" },
	{ key: "velan", projectId: "velan" },
];

export function SelectedWork() {
	const { t, tRaw } = useTranslation("projects");

	return (
		<section className="border-t border-border py-16 md:py-20">
			<div className="mx-auto max-w-280 px-6">
				<span className="mb-6 block font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary-hover">
					{t("selectedLabel")}
				</span>
				<div className="grid grid-cols-1 gap-5 md:grid-cols-3">
					{SELECTED_ENTRIES.map((entry, index) => {
						const content = tRaw<{
							title: string;
							description: string;
							role: string;
							period: string;
						}>(`selected.${entry.key}`);
						const repoUrl = projects.find(
							(project) => project.id === entry.projectId,
						)?.repos[0]?.url;

						return (
							<motion.div
								key={entry.key}
								initial={{ opacity: 0, y: 16 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-40px" }}
								transition={{
									duration: 0.4,
									ease: "easeOut",
									delay: index * 0.06,
								}}
								className={cn(
									"flex flex-col gap-3 rounded-xl border border-border bg-surface p-6",
									"[box-shadow:var(--shadow-card)]",
								)}
							>
								<h3 className="text-base font-semibold text-fg">
									{content.title}
								</h3>
								<p className="text-sm leading-relaxed text-fg-secondary">
									{content.description}
								</p>
								<div className="mt-auto flex flex-col gap-1 pt-2">
									<span className="text-xs font-medium text-fg-muted">
										{content.role}
									</span>
									<span className="text-xs text-fg-muted">
										{content.period}
									</span>
								</div>
								{repoUrl && (
									<a
										href={repoUrl}
										target="_blank"
										rel="noreferrer"
										className={cn(
											"mt-2 inline-flex w-fit items-center gap-1.5 text-xs font-medium",
											"text-fg-secondary transition-colors duration-150 hover:text-primary-hover",
										)}
									>
										<ExternalLink size={13} />
										GitHub
									</a>
								)}
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
