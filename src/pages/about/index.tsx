import { AboutFocusCards } from "#/features/about/components/about-focus-cards";
import { AboutHero } from "#/features/about/components/about-hero";
import { AboutStackSection } from "#/features/about/components/about-stack-section";
import { AboutStorySection } from "#/features/about/components/about-story-section";

export function AboutPage() {
	return (
		<>
			<AboutHero />
			<AboutStorySection />
			<AboutFocusCards />
			<AboutStackSection />
		</>
	);
}
