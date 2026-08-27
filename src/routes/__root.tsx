import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Providers } from "#/app/providers";
import { MainLayout } from "#/components/layout/main-layout";
import { siteUrl } from "#/lib/seo";

import appCss from "../styles/globals.css?url";

const personStructuredData = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Guilherme Reis",
	url: siteUrl,
	image: `${siteUrl}/images/guilherme-reis-about.webp`,
	jobTitle: "Product Engineer, Co-Founder e CTO",
	worksFor: {
		"@type": "Organization",
		name: "Anvero",
		url: "https://www.anvero.com.br",
	},
	sameAs: [
		"https://github.com/GuilhermeBuenoReis",
		"https://www.linkedin.com/in/guilherme-bueno-reis/",
	],
};

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ name: "robots", content: "index, follow" },
			{ name: "author", content: "Guilherme Reis" },
			{ name: "theme-color", content: "#050509" },
			{ property: "og:locale", content: "pt_BR" },
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
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
			},
		],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(personStructuredData),
			},
		],
	}),
	component: MainLayout,
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-BR" className="dark" suppressHydrationWarning>
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
