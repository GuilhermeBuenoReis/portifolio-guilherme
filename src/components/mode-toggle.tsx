import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "#/components/theme-provider";
import { useTranslation } from "#/i18n/locale-context";
import { cn } from "#/lib/utils";

const options = [
	{ value: "light", labelKey: "themeToggle.light", icon: Sun },
	{ value: "dark", labelKey: "themeToggle.dark", icon: Moon },
	{ value: "system", labelKey: "themeToggle.system", icon: Monitor },
] as const;

export function ModeToggle() {
	const { theme, setTheme } = useTheme();
	const { t } = useTranslation("common");
	const [open, setOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!open) {
			return;
		}

		function handlePointer(event: MouseEvent) {
			if (!containerRef.current?.contains(event.target as Node)) {
				setOpen(false);
			}
		}

		function handleKey(event: KeyboardEvent) {
			if (event.key === "Escape") {
				setOpen(false);
			}
		}

		document.addEventListener("mousedown", handlePointer);
		document.addEventListener("keydown", handleKey);

		return () => {
			document.removeEventListener("mousedown", handlePointer);
			document.removeEventListener("keydown", handleKey);
		};
	}, [open]);

	return (
		<div ref={containerRef} className="relative">
			<button
				type="button"
				onClick={() => setOpen((prev) => !prev)}
				aria-label={t("themeToggle.ariaLabel")}
				aria-haspopup="menu"
				aria-expanded={open}
				className={cn(
					"relative inline-flex size-10 items-center justify-center rounded-md",
					"border border-border bg-surface-elevated text-fg-secondary cursor-pointer",
					"transition-colors duration-150",
					"outline-none focus-visible:ring-2 focus-visible:ring-(--primary-border)",
					"hover:border-(--primary-border) hover:text-primary-hover",
				)}
			>
				<Sun className="size-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
				<Moon className="absolute size-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			</button>

			{open && (
				<div
					role="menu"
					className={cn(
						"absolute right-0 z-50 mt-2 w-36 overflow-hidden rounded-lg p-1",
						"border border-border bg-surface",
						"[box-shadow:var(--shadow-card)]",
					)}
				>
					{options.map((option) => {
						const Icon = option.icon;
						const isActive = theme === option.value;

						return (
							<button
								key={option.value}
								type="button"
								role="menuitemradio"
								aria-checked={isActive}
								onClick={() => {
									setTheme(option.value);
									setOpen(false);
								}}
								className={cn(
									"flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 cursor-pointer",
									"text-sm transition-colors duration-150",
									isActive
										? "bg-(--primary-soft) text-primary-hover"
										: "text-fg-secondary hover:bg-surface-elevated hover:text-fg",
								)}
							>
								<Icon size={15} />
								{t(option.labelKey)}
							</button>
						);
					})}
				</div>
			)}
		</div>
	);
}
