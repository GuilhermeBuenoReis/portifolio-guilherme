import { motion } from "motion/react";
import { projects } from "#/features/projects/data/projects";
import { ProjectCard } from "./project-card";

const featuredProjects = projects.filter((project) => project.featured);

export function FeaturedProjectsSection() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{ duration: 0.5 }}
			className="py-20 md:py-28"
		>
			<div className="mx-auto max-w-280 px-6">
				<div className="mb-12 flex flex-col gap-3">
					<span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-hover">
						Trabalho selecionado
					</span>
					<h2 className="text-3xl font-bold tracking-tight text-fg md:text-4xl">
						Produtos e sistemas que ajudei a construir
					</h2>
					<p className="max-w-2xl text-[1.0625rem] leading-relaxed text-fg-secondary">
						Uma seleção menor e mais profunda de produtos próprios e trabalhos
						reais, com contexto sobre o problema e minha responsabilidade.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					{featuredProjects.map((project, index) => (
						<ProjectCard
							key={project.id}
							project={project}
							index={index}
							compact
						/>
					))}
				</div>
			</div>
		</motion.section>
	);
}
