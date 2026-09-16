const STATIC_SEGMENTS = new Set([
	"about",
	"experience",
	"contact",
	"projects",
	"resume",
	"stack",
]);

const PROJECT_SLUGS = new Set(["tenira", "anvero"]);

export function routeExistsForPath(pathname: string): boolean {
	const segments = pathname.split("/").filter(Boolean);

	let rest = segments;
	if (rest[0] === "en" || rest[0] === "es") {
		rest = rest.slice(1);
	}

	if (rest.length === 0) return true;
	if (rest.length === 1) return STATIC_SEGMENTS.has(rest[0]);
	if (rest.length === 2) {
		return rest[0] === "projects" && PROJECT_SLUGS.has(rest[1]);
	}

	return false;
}
