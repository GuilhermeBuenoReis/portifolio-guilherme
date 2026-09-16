import { LocalizedLink } from "#/components/localized-link";
import { useTranslation } from "#/i18n/locale-context";
import { cn } from "#/lib/utils";

const GITHUB_URL = "https://github.com/GuilhermeBuenoReis";
const LINKEDIN_URL = "https://www.linkedin.com/in/guilherme-bueno-reis";

const PHOTO_BASE = "/images/guilherme-reis-2026";

export function HeroSection() {
	const { t } = useTranslation("home");

	return (
		<section className="py-24 md:py-32">
			<div className="mx-auto max-w-280 px-6">
				<div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
					<div className="flex flex-col gap-6">
						<span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary-hover">
							{t("hero.eyebrow")}
						</span>

						<h1 className="m-0 text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.1] tracking-tight text-fg">
							{t("hero.headline")}
						</h1>

						<p className="m-0 max-w-120 text-[1.0625rem] leading-[1.75] text-fg-secondary">
							{t("hero.subheadline")}
						</p>

						<p className="m-0 max-w-120 text-sm leading-relaxed text-fg-muted">
							{t("hero.secondLine")}
						</p>

						<div className="flex flex-wrap gap-3">
							<LocalizedLink
								to="/{-$locale}/projects"
								className={cn(
									"inline-flex items-center rounded-lg",
									"bg-primary px-6 py-3 shadow-sm shadow-primary/25",
									"text-[0.9375rem] font-semibold text-white",
									"transition-colors duration-150 hover:bg-primary-hover",
								)}
							>
								{t("hero.ctaPrimary")}
							</LocalizedLink>
							<a
								href={GITHUB_URL}
								target="_blank"
								rel="noreferrer"
								className={cn(
									"inline-flex items-center rounded-lg",
									"border border-border-strong bg-surface shadow-sm dark:bg-surface-elevated",
									"px-6 py-3 text-[0.9375rem] font-medium",
									"text-fg transition-colors duration-150",
									"hover:border-(--primary-border) hover:bg-(--primary-soft) hover:text-primary-hover",
								)}
							>
								{t("hero.ctaSecondary")}
							</a>
						</div>

						<div className="flex flex-wrap gap-x-5 gap-y-1">
							<a
								href={LINKEDIN_URL}
								target="_blank"
								rel="noreferrer"
								className="text-sm text-fg-muted underline-offset-4 transition-colors duration-150 hover:text-fg-secondary hover:underline"
							>
								{t("hero.linkedin")}
							</a>
							<LocalizedLink
								to="/{-$locale}/resume"
								className="text-sm text-fg-muted underline-offset-4 transition-colors duration-150 hover:text-fg-secondary hover:underline"
							>
								{t("hero.resume")}
							</LocalizedLink>
						</div>
					</div>

					<div className="flex justify-center md:justify-end">
						<img
							src={`${PHOTO_BASE}-960.webp`}
							srcSet={`${PHOTO_BASE}-480.webp 480w, ${PHOTO_BASE}-960.webp 960w, ${PHOTO_BASE}-1440.webp 1440w`}
							sizes="(min-width: 768px) 420px, 80vw"
							alt={t("hero.photoAlt")}
							loading="eager"
							fetchPriority="high"
							width={960}
							height={1440}
							className={cn(
								"aspect-[2/3] w-full max-w-100 rounded-lg object-cover",
								"border border-border",
								"[box-shadow:var(--shadow-card)]",
							)}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
