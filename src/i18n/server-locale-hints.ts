import { createServerFn } from "@tanstack/react-start";
import { getCookie, getRequestHeader } from "@tanstack/react-start/server";

export const getServerLocaleHints = createServerFn({ method: "GET" }).handler(
	() => ({
		cookieLocale: getCookie("locale"),
		acceptLanguage: getRequestHeader("accept-language"),
	}),
);
