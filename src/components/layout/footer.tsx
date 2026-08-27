import { whatsappHref } from "#/features/contact/data/contact-links";
import { cn } from "#/lib/utils";

const socialLinks = [
	{
		label: "Github",
		href: "https://github.com/GuilhermeBuenoReis",
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/guilherme-bueno-reis/",
	},
	{ label: "Instagram", href: "https://www.instagram.com/devguilherme_bueno/" },
	{ label: "WhatsApp", href: whatsappHref },
] as const;

export function Footer() {
	return (
		<footer
			className={cn(
				"border-t border-border",
				"bg-background-soft",
				"pt-8 pb-28 lg:pb-8",
			)}
		>
			<div
				className={cn(
					"mx-auto max-w-280 px-6",
					"flex flex-col gap-4",
					"md:flex-row md:items-center md:justify-between",
				)}
			>
				<div className="flex flex-col gap-1">
					<span className="text-sm font-semibold text-fg">Guilherme Reis</span>
					<span className="text-xs text-fg-secondary">
						Product Engineer · Co-Founder & CTO da Anvero
					</span>
					<span className="text-xs text-fg-muted">
						© 2026 Guilherme Reis. Produto, tecnologia e software.
					</span>
				</div>

				<div className="flex items-center gap-6">
					{socialLinks.map((link) => (
						<a
							key={link.label}
							href={link.href}
							target="_blank"
							rel="noreferrer"
							className={cn(
								"text-sm text-fg-secondary",
								"transition-colors duration-150 hover:text-fg",
							)}
						>
							{link.label}
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}
