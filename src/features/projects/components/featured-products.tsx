import { motion } from "motion/react";
import { LocalizedLink } from "#/components/localized-link";
import { useTranslation } from "#/i18n/locale-context";
import { cn } from "#/lib/utils";

const TENIRA_STACK = [
	"React",
	"TypeScript",
	"Node.js",
	"PostgreSQL",
	"Supabase",
	"Vercel",
];

const ANVERO_STACK = [
	"Supabase",
	"PostgreSQL",
	"WhatsApp Cloud API",
	"Edge Functions",
	"TypeScript",
];

type ProductCardProps = {
	slug: "tenira" | "anvero";
	title: string;
	tagline?: string;
	description: string;
	role: string;
	status: string;
	stack: string[];
	liveUrl?: string;
	viewCaseLabel: string;
	viewProductLabel?: string;
	delay?: number;
};

function ProductCard({
	slug,
	title,
	tagline,
	description,
	role,
	status,
	stack,
	liveUrl,
	viewCaseLabel,
	viewProductLabel,
	delay = 0,
}: ProductCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-60px" }}
			transition={{ duration: 0.45, ease: "easeOut", delay }}
			className={cn(
				"flex flex-col gap-5 rounded-xl border border-border bg-surface p-8",
				"[box-shadow:var(--shadow-card)]",
			)}
		>
			<div className="flex flex-col gap-3">
				<div className="flex items-center gap-2">
					<span className="h-2 w-2 rounded-full bg-emerald-400" />
					<span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-fg-muted">
						{status}
					</span>
				</div>
				<h3 className="text-2xl font-bold tracking-tight text-fg">{title}</h3>
				<p className="text-sm leading-relaxed text-fg-secondary">
					{tagline ?? description}
				</p>
				<span className="text-xs font-medium text-fg-muted">{role}</span>
			</div>

			<ul className="flex flex-wrap gap-1.5">
				{stack.map((tech) => (
					<li
						key={tech}
						className={cn(
							"rounded border border-border-strong bg-surface-elevated",
							"px-2 py-0.5 text-xs font-medium text-fg-muted",
						)}
					>
						{tech}
					</li>
				))}
			</ul>

			<div className="mt-auto flex flex-wrap gap-3 pt-2">
				<LocalizedLink
					to="/{-$locale}/projects/$slug"
					params={{ slug }}
					className={cn(
						"inline-flex items-center rounded-lg",
						"border border-(--primary-border) bg-(--primary-soft)",
						"px-5 py-2.5 text-sm font-medium text-primary-hover",
						"transition-colors duration-150 hover:border-primary",
					)}
				>
					{viewCaseLabel}
				</LocalizedLink>

				{liveUrl && viewProductLabel && (
					<a
						href={liveUrl}
						target="_blank"
						rel="noreferrer"
						className={cn(
							"inline-flex items-center rounded-lg",
							"border border-border-strong bg-surface",
							"px-5 py-2.5 text-sm font-medium text-fg",
							"transition-colors duration-150",
							"hover:border-(--primary-border) hover:text-primary-hover",
						)}
					>
						{viewProductLabel}
					</a>
				)}
			</div>
		</motion.div>
	);
}

export function FeaturedProducts() {
	const { t } = useTranslation("projects");
	const { t: tCommon } = useTranslation("common");

	return (
		<section className="py-16 md:py-20">
			<div className="mx-auto max-w-280 px-6">
				<span className="mb-6 block font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary-hover">
					{t("filters.products")}
				</span>
				<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
					<ProductCard
						slug="tenira"
						title={t("tenira.title")}
						tagline={t("tenira.tagline")}
						description={t("tenira.description")}
						role={t("tenira.role")}
						status={t("tenira.status")}
						stack={TENIRA_STACK}
						liveUrl="https://www.tenira.com.br"
						viewCaseLabel={tCommon("cta.viewCase")}
						viewProductLabel={tCommon("cta.viewProject")}
					/>
					<ProductCard
						slug="anvero"
						title={t("anvero.title")}
						description={t("anvero.description")}
						role={t("anvero.role")}
						status={t("anvero.status")}
						stack={ANVERO_STACK}
						viewCaseLabel={tCommon("cta.viewCase")}
						delay={0.08}
					/>
				</div>
			</div>
		</section>
	);
}
