import { Link } from "@tanstack/react-router";
import { ModeToggle } from "#/components/mode-toggle";
import { Monogram } from "#/components/ui/monogram";
import { cn } from "#/lib/utils";
import { NavLink, navLinks } from "./nav-link";

export function Header() {
	return (
		<header
			className={cn(
				"fixed left-0 right-0 top-0 z-50 h-16",
				"border-b border-border",
				"bg-(--header-background) backdrop-blur-md",
			)}
		>
			<div className="mx-auto flex h-full max-w-280 items-center justify-between gap-6 px-4 sm:px-6 lg:gap-12">
				<Link
					to="/"
					aria-label="Guilherme Reis - ir para a página inicial"
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
							Product Engineer · Co-Founder & CTO
						</span>
					</span>
				</Link>

				<nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
					{navLinks.map((link) => (
						<NavLink key={link.to} {...link} />
					))}
				</nav>

				<div className="flex shrink-0 items-center gap-2 sm:gap-3">
					<ModeToggle />
					<a
						href="https://www.anvero.com.br"
						target="_blank"
						rel="noopener noreferrer"
						className={cn(
							"inline-flex shrink-0 items-center rounded-md",
							"border border-(--primary-border) bg-(--primary-soft)",
							"px-4 py-2 text-sm font-medium text-primary-hover",
							"transition-colors duration-150",
							"outline-none focus-visible:ring-2 focus-visible:ring-(--primary-border)",
							"hover:border-primary hover:bg-[rgba(139,92,246,0.22)]",
						)}
					>
						<span className="lg:hidden">Anvero</span>
						<span className="hidden lg:inline">Conhecer a Anvero</span>
					</a>
				</div>
			</div>
		</header>
	);
}
