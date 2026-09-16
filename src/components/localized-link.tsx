import {
	Link,
	type LinkComponentProps,
	useParams,
} from "@tanstack/react-router";

type Props = Omit<LinkComponentProps, "params"> & {
	params?: Record<string, string>;
};

export function LocalizedLink({ params, ...props }: Props) {
	const { locale } = useParams({ strict: false });

	return <Link {...props} params={{ ...params, locale }} />;
}
