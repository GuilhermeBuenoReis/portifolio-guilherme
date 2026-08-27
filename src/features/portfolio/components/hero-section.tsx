import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { cn } from "#/lib/utils";

export function HeroSection() {
	return (
		<section className="relative overflow-hidden border-b border-border py-16 sm:py-20 md:py-28">
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(139,92,246,0.16),transparent_32%),linear-gradient(to_bottom,transparent,rgba(139,92,246,0.025))]" />
			<div className="relative mx-auto grid max-w-280 items-center gap-12 px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
				<div className="flex flex-col items-start gap-7">
					<div className="inline-flex items-center gap-2 rounded-full border border-(--primary-border) bg-(--primary-soft) px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-hover">
						<span className="h-1.5 w-1.5 rounded-full bg-primary-hover" />
						Co-Founder & CTO da Anvero
					</div>

					<h1 className="m-0 max-w-3xl text-[clamp(2.75rem,6vw,5.4rem)] font-extrabold leading-[0.98] tracking-[-0.045em] text-fg">
						Eu transformo problemas de negócio em{" "}
						<span className="text-primary-hover">produtos digitais.</span>
					</h1>

					<p className="m-0 max-w-2xl text-base leading-[1.75] text-fg-secondary sm:text-lg">
						Lidero produto e tecnologia na Anvero e desenvolvo aplicações
						completas, conectando estratégia, experiência de uso e engenharia de
						software para transformar ideias em produtos reais.
					</p>

					<div className="flex flex-wrap gap-3">
						<a
							href="https://www.anvero.com.br"
							target="_blank"
							rel="noopener noreferrer"
							className={cn(
								"inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3",
								"text-sm font-semibold text-white shadow-sm shadow-primary/25",
								"transition-colors duration-150 hover:bg-primary-hover",
								"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-hover focus-visible:ring-offset-2 focus-visible:ring-offset-background",
							)}
						>
							Conhecer a Anvero
							<ArrowUpRight size={16} aria-hidden="true" />
						</a>
						<Link
							to="/projects"
							className={cn(
								"inline-flex items-center rounded-lg border border-border-strong bg-surface px-6 py-3",
								"text-sm font-medium text-fg shadow-sm transition-colors duration-150",
								"hover:border-(--primary-border) hover:bg-(--primary-soft) hover:text-primary-hover",
								"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--primary-border)",
							)}
						>
							Ver produtos
						</Link>
					</div>

					<p className="m-0 text-xs font-medium uppercase tracking-[0.14em] text-fg-muted">
						React · TypeScript · Node.js · PostgreSQL
					</p>
				</div>

				<div className="relative mx-auto w-full max-w-112 lg:max-w-none">
					<div className="absolute -inset-5 rounded-[2rem] bg-primary/10 blur-3xl" />
					<div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-border-strong bg-surface shadow-2xl shadow-black/25">
						<img
							src="/images/guilherme-reis-hero.webp"
							alt="Guilherme Reis, Co-Founder e CTO da Anvero"
							width={900}
							height={1338}
							fetchPriority="high"
							className="h-full w-full object-cover object-[50%_24%]"
						/>
						<div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/45 via-transparent to-transparent" />
						<div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/10 bg-black/55 p-4 text-white backdrop-blur-md sm:inset-x-5 sm:bottom-5">
							<p className="m-0 text-xs font-semibold uppercase tracking-[0.14em] text-violet-200">
								Produto · Engenharia · Negócio
							</p>
							<p className="mt-1.5 mb-0 text-sm leading-relaxed text-white/75">
								Construindo software com responsabilidade sobre o problema e a
								entrega.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
