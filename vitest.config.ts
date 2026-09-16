import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
	resolve: {
		alias: {
			"#": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	plugins: [tailwindcss(), viteReact()],
	test: {
		environment: "jsdom",
		globals: true,
	},
});
