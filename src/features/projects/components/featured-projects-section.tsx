import { motion } from "motion/react";
import { LocalizedLink } from "#/components/localized-link";
import { useTranslation } from "#/i18n/locale-context";
import { cn } from "#/lib/utils";

const TENIRA_TECH = [
	"React",
	"TypeScript",
	"Node",
	"PostgreSQL",
	"Supabase",
	"Vercel",
] as const;

const ANVERO_TECH = [
	"Supabase",
	"PostgreSQL",
	"WhatsApp Cloud API",
	"Edge Functions",
	"TypeScript",
] as const;

const cardClassName = cn(
	"flex flex-col gap-4 rounded-xl border border-border bg-surface p-7",
	"transition-colors duration-200 hover:border-(--primary-border)",
	"[box-shadow:var(--shadow-card)]",
);

const techTagClassName = cn(
	"rounded border border-border bg-surface-elevated px-2 py-0.5",
	"text-xs font-medium text-fg-muted",
);

const primaryLinkClassName = cn(
	"inline-flex items-center text-sm font-semibold text-primary-hover",
	"underline-offset-4 transition-colors duration-150 hover:underline",
);

export function FeaturedProjectsSection() {
	const { t } = useTranslation("home");
	const { t: tCommon } = useTranslation("common");

	return (
		<motion.section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{ duration: 0.5 }}
			className="py-20 md:py-24"
		>
			<div className="mx-auto max-w-280 px-6">
				<div className="mb-10 flex flex-col gap-3">
					<span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary-hover">
						{t("building.label")}
					</span>
					<h2 className="text-3xl font-bold tracking-tight text-fg md:text-4xl">
						{t("building.headline")}
					</h2>
				</div>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					<article className={cardClassName}>
						<div className="flex flex-col gap-2">
							<h3 className="text-xl font-bold tracking-tight text-fg">
								Tenira
							</h3>
							<p className="text-sm font-medium text-primary-hover">
								{t("building.tenira.tagline")}
							</p>
						</div>

						<p className="text-sm leading-relaxed text-fg-secondary">
							{t("building.tenira.description")}
						</p>

						<div className="flex flex-col gap-1 text-sm">
							<span className="font-medium text-fg">
								{t("building.tenira.role")}
							</span>
							<span className="text-fg-muted">
								{t("building.tenira.status")}
							</span>
						</div>

						<div className="mt-auto flex flex-wrap gap-1.5 pt-2">
							{TENIRA_TECH.map((tech) => (
								<span key={tech} className={techTagClassName}>
									{tech}
								</span>
							))}
						</div>

						<div className="flex flex-wrap gap-x-5 gap-y-1 pt-1">
							<a
								href="https://www.tenira.com.br"
								target="_blank"
								rel="noreferrer"
								className={primaryLinkClassName}
							>
								{tCommon("cta.viewProject")}
							</a>
							<LocalizedLink
								to="/{-$locale}/projects/$slug"
								params={{ slug: "tenira" }}
								className={primaryLinkClassName}
							>
								{tCommon("cta.viewCase")}
							</LocalizedLink>
						</div>
					</article>

					<article className={cardClassName}>
						<div className="flex flex-col gap-2">
							<h3 className="text-xl font-bold tracking-tight text-fg">
								Anvero
							</h3>
						</div>

						<p className="text-sm leading-relaxed text-fg-secondary">
							{t("building.anvero.description")}
						</p>

						<div className="flex flex-col gap-1 text-sm">
							<span className="font-medium text-fg">
								{t("building.anvero.role")}
							</span>
							<span className="text-fg-muted">
								{t("building.anvero.status")}
							</span>
						</div>

						<div className="mt-auto flex flex-wrap gap-1.5 pt-2">
							{ANVERO_TECH.map((tech) => (
								<span key={tech} className={techTagClassName}>
									{tech}
								</span>
							))}
						</div>

						<div className="flex flex-wrap gap-x-5 gap-y-1 pt-1">
							<LocalizedLink
								to="/{-$locale}/projects/$slug"
								params={{ slug: "anvero" }}
								className={primaryLinkClassName}
							>
								{tCommon("cta.viewCase")}
							</LocalizedLink>
						</div>
					</article>
				</div>
			</div>
		</motion.section>
	);
}
