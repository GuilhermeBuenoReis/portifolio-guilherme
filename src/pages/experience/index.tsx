import { EducationAndCertificationsSection } from "#/features/experience/components/education-and-certifications-section";
import { ProfessionalTrajectorySection } from "#/features/experience/components/professional-trajectory-section";
import { ProfileCtaSection } from "#/features/experience/components/profile-cta-section";

export function ExperiencePage() {
	return (
		<>
			<ProfessionalTrajectorySection />
			<EducationAndCertificationsSection />
			<ProfileCtaSection />
		</>
	);
}
