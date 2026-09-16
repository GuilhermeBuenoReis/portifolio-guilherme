import { LocalizedLink } from "#/components/localized-link";
import { useTranslation } from "#/i18n/locale-context";
import { cn } from "#/lib/utils";

export function NotFoundPage() {
	const { t } = useTranslation("common");

	return (
		<section className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-6 py-24 text-center">
			<title>404 | Guilherme Reis</title>
			<span className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-primary-hover">
				404
			</span>
			<h1 className="text-3xl font-bold tracking-tight text-fg md:text-4xl">
				{t("notFound.title")}
			</h1>
			<p className="max-w-md text-sm leading-relaxed text-fg-secondary">
				{t("notFound.description")}
			</p>
			<LocalizedLink
				to="/{-$locale}"
				className={cn(
					"inline-flex items-center rounded-lg",
					"bg-primary px-6 py-3 text-sm font-semibold text-white",
					"transition-colors duration-150 hover:bg-primary-hover",
				)}
			>
				{t("notFound.backHome")}
			</LocalizedLink>
		</section>
	);
}
