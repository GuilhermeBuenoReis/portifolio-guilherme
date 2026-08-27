import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "#/lib/utils";

export const navLinks = [
	{ label: "Início", to: "/", exact: true },
	{ label: "Produtos", to: "/projects", exact: false },
	{ label: "Experiência", to: "/experience", exact: false },
	{ label: "Sobre", to: "/about", exact: false },
	{ label: "Contato", to: "/contact", exact: false },
] as const;

type NavLinkProps = (typeof navLinks)[number];

export function NavLink({ label, to, exact }: NavLinkProps) {
	const { location } = useRouterState();
	const isActive = exact
		? location.pathname === to
		: location.pathname === to || location.pathname.startsWith(`${to}/`);

	return (
		<Link
			to={to}
			className={cn(
				"relative inline-flex items-center whitespace-nowrap",
				"rounded px-3 py-1.5 text-sm transition-colors duration-150",
				"outline-none focus-visible:ring-2 focus-visible:ring-(--primary-border)",
				isActive ? "text-primary-hover" : "text-fg-secondary hover:text-fg",
			)}
		>
			{label}
			{isActive && (
				<span className="absolute -bottom-px left-3 right-3 h-px bg-(--primary-border)" />
			)}
		</Link>
	);
}
