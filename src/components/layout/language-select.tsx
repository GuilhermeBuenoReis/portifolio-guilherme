import { useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { BrFlag, EsFlag, UsFlag } from "#/components/flags";
import { useTranslation } from "#/i18n/locale-context";
import { buildPathForLocale } from "#/i18n/locale-path";
import { persistLocaleCookie } from "#/i18n/resolve-locale";
import { type Locale, locales } from "#/i18n/types";
import { cn } from "#/lib/utils";

const flagByLocale: Record<Locale, typeof BrFlag> = {
	"pt-BR": BrFlag,
	"en-US": UsFlag,
	"es-ES": EsFlag,
};

const shortLabelByLocale: Record<Locale, string> = {
	"pt-BR": "PT",
	"en-US": "EN",
	"es-ES": "ES",
};

export function LanguageSelect() {
	const { t, locale } = useTranslation("common");
	const navigate = useNavigate();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!open) return;

		function handlePointer(event: MouseEvent) {
			if (!containerRef.current?.contains(event.target as Node)) {
				setOpen(false);
			}
		}

		function handleKey(event: KeyboardEvent) {
			if (event.key === "Escape") setOpen(false);
		}

		document.addEventListener("mousedown", handlePointer);
		document.addEventListener("keydown", handleKey);

		return () => {
			document.removeEventListener("mousedown", handlePointer);
			document.removeEventListener("keydown", handleKey);
		};
	}, [open]);

	function switchTo(next: Locale) {
		persistLocaleCookie(next);
		navigate({ to: buildPathForLocale(pathname, next) });
		setOpen(false);
	}

	const CurrentFlag = flagByLocale[locale];

	return (
		<div ref={containerRef} className="relative">
			<button
				type="button"
				onClick={() => setOpen((prev) => !prev)}
				aria-label={t("languageSelect.label")}
				aria-haspopup="menu"
				aria-expanded={open}
				className={cn(
					"inline-flex h-10 items-center gap-1.5 rounded-md px-2.5 cursor-pointer",
					"border border-border bg-surface-elevated text-fg-secondary",
					"transition-colors duration-150",
					"outline-none focus-visible:ring-2 focus-visible:ring-(--primary-border)",
					"hover:border-(--primary-border) hover:text-primary-hover",
				)}
			>
				<CurrentFlag className="size-4 rounded-sm" aria-hidden="true" />
				<span className="text-xs font-semibold tracking-wide">
					{shortLabelByLocale[locale]}
				</span>
			</button>

			{open && (
				<div
					role="menu"
					aria-label={t("languageSelect.label")}
					className={cn(
						"absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-lg p-1",
						"border border-border bg-surface",
						"[box-shadow:var(--shadow-card)]",
					)}
				>
					{locales.map((option) => {
						const Flag = flagByLocale[option];
						const isActive = locale === option;

						return (
							<button
								key={option}
								type="button"
								role="menuitemradio"
								aria-checked={isActive}
								onClick={() => switchTo(option)}
								className={cn(
									"flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 cursor-pointer",
									"text-sm transition-colors duration-150",
									isActive
										? "bg-(--primary-soft) text-primary-hover"
										: "text-fg-secondary hover:bg-surface-elevated hover:text-fg",
								)}
							>
								<Flag className="size-4 rounded-sm" aria-hidden="true" />
								{t(`languageSelect.${option}`)}
							</button>
						);
					})}
				</div>
			)}
		</div>
	);
}
