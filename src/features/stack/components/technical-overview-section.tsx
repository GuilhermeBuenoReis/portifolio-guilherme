import {
	Cloud,
	Database,
	type LucideIcon,
	ShieldCheck,
	Terminal,
} from "lucide-react";
import { motion } from "motion/react";
import {
	backendCard,
	dailyToolsCard,
	frontendCard,
	infraCard,
	methodologiesCard,
} from "#/features/stack/data/stack-page-data";
import type { SkillBar } from "#/features/stack/types/stack-page";
import { cn } from "#/lib/utils";

const cardClass = cn(
	"rounded-xl border border-border bg-surface p-6 md:p-8",
	"transition-colors duration-200 hover:border-(--primary-border)",
	"[box-shadow:var(--shadow-card)]",
);

const badgeClass = cn(
	"rounded border border-border-strong bg-surface-elevated",
	"px-2.5 py-1 text-xs font-medium text-fg-muted",
);

type CardShellProps = {
	index: number;
	className?: string;
	children: React.ReactNode;
};

function CardShell({ index, className, children }: CardShellProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-60px" }}
			transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.08 }}
			className={cn(cardClass, className)}
		>
			{children}
		</motion.div>
	);
}

type CardHeaderProps = {
	icon: LucideIcon;
	title: string;
	subtitle?: string;
};

function CardHeader({ icon: Icon, title, subtitle }: CardHeaderProps) {
	return (
		<div className="flex items-center gap-3">
			<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary-hover">
				<Icon size={16} />
			</div>
			<div className="flex flex-col">
				<span className="text-[0.95rem] font-semibold text-fg">{title}</span>
				{subtitle && (
					<span className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-fg-muted">
						{subtitle}
					</span>
				)}
			</div>
		</div>
	);
}

function SkillRow({ label }: SkillBar) {
	return (
		<div className="flex items-center gap-3 rounded-lg border border-border bg-background-soft px-4 py-3">
			<span className="h-1.5 w-1.5 rounded-full bg-primary-hover" />
			<span className="text-sm font-medium text-fg">{label}</span>
		</div>
	);
}

export function TechnicalOverviewSection() {
	return (
		<section className="py-16 md:py-20">
			<div className="mx-auto flex max-w-280 flex-col gap-6 px-6">
				<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
					<CardShell index={0} className="lg:col-span-2">
						<CardHeader
							icon={Terminal}
							title={frontendCard.title}
							subtitle={frontendCard.subtitle}
						/>
						<div className="mt-7 grid grid-cols-1 gap-7 md:grid-cols-2">
							<div className="flex flex-col gap-5">
								{frontendCard.skills.map((skill) => (
									<SkillRow key={skill.label} {...skill} />
								))}
							</div>
							<div className="flex flex-col gap-4">
								<p className="text-sm leading-relaxed text-fg-secondary">
									{frontendCard.description}
								</p>
								<div className="flex flex-wrap gap-2">
									{frontendCard.badges.map((badge) => (
										<span key={badge} className={badgeClass}>
											{badge}
										</span>
									))}
								</div>
							</div>
						</div>
					</CardShell>

					<CardShell index={1}>
						<CardHeader icon={Database} title={backendCard.title} />
						<ul className="mt-7 flex flex-col">
							{backendCard.items.map((item) => (
								<li
									key={item}
									className="flex items-center justify-between border-b border-border py-2.5 text-sm text-fg last:border-b-0"
								>
									{item}
									<CheckDot />
								</li>
							))}
						</ul>
						<p className="mt-5 text-sm leading-relaxed text-fg-secondary">
							{backendCard.description}
						</p>
					</CardShell>
				</div>

				<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
					<CardShell index={2}>
						<CardHeader icon={ShieldCheck} title={methodologiesCard.title} />
						<div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
							{methodologiesCard.blocks.map((block) => (
								<div
									key={block.title}
									className="rounded-lg border border-border bg-background-soft p-4"
								>
									<span className="font-mono text-sm text-primary-hover">
										{block.title}
									</span>
									<p className="mt-1 text-sm text-fg-secondary">
										{block.description}
									</p>
								</div>
							))}
						</div>
					</CardShell>

					<CardShell index={3}>
						<CardHeader icon={Cloud} title={infraCard.title} />
						<div className="mt-7 flex flex-wrap gap-2">
							{infraCard.badges.map((badge) => (
								<span key={badge} className={badgeClass}>
									{badge}
								</span>
							))}
						</div>
						<p className="mt-5 text-sm leading-relaxed text-fg-secondary">
							{infraCard.description}
						</p>
					</CardShell>
				</div>

				<CardShell index={4}>
					<div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
						<div className="flex max-w-sm flex-col gap-2">
							<span className="text-[0.95rem] font-semibold text-fg">
								{dailyToolsCard.title}
							</span>
							<p className="text-sm leading-relaxed text-fg-secondary">
								{dailyToolsCard.description}
							</p>
						</div>
						<div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
							{dailyToolsCard.tools.map((tool) => (
								<div
									key={tool.name}
									className="flex flex-col items-center gap-2 text-center"
								>
									<div className="flex h-11 w-11 items-center justify-center rounded-lg bg-surface-elevated text-primary-hover">
										<tool.icon size={18} />
									</div>
									<span className="text-xs font-medium text-fg-secondary">
										{tool.name}
									</span>
								</div>
							))}
						</div>
					</div>
				</CardShell>
			</div>
		</section>
	);
}

function CheckDot() {
	return (
		<span className="flex h-4 w-4 items-center justify-center rounded-full border border-(--primary-border) text-primary-hover">
			<span className="h-1 w-1 rounded-full bg-primary-hover" />
		</span>
	);
}
