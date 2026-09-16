import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Providers } from "#/app/providers";
import { MainLayout } from "#/components/layout/main-layout";
import { resolveLocale } from "#/i18n/resolve-locale";
import { routeExistsForPath } from "#/i18n/route-exists";
import { getServerLocaleHints } from "#/i18n/server-locale-hints";
import { setNotFoundStatus } from "#/i18n/set-not-found-status";
import { localeToHtmlLang } from "#/i18n/types";
import { NotFoundPage } from "#/pages/not-found";

import appCss from "../styles/globals.css?url";

const siteUrl = "https://www.devguilhermebuenoreis.com.br";

export const Route = createRootRoute({
	beforeLoad: async ({ location }) => {
		const isServer = typeof document === "undefined";

		const serverHints = isServer ? await getServerLocaleHints() : {};

		const locale = resolveLocale(location.pathname, serverHints);
		const routeExists = routeExistsForPath(location.pathname);

		if (isServer && !routeExists) {
			await setNotFoundStatus();
		}

		return { locale, routeExists };
	},
	head: ({ match }) => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{
				name: "robots",
				content: match.context.routeExists ? "index, follow" : "noindex",
			},
			{ name: "author", content: "Guilherme Reis" },
			{ name: "theme-color", content: "#050509" },
			{ property: "og:type", content: "website" },
			{ property: "og:image", content: `${siteUrl}/og-image.png` },
			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:image", content: `${siteUrl}/og-image.png` },
		],
		links: [
			{ rel: "stylesheet", href: appCss },
			{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
			{ rel: "preconnect", href: "https://fonts.googleapis.com" },
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous",
			},
		],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Person",
					name: "Guilherme Reis",
					url: siteUrl,
					jobTitle: "Software Engineer",
					sameAs: [
						"https://www.linkedin.com/in/guilherme-bueno-reis",
						"https://github.com/GuilhermeBuenoReis",
					],
				}),
			},
		],
	}),
	component: MainLayout,
	notFoundComponent: NotFoundPage,
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	const locale = Route.useRouteContext({ select: (ctx) => ctx.locale });

	return (
		<html
			lang={localeToHtmlLang[locale]}
			className="dark"
			suppressHydrationWarning
		>
			<head>
				<HeadContent />
			</head>
			<body>
				<Providers>{children}</Providers>
				<Scripts />
			</body>
		</html>
	);
}
