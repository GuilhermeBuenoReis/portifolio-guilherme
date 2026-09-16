import { useRouterState } from "@tanstack/react-router";
import { LocalizedLink } from "#/components/localized-link";
import { stripLocalePrefix } from "#/i18n/locale-path";
import { cn } from "#/lib/utils";

export const navLinks = [
	{ labelKey: "nav.products", to: "/{-$locale}/projects", exact: false },
	{ labelKey: "nav.experience", to: "/{-$locale}/experience", exact: false },
	{ labelKey: "nav.about", to: "/{-$locale}/about", exact: false },
] as const;

type NavLinkProps = {
	label: string;
	to: (typeof navLinks)[number]["to"];
	exact: boolean;
};

function toUnprefixedPath(to: string): string {
	return to.replace("/{-$locale}", "") || "/";
}

export function NavLink({ label, to, exact }: NavLinkProps) {
	const { location } = useRouterState();
	const pathname = stripLocalePrefix(location.pathname);
	const target = toUnprefixedPath(to);
	const isActive = exact
		? pathname === target
		: pathname === target || pathname.startsWith(`${target}/`);

	return (
		<LocalizedLink
			to={to}
			className={cn(
				"relative inline-flex items-center whitespace-nowrap",
				"rounded px-3 py-1.5 text-sm transition-colors duration-150",
				isActive ? "text-primary-hover" : "text-fg-secondary hover:text-fg",
			)}
		>
			{label}
			{isActive && (
				<span className="absolute -bottom-px left-3 right-3 h-px bg-(--primary-border)" />
			)}
		</LocalizedLink>
	);
}
