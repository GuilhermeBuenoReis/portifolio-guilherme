import { FeaturedProducts } from "#/features/projects/components/featured-products";
import { ProjectsGrid } from "#/features/projects/components/projects-grid";
import { ProjectsHero } from "#/features/projects/components/projects-hero";
import { SelectedWork } from "#/features/projects/components/selected-work";

export function ProjectsPage() {
	return (
		<>
			<ProjectsHero />
			<FeaturedProducts />
			<SelectedWork />
			<ProjectsGrid />
		</>
	);
}
