export const siteUrl = "https://www.devguilhermebuenoreis.com.br";
export const socialImageUrl = `${siteUrl}/og-image.jpg`;

type PageHeadInput = {
	title: string;
	description: string;
	path: string;
};

export function createPageHead({ title, description, path }: PageHeadInput) {
	const canonicalUrl = `${siteUrl}${path}`;

	return {
		meta: [
			{ title },
			{ name: "description", content: description },
			{ property: "og:type", content: "website" },
			{ property: "og:title", content: title },
			{ property: "og:description", content: description },
			{ property: "og:url", content: canonicalUrl },
			{ property: "og:image", content: socialImageUrl },
			{
				property: "og:image:alt",
				content: "Guilherme Reis — produto, tecnologia e software",
			},
			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:title", content: title },
			{ name: "twitter:description", content: description },
			{ name: "twitter:image", content: socialImageUrl },
		],
		links: [{ rel: "canonical", href: canonicalUrl }],
	};
}
