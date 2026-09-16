import type { CaseStudyContent } from "#/features/projects/types/case-study";
import { cn } from "#/lib/utils";

type Props = {
	title: string;
	content: CaseStudyContent;
	liveUrl?: string;
	viewProductLabel?: string;
};

export function ProjectCaseStudy({
	title,
	content,
	liveUrl,
	viewProductLabel,
}: Props) {
	const { context, problem, decisions, stack, state } = content.caseStudy;

	return (
		<article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
			<header className="mb-12 flex flex-col gap-4 border-b border-border pb-10">
				<span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary-hover">
					{content.status}
				</span>
				<h1 className="text-3xl font-bold tracking-tight text-fg md:text-5xl">
					{title}
				</h1>
				<p className="max-w-xl text-base leading-relaxed text-fg-secondary">
					{content.description}
				</p>
				<div className="flex flex-wrap items-center gap-4 pt-2">
					<span className="text-sm font-medium text-fg-muted">
						{content.role}
					</span>
					{liveUrl && viewProductLabel && (
						<a
							href={liveUrl}
							target="_blank"
							rel="noreferrer"
							className={cn(
								"inline-flex items-center rounded-lg",
								"border border-(--primary-border) bg-(--primary-soft)",
								"px-4 py-2 text-sm font-medium text-primary-hover",
								"transition-colors duration-150 hover:border-primary",
							)}
						>
							{viewProductLabel}
						</a>
					)}
				</div>
			</header>

			<div className="flex flex-col gap-12">
				<Section heading={context.heading}>
					<p className="text-sm leading-relaxed text-fg-secondary">
						{context.body}
					</p>
				</Section>

				<Section heading={problem.heading}>
					<p className="text-sm leading-relaxed text-fg-secondary">
						{problem.body}
					</p>
				</Section>

				<Section heading={decisions.heading}>
					<p className="text-sm leading-relaxed text-fg-secondary">
						{decisions.body}
					</p>
				</Section>

				<Section heading={stack.heading}>
					<p className="mb-4 text-sm leading-relaxed text-fg-secondary">
						{stack.intro}
					</p>
					<ul className="flex flex-wrap gap-2">
						{stack.technologies.map((tech) => (
							<li
								key={tech}
								className={cn(
									"rounded border border-border-strong bg-surface-elevated",
									"px-2.5 py-1 text-xs font-medium text-fg-muted",
								)}
							>
								{tech}
							</li>
						))}
					</ul>
				</Section>

				<Section heading={state.heading}>
					<p className="text-sm leading-relaxed text-fg-secondary">
						{state.body}
					</p>
				</Section>
			</div>
		</article>
	);
}

function Section({
	heading,
	children,
}: {
	heading: string;
	children: React.ReactNode;
}) {
	return (
		<section>
			<h2 className="mb-3 text-lg font-bold tracking-tight text-fg">
				{heading}
			</h2>
			{children}
		</section>
	);
}
