import { useRouterState } from "@tanstack/react-router";
import { Briefcase, Home, Layers, type LucideIcon, User } from "lucide-react";
import { LocalizedLink } from "#/components/localized-link";
import { useTranslation } from "#/i18n/locale-context";
import { stripLocalePrefix } from "#/i18n/locale-path";
import { cn } from "#/lib/utils";

type BottomNavItem = {
	labelKey: string;
	to:
		| "/{-$locale}"
		| "/{-$locale}/projects"
		| "/{-$locale}/experience"
		| "/{-$locale}/about";
	exact: boolean;
	icon: LucideIcon;
};

const items: BottomNavItem[] = [
	{ labelKey: "nav.home", to: "/{-$locale}", exact: true, icon: Home },
	{
		labelKey: "nav.products",
		to: "/{-$locale}/projects",
		exact: false,
		icon: Layers,
	},
	{
		labelKey: "nav.experience",
		to: "/{-$locale}/experience",
		exact: false,
		icon: Briefcase,
	},
	{ labelKey: "nav.about", to: "/{-$locale}/about", exact: false, icon: User },
];

function toUnprefixedPath(to: string): string {
	return to.replace("/{-$locale}", "") || "/";
}

export function MobileBottomNavigation() {
	const { t } = useTranslation("common");
	const { location } = useRouterState();
	const pathname = stripLocalePrefix(location.pathname);

	return (
		<nav
			aria-label={t("nav.ariaLabel")}
			className={cn(
				"fixed inset-x-0 bottom-0 z-50 lg:hidden",
				"border-t border-border bg-surface/95 backdrop-blur-md",
			)}
			style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
		>
			<ul className="mx-auto flex max-w-md items-stretch justify-between gap-1 px-3 py-2">
				{items.map((item) => {
					const target = toUnprefixedPath(item.to);
					const isActive = item.exact
						? pathname === target
						: pathname === target || pathname.startsWith(`${target}/`);
					const Icon = item.icon;
					const label = t(item.labelKey);

					return (
						<li key={item.to} className="flex-1">
							<LocalizedLink
								to={item.to}
								className={cn(
									"flex flex-col items-center justify-center gap-1 rounded-xl px-1 py-2",
									"text-[0.65rem] font-medium transition-colors duration-150",
									"outline-none focus-visible:ring-2 focus-visible:ring-(--primary-border)",
									isActive
										? "bg-primary text-white"
										: "text-fg-muted hover:text-fg",
								)}
							>
								<Icon size={20} />
								<span>{label}</span>
							</LocalizedLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
