import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import type { Project } from "#/features/projects/types/project";
import { cn } from "#/lib/utils";

type Props = {
	project: Project;
	index: number;
	compact?: boolean;
};

export function ProjectCard({ project, index, compact = false }: Props) {
	return (
		<motion.article
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.06 }}
			className={cn(
				"group flex flex-col overflow-hidden rounded-xl border border-border bg-surface",
				"transition-all duration-200 hover:-translate-y-1 hover:border-(--primary-border)",
				"[box-shadow:var(--shadow-card)]",
			)}
		>
			<div
				className={cn(
					"relative h-44 w-full overflow-hidden",
					project.bannerGradient,
				)}
			>
				<div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/5" />
				<div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/4" />
				<div className="absolute inset-0 flex items-center justify-center">
					<span className="text-[clamp(2.25rem,7vw,4rem)] font-black tracking-[-0.06em] text-white/90">
						{project.name}
					</span>
				</div>
				<div className="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-transparent" />
				<span className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-black/45 px-2.5 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
					{project.status}
				</span>
			</div>

			<div className="flex flex-1 flex-col gap-4 p-6">
				<div className="flex items-start justify-between gap-4">
					<div>
						<span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-hover">
							{project.category}
						</span>
						<h3 className="mt-1 text-xl font-semibold tracking-tight text-fg">
							{project.name}
						</h3>
					</div>
				</div>

				<p className="text-sm leading-relaxed text-fg-secondary">
					{project.description}
				</p>

				{!compact && (
					<div className="grid gap-3 border-t border-border pt-4">
						<div>
							<span className="text-xs font-semibold uppercase tracking-[0.12em] text-fg-muted">
								Problema
							</span>
							<p className="mt-1 text-sm leading-relaxed text-fg-secondary">
								{project.problem}
							</p>
						</div>
						<div>
							<span className="text-xs font-semibold uppercase tracking-[0.12em] text-fg-muted">
								Meu papel
							</span>
							<p className="mt-1 text-sm leading-relaxed text-fg-secondary">
								{project.role}
							</p>
						</div>
					</div>
				)}

				<div className="flex flex-wrap gap-1.5">
					{project.tags.map((tag) => (
						<span
							key={tag}
							className="rounded border border-border-strong bg-surface-elevated px-2 py-0.5 text-xs font-medium text-fg-muted"
						>
							{tag}
						</span>
					))}
				</div>

				<div className="mt-auto flex flex-wrap gap-2 pt-2">
					{project.repos.map((repo) => {
						const Icon = repo.kind === "website" ? ExternalLink : Github;

						return (
							<a
								key={repo.url}
								href={repo.url}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-md border border-border-strong px-4 py-2 text-sm font-medium text-fg transition-colors duration-150 hover:border-(--primary-border) hover:text-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--primary-border)"
							>
								<Icon className="h-4 w-4" aria-hidden="true" />
								{repo.label}
							</a>
						);
					})}
				</div>
			</div>
		</motion.article>
	);
}
