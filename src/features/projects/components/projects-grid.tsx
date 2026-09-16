import { motion } from "motion/react";
import { useState } from "react";
import { projects } from "#/features/projects/data/projects";
import { useTranslation } from "#/i18n/locale-context";
import { cn } from "#/lib/utils";
import { ProjectCard } from "./project-card";

const EXCLUDED_IDS = new Set([
	"onec-platform",
	"buenos-cakes",
	"velan",
	"velan-mobile",
]);

const experimentalProjects = projects.filter(
	(project) => !EXCLUDED_IDS.has(project.id),
);

const categories = ["Todos", "Projeto Pessoal", "Faculdade"] as const;

type Category = (typeof categories)[number];

const categoryLabelKey: Record<Category, string> = {
	Todos: "filters.all",
	"Projeto Pessoal": "filters.personalProject",
	Faculdade: "filters.coursework",
};

export function ProjectsGrid() {
	const { t } = useTranslation("projects");
	const [active, setActive] = useState<Category>("Todos");

	const filtered =
		active === "Todos"
			? experimentalProjects
			: experimentalProjects.filter((p) => p.category === active);

	return (
		<section className="border-t border-border py-16 md:py-20">
			<div className="mx-auto max-w-280 px-6">
				<span className="mb-6 block font-mono text-xs font-semibold uppercase tracking-[0.18em] text-fg-muted">
					{t("experimentsHeading")}
				</span>

				<motion.div
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
					className="mb-8 flex flex-wrap gap-2"
				>
					{categories.map((cat) => (
						<button
							key={cat}
							type="button"
							onClick={() => setActive(cat)}
							className={cn(
								"rounded-md px-3.5 py-1.5 text-xs font-medium transition-colors duration-150",
								active === cat
									? "border border-(--primary-border) bg-(--primary-soft) text-primary-hover"
									: "border border-border text-fg-secondary hover:border-border-strong hover:text-fg",
							)}
						>
							{t(categoryLabelKey[cat])}
						</button>
					))}

					<span className="ml-auto flex items-center font-mono text-xs text-fg-muted">
						{filtered.length}
					</span>
				</motion.div>

				<motion.div
					key={active}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.2, ease: "easeOut" }}
					className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
				>
					{filtered.map((project, index) => (
						<ProjectCard key={project.id} project={project} index={index} />
					))}
				</motion.div>

				{filtered.length === 0 && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="flex flex-col items-center gap-3 py-24 text-center"
					>
						<p className="text-sm text-fg-muted">{t("emptyState")}</p>
					</motion.div>
				)}
			</div>
		</section>
	);
}
