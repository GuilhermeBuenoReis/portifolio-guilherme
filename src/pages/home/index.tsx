import { lazy, Suspense } from "react";
import { HeroSection } from "#/features/portfolio/components/hero-section";

const FeaturedProjectsSection = lazy(() =>
	import("#/features/projects/components/featured-projects-section").then(
		(module) => ({ default: module.FeaturedProjectsSection }),
	),
);

const ExperienceSection = lazy(() =>
	import("#/features/experience/components/experience-section").then(
		(module) => ({ default: module.ExperienceSection }),
	),
);

const AboutSection = lazy(() =>
	import("#/features/about/components/about-section").then((module) => ({
		default: module.AboutSection,
	})),
);

const FinalCtaSection = lazy(() =>
	import("#/features/contact/components/final-cta-section").then((module) => ({
		default: module.FinalCtaSection,
	})),
);

export function HomePage() {
	return (
		<>
			<HeroSection />
			<Suspense fallback={null}>
				<FeaturedProjectsSection />
				<ExperienceSection />
				<AboutSection />
				<FinalCtaSection />
			</Suspense>
		</>
	);
}
