import { motion } from "motion/react";
import { trajectoryItems } from "#/features/experience/data/trajectory";
import { cn } from "#/lib/utils";
import { TrajectoryCard } from "./trajectory-card";

export function ProfessionalTrajectorySection() {
	return (
		<section className="py-20 md:py-28">
			<div className="mx-auto max-w-280 px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center"
				>
					<h1 className="text-4xl font-bold tracking-tight text-fg md:text-5xl">
						Experiência em produto e engenharia
					</h1>
					<p className="text-sm leading-relaxed text-fg-secondary md:text-base">
						Uma trajetória que começou na implementação de sistemas e evoluiu
						para responsabilidade sobre produto, arquitetura e decisões de
						negócio.
					</p>
				</motion.div>

				<div className="relative mt-20">
					<span
						className={cn(
							"absolute top-0 bottom-0 w-px bg-(--primary-border)",
							"left-0 md:left-1/2 md:-translate-x-1/2",
						)}
					/>
					<div className="flex flex-col gap-12 md:gap-16">
						{trajectoryItems.map((item, index) => (
							<TrajectoryCard key={item.id} item={item} index={index} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
