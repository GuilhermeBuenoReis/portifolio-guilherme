import { motion } from "motion/react";
import {
	contactEmail,
	contactHref,
	EmailIcon,
	LocationIcon,
	locationMapHref,
	socialLinks,
} from "#/features/contact/data/contact-links";
import { useTranslation } from "#/i18n/locale-context";
import { cn } from "#/lib/utils";

export function ContactInfoCard() {
	const { t } = useTranslation("contact");

	const contactInfo = [
		{
			icon: EmailIcon,
			label: t("emailInfoLabel"),
			value: contactEmail,
			href: contactHref,
		},
		{
			icon: LocationIcon,
			label: t("locationLabel"),
			value: t("location"),
			href: locationMapHref,
		},
	];

	return (
		<motion.aside
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-60px" }}
			transition={{ duration: 0.45, ease: "easeOut" }}
			className={cn(
				"flex flex-col gap-8 rounded-xl border border-border bg-surface p-8",
				"[box-shadow:var(--shadow-card)]",
			)}
		>
			<div className="flex flex-col gap-5">
				<span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary-hover">
					{t("contactInfoLabel")}
				</span>
				<ul className="flex flex-col gap-4">
					{contactInfo.map((info) => (
						<li key={info.label}>
							<a
								href={info.href}
								target="_blank"
								rel="noreferrer"
								className="group flex items-center gap-4"
							>
								<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary-hover">
									<info.icon size={17} />
								</div>
								<div className="flex flex-col">
									<span className="text-xs text-fg-muted">{info.label}</span>
									<span className="text-sm text-fg transition-colors duration-150 group-hover:text-primary-hover">
										{info.value}
									</span>
								</div>
							</a>
						</li>
					))}
				</ul>
			</div>

			<div className="flex flex-col gap-4">
				<span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary-hover">
					{t("socialLabel")}
				</span>
				<div className="flex gap-3">
					{socialLinks.map((social) => (
						<a
							key={social.label}
							href={social.href}
							target="_blank"
							rel="noreferrer"
							aria-label={social.label}
							className={cn(
								"flex h-11 w-11 items-center justify-center rounded-lg",
								"border border-border bg-surface-elevated text-fg-secondary",
								"transition-colors duration-150",
								"hover:border-(--primary-border) hover:text-primary-hover",
							)}
						>
							<social.icon size={18} />
						</a>
					))}
				</div>
			</div>

			<div
				className={cn(
					"flex flex-col gap-2 rounded-lg border border-(--primary-border)",
					"bg-(--primary-soft) p-5",
				)}
			>
				<div className="flex items-center gap-2">
					<span className="h-2 w-2 rounded-full bg-emerald-400" />
					<span className="text-sm font-semibold text-fg">
						{t("availability.title")}
					</span>
				</div>
				<p className="text-sm leading-relaxed text-fg-secondary">
					{t("availability.description")}
				</p>
			</div>
		</motion.aside>
	);
}
