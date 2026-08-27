import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "#/features/projects/data/projects";
import { ProjectCard } from "./project-card";

const selectedProjects = projects.filter(
	(project) => project.featured || project.id === "velan",
);
const archiveProjects = projects.filter(
	(project) => !selectedProjects.some((selected) => selected.id === project.id),
);

export function ProjectsGrid() {
	return (
		<section className="py-16 md:py-24">
			<div className="mx-auto max-w-280 px-6">
				<div className="mb-10 flex flex-col gap-3">
					<span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-hover">
						Produtos selecionados
					</span>
					<h2 className="text-3xl font-bold tracking-tight text-fg md:text-4xl">
						Problema, responsabilidade e execução
					</h2>
					<p className="max-w-2xl text-sm leading-relaxed text-fg-secondary md:text-base">
						Cada trabalho abaixo destaca o contexto e meu papel. Tecnologias são
						parte da solução, não a história inteira.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					{selectedProjects.map((project, index) => (
						<ProjectCard key={project.id} project={project} index={index} />
					))}
				</div>

				<div className="mt-20 border-t border-border pt-12">
					<div className="mb-7 flex flex-col gap-2">
						<span className="text-xs font-semibold uppercase tracking-[0.18em] text-fg-muted">
							Arquivo
						</span>
						<h2 className="text-2xl font-bold tracking-tight text-fg">
							Experimentos e estudos
						</h2>
						<p className="max-w-2xl text-sm leading-relaxed text-fg-secondary">
							Projetos usados para explorar domínios, tecnologias e decisões de
							engenharia sem competir com os produtos principais.
						</p>
					</div>

					<div className="grid gap-3 sm:grid-cols-2">
						{archiveProjects.map((project, index) => (
							<motion.article
								key={project.id}
								initial={{ opacity: 0, y: 12 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.3, delay: index * 0.04 }}
								className="flex items-start justify-between gap-4 rounded-xl border border-border bg-surface p-5"
							>
								<div>
									<span className="text-xs font-medium text-primary-hover">
										{project.status}
									</span>
									<h3 className="mt-1 text-base font-semibold text-fg">
										{project.name}
									</h3>
									<p className="mt-2 text-sm leading-relaxed text-fg-secondary">
										{project.description}
									</p>
								</div>
								<a
									href={project.repos[0]?.url}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={`Abrir repositório de ${project.name}`}
									className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border-strong text-fg-secondary transition-colors hover:border-(--primary-border) hover:text-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--primary-border)"
								>
									<ExternalLink size={16} aria-hidden="true" />
								</a>
							</motion.article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
