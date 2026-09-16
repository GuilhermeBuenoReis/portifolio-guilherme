import { createServerFn } from "@tanstack/react-start";
import { setResponseStatus } from "@tanstack/react-start/server";

export const setNotFoundStatus = createServerFn({ method: "GET" }).handler(
	() => {
		setResponseStatus(404);
	},
);
