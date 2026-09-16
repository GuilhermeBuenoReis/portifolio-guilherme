export type CaseStudySection = {
	heading: string;
	body: string;
};

export type CaseStudyStackSection = {
	heading: string;
	intro: string;
	technologies: string[];
};

export type CaseStudyContent = {
	title: string;
	description: string;
	role: string;
	status: string;
	caseStudy: {
		context: CaseStudySection;
		problem: CaseStudySection;
		decisions: CaseStudySection;
		stack: CaseStudyStackSection;
		state: CaseStudySection;
	};
};
