import { motion } from "motion/react";
import { heroContent } from "#/features/about/data/about-page-data";

export function AboutHero() {
	return (
		<section className="border-b border-border py-16 md:py-24">
			<div className="mx-auto grid max-w-280 items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="flex flex-col gap-6"
				>
					<span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-hover">
						{heroContent.eyebrow}
					</span>
					<h1 className="max-w-4xl text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.04] tracking-[-0.04em] text-fg">
						{heroContent.titleSegments.map((segment) => (
							<span
								key={segment.text}
								className={segment.highlight ? "text-primary-hover" : undefined}
							>
								{segment.text}
							</span>
						))}
					</h1>
					<p className="max-w-2xl text-[1.0625rem] leading-relaxed text-fg-secondary">
						{heroContent.subtitle}
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.98 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
					className="relative mx-auto w-full max-w-96"
				>
					<div className="absolute -inset-4 rounded-[1.75rem] bg-primary/10 blur-3xl" />
					<img
						src="/images/guilherme-reis-about.webp"
						alt="Retrato em preto e branco de Guilherme Reis"
						width={760}
						height={1014}
						loading="eager"
						className="relative aspect-[3/4] w-full rounded-2xl border border-border-strong object-cover object-[50%_26%] shadow-2xl shadow-black/20"
					/>
				</motion.div>
			</div>
		</section>
	);
}
