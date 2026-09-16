import { Mail } from "lucide-react";
import { contactEmail } from "#/features/contact/data/contact-links";
import type { Experience } from "#/features/experience/types/experience";
import { useTranslation } from "#/i18n/locale-context";
import { cn } from "#/lib/utils";

type SkillGroup = { label: string; items: string };

export function ResumePage() {
	const { t, tRaw } = useTranslation("resume");
	const { t: tCommon } = useTranslation("common");
	const experience = useTranslation("experience");

	const items = experience.tRaw<Experience[]>("items");
	const education = experience.tRaw<{
		title: string;
		degree: string;
		institution: string;
		location: string;
		period: string;
	}>("education");
	const certifications = experience.tRaw<{
		title: string;
		subtitle: string;
		items: string[];
	}>("certifications");

	const skillGroups = tRaw<Record<string, SkillGroup>>("skills");

	return (
		<article className="mx-auto max-w-3xl px-6 py-16 md:py-24 print:max-w-none print:px-0 print:py-8">
			<div className="mb-10 flex flex-col gap-3 print:hidden">
				<h1 className="text-3xl font-bold tracking-tight text-fg md:text-4xl">
					{t("heading")}
				</h1>
				<p className="text-sm text-fg-secondary">{t("downloadHint")}</p>
				<button
					type="button"
					onClick={() => window.print()}
					className={cn(
						"inline-flex w-fit items-center rounded-lg",
						"bg-primary px-5 py-2.5 text-sm font-semibold text-white",
						"transition-colors duration-150 hover:bg-primary-hover",
					)}
				>
					{tCommon("cta.downloadPdf")}
				</button>
			</div>

			<header className="mb-8 flex flex-col gap-1 border-b border-border pb-6 print:border-black">
				<h2 className="text-2xl font-bold text-fg">Guilherme Reis</h2>
				<div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-fg-secondary">
					<span className="inline-flex items-center gap-1.5">
						<Mail size={14} aria-hidden="true" />
						{contactEmail}
					</span>
					<span>Guarapuava - PR, Brasil</span>
				</div>
			</header>

			<Section title={t("sections.summary")}>
				<p className="text-sm leading-relaxed text-fg-secondary">
					{t("summary")}
				</p>
			</Section>

			<Section title={t("sections.skills")}>
				<div className="flex flex-col gap-2">
					{Object.values(skillGroups).map((group) => (
						<p key={group.label} className="text-sm text-fg-secondary">
							<span className="font-semibold text-fg">{group.label}: </span>
							{group.items}
						</p>
					))}
				</div>
			</Section>

			<Section title={t("sections.experience")}>
				<div className="flex flex-col gap-6">
					{items.map((item) => (
						<div key={`${item.company}-${item.period}`}>
							<div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
								<span className="text-sm font-semibold text-fg">
									{item.role} · {item.company}
								</span>
								<span className="font-mono text-xs text-fg-muted">
									{item.period}
								</span>
							</div>
							<p className="mt-1 text-sm leading-relaxed text-fg-secondary">
								{item.description}
							</p>
						</div>
					))}
				</div>
			</Section>

			<Section title={t("sections.education")}>
				<div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
					<span className="text-sm font-semibold text-fg">
						{education.degree} · {education.institution}
					</span>
					<span className="font-mono text-xs text-fg-muted">
						{education.period}
					</span>
				</div>
				<p className="mt-1 text-sm text-fg-secondary">{education.location}</p>
			</Section>

			<Section title={t("sections.certifications")}>
				<p className="mb-2 text-sm text-fg-secondary">
					{certifications.subtitle}
				</p>
				<ul className="flex flex-wrap gap-2">
					{certifications.items.map((cert) => (
						<li
							key={cert}
							className={cn(
								"rounded border border-border-strong bg-surface-elevated",
								"px-2.5 py-1 text-xs font-medium text-fg-muted",
							)}
						>
							{cert}
						</li>
					))}
				</ul>
			</Section>
		</article>
	);
}

function Section({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<section className="mb-8">
			<h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary-hover print:text-black">
				{title}
			</h3>
			{children}
		</section>
	);
}
