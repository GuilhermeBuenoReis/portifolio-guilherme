import { Link, useRouterState } from "@tanstack/react-router";
import {
	Briefcase,
	FolderKanban,
	Home,
	type LucideIcon,
	MessageCircle,
	User,
} from "lucide-react";
import { cn } from "#/lib/utils";

type BottomNavItem = {
	label: string;
	to: string;
	exact: boolean;
	icon: LucideIcon;
};

const items: BottomNavItem[] = [
	{ label: "Início", to: "/", exact: true, icon: Home },
	{ label: "Produtos", to: "/projects", exact: false, icon: FolderKanban },
	{ label: "Exp", to: "/experience", exact: false, icon: Briefcase },
	{ label: "Sobre", to: "/about", exact: false, icon: User },
	{ label: "Contato", to: "/contact", exact: false, icon: MessageCircle },
];

export function MobileBottomNavigation() {
	const { location } = useRouterState();

	return (
		<nav
			aria-label="Navegação principal"
			className={cn(
				"fixed inset-x-0 bottom-0 z-50 lg:hidden",
				"border-t border-border bg-surface/95 backdrop-blur-md",
			)}
			style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
		>
			<ul className="mx-auto flex max-w-md items-stretch justify-between gap-1 px-3 py-2">
				{items.map((item) => {
					const isActive = item.exact
						? location.pathname === item.to
						: location.pathname === item.to ||
							location.pathname.startsWith(`${item.to}/`);
					const Icon = item.icon;

					return (
						<li key={item.to} className="flex-1">
							<Link
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
								<Icon size={20} aria-hidden="true" />
								<span>{item.label}</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
