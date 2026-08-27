import { motion } from "motion/react";
import { heroContent } from "#/features/stack/data/stack-page-data";

export function StackPageHero() {
	return (
		<section className="border-b border-border py-20 md:py-28">
			<div className="mx-auto max-w-280 px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="flex flex-col gap-6"
				>
					<span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary-hover">
						Capacidades técnicas
					</span>
					<h1 className="max-w-2xl text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.12] tracking-tight text-fg">
						{heroContent.eyebrow}
					</h1>
					<p className="max-w-2xl text-[1.0625rem] leading-relaxed text-fg-secondary">
						{heroContent.description}
					</p>
				</motion.div>
			</div>
		</section>
	);
}
