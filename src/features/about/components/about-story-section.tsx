import { Feather } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "#/i18n/locale-context";
import { cn } from "#/lib/utils";

const cardClass = cn(
	"rounded-xl border border-border bg-surface p-8",
	"transition-colors duration-200 hover:border-(--primary-border)",
	"[box-shadow:var(--shadow-card)]",
);

export function AboutStorySection() {
	const { tRaw } = useTranslation("about");
	const paragraphs = tRaw<string[]>("story.paragraphs");

	return (
		<section className="py-16 md:py-20">
			<div className="mx-auto max-w-280 px-6">
				<motion.article
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-60px" }}
					transition={{ duration: 0.45, ease: "easeOut" }}
					className={cn(cardClass, "mx-auto max-w-3xl")}
				>
					<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary-hover">
						<Feather size={16} />
					</div>
					<div className="mt-6 flex flex-col gap-5">
						{paragraphs.map((paragraph) => (
							<p
								key={paragraph.slice(0, 32)}
								className="text-sm leading-relaxed text-fg-secondary"
							>
								{paragraph}
							</p>
						))}
					</div>
				</motion.article>
			</div>
		</section>
	);
}
