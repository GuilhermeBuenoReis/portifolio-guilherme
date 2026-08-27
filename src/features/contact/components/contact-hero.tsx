import { motion } from "motion/react";

export function ContactHero() {
	return (
		<section className="border-b border-border py-20 md:py-28">
			<div className="mx-auto max-w-280 px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="flex flex-col gap-6"
				>
					<h1 className="max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-fg">
						Vamos conversar sobre produto, tecnologia ou parceria?
					</h1>
					<p className="max-w-xl text-[1.0625rem] leading-relaxed text-fg-secondary">
						Se você está construindo um produto, precisa transformar uma
						operação em software ou quer discutir uma parceria, fale comigo.
					</p>
				</motion.div>
			</div>
		</section>
	);
}
