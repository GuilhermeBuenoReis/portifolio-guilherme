import { Github, Linkedin } from "lucide-react";
import { LanguageSelect } from "#/components/layout/language-select";
import { LocalizedLink } from "#/components/localized-link";
import { ModeToggle } from "#/components/mode-toggle";
import { Monogram } from "#/components/ui/monogram";
import { useTranslation } from "#/i18n/locale-context";
import { cn } from "#/lib/utils";
import { NavLink, navLinks } from "./nav-link";

const GITHUB_URL = "https://github.com/GuilhermeBuenoReis";
const LINKEDIN_URL = "https://www.linkedin.com/in/guilherme-bueno-reis";

export function Header() {
	const { t } = useTranslation("common");

	return (
		<header
			className={cn(
				"fixed left-0 right-0 top-0 z-50 h-16",
				"border-b border-border",
				"bg-(--header-background) backdrop-blur-md",
			)}
		>
			<div className="mx-auto flex h-full max-w-280 items-center justify-between gap-6 px-4 sm:px-6 lg:gap-12">
				<LocalizedLink
					to="/{-$locale}"
					aria-label={t("header.homeAriaLabel")}
					className={cn(
						"group inline-flex shrink-0 items-center gap-3 rounded-md",
						"outline-none transition-colors duration-150",
						"focus-visible:ring-2 focus-visible:ring-(--primary-border)",
					)}
				>
					<span
						className={cn(
							"flex h-11 w-11 items-center justify-center rounded-md",
							"border border-(--primary-border) bg-(--primary-soft)",
							"transition-colors duration-150 group-hover:border-primary",
						)}
					>
						<Monogram className="h-8 w-8 text-primary-hover" />
					</span>
					<span className="hidden min-w-0 flex-col leading-none sm:flex">
						<span className="text-sm font-semibold tracking-wide text-fg">
							Guilherme Reis
						</span>
						<span className="mt-1 text-xs font-medium text-fg-muted">
							{t("header.roleLabel")}
						</span>
					</span>
				</LocalizedLink>

				<nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
					{navLinks.map((link) => (
						<NavLink key={link.to} {...link} label={t(link.labelKey)} />
					))}
				</nav>

				<div className="flex shrink-0 items-center gap-2 sm:gap-3">
					<a
						href={GITHUB_URL}
						target="_blank"
						rel="noreferrer"
						aria-label="GitHub"
						className={cn(
							"hidden size-10 items-center justify-center rounded-md sm:inline-flex",
							"border border-border bg-surface-elevated text-fg-secondary",
							"transition-colors duration-150",
							"outline-none focus-visible:ring-2 focus-visible:ring-(--primary-border)",
							"hover:border-(--primary-border) hover:text-primary-hover",
						)}
					>
						<Github size={18} />
					</a>
					<a
						href={LINKEDIN_URL}
						target="_blank"
						rel="noreferrer"
						aria-label="LinkedIn"
						className={cn(
							"hidden size-10 items-center justify-center rounded-md sm:inline-flex",
							"border border-border bg-surface-elevated text-fg-secondary",
							"transition-colors duration-150",
							"outline-none focus-visible:ring-2 focus-visible:ring-(--primary-border)",
							"hover:border-(--primary-border) hover:text-primary-hover",
						)}
					>
						<Linkedin size={18} />
					</a>
					<LanguageSelect />
					<ModeToggle />
					<LocalizedLink
						to="/{-$locale}/contact"
						className={cn(
							"inline-flex shrink-0 items-center rounded-md",
							"border border-(--primary-border) bg-(--primary-soft)",
							"px-4 py-2 text-sm font-medium text-primary-hover",
							"transition-colors duration-150",
							"outline-none focus-visible:ring-2 focus-visible:ring-(--primary-border)",
							"hover:border-primary hover:bg-[rgba(139,92,246,0.22)]",
						)}
					>
						{t("nav.contact")}
					</LocalizedLink>
				</div>
			</div>
		</header>
	);
}
